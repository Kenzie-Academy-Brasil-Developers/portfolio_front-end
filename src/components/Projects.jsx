import { ProjectElement } from "./ProjectElement";

export function Projects({ isLanguageSet }) {
  return (
    <div className="">
      <div
        id="projects"
        className="w-5/6 mx-auto flex flex-col gap-10 py-20 my-20"
      >
        <h2 className="font-marlinge md:text-5xl sm:text-3xl text-xl text-primary-content bg-primary w-fit p-4 uppercase">
          {`${isLanguageSet ? "Projetos" : "Projects"}`}
        </h2>
        <div className="flex flex-col gap-20 md:gap-32">
          <ProjectElement
            name="E-COMMERCE APP"
            description={`${
              isLanguageSet
                ? "Este é um projeto de e-commerce em React com uma loja que exibe diversos produtos renderizados através de um banco de dados. Você pode filtrar os items pela aba de categorias e barra de pesquisa. O carrinho de compras utiliza local storage para manter os itens mesmo após fechar ou recarregar a página."
                : "This is an e-commerce application built on React that features a shop with multiple items fetched from a database. You can filter the items by category tab and a search query. It also features local storage, so the items added to the cart remain even after closing/refreshing the application."
            }`}
            live="https://guchierrez.github.io/ecommerce-app/"
            code="https://github.com/guchierrez/ecommerce-app"
            imgSrc="https://i.postimg.cc/LXVzGHKx/project1.jpg"
            isLanguageSet={isLanguageSet}
          />
          <ProjectElement
            name="ELDER SCROLLS CHARACTER GENERATOR"
            description={`${
              isLanguageSet
                ? "Esta é uma ferramenta de geração de personagens para o mundo de Elder Scrolls. Com base no playstyle preferido, o Chat GPT gera um personagem único. O projeto foi escrito em JavaScript e CSS puro."
                : "This is an Elder Scrolls character generator tool that allows you to create a character based on your choice of character and playstyle. It was built using ChatGPTs API and coded from scratch using vanilla JavaScript and CSS."
            }`}
            imgSrc="https://i.postimg.cc/YS6gmp9t/project2.jpg"
            live="https://guchierrez.github.io/elderscrolls-chargen/"
            code="https://github.com/guchierrez/elderscrolls-chargen"
            opposite={true}
            isLanguageSet={isLanguageSet}
          />
          <ProjectElement
            name="ALEMÃO ACABAMENTOS LANDING PAGE"
            description={`${
              isLanguageSet
                ? "Esta é uma landing page criada para a Alemão Acabamentos, um negócio local em minha cidade. A página exibe os produtos, uma breve descrição da empresa e informações de contato, como número de telefone e horário de funcionamento."
                : "This project is a landing page created for Alemão Acabamentos, a local business in my city. The page showcases their products, a brief description of the company, and contact information such as phone number and operating hours."
            }`}
            imgSrc="https://i.postimg.cc/ZY7NNsTv/project3.jpg"
            live="https://guchierrez.github.io/alemao-acabamentos/"
            code="https://github.com/guchierrez/alemao-acabamentos"
            isLanguageSet={isLanguageSet}
          />
        </div>
      </div>
    </div>
  );
}
