import type { ProjectLinks as ProjectLinksType } from "@/data/projects";
import { Globe } from "lucide-react";

// ── Icon Components ─────────────────────────────────────────────────────────

const PlayStoreIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <title>Google Play Store</title>
    <path d="M3.18 23.76c.3.17.64.24.98.21l13.83-11.96-2.96-2.96L3.18 23.76z" />
    <path d="M22.1 10.28l-3.43-1.98-3.3 3.3 3.3 3.3 3.45-1.99c.98-.57.98-2.07-.02-2.63z" />
    <path d="M2.1.25C1.62.52 1.3 1.03 1.3 1.65v20.69c0 .62.32 1.13.8 1.42l12.9-11.17L2.1.25z" />
    <path d="M4.16.24l11.38 9.85-2.96 2.96L4.98.28a1.6 1.6 0 0 0-.82-.04z" />
  </svg>
);

const AppStoreIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <title>Apple App Store</title>
    <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.574 2.784-1.956 3.384-.504 8.4 1.404 11.148.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.27 1.032z" />
    <path d="M14.676 2.28c.78-.936 1.308-2.244 1.164-3.54-1.128.048-2.496.756-3.3 1.692-.726.828-1.368 2.172-1.2 3.444 1.26.096 2.544-.636 3.336-1.596z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <title>GitHub</title>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// ── Link Item ────────────────────────────────────────────────────────────────

interface LinkItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  tooltip: string;
  variant?: "default" | "github";
}

const LinkItem: React.FC<LinkItemProps> = ({
  href,
  icon,
  label,
  tooltip,
  variant = "default",
}) => {
  const base =
    "group/link relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border";

  const styles =
    variant === "github"
      ? "bg-surface-2 text-foreground border-border hover:border-accent/50 hover:text-accent hover:bg-accent-dim"
      : "bg-surface-2 text-muted border-border hover:border-accent/40 hover:text-foreground";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
      title={tooltip}
    >
      <span className="shrink-0">{icon}</span>
      <span>{label}</span>
      {/* Tooltip */}
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-surface-2 border border-border px-2 py-1 text-[10px] text-muted opacity-0 group-hover/link:opacity-100 transition-opacity duration-150 z-50">
        {tooltip}
      </span>
    </a>
  );
};

// ── Main Component ───────────────────────────────────────────────────────────

interface ProjectLinksProps {
  links: ProjectLinksType;
}

export const ProjectLinksComponent: React.FC<ProjectLinksProps> = ({
  links,
}) => {
  const hasAny =
    links.googlePlay || links.appStore || links.github || links.website;
  if (!hasAny) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {links.googlePlay && (
        <LinkItem
          href={links.googlePlay}
          icon={<PlayStoreIcon />}
          label="Google Play"
          tooltip="Open in Google Play Store"
        />
      )}
      {links.appStore && (
        <LinkItem
          href={links.appStore}
          icon={<AppStoreIcon />}
          label="App Store"
          tooltip="Open in Apple App Store"
        />
      )}
      {links.github && (
        <LinkItem
          href={links.github}
          icon={<GitHubIcon />}
          label="View on GitHub"
          tooltip="Browse pull requests on GitHub"
          variant="github"
        />
      )}
      {links.website && (
        <LinkItem
          href={links.website}
          icon={<Globe size={13} />}
          label="Visit Website"
          tooltip="Open project website"
        />
      )}
    </div>
  );
};
