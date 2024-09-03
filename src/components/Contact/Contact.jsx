import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 
import { fetchContactsAsync } from "../../features/socials/contactsAPI";
import { FaArrowRight } from "react-icons/fa";

import {
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
  FaGithubSquare,
} from "react-icons/fa";
 
import emailjs from 'emailjs-com';

const Contact = () => {
 
  const dispatch = useDispatch();
  const logoMap = {
    Facebook: <FaFacebook />,
    Twitter: <FaTwitterSquare />,
    LinkedIn: <FaLinkedin />,
    Instagram: <FaInstagram />,
    GitHub: <FaGithubSquare />,
  };
  const { contacts, status, isLoading, error } = useSelector(
    (state) => state.contacts
  );
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchContactsAsync());
    }
  }, [status, dispatch]);

  if (status === "loading" || isLoading) {
    return <div>Loading...</div>;
  }

  if (status === "failed" || error) {
    return <div>Error: {error || "Unexpected error occurred."}</div>;
  }
 const sendEmail = (e)=>{
  e.preventDefault();
  emailjs.sendForm(
    "service_maeb794",
    "template_3gmvfo6",
    e.target,
    "w7ljt5EO_fdjNeX5p"

  ).then((result) => {
        alert('Message Sent Successfully!');
        e.target.reset();
      }, (error) => {
        alert('Message Failed to Send!');
      });
 }
  return (
    <div className="contact__container" id="contact">
      <div className="contact__header">
        <h2 className="contact__header--title">{`<Contact/>`}</h2>
      </div>
      <div className="contact__lists">
        <h2 className="contact__lists--header">Find me on:</h2>
        <ul className="contact__list--items">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className={`contact__list--item contact__list--item-${contact.id}`}
            >
              <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__list--link"
              >
                <span
                  className={`contact__list--logo contact__list--logo-${contact.id}`}
                >
                  {logoMap[contact.name]}
                </span>
                <h4 className="contact__list--name"> {contact.name}</h4>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="contact__form--container">
        <h2 className="contact__form--header">Get in touch!</h2>
        <form action="#" onSubmit={sendEmail}>
          <div className="contact__form--sub">
            <span className="contact__form--text">Hi, my name is </span>
            <span className="contact__input-group">
              <input
                name="name"
                type="text"
                id="uname"
                className="contact__input"
                required
              />
              <label htmlFor="uname" className="contact__label">
                <span>your name</span>
              </label>
            </span>
            <span className="contact__form--text">and my email is</span>
            <span className="contact__input-group">
              <input
                name="email"
                type="email"
                id="uemail"
                className="contact__input email"
                required
               autoComplete="off"
              />
              <label htmlFor="uemail" className="contact__label">
                <span>your email</span>
              </label>
            </span>
            <span className="contact__form--text">your message</span>
            <span className="contact__input-group">
              <input
                name="message"
                type="message"
                id="umessage"
                className="contact__input"
                required
              />
              <label htmlFor="umessage" className="contact__label">
                <span>your message</span>
              </label>
            </span>
          </div>
          <div className="contact__submit--area">
          <button type="submit" className="contact__submit--button">
            Send Me <span className="contact__submit--button-symbol"><FaArrowRight />
            </span>
          </button>
          </div>
        </form>
      </div>
    
    </div>
    
  );
};

export default Contact;
