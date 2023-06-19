// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// import { SlLocationPin, SlEnvolope } from "react-icons/sl";
// import { Button4 } from "../constants/btn/Button";
import ContactForm from "./ContactForm";

const ContactHome = () => {
  //   const form = useRef();

  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  //   const handleName = (e) => {
  //     setName(e.target.value);
  //     console.log(name);
  //   };

  //   const handleEmail = (e) => {
  //     setEmail(e.target.value);
  //     console.log(email);
  //   };

  //   const handleMessage = (e) => {
  //     setMessage(e.target.value);
  //     console.log(message);
  //   };

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         process.env.REACT_APP_YOUR_SERVICE_ID,
  //         process.env.REACT_APP_TEMPLATE_ID,
  //         form.current,
  //         process.env.REACT_APP_YOUR_PUBLIC_KEY
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );

  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   };

  return (
    <section className="px-5 md:px-12 lg:px-32">
      <h2 className=" text-center mb-8 text-xl before:content-[''] before:h-[2px] before:block before:bg-gray-main after:content-[''] after:h-[2px] after:block after:bg-gray-main grid grid-cols-3 items-center gap-2 md:gap-0">
        <span>
          <span className="text-pink-main">#</span>
          Contact
        </span>
      </h2>
      <div>
        <h4 className="text-center mb-5 md:mb-10 lg:mb-16">Get in Touch</h4>
        <ContactForm />
        {/* <div className="md:grid md:grid-cols-2 lg:px-32">
          <div className="mb-10">
            <div className="flex items-center gap-5 mb-5">
              <div className="bg-white text-bg-main rounded-full p-2 ">
                <SlLocationPin className="h-10 w-10 lg:h-12 lg:w-12" />
              </div>
              <div>
                <h5 className="text-lg font-semibold lg:text-xl">Location</h5>
                <p className="text-gray-main font-light italic lg:text-lg">
                  Seattle, WA
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-white text-bg-main rounded-full p-2">
                <SlEnvolope className="h-10 w-10 lg:h-12 lg:w-12" />
              </div>
              <div>
                <h5 className="text-lg font-semibold lg:text-xl">
                  Email Address
                </h5>
                <p className="text-gray-main font-light italic lg:text-lg ">
                  gobongomin@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <form id="contact_form" onSubmit={sendEmail} ref={form}>
              <input
                className="mb-5 bg-bg-main border-2 border-gray-main p-2 w-full focus:bg-white active:border-none focus:text-gray-main"
                type="text"
                id="name"
                value={name}
                onChange={handleName}
                placeholder="Name"
              />
              <input
                className="mb-5 bg-bg-main border-2 border-gray-main p-2 w-full  focus:bg-white focus:border-none focus:text-gray-main"
                type="text"
                id="email"
                value={email}
                placeholder="Email"
                onChange={handleEmail}
              />
              <textarea
                className=" bg-bg-main border-2 mb-3 border-gray-main p-2 w-full  focus:bg-white focus:border-none focus:text-gray-main"
                name="message"
                id="message"
                value={message}
                placeholder="Message here...!"
                onChange={handleMessage}
              ></textarea>
              <Button4>send</Button4>
            </form>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ContactHome;
