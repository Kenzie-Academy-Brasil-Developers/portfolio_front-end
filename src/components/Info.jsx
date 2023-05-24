import { Projects } from "./Projects";
import { Stack } from "./Stack";

export function Info() {
  return (
    <div className="flex flex-col gap-20 py-20">
      <Stack />
      <Projects />
    </div>
  );
}
