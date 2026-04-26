import { useEffect, useState, useCallback } from "react";

export type ProfileLinks = {
  email: string;
  linkedin: string;
  github: string;
  twitter: string;
};

const STORAGE_KEY = "portfolio.profileLinks.v1";

export const defaultProfileLinks: ProfileLinks = {
  email: "haris@example.com",
  linkedin: "https://linkedin.com/in/muhammadharis",
  github: "https://github.com/mharis",
  twitter: "https://twitter.com/mharis",
};

const EVENT = "profile-links:updated";

const read = (): ProfileLinks => {
  if (typeof window === "undefined") return defaultProfileLinks;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProfileLinks;
    const parsed = JSON.parse(raw) as Partial<ProfileLinks>;
    return { ...defaultProfileLinks, ...parsed };
  } catch {
    return defaultProfileLinks;
  }
};

export const useProfileLinks = () => {
  const [links, setLinks] = useState<ProfileLinks>(() => read());

  useEffect(() => {
    const sync = () => setLinks(read());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const save = useCallback((next: ProfileLinks) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT));
    setLinks(next);
  }, []);

  const reset = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event(EVENT));
    setLinks(defaultProfileLinks);
  }, []);

  return { links, save, reset };
};

export const formatHref = (kind: keyof ProfileLinks, value: string) => {
  if (!value) return "#";
  if (kind === "email") return value.startsWith("mailto:") ? value : `mailto:${value}`;
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value}`;
};

export const displayValue = (kind: keyof ProfileLinks, value: string) => {
  if (kind === "email") return value;
  return value.replace(/^https?:\/\//i, "").replace(/^www\./i, "");
};
