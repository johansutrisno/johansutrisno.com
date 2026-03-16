import type { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { Tag } from "@/components/Badge";
import { ProjectLinksComponent } from "@/components/ProjectLinks";
import {
  Smartphone,
  Globe,
  GitMerge,
  Cpu,
  CheckCircle2,
} from "lucide-react";

// ── Type → Icon + colour mapping ─────────────────────────────────────────────

const typeConfig: Record<
  string,
  { icon: React.ReactNode; colour: string; bg: string }
> = {
  "Mobile App": {
    icon: <Smartphone size={18} />,
    colour: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  "Web App": {
    icon: <Globe size={18} />,
    colour: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  "Open Source": {
    icon: <GitMerge size={18} />,
    colour: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  "AI Platform": {
    icon: <Cpu size={18} />,
    colour: "text-amber-400",
    bg: "bg-amber-400/10",
  },
};

// ── Status Badge ─────────────────────────────────────────────────────────────

const StatusBadge: React.FC<{ status: Project["status"] }> = ({ status }) => {
  if (status === "Open Source") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-violet-500/15 text-violet-400 border border-violet-500/30">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        Open Source
      </span>
    );
  }
  if (status === "Live") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-surface-2 text-muted border border-border">
      Completed
    </span>
  );
};

// ── Main Card ────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isOpenSource = project.status === "Open Source";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative flex flex-col bg-surface border rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        isOpenSource
          ? "border-violet-500/20 hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.12)]"
          : "border-border hover:border-accent/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.10)]"
      }`}
    >
      {/* ── Decorative Header Band ── */}
      <div
        className={`relative h-24 overflow-hidden flex items-center justify-between px-8 border-b ${
          isOpenSource ? "border-violet-500/15" : "border-border"
        }`}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.06] dot-grid group-hover:opacity-[0.12] transition-opacity" />
        {/* Gradient glow */}
        <div
          className={`absolute -right-10 -top-10 w-40 h-40 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
            isOpenSource ? "bg-violet-500/20" : "bg-accent/15"
          }`}
        />

        {/* Type badges */}
        <div className="relative z-10 flex flex-wrap gap-2">
          {project.type?.map((t) => {
            const typeInfo = typeConfig[t];
            if (!typeInfo) return null;
            return (
              <div
                key={t}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl ${typeInfo.bg} ${typeInfo.colour} font-semibold text-xs`}
              >
                {typeInfo.icon}
                <span>{t}</span>
              </div>
            );
          })}
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="relative z-10 flex items-center gap-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-right">
                <p className="text-sm font-bold text-foreground">{m.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-muted font-semibold">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Body ── */}
      <div className="p-8 flex flex-col flex-grow gap-5">
        {/* Title + Status + Role */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <StatusBadge status={project.status} />
            <span className="text-[11px] text-muted font-medium">
              {project.period}
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h2>

          <div className="flex flex-wrap items-center gap-1.5 text-[12px] text-muted">
            <span className="font-semibold text-foreground/70">
              {project.role}
            </span>
            <span>·</span>
            <span>{project.company}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[14px] text-muted leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2">
          {project.highlights.map((h) => (
            <li key={h.slice(0, 32)} className="flex items-start gap-2.5 text-[13px]">
              <CheckCircle2
                size={14}
                className={`mt-0.5 shrink-0 ${
                  isOpenSource ? "text-violet-400" : "text-accent"
                }`}
              />
              <span className="text-muted leading-snug">{h}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/* Links — pinned to bottom */}
        <div className="mt-auto pt-2">
          <ProjectLinksComponent links={project.links} />
        </div>
      </div>
    </motion.article>
  );
};
