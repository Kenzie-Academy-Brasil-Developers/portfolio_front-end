import { IAccordionProps } from "../interface";

export const Accordion = ({ children, title, project }: IAccordionProps) => {
  return (
    <div className="collapse collapse-arrow md:justify-start join-item">
      <input
        defaultChecked={true}
        type="radio"
        name={`my-accordion-${project}`}
      />
      <div className="tracking-widest uppercase collapse-title text-lg font-medium md:w-fit">
        {title}
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
};
