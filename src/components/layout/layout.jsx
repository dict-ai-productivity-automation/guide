import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export function Layout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background print:h-auto print:overflow-visible">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden print:overflow-visible">
        <Header />
        <main className="flex-1 overflow-y-auto print:overflow-visible">
          <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8 print:max-w-none print:px-0 print:py-0">
            <Outlet />
            <footer className="mt-12 border-t pt-6 text-xs text-muted-foreground print:hidden">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p>
                  Co-content authors: Minimax M3, Codex, and Gemini.
                </p>
                <Link
                  to="/responsible-ai"
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  AI use disclosure
                </Link>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
