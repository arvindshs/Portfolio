import React, { useRef } from "react";
import emailjs from "emailjs-com";
import PencilAnimation from "../theee/PencilAnimation";

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r792e4r", // replace with your Service ID
        "template_cgipjwm", // replace with your Template ID
        form.current,
        "u8g8Mae5NdsMU--LP" // replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Reset form after sending
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <div className="mt-10 px-8 md:px-[100px] flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-italiana text-[#0A0F2C]">
          Contacts
        </h1>
        <div className="space-y-6 md:space-y-[30px] mt-6">
          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full md:w-[500px] h-[50px] pl-2 border border-[#07002A] rounded-lg shadow-md focus:outline-none focus:ring-1 focus:ring-[#07002A] focus:shadow-lg"
              />
            </div>
            <div className="mt-4">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full md:w-[500px] h-[50px] pl-2 border border-[#07002A] rounded-lg shadow-md focus:outline-none focus:ring-1 focus:ring-[#07002A] focus:shadow-lg"
              />
            </div>
            <div className="mt-4">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full md:w-[500px] min-h-[150px] pl-3 py-2 border border-[#07002A] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#07002A] focus:shadow-lg resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-[170px] h-[52px] text-[16px] font-hanuman mt-6 mb-2 px-[50px] py-3 bg-[#D72638] text-white rounded-[16px] hover:bg-white hover:text-[#D72638] hover:border-2 hover:border-[#D72638] transition duration-300 ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Pencil Animation on the right side */}
      <div className="w-full md:w-1/3">
        <PencilAnimation />
      </div>
    </div>
  );
}

export default Contacts;
