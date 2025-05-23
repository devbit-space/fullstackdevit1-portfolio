"use client";
import React from "react";
import { Label } from "@/Aceternity/label";
import { Input, Textarea } from "@/Aceternity/input";
import { cn } from "@/lib/utils";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const email = formData.get('email');
    const message = formData.get('message');
    console.log(firstname, lastname, email, message);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ firstname, lastname, email, message }),
      });
      if (response.ok) {
        toast.success('Message sent to devbit, devbit will get back to you as soon as possible.');
        console.log('Message sent to devbit');
      } else {
        toast.error('Failed to send message to devbit, please try again.');
        console.error('Failed to send message to devbit');
      }
    } catch (error) {
      console.error('Error sending message to devbit:', error);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#2d2f33cf] border-2 border-[#44474d]">
      <h2 className="font-bold text-xl text-neutral-200">
        Contact Me
      </h2>
      <p className="text-sm max-w-sm mt-2 text-neutral-300">
        I&rsquo;m always looking for new opportunities to collaborate and
        contribute to projects. If you have a project in mind, please don&rsquo;t
        hesitate to contact me.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" name="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" name="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="I'm interested in collaborating on a project with you."
            className="w-full"
            rows={4}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br flex items-center justify-center relative group/btn from-[#000] to-[#303030] dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          <FaPaperPlane className="mr-2" />
          Send Message
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
