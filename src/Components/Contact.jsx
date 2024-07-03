import { useRef } from "react";
import emailjs from "@emailjs/browser";


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
           },
           (error) => {
             console.log("FAILED...", error.text);
           }
         );
     };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="form_name">Your Name</label>
        <input type="text" name="form_name" />
        <label htmlFor="form_email">Your Email</label>
        <input type="email" name="form_email" />
        <label htmlFor="message">Your Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;