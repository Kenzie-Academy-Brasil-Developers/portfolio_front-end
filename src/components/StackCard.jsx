import Tilt from "react-parallax-tilt";

export function StackCard({ children, technology }) {
  return (
    <Tilt>
      <div>
        <div className="p-5 border-white/30 border-2 rounded-2xl flex gap-3 items-center">
          {children}
          <span className="text-lg font-bold">{technology}</span>
        </div>
      </div>
    </Tilt>
  );
}
