"use client";

import { HalfOfScreen, SecondTitle } from "@/styles/ScreenParts";
import { ContactUsFormType } from "@/types/forms/ContactUs";
import { Button } from "@/ui/button";
import { Input, InputErrorText } from "@/ui/input";
import { TextArea } from "@/ui/textarea";
import { ContactUsScheme } from "@/utils/Schemas/contactUs";
import useYupValidationResolver from "@/utils/hooks/yupValidator";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ContactUsForm } from "./style";

const ContactUsFirstPart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactUsFormType>({
    resolver: useYupValidationResolver(ContactUsScheme),
  });

  const form = useRef<any>(null);

  const onSubmit = (data: ContactUsFormType) => {
    emailjs
      .sendForm(
        "service_wxoauok",
        "template_kctzwpi",
        form.current,
        "gVi7umzIR025cThlM"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Successful sending");
          reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending an email");
        }
      );
  };

  return (
    <HalfOfScreen>
      <ContactUsForm onSubmit={handleSubmit(onSubmit)} ref={form}>
        <SecondTitle>Contact Us</SecondTitle>
        <Input type="text" {...register("name")} placeholder="Name" />
        {errors.name?.message && (
          <InputErrorText>{errors.name?.message}</InputErrorText>
        )}
        <Input type="text" {...register("email")} placeholder="Email" />
        {errors.email?.message && (
          <InputErrorText>{errors.email?.message}</InputErrorText>
        )}
        <TextArea {...register("text")} placeholder="Write your message" />
        {errors.text?.message && (
          <InputErrorText>{errors.text?.message}</InputErrorText>
        )}
        <Button type="submit">Submit</Button>
      </ContactUsForm>
    </HalfOfScreen>
  );
};

export default ContactUsFirstPart;
