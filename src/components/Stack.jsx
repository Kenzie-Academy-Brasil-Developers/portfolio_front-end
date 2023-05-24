import { StackCard } from "./StackCard";
import { Slide } from "react-awesome-reveal";
import { SiHtml5, SiReact } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

export function Stack() {
  return (
    <Slide fraction={0} triggerOnce={true} direction="left" delay={1000}>
      <div className="lg:w-2/3 w-5/6 mx-auto">
        <div className=" flex flex-col gap-10 items-start">
          <h1 className="text-5xl font-bold">Technologies</h1>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 w-full">
            <StackCard technology="HTML">
              <SiHtml5 />
            </StackCard>
            <StackCard technology="CSS">
              <SiCss3 />
            </StackCard>
            <StackCard technology="JavaScript">
              <SiJavascript />
            </StackCard>
            <StackCard technology="React.js">
              <SiReact />
            </StackCard>
            <StackCard technology="Git">
              <SiGit />
            </StackCard>
            <StackCard technology="SASS">
              <SiSass />
            </StackCard>
            <StackCard technology="Tailwind CSS">
              <SiTailwindcss />
            </StackCard>
          </div>
        </div>
      </div>
    </Slide>
  );
}
