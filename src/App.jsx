import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/layout";
import { ThemeProvider } from "@/components/theme-provider";
import { Overview } from "@/pages/overview";
import { Dashboard } from "@/pages/dashboard";
import { Schedule } from "@/pages/schedule";
import { AtAGlance } from "@/pages/at-a-glance";
import { Setup } from "@/pages/setup";
import { Day1 } from "@/pages/day-1";
import { Day2 } from "@/pages/day-2";
import { Day3 } from "@/pages/day-3";
import { Day4 } from "@/pages/day-4";
import { Day5 } from "@/pages/day-5";
import { SharkTankRubricPage } from "@/pages/shark-tank-rubric";
import { Assessment } from "@/pages/assessment";
import { ResponsibleAI } from "@/pages/responsible-ai";
import { Glossary } from "@/pages/glossary";
import { Faq } from "@/pages/faq";
import { Resources } from "@/pages/resources";

function NotFound() {
  return (
    <div className="rounded-lg border bg-card p-8 text-center">
      <h2 className="text-2xl font-semibold">Page not found</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="bootcamp-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Overview />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="glance" element={<AtAGlance />} />
            <Route path="setup" element={<Setup />} />
            <Route path="day-1" element={<Day1 />} />
            <Route path="day-2" element={<Day2 />} />
            <Route path="day-3" element={<Day3 />} />
            <Route path="day-4" element={<Day4 />} />
            <Route path="day-5" element={<Day5 />} />
            <Route path="shark-tank-rubric" element={<SharkTankRubricPage />} />
            <Route path="assessment" element={<Assessment />} />
            <Route path="responsible-ai" element={<ResponsibleAI />} />
            <Route path="glossary" element={<Glossary />} />
            <Route path="faq" element={<Faq />} />
            <Route path="resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
