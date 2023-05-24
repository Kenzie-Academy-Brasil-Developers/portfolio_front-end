import { ProjectCard } from "./ProjectCard";
import { Slide } from "react-awesome-reveal";

export function Projects() {
  return (
    <Slide fraction={0} triggerOnce={true} direction="right" delay={1000}>
      <div className=" lg:w-2/3 w-5/6 mx-auto">
        <div className="flex flex-col gap-10 items-start">
          <h1 className="text-5xl font-bold">Projects</h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <ProjectCard
              projectName="E-commerce Application"
              projectLink="https://guchierrez.github.io/ecommerce-app/"
              projectDescription="This is an e-commerce application built on React that fetches product data from a JSON file used as a database. It also uses local storage to save items in the cart and utilizes useState to filter the displayed products by a category tab and search bar."
            />
            <ProjectCard
              projectName="Elder Scrolls Character Generator"
              projectDescription="This is an Elder Scrolls character generator tool that allows you to create a character based on your choice of character and playstyle. It was built using ChatGPTs API. This was built from scratch using vanilla JavaScript and vanilla CSS."
              projectLink="https://guchierrez.github.io/elderscrolls-chargen/"
            />
            <ProjectCard
              projectName="Alemão Acabamentos Landing Page"
              projectDescription="This project is a landing page created for Alemão Acabamentos, a local business in my city. The page showcases their products, a brief description of the company, and contact information such as phone number and operating hours."
              projectLink="https://guchierrez.github.io/alemao-acabamentos/"
            />
            <ProjectCard
              projectName="Dark Souls Webpage"
              projectDescription="This is my first ever personal project. I made this even before joining Kenzie Academy, at this time I was studying code by myself and it is inspiring to see how far I've come."
              projectLink="#"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
