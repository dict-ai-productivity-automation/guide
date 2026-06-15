import { DayPage } from "@/components/content/day-page";
import { days } from "@/data/course";

const day = days.find((d) => d.id === "day-1");
export function Day1() {
  return <DayPage day={day} showPromptBuilder />;
}
