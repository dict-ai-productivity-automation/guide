import { DayPage } from "@/components/content/day-page";
import { days } from "@/data/course";

const day = days.find((d) => d.id === "day-3");
export function Day3() {
  return <DayPage day={day} />;
}
