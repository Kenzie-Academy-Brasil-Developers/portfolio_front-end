import { StackCard } from "../components/StackCard";
import { BiLogoGithub, BiLogoReact } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";
import { BiLogoSass } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { useState, useEffect, useContext } from "react";
import { PageTitle } from "../components/PageTitle";
import { MainContext } from "../provider/MainContext";

export const Stack = () => {
  const { translation } = useContext(MainContext);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${
        loading
          ? "opacity-0 translate-y-3 select-none "
          : "transition-all duration-1000"
      } mx-auto w-5/6 flex flex-col gap-12 py-10`}
    >
      <PageTitle title={translation ? "Tecnologias" : "Technologies"} />
      <main>
        <div className="flex flex-wrap gap-5 sm:gap-10 mx-auto justify-center">
          <StackCard name="HTML">
            <BiLogoHtml5 className="fill-current text-8xl" />
          </StackCard>
          <StackCard name="CSS">
            <BiLogoCss3 className="fill-current text-8xl" />
          </StackCard>
          <StackCard name="JavaScript">
            <BiLogoJavascript className="fill-current text-8xl" />
          </StackCard>
          <StackCard name="TypeScript">
            <BiLogoTypescript className="fill-current text-8xl" />
          </StackCard>
          <StackCard name="React.js">
            <BiLogoReact className="fill-current text-8xl" />
          </StackCard>
          <StackCard name="Next.js">
            <TbBrandNextjs className="text-8xl" />
          </StackCard>
          <StackCard name="PostgreSQL">
            <BiLogoPostgresql className="fill-current text-8xl" />
          </StackCard>
          <StackCard name="Tailwind CSS">
            <BiLogoTailwindCss className="fill-current text-8xl" />
          </StackCard>
          <StackCard name="SASS">
            <BiLogoSass className="fill-current text-8xl" />
          </StackCard>
          <StackCard name="Git">
            <BiLogoGit className="fill-current text-8xl" />
          </StackCard>
          <StackCard name="Github">
            <BiLogoGithub className="fill-current text-8xl" />
          </StackCard>
        </div>
      </main>
    </div>
  );
};
