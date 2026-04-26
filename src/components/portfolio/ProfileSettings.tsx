import { useEffect, useState } from "react";
import { z } from "zod";
import { Settings } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useProfileLinks, type ProfileLinks } from "@/hooks/useProfileLinks";

const urlOrEmpty = z
  .string()
  .trim()
  .max(255, "Must be under 255 characters")
  .refine(
    (v) => v === "" || /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i.test(v),
    { message: "Enter a valid URL" },
  );

const schema = z.object({
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be under 255 characters"),
  linkedin: urlOrEmpty,
  github: urlOrEmpty,
  twitter: urlOrEmpty,
});

type Props = {
  trigger?: React.ReactNode;
};

export const ProfileSettings = ({ trigger }: Props) => {
  const { links, save, reset } = useProfileLinks();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<ProfileLinks>(links);
  const [errors, setErrors] = useState<Partial<Record<keyof ProfileLinks, string>>>({});

  useEffect(() => {
    if (open) {
      setDraft(links);
      setErrors({});
    }
  }, [open, links]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(draft);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ProfileLinks, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ProfileLinks;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    save(result.data as ProfileLinks);
    toast.success("Profile links updated");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <button
            type="button"
            aria-label="Edit profile links"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            <Settings className="h-4 w-4" />
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Profile settings</DialogTitle>
          <DialogDescription>
            Update the links shown across your portfolio. Saved locally in your browser.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <Field
            label="Email"
            type="email"
            value={draft.email}
            onChange={(v) => setDraft({ ...draft, email: v })}
            placeholder="you@domain.com"
            error={errors.email}
          />
          <Field
            label="LinkedIn"
            value={draft.linkedin}
            onChange={(v) => setDraft({ ...draft, linkedin: v })}
            placeholder="linkedin.com/in/username"
            error={errors.linkedin}
          />
          <Field
            label="GitHub"
            value={draft.github}
            onChange={(v) => setDraft({ ...draft, github: v })}
            placeholder="github.com/username"
            error={errors.github}
          />
          <Field
            label="Twitter / X"
            value={draft.twitter}
            onChange={(v) => setDraft({ ...draft, twitter: v })}
            placeholder="twitter.com/username"
            error={errors.twitter}
          />

          <DialogFooter className="flex-row justify-between sm:justify-between gap-2 pt-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                reset();
                toast.success("Reset to defaults");
                setOpen(false);
              }}
            >
              Reset
            </Button>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const Field = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}) => (
  <div className="space-y-1.5">
    <label className="text-xs uppercase tracking-widest text-muted-foreground block">
      {label}
    </label>
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={255}
      aria-invalid={!!error}
    />
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);
