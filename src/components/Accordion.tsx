import { IAccordionProps } from "../interface";

export const Accordion = ({ children, title, project }: IAccordionProps) => {
  return (
    <div className="collapse collapse-arrow md:justify-start join-item">
      <input
        defaultChecked={false}
        type="radio"
        name={`my-accordion-${project}`}
      />
      <div className="text-lg font-medium tracking-widest uppercase collapse-title md:w-fit">
        {title}
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
};
