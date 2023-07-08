import Lottie from "lottie-react";
import Coding from "../assets/animations/Coding.json";
import { SiWhatsapp } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FooterIcon } from "../components/FooterIcon";
import { ContactForm } from "../components/ContactForm";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useState, useEffect } from "react";

export function Contact() {
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
        loading ? "opacity-0 select-none " : "transition-all duration-300"
      } min-h-screen grid md:grid-cols-2 grid-cols-1 bg-[#1c1c1c] rounded-sm w-full relative`}
    >
      <div className="bg-primary relative flex flex-col h-screen">
        <Lottie
          className="absolute top-1/2 right-2/3 translate-x-2/3 -translate-y-1/2 sm:w-1/2 w-full"
          animationData={Coding}
        ></Lottie>
        <h3 className=" uppercase tracking-widest select-none text-center text-lg text-primary-content bottom-10 absolute right-1/2 translate-x-1/2">
          Get in touch! Let's expand your business together.
        </h3>
      </div>

      <div className="w-5/6 h-screen justify-center flex m-auto relative">
        <Link
          to="/"
          className="flex items-center gap-2 text-primary uppercase tracking-widest absolute top-[5%] left-0"
        >
          <BiArrowBack />
          Return
        </Link>
        <ul className="absolute bottom-20 md:bottom-10 right-1/2 translate-x-1/2 flex gap-4">
          <FooterIcon link="https://wa.me/5541991012722">
            <SiWhatsapp className="text-2xl" />
          </FooterIcon>
          <FooterIcon link="https://www.linkedin.com/in/guchierrez/">
            <SiLinkedin className="text-2xl" />
          </FooterIcon>
          <FooterIcon link="https://github.com/guchierrez">
            <SiGithub className="text-2xl" />
          </FooterIcon>
        </ul>
        <ContactForm />
      </div>
    </div>
  );
}
