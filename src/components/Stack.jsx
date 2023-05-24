import { StackCard } from "./StackCard";
import { Slide } from "react-awesome-reveal";

export function Stack() {
  return (
    <Slide fraction={0} triggerOnce={true} direction="left" delay={1500}>
      <div className="lg:w-2/3 w-5/6 mx-auto pt-20 lg:pt-0">
        <div className=" flex flex-col gap-10">
          <h1 className="text-5xl font-bold">Technologies</h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-5">
            <StackCard
              technology="HTML"
              imgSrc="https://i.ibb.co/b1p1zHR/Vector-1.png"
            />
            <StackCard
              technology="CSS"
              imgSrc="https://i.ibb.co/cC9ddgC/Vector-2.png"
            />
            <StackCard
              technology="JavaScript"
              imgSrc="https://i.ibb.co/Vx9YZvq/Vector-3.png"
            />
            <StackCard
              technology="React.js"
              imgSrc="https://i.ibb.co/Xb6PPKb/Vector-4.png"
            />
            <StackCard
              technology="Git"
              imgSrc="https://i.ibb.co/1nHSX0k/git.png"
            />
            <StackCard
              technology="SASS"
              imgSrc="https://i.ibb.co/1mn6f0t/sass.png"
            />
            <StackCard
              technology="Tailwind CSS"
              imgSrc="https://i.ibb.co/R481PF7/tailwind.png"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
