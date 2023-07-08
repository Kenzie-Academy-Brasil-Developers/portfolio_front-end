import { StackCard } from "../components/StackCard";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { useState, useEffect } from "react";

export const Stack = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  });

  return (
    <div
      className={`${
        loading
          ? "opacity-0 translate-y-3 select-none "
          : "transition-all duration-1000"
      } mx-auto w-5/6 flex flex-col gap-12 py-10`}
    >
      <main>
        <div className="flex gap-4 mx-auto">
          <StackCard>
            <BiLogoHtml5 className="fill-current text-8xl" />
          </StackCard>
          <StackCard>
            <BiLogoCss3 className="fill-current text-8xl" />
          </StackCard>
          <StackCard>
            <BiLogoJavascript className="fill-current text-8xl" />
          </StackCard>
          <StackCard>
            <BiLogoTypescript className="fill-current text-8xl" />
          </StackCard>
          <StackCard>
            <BiLogoReact className="fill-current text-8xl" />
          </StackCard>
          <StackCard>
            <BiLogoPostgresql className="fill-current text-8xl" />
          </StackCard>
          <StackCard>
            <BiLogoTailwindCss className="fill-current text-8xl" />
          </StackCard>
        </div>
      </main>
    </div>
  );
};
