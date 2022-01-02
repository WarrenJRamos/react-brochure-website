import React from "react";
import { FormContainer } from "../styles/ContactFormStyled";

const ContactForm = () => {
  return (
    <FormContainer>
      <h2>Contact</h2>

      <div className="form-control">
        <label>Name</label>
        <input type="text" />
      </div>
      <div className="form-control">
        <label>Email</label>
        <input type="text" />
      </div>
      <div className="form-control">
        <label>Subject</label>
        <input type="text" />
      </div>
      <div className="form-control">
        <label>Phone</label>
        <input type="text" />
      </div>
      <div className="form-control">
        <textarea name="message" placeholder="Enter Message"></textarea>
      </div>
      <button type="submit">Submit</button>
    </FormContainer>
  );
};

export default ContactForm;
