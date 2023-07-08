import { useState, useEffect } from "react";
import { HeroDivider } from "../components/HeroDivider";

export const Home = () => {
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
      <main className="translate-y-3 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 ">
          <HeroDivider>
            <span className="font-marlinge uppercase text-primary">
              Marcelino Gutiérrez
            </span>
            <h1 className="text-5xl font-bold">Welcome to my portfolio</h1>
          </HeroDivider>
          <HeroDivider>
            <p className="py-4 text-white/70">
              {" "}
              Bridging languages through code, crafting captivating web
              experiences while leveling up in the world of front-end
              development.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary rounded-none w-fit transition-all duration-300">
                Contact
              </button>
              <button className="inline-flex btn btn-outline rounded-none w-fit transition-all duration-300">
                Resumee
              </button>
            </div>
          </HeroDivider>
        </div>
        <div className="relative mx-auto">
          <div className="rounded-full overflow-hidden">
            <img
              className="hover:scale-110 transition-all duration-1000 w-96"
              src="https://i.ibb.co/GpMbgKz/IMG-0165.jpg"
            />
          </div>
          <span className="font-marlinge absolute bg-primary shadow-lg px-14 p-2 sm:p-4 text-primary-content font-bold text-xl sm:text-3xl bottom-0 transition-all duration-1000">
            Marcelino
          </span>
        </div>
      </main>
      <section className="col-span-2 grid grid-cols-1 md:grid-cols-7 md:gap-10 gap-3">
        <h2 className="text-5xl font-bold md:col-span-2">About me</h2>
        <p className="md:col-span-5 py-4 md:py-0 text-white/70">
          Hi! I'm <strong>Marcelino Gutierrez</strong>, a web developer based in
          Brazil. I've been learning web development since December of 2022,
          recently enrolled in a bootcamp in February 2023 and have made
          significant progress in a short amount of time. I've gained a solid
          understanding of{" "}
          <strong>HTML, CSS, JavaScript/TypeScript, SQL</strong>, and
          frameworks/libraries such as{" "}
          <strong>React.js and Tailwind CSS</strong>. I believe my quick grasp
          of new technologies can be attributed to my strong ability for
          self-driven development and my <strong>strong work ethic</strong>. As
          someone who is highly <strong>motivated and disciplined</strong>, I'm
          genuinely enthusiastic about further expanding my skills and knowledge
          in web development.
        </p>
      </section>
    </div>
  );
};
