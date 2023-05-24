import { Fade } from "react-awesome-reveal";
import { JackInTheBox } from "react-awesome-reveal";

export function Hero() {
  return (
    <div id="about" className="hero min-h-screen lg:w-2/3 w-5/6 mx-auto py-20">
      <div className="hero-content flex flex-col gap-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-3 lg:row-start-1">
            <Fade cascade damping={0.1} triggerOnce={true} duration={3000}>
              <span className="text-primary">Marcelino Gutiérrez</span>
              <h1 className="text-5xl font-bold">Welcome to my portfolio</h1>
              <p className="py-4">
                Bridging languages through code, crafting captivating web
                experiences while leveling up in the world of front-end
                development.
              </p>
              <a
                href="https://www.linkedin.com/in/guchierrez/"
                target="_blank"
                className="btn btn-primary btn-sm rounded-xl px-8 w-fit text-white"
              >
                Learn more
              </a>
            </Fade>
          </div>
          <JackInTheBox delay={1000} triggerOnce={true}>
            <img
              src="https://i.ibb.co/FDfKjb0/Vector.png"
              className="col-start-1 lg:col-start-2"
            />
          </JackInTheBox>
        </div>
        <Fade duration={3000} delay={1000} triggerOnce={true}>
          <div className="col-span-2 grid grid-cols-1 lg:grid-cols-7 lg:gap-10 gap-3">
            <h2 className="text-5xl font-bold lg:col-span-2">About me</h2>
            <p className="lg:col-span-5 py-4 lg:py-0">
              Hi! I'm Marcelino Gutierrez, a web developer based in Brazil. I've
              been learning web development since December of 2022, recently
              enrolled in a bootcamp in February 2023 and have made significant
              progress in a short amount of time. I've gained a solid
              understanding of HTML, CSS, JavaScript, and frameworks like React,
              Tailwind CSS and component libraries. As a highly motivated and
              disciplined individual, I'm excited to continue expanding my
              skills and knowledge in web development.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
