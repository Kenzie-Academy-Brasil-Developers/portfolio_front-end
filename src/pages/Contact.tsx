import { useContext } from "react";
import { MainContext } from "../provider/MainContext";

export const Contact = () => {
  const { loading } = useContext(MainContext);
  return (
    <div
      className={`${
        loading
          ? "opacity-0 translate-y-3 select-none "
          : "transition-all duration-1000"
      } mx-auto w-5/6 flex flex-col gap-12 py-10`}
    >
      <main>
        <div></div>
      </main>
    </div>
  );
};
