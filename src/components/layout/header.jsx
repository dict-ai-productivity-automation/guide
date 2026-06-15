import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, Search, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { SearchPalette } from "@/components/layout/search-palette";
import { cn } from "@/lib/utils";
import { days } from "@/data/course";

const PRIMARY = [
  { to: "/", label: "Overview" },
  { to: "/dashboard", label: "Progress" },
  { to: "/setup", label: "Setup" },
  { to: "/glance", label: "Handout" },
];

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
  const [daysOpen, setDaysOpen] = useState(false);
  const location = useLocation();
  const daysRef = useRef(null);

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

  useEffect(() => {
    if (!daysOpen) return;
    const onClick = (e) => {
      const inTrigger = daysRef.current && daysRef.current.contains(e.target);
      const inPanel = e.target.closest('[role="menu"]');
      if (!inTrigger && !inPanel) {
        setDaysOpen(false);
      }
    };
    const onEsc = (e) => {
      if (e.key === "Escape") setDaysOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [daysOpen]);

  const linkClass = (active) =>
    cn(
      "rounded-md px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap",
      active
        ? "bg-accent text-accent-foreground"
        : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
    );

  const onDayRoute = days.some((d) => `/${d.id}` === location.pathname);
  const closeDays = () => setDaysOpen(false);

  const triggerRef = useRef(null);
  const [panelStyle, setPanelStyle] = useState(null);

  const computePanelStyle = (el) => {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      position: "fixed",
      top: r.bottom + 8,
      left: r.right - 256,
      width: 256,
      zIndex: 60,
    };
  };

  useLayoutEffect(() => {
    if (!daysOpen) return;
    const update = () => {
      setPanelStyle((prev) => {
        const next = computePanelStyle(triggerRef.current);
        if (prev && next && prev.top === next.top && prev.left === next.left) {
          return prev;
        }
        return next;
      });
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [daysOpen]);

  return (
    <header className="sticky top-0 z-40 w-full overflow-x-hidden border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 min-w-0 items-center gap-2 px-4 sm:gap-3 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="Home">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow">
            <Sparkles className="h-4 w-4" />
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="ml-2 hidden w-56 shrink-0 items-center gap-2 rounded-md border bg-muted/40 px-3 py-1.5 text-left text-sm text-muted-foreground hover:bg-accent xl:flex"
        >
          <Search className="h-4 w-4 shrink-0" />
          <span className="flex-1 truncate">Search…</span>
          <kbd className="hidden rounded border bg-background px-1.5 font-mono text-[10px] 2xl:inline">⌘K</kbd>
        </button>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 xl:flex">
          {PRIMARY.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass(location.pathname === l.to)}>
              {l.label}
            </Link>
          ))}

          <div className="relative" ref={daysRef}>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setDaysOpen((v) => !v)}
              aria-expanded={daysOpen}
              aria-haspopup="menu"
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap",
                onDayRoute
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
              )}
            >
              Days
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", daysOpen ? "rotate-180" : "")}
              />
            </button>
            {daysOpen && panelStyle && createPortal(
              <div
                role="menu"
                style={panelStyle}
                className="overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-lg"
              >
                <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  5-day journey
                </div>
                <ul className="pb-1">
                  {days.map((d) => (
                    <li key={d.id}>
                      <Link
                        to={`/${d.id}`}
                        onClick={closeDays}
                        className={cn(
                          "flex items-start gap-3 px-3 py-2 text-sm hover:bg-accent",
                          location.pathname === `/${d.id}` && "bg-accent"
                        )}
                      >
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground text-[10px] font-bold">
                          D{d.number}
                        </span>
                        <span className="leading-tight">
                          <span className="block font-medium">{d.title}</span>
                          <span className="block text-[11px] text-muted-foreground">
                            {d.modules.length} module{d.modules.length > 1 ? "s" : ""}
                            {d.opening ? " + opening" : ""}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t p-1">
                  <Link
                    to="/schedule"
                    onClick={closeDays}
                    className="flex items-center gap-2 rounded-md px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    View full timeboxed schedule →
                  </Link>
                </div>
              </div>,
              document.body
            )}
          </div>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
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
            className="xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t bg-background">
          <nav className="grid gap-1 p-3">
            <div className="px-2 pb-1 pt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Course
            </div>
            {PRIMARY.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={linkClass(location.pathname === l.to)}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 px-2 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Days
            </div>
            {days.map((d) => (
              <Link
                key={d.id}
                to={`/${d.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  location.pathname === `/${d.id}`
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                )}
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-[10px] font-bold">
                  D{d.number}
                </span>
                <span className="leading-tight">
                  {d.title}
                  <span className="block text-[11px] font-normal text-muted-foreground">
                    {d.modules.length} module{d.modules.length > 1 ? "s" : ""}
                  </span>
                </span>
              </Link>
            ))}
            <div className="mt-2 px-2 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Reference
            </div>
            {REF.map((l) => (
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
