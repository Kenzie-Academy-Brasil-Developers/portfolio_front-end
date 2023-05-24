import { SiWhatsapp } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { Fade } from "react-awesome-reveal";

export function Footer() {
  return (
    <>
      <Fade triggerOnce={true} duration={3000}>
        <div className="lg:w-2/3 w-5/6 mx-auto py-10 border-t-2 border-b-2 border-white mb-10 flex lg:flex-row flex-col lg:gap-0 gap-3 lg:justify-between items-center">
          <div className="flex flex-col gap-6 lg:items-baseline items-center">
            <h1 className="text-5xl font-bold">Contact</h1>
            <ul className="flex gap-4">
              <li>
                <a href="https://wa.me/5541991012722">
                  <SiWhatsapp className="fill-primary text-xl" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/guchierrez/">
                  <SiLinkedin className="fill-primary text-xl" />
                </a>
              </li>
              <li>
                <a href="https://github.com/guchierrez">
                  <SiGithub className="fill-primary text-xl" />
                </a>
              </li>
            </ul>
          </div>
          <span>All rights reserved - Marcelino Gutiérrez©</span>
        </div>
      </Fade>
    </>
  );
}
