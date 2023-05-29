import { Slide } from "react-awesome-reveal";

export function ProjectElement({
  name,
  description,
  imgSrc,
  opposite,
  live,
  code,
  isLanguageSet,
}) {
  return (
    <Slide
      delay={1000}
      triggerOnce={true}
      direction={opposite ? "right" : "left"}
    >
      <div
        className={`md:flex ${
          opposite ? "md:flex-row-reverse" : "md:flex-row"
        }  items-baseline grid grid-cols-1 md:w-full mx-auto`}
      >
        <img src={imgSrc} className="md:relative md:w-96 xl:w-5/12" />
        <div
          className={`bg-base-300 h-full lg:h-fit w-fit p-4 md:w-1/2 xl:w-1/3 md:p-10 md:absolute ${
            opposite
              ? "md:right-80 lg:right-72 xl:right-96"
              : "md:left-80 lg:left-72 xl:left-96"
          } md:self-center`}
        >
          <h3 className="text-xl xl:text-2xl font-marlinge text-primary py-2">
            {name}
          </h3>
          <p className="text-base md:text-sm xl:text-base">{description}</p>
          <div className="flex gap-5 my-4">
            <a
              target="_blank"
              href={code}
              className="btn btn-primary btn-sm lg:btn-md rounded-none"
            >
              {`${isLanguageSet ? "Ver código" : "See code"}`}
            </a>
            <a
              target="_blank"
              href={live}
              className="btn btn-outline btn-sm lg:btn-md rounded-none"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </Slide>
  );
}
