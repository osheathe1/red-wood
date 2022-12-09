import React from "react";
import "../styles/AboutUs.css";
import Jay from '../assets/images/jay.png'
import Zach from '../assets/images/zach.jpg'
import Josh from '../assets/images/josh.jpg'
import Leone from '../assets/images/leone.jpg'
import Matt from '../assets/images/matt.jpg'
import Jacob from '../assets/images/jacob.jpg'

function AboutUs() {
  return (
    <div class="">
        <div class="about-section">
      <h1>About Us</h1>
      <p>Who we are and what we do.</p>
</div>
      <h2>Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src={Jay} alt="jay" width={100} />
            <div class="container">
              <h2>Jamionn Fletcher</h2>
              <p class="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
          <img src={Josh} alt="jay" width={100} height={100}/>
            <div class="container">
              <h2>Joshua Flores</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
          <img src={Zach} alt="zach" width={100}  />
            <div class="container">
              <h2>Zach Schroeder</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
          <img src={Leone} alt="zach" width={100}  />
            <div class="container">
              <h2>Leone Varando</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
          <img src={Matt} alt="zach" width={100}  />
            <div class="container">
              <h2>Matt Thomsen</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
          <img src={Jacob} alt="zach" width={100}  />
            <div class="container">
              <h2>Jacob Neal</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
