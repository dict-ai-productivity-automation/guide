import { DayPage } from "@/components/content/day-page";
import { days } from "@/data/course";

const day = days.find((d) => d.id === "day-2");
export function Day2() {
  return <DayPage day={day} />;
}
