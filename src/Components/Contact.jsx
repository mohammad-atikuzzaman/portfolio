import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaEnvelope, FaGithub, FaLocationArrow, FaMobile } from "react-icons/fa";


const Contact = () => {
   const form = useRef();

     const sendEmail = (e) => {
       e.preventDefault();

       emailjs
         .sendForm("service_jnxzp7g", "template_mawzx2r", form.current, {
           publicKey: "iTEKd8x3FPZ0Yb0bb",
         })
         .then(
           () => {
             console.log("SUCCESS!");
             Swal.fire({
               position: "center",
               icon: "success",
               title: "Your work has been saved",
               showConfirmButton: false,
               timer: 1500,
             });
           },
           (error) => {
             console.log("FAILED...", error.text);
             Swal.fire({
               position: "center",
               icon: "error",
               title: "Your work has been saved",
               showConfirmButton: false,
               timer: 1500,
             });
           }
         );
     };
  return (
    <div className="bg-orange-50 p-6 m-6 rounded-xl md:flex justify-between gap-8">
      <div className="mb-4 md:w-[20%]">
        <h2 className="font-bold text-3xl">Contact with me__</h2>
      </div>
      <div className="md:w-[80%]">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Contact Info</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <FaMobile className="text-3xl"></FaMobile>
              <div>
                <p>Phone_</p>
                <a href="tel:+8801729414662" className="font-semibold">
                  +8801729414662
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-3xl"></FaEnvelope>
              <div>
                <p>Email_</p>
                <a
                  href="mailto:akash203037@gmail.com"
                  className="font-semibold">
                  akash203037@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationArrow className="text-3xl"></FaLocationArrow>
              <div>
                <p>Location_</p>
                <h4 className="font-semibold">Pabna, Bangladesh</h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub className="text-3xl"></FaGithub>
              <div>
                <p>Github_</p>
                <a
                  href="https://github.com/mohammad-atikuzzaman"
                  className="font-semibold">
                  https://github.com/mohammad-atikuzzaman
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-2xl my-3">Send me Mail</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-3">
            <div>
              <label htmlFor="form_name">Your Name</label>
              <br />
              <input
                type="text"
                name="form_name"
                placeholder="Jhon Doe"
                className="w-full p-2"
              />
            </div>
            <div>
              <label htmlFor="form_email">Your Email</label>
              <br />
              <input
                type="email"
                name="form_email"
                placeholder="test@text.com"
                className="w-full p-2"
              />
            </div>
            <div>
              <label htmlFor="message">Your Message</label>
              <br />
              <textarea name="message" className="w-full p-2"></textarea>
            </div>
            <input
              type="submit"
              value="Send"
              className="btn w-full font-bold text-[#754c25]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;