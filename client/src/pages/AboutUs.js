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
              <p class="title">Backend Developer</p>
              <p>I worked on the payment and some backend issues.</p>
              <p>jamionnf@gmail.com</p>
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
              <p class="title">Developer</p>
              <p>I worked on functionality and some back-end!</p>
              <p>joshuafloresjjf@gmail.com</p>
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
              <p>I worked on the Front-End design and functionality of Redwood!</p>
              <p>zschroeder34@gmail.com</p>
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
              <p>Hello! I worked primarily on the Front-End on this project.<br></br><br></br>If you like my work, please feel free to contact me through my email just below to connect!</p>
              <p>lvarando@gmail.com</p>
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
              <p class="title">Backend Developer</p>
              <p>I worked on the backend using MongoDB and GraphQL.</p>
              <p>matthewthomsen99@gmail.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
          <img src={Jacob} alt="jake" width={100}  />
            <div class="container">
              <h2>Jacob Neal</h2>
              <p class="title">Designer</p>
              <p>My name is Jacob. I worked primarily in databases and backend work. <br></br><br></br> This was an exciting and fulfilling project! Please feel free to contact me below</p>
              <p>ziggaton@gmail.com</p>
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
