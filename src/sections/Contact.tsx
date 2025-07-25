"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";

// Define types for form state, errors, and submission status
type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

const Contact = () => {
  // Create a ref for the form element
  const form = useRef<HTMLFormElement>(null);

  // State for form data
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState<FormErrors>({});
  
  // State for submission status
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate the form data
  const validateForm = (): boolean => {
    let currentErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      currentErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      currentErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      currentErrors.email = "Email is invalid.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      currentErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(currentErrors);
    return isValid;
  };

  // Handle form submission with EmailJS
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    // Ensure the form ref is current and the env variables are set
    if (
      form.current &&
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    ) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("success");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
        }
      );
    } else {
        console.error("EmailJS environment variables are not set.");
        setStatus("error");
    }
  };

  return (
    <motion.section
      id="contact"
      className=" py-8 px-8 bg-white rounded-2xl shadow-xl my-16 mt-32 border-4 border-neutral-600 border-b-12 font-raleway"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <div className="flex flex-col items-start gap-4 mb-8 sm:flex-row sm:items-center sm:gap-6">
        <h2 className="text-4xl font-extrabold font-raleway text-[var(--dark-text)] whitespace-nowrap section-title">
          Get In Touch
        </h2>
        <div className="w-full h-[2px] bg-slate-700"></div>
      </div>

      <p className="text-[var(--dark-text)] leading-relaxed mb-12 max-w-xl text-justify">
        I’m currently looking for new opportunities and my inbox is always
        open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>

      {/* Attach the ref to the form */}
      <form ref={form} onSubmit={handleSubmit} noValidate>
        <div className="mb-5">
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-4 bg-[var(--dark-text)] text-slate-200 rounded-md border ${
              errors.name ? "border-red-500" : "border-slate-700"
            } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="text-red-500 text-sm mt-2">{errors.name}</p>}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-4 bg-[var(--dark-text)] text-slate-200 rounded-md border ${
              errors.email ? "border-red-500" : "border-slate-700"
            } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="text-red-500 text-sm mt-2">{errors.email}</p>}
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-4 bg-[var(--dark-text)] text-slate-200 rounded-md border ${
              errors.message ? "border-red-500" : "border-slate-700"
            } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          ></textarea>
          {errors.message && <p id="message-error" className="text-red-500 text-sm mt-2">{errors.message}</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn flex items-center mx-auto bg-transparent border-2 border-solid border-[var(--dark-text)] rounded-[3px] outline-none w-fit px-3 py-2 font-raleway font-semibold  text-sm cursor-pointer"
          >
            {status === "submitting" ? (
              "Sending..."
            ) : (
              <>
                Send Message <FiSend className="ml-2" />
              </>
            )}
          </button>
        </div>
      </form>
      
      {status === "success" && (
        <p className="text-center text-green-400 mt-6">
          Thank you for your message! I'll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-center text-red-500 mt-6">
          Something went wrong. Please try again later.
        </p>
      )}
    </motion.section>
  );
};

export default Contact;
