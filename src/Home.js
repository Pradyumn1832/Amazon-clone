import React from "react";
import Product from "./Product.js";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1234}
            title=" My Own Words Paperback – 7 August 2018 
                    By Ruth Bader Ginsburg    ,(Author) Mary Hartnett , (Author) Wendy W. Williams"
            price={37.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41ZhmNOH8ZL._SX326_BO1,204,203,200_.jpg"
          />

          <Product
            id={1235}
            title="Hurom HP Series Cold Press Slow Juicer with Juice&Smoothie Strainers, 43 Rotation Per Minute, 150 Watts Energy Efficient AC Motor, Patented SST, 2 Strainers (Sandy Gold)"
            price={247.22}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71S2wi7OC6L._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={1236}
            title="Dell Alienware m15(R3) 15.6' (39.62cms) UHD Gaming Laptop (10th Gen Core i9-10980HK/32GB/1TB SSD/Windows 10 Home & MS Office/8GB NVIDIA RTX 2080 Graphics), Lunar Light"
            price={4394.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61fvVcYBQpL._SL1000_.jpg"
          />
          <Product
            id={1237}
            title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
            price={1784}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
          />
          <Product
            id={1238}
            title="OnePlus Watch Midnight Black: 46mm dial, Warp Charge, 110+ Workout Modes, Smartphone Free Music,SPO2 Health Monitoring & 5ATM + IP68 Water Resistance (Currently Android only)"
            price={206.01}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61FxsUbnavL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={1239}
            title="Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV 55Q8CN (Black) (2018 model)"
            price={3775.67}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81V%2BhqDbomL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
