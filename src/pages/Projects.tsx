import { useState, useEffect, useContext } from "react";
import { PageTitle } from "../components/PageTitle";
import { ProjectCard } from "../components/ProjectCard";
import { MainContext } from "../provider/MainContext";

export const Projects = () => {
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
      <PageTitle title={translation ? "Projetos" : "Projects"} />
      <main>
        <div className="flex flex-col gap-20">
          <ProjectCard
            imgSource="https://i.ibb.co/RQd3mdh/fashionkenzie.jpg"
            title="Fashion Kenzie"
            reverse={false}
            description={
              translation
                ? "Esta é uma plataforma e-commerce para uma loja de roupas. Você pode se cadastrar como administrador e acessar a dashboard, onde é possível: criar, editar e remover itens à venda na loja."
                : "This is an e-commerce platform for a clothing store. You are able to sign up as an administrator and login into the dashboard, where you are able to: create, edit and remove items from the shop."
            }
            technologies={[
              "React.js",
              "TypeScript",
              "Tailwind CSS",
              "React Libraries: React Router DOM, React Form, ZOD, Toastify, React Icons",
            ]}
            features={
              translation
                ? [
                    "Uso da API REST, CRUD",
                    "Funcionalidade completa de loja e carrinho",
                    "Proteção de rotas",
                    "Validação dinâmica de formulários",
                    "Design responsivo em todas as resoluções",
                  ]
                : [
                    "Usage of REST API, CRUD",
                    "Complete store and cart functionality",
                    "Route protection",
                    "Dynamic form validation",
                    "Responsive design in all resolutions",
                  ]
            }
            liveDemo="https://fashion-store-entrega-template-grupo2.vercel.app/"
            repo="https://github.com/Kenzie-Academy-Brasil-Developers/fashion-store-entrega-template-grupo2"
          />
          <ProjectCard
            imgSource="https://i.ibb.co/YRVWtsN/projeto2.jpg"
            title="Dev Hub"
            description={
              translation
                ? "Esta é uma plataforma fullstack que permite aos usuários se inscreverem e registrar as tecnologias que utilizam em seu trabalho, bem como seu nível de proficiência."
                : "This is a fullstack platform that allows users to sign up and register the technologies they use for their work and how proficient they are at it."
            }
            reverse={true}
            technologies={[
              "React.js",
              "Tailwind CSS",
              "React Libraries: React Router DOM, React Form, ZOD, Toastify, React Icons",
            ]}
            features={
              translation
                ? [
                    "Uso de API REST, CRUD",
                    "Proteção de rotas, autenticação automática",
                    "Validação dinâmica de formulários",
                    "Design responsivo em todas as resoluções",
                  ]
                : [
                    "Usage of REST API, CRUD",
                    "Route protection, auto-login",
                    "Dynamic form validation",
                    "Responsive design in all resolutions",
                  ]
            }
            liveDemo="https://react-entrega-kenzie-hub-marcelino-gutierrez.vercel.app/"
            repo="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub_marcelino-gutierrez"
          />
        </div>
      </main>
    </div>
  );
};
