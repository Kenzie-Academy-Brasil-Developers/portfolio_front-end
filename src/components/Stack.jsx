import { StackCard } from "./StackCard";
import { Fade } from "react-awesome-reveal";
import { SiHtml5, SiReact } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";

export function Stack({ isLanguageSet }) {
  return (
    <div
      id="stack"
      className="w-5/6 md:min-h-screen mx-auto pt-20 my-20 relative"
    >
      <div className="flex flex-col gap-10 w-full">
        <h1 className=" md:text-5xl sm:text-3xl text-xl w-fit font-marlinge text-primary-content bg-primary p-4 uppercase">
          {`${isLanguageSet ? "Tecnologias" : "Technologies"}`}
        </h1>
        <Fade triggerOnce={true} delay={1000}></Fade>
        <div className="flex flex-wrap gap-10 justify-center">
          <Fade cascade damping={0.1} triggerOnce={true} delay={1000}>
            <StackCard technology="HTML">
              <SiHtml5 className="fill-current text-8xl" />
            </StackCard>
            <StackCard technology="CSS">
              <SiCss3 className="fill-current text-8xl" />
            </StackCard>
            <StackCard technology="JavaScript">
              <SiJavascript className="fill-current text-8xl" />
            </StackCard>
            <StackCard technology="TypeScript">
              <SiTypescript className="fill-current text-8xl" />
            </StackCard>
            <StackCard technology="React.js">
              <SiReact className="fill-current text-8xl" />
            </StackCard>
            <StackCard technology="Git">
              <SiGit className="fill-current text-8xl" />
            </StackCard>
            <StackCard technology="SASS">
              <SiSass className="fill-current text-8xl" />
            </StackCard>
            <StackCard technology="Tailwind CSS">
              <SiTailwindcss className="fill-current text-8xl" />
            </StackCard>
            <StackCard technology="Bootstrap">
              <SiBootstrap className="fill-current text-8xl" />
            </StackCard>
            <StackCard technology="PostgreSQL">
              <SiPostgresql className="fill-current text-8xl" />
            </StackCard>
          </Fade>
        </div>
      </div>
    </div>
  );
}
