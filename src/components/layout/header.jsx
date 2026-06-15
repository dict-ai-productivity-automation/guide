import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { SearchPalette } from "@/components/layout/search-palette";
import { cn } from "@/lib/utils";
import { days, course } from "@/data/course";

const PRIMARY = [
  { to: "/", label: "Overview" },
  { to: "/dashboard", label: "Progress" },
  { to: "/setup", label: "Setup" },
  { to: "/glance", label: "Handout" },
];

const DAY_LINKS = days.map((d) => ({ to: `/${d.id}`, label: `Day ${d.number}` }));

const REF = [
  { to: "/assessment", label: "Assessment" },
  { to: "/responsible-ai", label: "Responsible AI" },
  { to: "/glossary", label: "Glossary" },
  { to: "/faq", label: "FAQ" },
  { to: "/resources", label: "Resources" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onKey = (e) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const hot = (isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "k";
      if (hot) {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = (active) =>
    cn(
      "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
      active
        ? "bg-accent text-accent-foreground"
        : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
    );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-3 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-semibold">{course.title}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              5-Day Student Guide
            </div>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="ml-2 hidden flex-1 max-w-xs items-center gap-2 rounded-md border bg-muted/40 px-3 py-1.5 text-left text-sm text-muted-foreground hover:bg-accent md:flex"
        >
          <Search className="h-4 w-4" />
          <span className="flex-1">Search modules, terms…</span>
          <kbd className="hidden rounded border bg-background px-1.5 font-mono text-[10px] lg:inline">⌘K</kbd>
        </button>

        <nav className="ml-auto hidden items-center gap-1 xl:flex">
          {PRIMARY.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass(location.pathname === l.to)}>
              {l.label}
            </Link>
          ))}
          <span className="mx-1 h-5 w-px bg-border" />
          {DAY_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass(location.pathname === l.to)}>
              {l.label}
            </Link>
          ))}
          <span className="mx-1 h-5 w-px bg-border" />
          {REF.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass(location.pathname === l.to)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
          >
            <Search className="h-5 w-5" />
          </Button>
          <a
            href="https://github.com/dict-ai-productivity-automation"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </Button>
          </a>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <nav className="grid gap-1 p-3">
            {[...PRIMARY, ...DAY_LINKS, ...REF].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={linkClass(location.pathname === l.to)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <SearchPalette
        key={searchOpen ? "open" : "closed"}
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </header>
  );
}
