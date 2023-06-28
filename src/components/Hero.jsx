import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { JackInTheBox } from "react-awesome-reveal";

export function Hero({ isLanguageSet, isLoading }) {
  function handleContact(targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="about" className="hero min-h-screen w-5/6 mx-auto py-20">
      <div className="hero-content flex flex-col gap-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-3 md:row-start-1">
            <Fade cascade damping={0.1} triggerOnce={true} duration={3000}>
              <span className="font-marlinge uppercase text-primary">
                Marcelino Gutiérrez
              </span>
              <h1 className="text-5xl font-bold">{`${
                isLanguageSet
                  ? "Bem vindo ao meu portfólio"
                  : "Welcome to my portfolio"
              }`}</h1>
              <p className="py-4 text-white/70">
                {`${
                  isLanguageSet
                    ? "Conectando pessoas através de código e aplicações web cativantes, explorando o vasto campo do desenvolvimento front-end."
                    : "Bridging languages through code, crafting captivating web experiences while leveling up in the world of front-end development."
                }`}
              </p>
              <div className="flex gap-5">
                <a
                  onClick={() => {
                    const targetElement = document.querySelector("#contact");
                    handleContact(targetElement);
                  }}
                  className="btn btn-primary rounded-none w-fit transition-all duration-300"
                >
                  {`${isLanguageSet ? "Contato" : "Contact"}`}
                </a>
                <a
                  href={`${
                    isLanguageSet
                      ? "https://guchierrez-resumee-ptbr.tiiny.site/"
                      : "https://pdfhost.io/v/FjAa4LsHT_MARCELINO_GUTIERREZen"
                  }`}
                  target="_blank"
                  className="inline-flex btn btn-outline rounded-none w-fit transition-all duration-300"
                >
                  {isLanguageSet ? "Currículo" : "Curriculum"}
                </a>
              </div>
            </Fade>
          </div>
          <JackInTheBox delay={1000} triggerOnce={true}>
            <div className="relative w-fit mx-auto">
              <div className="rounded-full overflow-hidden">
                <img
                  style={{ width: "350px" }}
                  className="hover:scale-110 transition-all duration-1000"
                  src="https://i.ibb.co/GpMbgKz/IMG-0165.jpg"
                />
              </div>
              <span className="font-marlinge absolute bg-primary shadow-lg px-14 p-2 sm:p-4 text-primary-content font-bold text-xl sm:text-3xl bottom-0 transition-all duration-1000">
                Marcelino
              </span>
            </div>
          </JackInTheBox>
        </div>
        <Fade duration={3000} delay={1000} triggerOnce={true}>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-7 md:gap-10 gap-3">
            <h2 className="text-5xl font-bold md:col-span-2">
              {isLanguageSet ? "Sobre mim" : "About me"}
            </h2>
            <p className="md:col-span-5 py-4 md:py-0 text-white/70">
              {isLanguageSet
                ? "Olá! Me chamo Marcelino Gutiérrez e sou um desenvolvedor web front-end. Venho aprendendo desenvolvimento web desde dezembro de 2022 e recentemente me matriculei na Kenzie Academy Brasil em fevereiro de 2023, desde então tenho feito um progresso significativo em um período de tempo relativamente curto. Adquiri um sólido conhecimento em HTML, CSS, JavaScript e frameworks/bibliotecas como React e Tailwind CSS. Atribuo essa rápida assimilação de novas tecnologias à  minha ética de trabalho e alta capacidade de desenvolvimento independente. Como uma pessoa altamente motivada e disciplinada, estou empolgado em continuar expandindo minhas habilidades e conhecimentos em desenvolvimento web."
                : "Hi! I'm Marcelino Gutierrez, a web developer based in Brazil. I've been learning web development since December of 2022, recently enrolled in a bootcamp in February 2023 and have made significant progress in a short amount of time. I've gained a solid understanding of HTML, CSS, JavaScript, and frameworks/libraries such as React and Tailwind CSS. I believe my quick grasp of new technologies can be attributed to my strong ability for self-driven development and my strong work ethic. As someone who is highly motivated and disciplined, I'm genuinely enthusiastic about further expanding my skills and knowledge in web development."}
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
