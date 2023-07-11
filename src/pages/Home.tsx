import { useState, useEffect, useContext } from "react";
import { HeroDivider } from "../components/HeroDivider";
import { Link } from "react-router-dom";
import { MainContext } from "../provider/MainContext";

export const Home = () => {
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
      <main className="translate-y-3 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 ">
          <HeroDivider>
            <span className="font-marlinge uppercase text-primary">
              Marcelino Gutiérrez
            </span>
            <h1 className="text-5xl font-bold">
              {translation
                ? "Bem vindo ao meu portfólio"
                : "Welcome to my portfolio"}
            </h1>
          </HeroDivider>
          <HeroDivider>
            <p className="py-4 text-white/70">
              {translation
                ? "Conectando pessoas por meio do código, criando experiências web cativantes e evoluindo no mundo do desenvolvimento front-end."
                : "Bridging people through code, crafting captivating web experiences while leveling up in the world of front-end development."}
            </p>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="btn btn-primary tracking-widest rounded-none w-fit transition-all duration-300"
              >
                {translation ? "Contato" : "Contact"}
              </Link>
              <a
                target="_blank"
                href={
                  translation
                    ? "https://drive.google.com/file/d/1GaO3vxTRBT2-ROKLYQRjXUyRdLHm3K27/view?usp=sharing"
                    : "https://drive.google.com/file/d/1t3fzR-pV0FMBRi1BzNYaFHZdF7k5k9M2/view?usp=sharing"
                }
                className="inline-flex tracking-widest btn btn-outline rounded-none w-fit transition-all duration-300"
              >
                {translation ? "Currículo" : "Resumee"}
              </a>
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
        <h2 className="text-5xl font-bold md:col-span-2">
          {translation ? "Sobre mim" : "About me"}
        </h2>
        <>
          {translation ? (
            <span className="md:col-span-5 py-4 md:py-0 text-white/70">
              Olá! Me chamo <strong>Marcelino Gutierrez</strong>, sou
              desenvolvedor web full-stack. Tenho aprendido desenvolvimento web
              desde o final de 2022 e comecei a aprender a programar na Kenzie
              Academy em fevereiro de 2023. Tenho feito um progresso incrível e
              adquiri um sólido entendimento de
              <strong> HTML, CSS, JavaScript/TypeScript, SQL</strong> e
              frameworks/bibliotecas como
              <strong> React.js e Tailwind CSS</strong>. Acredito que minha
              rápida compreensão de novas tecnologias pode ser atribuída à minha
              forte capacidade de desenvolvimento independente e minha
              <strong> ética de trabalho</strong>. Estou genuinamente
              entusiasmado em expandir ainda mais minhas habilidades e
              conhecimento em desenvolvimento web.
            </span>
          ) : (
            <span className="md:col-span-5 py-4 md:py-0 text-white/70">
              Hello! I am <strong>Marcelino Gutierrez</strong>, a web developer
              based in Brazil. I have been learning web development since the
              end of 2022 and started learning programming at Kenzie Academy in
              February 2023. I have made incredible progress and have gained a
              solid understanding of
              <strong> HTML, CSS, JavaScript/TypeScript, SQL</strong>, and
              frameworks/libraries like
              <strong> React.js and Tailwind CSS</strong>. I believe that my
              quick grasp of new technologies can be attributed to my strong
              ability for self-directed learning and my
              <strong> strong work ethic</strong>. As a highly
              <strong> motivated and disciplined</strong> individual, I am
              genuinely excited to further expand my skills and knowledge in web
              development.
            </span>
          )}
        </>
      </section>
    </div>
  );
};
