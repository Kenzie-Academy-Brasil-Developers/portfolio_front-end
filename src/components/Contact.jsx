import emailjs from "emailjs-com";
import Lottie from "lottie-react";
import Coding from "../assets/animations/Coding.json";
import { SiWhatsapp } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FooterIcon } from "./FooterIcons";

export function Contact() {
  emailjs.init("sAZB8VbdMaitSOQM-");

  function sendEmail(e) {
    e.preventDefault();
    const nameInput = e.target.elements.name;
    const emailInput = e.target.elements.email;
    const textArea = e.target.querySelector("[data-textarea]");

    const params = {
      from_name: nameInput.value,
      email_id: emailInput.value,
      message: textArea.value,
    };
    emailjs
      .send("service_917op3r", "template_o80cp16", params)
      .then(function (res) {
        if (res.ok) {
          function sendSuccess(inputs) {
            inputs.forEach((input) => {
              input.value = "";
              const isInput = input.tagName === "INPUT";
              input.classList.add(
                isInput ? "input-success" : "textarea-success"
              );
              setTimeout(() => {
                input.classList.remove(
                  isInput ? "input-success" : "textarea-success"
                );
              }, 5000);
            });
          }

          sendSuccess([nameInput, emailInput, textArea]);
        } else {
          function sendError(inputs) {
            inputs.forEach((input) => {
              input.value = "";
              const isInput = input.tagName === "INPUT";
              input.classList.add(isInput ? "input-error" : "textarea-error");
              setTimeout(() => {
                input.classList.remove(
                  isInput ? "input-error" : "textarea-error"
                );
              }, 5000);
            });
          }

          sendError([nameInput, emailInput, textArea]);
        }
      });
  }

  return (
    <div
      id="contact"
      className="min-h-screen grid md:grid-cols-2 grid-cols-1 bg-base-300 rounded-sm w-full relative"
    >
      <div className="bg-primary relative flex flex-col h-screen">
        <Lottie
          className="absolute top-1/2 right-2/3 translate-x-2/3 -translate-y-1/2 sm:w-1/2 w-full"
          animationData={Coding}
        ></Lottie>
        <h3 className="font-marlinge text-center text-lg text-primary-content bottom-10 absolute right-1/2 translate-x-1/2">
          Get in touch! Let's expand your business together.
        </h3>
      </div>
      <form
        onSubmit={sendEmail}
        className="w-5/6 sm:w-4/6 xl:w-1/2 md:h-auto h-screen p-4 flex flex-col gap-3 m-auto justify-center"
      >
        <div className="form-control md:w-full w-5/6 mx-auto">
          <label className="label font-marlinge">
            <span className="label-text">Your name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="placeholder-white/30 input bg-base-300 border-x-0 border-t-0 outline-primary focus:outline-primary focus:outline-offset-4 border-b-4 border-primary w-full rounded-none transition-all duration-300"
            name="name"
          />
        </div>
        <div className="form-control md:w-full w-5/6 mx-auto">
          <label className="label font-marlinge">
            <span className="label-text">E-mail*</span>
          </label>
          <input
            type="email"
            placeholder="user@gmail.com"
            className="placeholder-white/30 input bg-base-300 border-x-0 border-t-0 outline-primary focus:outline-primary focus:outline-offset-4 border-b-4 border-primary w-full rounded-none transition-all duration-300"
            name="email"
            required
          />
        </div>
        <div className="md:w-full w-5/6 mx-auto">
          <label className="label font-marlinge">
            <span className="label-text">Your message*</span>
          </label>
          <textarea
            className="placeholder-white/30 textarea bg-base-300 resize-none w-full border-x-0 border-t-0 outline-primary focus:outline-primary focus:outline-offset-4 border-b-4 border-primary rounded-none transition-all duration-300"
            placeholder="We would like to hire you!"
            required
            data-textarea
          ></textarea>
        </div>
        <button className="btn btn-primary w-1/2 mx-auto rounded-none my-4">
          Send
        </button>
        <ul className="absolute bottom-20 md:bottom-10 right-1/2 md:right-1/4 translate-x-1/2 flex gap-4">
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
      </form>
    </div>
  );
}
