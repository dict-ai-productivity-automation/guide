import { Outlet } from "react-router-dom";
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
          </div>
        </main>
      </div>
    </div>
  );
}
