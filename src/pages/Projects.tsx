import { useState, useEffect } from "react";
import { PageTitle } from "../components/PageTitle";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
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
      <PageTitle title="Projects" />
      <main>
        <div className="flex flex-col gap-20">
          <ProjectCard
            imgSource="https://i.ibb.co/RQd3mdh/fashionkenzie.jpg"
            title="Fashion Kenzie"
            reverse={false}
            description="This is an e-commerce platform for a clothing store. You are able to sign up as an administrator and create, edit and remove items from the shop."
            technologies={[
              "React.js",
              "TypeScript",
              "Tailwind CSS",
              "React Libraries: React Router DOM, React Form, ZOD, Toastify, React Icons",
            ]}
            features={[
              "Usage of REST API, CRUD",
              "Complete store and cart functionality",
              "Route protection",
              "Dynamic form validation",
              "Responsive design in all resolutions",
            ]}
            liveDemo="https://fashion-store-entrega-template-grupo2.vercel.app/"
            repo="https://github.com/Kenzie-Academy-Brasil-Developers/fashion-store-entrega-template-grupo2"
          />
          <ProjectCard
            imgSource="https://i.ibb.co/YRVWtsN/projeto2.jpg"
            title="Dev Hub"
            description="This is a fullstack platform that allows users to sign up and register the technologies they use for their work and how profficient they are at it."
            reverse={true}
            technologies={[
              "React.js",
              "Tailwind CSS",
              "React Libraries: React Router DOM, React Form, ZOD, Toastify, React Icons",
            ]}
            features={[
              "Usage of REST API, CRUD",
              "Route protection, auto-login",
              "Dynamic form validation",
              "Responsive design in all resolutions",
            ]}
            liveDemo="https://react-entrega-kenzie-hub-marcelino-gutierrez.vercel.app/"
            repo="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub_marcelino-gutierrez"
          />
        </div>
      </main>
    </div>
  );
};
