import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import { Link } from "react-router-dom";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="parent">
        <h2> Toys </h2>
        <Slider {...settings}>
            
          <div>
          <Link to="/product/undefined"><img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/></Link>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
        </Slider>
        <pre></pre>
        <div>
        <h2> Gifts </h2>
        <Slider {...settings}>
          <div>
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
        </Slider>
      </div>
      <pre></pre>
        <div>
        <h2> Tech </h2>
        <Slider {...settings}>
          <div>
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
        </Slider>
      </div>
      <pre></pre>
        <div>
        <h2> Garden </h2>
        <Slider {...settings}>
          <div>
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
        </Slider>
      </div>
      <pre></pre>
        <div>
        <h2> Auto </h2>
        <Slider {...settings}>
          <div>
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
          <div>
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" alt='yas' width={500}/>
          </div>
        </Slider>
      </div>
      </div>
      
      
    );
  }
}