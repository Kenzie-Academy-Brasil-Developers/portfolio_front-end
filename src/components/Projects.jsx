import { ProjectElement } from "./ProjectElement";

export function Projects() {
  return (
    <div className="">
      <div
        id="projects"
        className="w-5/6 mx-auto flex flex-col gap-10 py-20 my-20"
      >
        <h2 className="font-marlinge md:text-5xl sm:text-3xl text-xl text-primary-content bg-primary w-fit p-4">
          PROJECTS
        </h2>
        <div className="flex flex-col gap-20 md:gap-32">
          <ProjectElement
            name="E-COMMERCE APP"
            description="This is an e-commerce application built on React that fetches product data from a JSON file used as a database. It also uses local storage to save items in the cart and utilizes useState to filter the displayed products by a category tab and search bar."
            live="https://guchierrez.github.io/ecommerce-app/"
            code="https://github.com/guchierrez/ecommerce-app"
            imgSrc="https://i.postimg.cc/LXVzGHKx/project1.jpg"
          />
          <ProjectElement
            name="ELDER SCROLLS CHARACTER GENERATOR"
            description="This is an Elder Scrolls character generator tool that allows you to create a character based on your choice of character and playstyle. It was built using ChatGPTs API. This was built from scratch using vanilla JavaScript and vanilla CSS."
            imgSrc="https://i.postimg.cc/YS6gmp9t/project2.jpg"
            live="https://guchierrez.github.io/elderscrolls-chargen/"
            code="https://github.com/guchierrez/elderscrolls-chargen"
            opposite={true}
          />
          <ProjectElement
            name="ALEMÃO ACABAMENTOS LANDING PAGE"
            description="This project is a landing page created for Alemão Acabamentos, a local business in my city. The page showcases their products, a brief description of the company, and contact information such as phone number and operating hours."
            imgSrc="https://i.postimg.cc/ZY7NNsTv/project3.jpg"
            live="https://guchierrez.github.io/alemao-acabamentos/"
            code="https://github.com/guchierrez/alemao-acabamentos"
          />
        </div>
      </div>
    </div>
  );
}
