import React from 'react';
import './Contact.css';

class Contact extends React.Component {

  onSubmit = (e) => {
    e.preventDefault();
    let x = document.forms["form"]["name"].value;
    let y = document.forms["form"]["email"].value;
    let z = document.forms["form"]["phone"].value;

    this.setState({
      firstAndLastName: "",
      email: "",
      phone: "",
    });

    if (x === "") {
      alert(" Please fill out the name portion");
      return false;
    }
    if (y === "") {
      alert(" Please fill out the email portion");
      return false;
    }
    if (z === "") {
      alert(" Please fill out the phone portion");
      return false;
    };
  }

  render() {
    return (
      <div id="contact">
        <h2 className="contact">
          Please fill out the form <br /> A member from our team will reach out to you!</h2>


        <form className="contact-form" name="form" onSubmit={this.onSubmit} >
          <input className="form-place" name="name" type="text" placeholder="Your name" /><br />
          <input className="form-place" name="email" type="text" placeholder="Your email" /><br />
          <input className="form-place" name="phone" type="text" placeholder="Your phone" /><br />
          {/* <label className="label" htmlFor="service">What are you interested in?</label><br />
          <select name="service" >
            <option value="jet">Jet</option>
            <option value="yacht">Yacht</option>
          </select><br /> */}
          <textarea className="contact-form-text" placeholder="your message"></textarea><br />
          {/* <button className="contact-form-btn" value="send" onClick={e => this.onSubmit}></button> */}
          <input className="contact-form-btn" type="submit" value="Submit"
          />
        </form>


      </div>
    );
  }
}
export default Contact;