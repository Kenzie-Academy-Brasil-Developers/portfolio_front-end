import Tilt from "react-parallax-tilt";

import { IStackCardProps } from "../interface";

export const StackCard = ({ children }: IStackCardProps) => {
  return (
    <Tilt>
      <div className="p-5 border-white/30 border-2 rounded-none flex flex-col justify-center gap-3 items-center hover:bg-primary hover:text-primary-content hover:border-primary transition-all duration-300">
        {children}
      </div>
    </Tilt>
  );
};
