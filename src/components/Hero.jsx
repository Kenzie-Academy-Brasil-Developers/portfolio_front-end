import { Fade } from "react-awesome-reveal";
import { JackInTheBox } from "react-awesome-reveal";

export function Hero() {
  return (
    <div id="about" className="hero min-h-screen w-5/6 mx-auto py-20">
      <div className="hero-content flex flex-col gap-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-3 md:row-start-1">
            <Fade cascade damping={0.1} triggerOnce={true} duration={3000}>
              <span className="font-marlinge uppercase text-primary">
                Marcelino Gutiérrez
              </span>
              <h1 className="text-5xl font-bold">Welcome to my portfolio</h1>
              <p className="py-4 text-white/70">
                Bridging languages through code, crafting captivating web
                experiences while leveling up in the world of front-end
                development.
              </p>
              <a
                href="https://www.linkedin.com/in/guchierrez/"
                target="_blank"
                className="btn btn-outline btn-primary rounded-none px-8 w-fit transition-all duration-300"
              >
                View curriculum
              </a>
            </Fade>
          </div>
          <JackInTheBox delay={1000} triggerOnce={true}>
            <div className="relative w-fit mx-auto">
              <div className="rounded-full overflow-hidden">
                <img
                  style={{ width: "350px" }}
                  className="hover:scale-110 transition-all duration-1000"
                  src="https://i.postimg.cc/W1Q6kWww/me.jpg"
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
            <h2 className="text-5xl font-bold md:col-span-2">About me</h2>
            <p className="md:col-span-5 py-4 md:py-0 text-white/70">
              Hi! I'm Marcelino Gutierrez, a web developer based in Brazil. I've
              been learning web development since December of 2022, recently
              enrolled in a bootcamp in February 2023 and have made significant
              progress in a short amount of time. I've gained a solid
              understanding of HTML, CSS, JavaScript, and frameworks/libraries
              such as React and Tailwind CSS. As a highly motivated and
              disciplined individual, I'm excited to continue expanding my
              skills and knowledge in web development.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
