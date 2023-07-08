import { IProjectCardProps } from "../interface";
import { Accordion } from "./Accordion";

export const ProjectCard = ({
  imgSource,
  title,
  reverse,
  description,
  technologies,
  features,
  liveDemo,
  repo,
}: IProjectCardProps) => {
  return (
    <div
      className={`md:flex ${
        reverse ? "md:flex-row-reverse ml-auto" : "md:flex-row"
      }  grid bg-[#1c1c1c] my-auto grid-cols-1 xl:w-2/3 md:h-[40rem] lg:h-[32rem]`}
    >
      <img
        className="md:max-w-xs lg:max-w-md object-cover transition-all duration-300"
        src={imgSource}
        alt={title}
      />
      <div className="w-full outline-none p-4">
        <h3 className="uppercase tracking-widest font-semibold text-2xl xl:text-3xl font-marlinge text-primary py-2">
          {title}
        </h3>
        <Accordion project={title} title="Description">
          <p>{description}</p>
        </Accordion>
        <Accordion project={title} title="Technologies">
          <ul className="list-disc ml-4">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </Accordion>
        <Accordion project={title} title="Features">
          <ul className="list-disc ml-4">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </Accordion>
        <div className="flex gap-5 my-4">
          <a
            className="btn btn-primary tracking-widest btn-sm md:btn-md rounded-none"
            target="_blank"
            href={repo}
          >
            See code
          </a>
          <a
            className="btn btn-outline tracking-widest btn-sm md:btn-md rounded-none"
            target="_blank"
            href={liveDemo}
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  );
};
