import { SiGithub } from "react-icons/si";

export function ProjectCard({ projectName, projectDescription, projectLink }) {
  return (
    <div className="p-5 border-white/30 border-2 rounded-2xl flex gap-3 relative">
      <SiGithub className="absolute top-3.5 right-3.5 fill-slate-50 text-3xl" />
      <div className="flex flex-col gap-3 mr-10 mb-10">
        <h1 className="text-2xl font-bold self-start">{projectName}</h1>
        <p>{projectDescription}</p>
      </div>
      <a
        className="text-primary link-hover absolute bottom-3.5 left-4.5 w-fit"
        href={projectLink}
      >
        Live demo
      </a>
    </div>
  );
}
