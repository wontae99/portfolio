import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

type Props = {};

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const EMAIL_KEY = process.env.NEXT_PUBLIC_EMAIL_KEY as string;

const ContactForm = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "WONTAE",
          from_email: form.email,
          to_email: "wjs152828@gmail.com",
          message: form.message,
        },
        EMAIL_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong.");
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="flex flex-col space-y-2 w-fit mx-auto"
    >
      <div className="flex space-x-2">
        <input
          type="text"
          className="contactInput"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          className="contactInput"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <input
        type="text"
        className="contactInput"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
      />
      <textarea
        className="contactInput"
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-[#F7AB0A] py-5 px-10 rounded-md text-white font-bold text-lg"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
