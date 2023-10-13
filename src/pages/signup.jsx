import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function SignupPage() {
  return (
    <main>
      <nav>
        <img src={logo} alt="valyou Logo" title="Valyou" />
        <FontAwesomeIcon icon={faBars} className="menu-icon" />
      </nav>
      <section>
        <div className="hero">
          <h1>Welcome to Valyou X</h1>
          <p>
            If you’re interested in participating as an early adopter, you can
            fill out the survey and apply to get exclusive access. We have over
            50,000+ in our email list would you like to skip the queue?
          </p>
          <h2>Get early access</h2>
        </div>
      </section>
      <form action="">
        <input type="text" name="fname" id="fname" placeholder="First name" />
        <input type="text" name="lname" id="lname" placeholder="Last name" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input type="tel" name="phone" id="phone" />
      </form>
    </main>
  );
}
