import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { SlLocationPin, SlEnvolope } from "react-icons/sl";
import { Button4 } from "../constants/btn/Button";

const ContactForm = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section>
      <div className="md:grid md:grid-cols-2 lg:px-32">
        <div className="mb-10">
          <div className="flex items-center gap-5 mb-5">
            <div className="p-2 bg-white rounded-full text-bg-main ">
              <SlLocationPin className="w-10 h-10 lg:h-12 lg:w-12" />
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white lg:text-xl">
                Location
              </h5>
              <p className="italic font-light text-gray-main lg:text-lg">
                Seattle, WA
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="p-2 bg-white rounded-full text-bg-main">
              <SlEnvolope className="w-10 h-10 lg:h-12 lg:w-12" />
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white lg:text-xl">
                Email Address
              </h5>
              <p className="italic font-light text-gray-main lg:text-lg ">
                gobongomin@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div>
          <form id="contact_form" onSubmit={sendEmail} ref={form}>
            <input
              className="w-full p-2 mb-5 border-2 bg-bg-main border-gray-main focus:bg-white active:border-none focus:text-gray-main"
              type="text"
              id="name"
              value={name}
              onChange={handleName}
              placeholder="Name"
            />
            <input
              className="w-full p-2 mb-5 border-2 bg-bg-main border-gray-main focus:bg-white focus:border-none focus:text-gray-main"
              type="text"
              id="email"
              value={email}
              placeholder="Email"
              onChange={handleEmail}
            />
            <textarea
              className="w-full p-2 mb-3 border-2 bg-bg-main border-gray-main focus:bg-white focus:border-none focus:text-gray-main"
              name="message"
              id="message"
              value={message}
              placeholder="Message here...!"
              onChange={handleMessage}
            ></textarea>
            <Button4>send</Button4>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
