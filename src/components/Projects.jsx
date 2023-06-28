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
            name="DEV HUB"
            description={`${
              isLanguageSet
                ? "Esta é uma aplicação full-stack que consiste em uma plataforma onde desenvolvedores conseguem criar sua conta e registrar as tecnologias que usam para o trabalho e associar um nível de fluência à mesma. Este aplicativo apresenta React Hooks e bibliotecas como: UseContext, React Router DOM, React Form, ZOD, etc."
                : "This is a fullstack platform that allows users to sign up and register the technologies they use for their work and how profficient they are at it. This app features advanced React Hooks and libraries such as: UseContext, React Router DOM, React Form, ZOD, etc."
            }`}
            imgSrc="https://i.postimg.cc/FHy11DxR/project3.jpg"
            live="https://react-entrega-kenzie-hub-marcelino-gutierrez.vercel.app/"
            code="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub_marcelino-gutierrez"
            opposite={true}
            isLanguageSet={isLanguageSet}
          />
          <ProjectElement
            name="DEV BURGER"
            description={`${
              isLanguageSet
                ? "Este projeto é um aplicativo que possui uma loja de alimentos e um carrinho dentro de um modal que calcula o preço total e mostra todos os itens selecionados. Este projeto conta com React Hooks essenciais, como UseState e UseEffect."
                : "This project is an app that features a food shop and a cart inside a modal that calculates the total price and showcases all the selected items. This project features essential React Hooks such as UseState and UseEffect."
            }`}
            imgSrc="https://i.postimg.cc/15N819nD/project2.jpg"
            live="https://react-entrega-s3-template-hamburgueria-marcelino-gutierrez.vercel.app/"
            code="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-template-hamburgueria-marcelino_gutierrez"
            isLanguageSet={isLanguageSet}
          />
        </div>
      </div>
    </div>
  );
}
