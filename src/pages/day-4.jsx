import { DayPage } from "@/components/content/day-page";
import { days } from "@/data/course";

const day = days.find((d) => d.id === "day-4");
export function Day4() {
  return <DayPage day={day} />;
}
