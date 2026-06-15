import { cn } from "@/lib/utils";

const ICON_SRC = import.meta.glob("/src/components/icons/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

function nameFor(slug) {
  const map = {
    github: "github.svg",
    googleai: "googleaistudio.svg",
    googleaistudio: "googleaistudio.svg",
    googlegemini: "googlegemini.svg",
    googlestitch: "googlestitch.svg",
    googlesheets: "googlesheets.svg",
    googleslides: "googleslides.svg",
    ollama: "ollama.svg",
    opencode: "opencode.svg",
    gemma: "gemma.svg",
    dict: "dict.svg",
  };
  return map[slug] || `${slug}.svg`;
}

export function BrandIcon({ slug, className, size = 20 }) {
  const file = nameFor(slug);
  const raw = ICON_SRC[`/src/components/icons/${file}`];
  const svg = typeof raw === "string" ? raw : null;

  if (!svg) {
    return (
      <span
        className={cn("inline-block rounded bg-muted", className)}
        style={{ width: size, height: size }}
        aria-hidden="true"
      />
    );
  }

  return (
    <span
      className={cn("inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
