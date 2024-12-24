import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaMobile,
} from "react-icons/fa";

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
            title: "Mail sent successful",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Mail sent failed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[#0c0f13] p-6 m-6 rounded-xl md:flex justify-between gap-8 w-full">
        <div className="mb-4 md:w-[20%]">
          <h2 className="font-bold md:text-3xl">Contact with me__</h2>
        </div>
        <div className="md:w-[80%]">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Contact Info</h2>
            <div className="grid md:grid-cols-2 gap-4">
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
                <FaLocationArrow className="text-3xl"></FaLocationArrow>
                <div>
                  <p>Location_</p>
                  <h4 className="font-semibold">Pabna, Bangladesh</h4>
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
                <FaGithub className="text-3xl"></FaGithub>
                <div>
                  <p>Github_</p>
                  <a
                    href="https://github.com/mohammad-atikuzzaman"
                    className="font-semibold">
                    mohammad-atikuzzaman
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-3xl"></FaLinkedin>
                <div>
                  <p>Linkedin</p>
                  <a
                    href="https://www.linkedin.com/in/matikuzzaman/"
                    className="font-semibold">
                    matikuzzaman/
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaFacebook className="text-3xl"></FaFacebook>
                <div>
                  <p>Facebook</p>
                  <a
                    href="https://www.facebook.com/mohammadakash20"
                    className="font-semibold">
                    mohammadakash20
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr className="bg-[#16A34A] border-[#186133]" />
          <div>
            <h2 className="font-semibold text-2xl my-3">Send me Mail</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-3 text-[#16A34A]">
              <div>
                <label htmlFor="from_name">Your Name</label>
                <br />
                <input
                  type="text"
                  name="from_name"
                  placeholder="Jhon Doe"
                  className="w-full p-2 font-semibold rounded-md"
                />
              </div>
              <div>
                <label htmlFor="from_email">Your Email</label>
                <br />
                <input
                  type="email"
                  name="from_email"
                  placeholder="test@text.com"
                  className="w-full p-2 font-semibold rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message">Your Message</label>
                <br />
                <textarea name="message" placeholder="write here your message" className="w-full p-2 font-semibold rounded-md"></textarea>
              </div>
              <input
                type="submit"
                value="Send"
                className="btn bg-[#125025] w-full font-bold border-b-[#35cc62] border-b-[3px] hover:bg-green-700 transition-all"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
