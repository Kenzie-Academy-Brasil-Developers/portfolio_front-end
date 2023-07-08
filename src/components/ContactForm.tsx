import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormTextInput } from "./FormTextInput";
import { useContext } from "react";
import { MainContext } from "../provider/MainContext";
import {
  ContactFormSchema,
  TContactFormValues,
} from "../schema/ContactFormSchema";
import { FormTextareaInput } from "./FormTextareaInput";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
  });
  const { sendEmail } = useContext(MainContext);

  const submit = (formData: TContactFormValues) => {
    sendEmail(formData);
    reset();
  };

  return (
    <form
      noValidate
      className="w-full lg:max-w-sm self-center flex flex-col gap-5"
      onSubmit={handleSubmit(submit)}
    >
      <FormTextInput
        register={register}
        errors={errors}
        inputName="name"
        inputType="text"
        inputPlaceholder="Name"
      />
      <FormTextInput
        register={register}
        errors={errors}
        inputName="email"
        inputType="text"
        inputPlaceholder="Email"
      />
      <FormTextareaInput
        register={register}
        errors={errors}
        inputName="message"
        inputPlaceholder="Message"
      />
      <button className="btn btn-primary w-1/2 mx-auto rounded-none my-4 tracking-widest">
        Send
      </button>
    </form>
  );
};
