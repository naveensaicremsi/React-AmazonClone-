import React from 'react'
import './Home.css' ;
import Product from "./Product";
function Home() {
  return (
    <div className='home'>
    <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
    {/* Product id, title, rating , image  */}
    {/* One component and passing the properties */}
    <div className='home__row'>
    <Product
          id="123"
          title="The Lean Startup : How Constant Innovation Creates Radically Successful Business"
          price={20}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
     <Product
          id="124"
          title="Pupuskyer Smart Watch, 1.7inchs Fitness Tracker with Heart Rate Monitor,Blood Oxygen Tracking, Sleep Tracking for Android iPhone Samsung,Water Resistant Smart Watches for Men Women with Watch Talking"
          price={59.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/615YbdQPI5L._AC_UY218_.jpg"
        />
    </div>
    <div className='home__row'>
     <Product
          id="125"
          title="OnePlus 11 5G | 16GB RAM+256GB | Titan Black | US Factory Unlocked Android Smartphone | 5000 mAh battery "
          price={799}
          rating={4}
          image="https://m.media-amazon.com/images/I/81fRAoUL-fL._AC_SY200_.jpg"
        />
      <Product
          id="126"
          title="System Design Interview – An insider's guide"
          price={38.17}
          rating={4}
          image="https://m.media-amazon.com/images/I/312L17hmrOL._SX331_BO1,204,203,200_.jpg"
        />
       <Product
          id="127"
          title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel, 1 Count (Pack of 1)"
          price={11}
          rating={3}
          image="https://m.media-amazon.com/images/I/71cbywcYiUL._AC_SY355_.jpg"
        />
    </div>
    <div className="home__row">
    <Product
          id="128"
          title="Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal"
          price={30}
          rating={5}
          image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"
        />
    
    </div>
    <div className="home__row">
    <Product
          id="129"
          title="Sparx mens Ss0485g Sandal"
          price={25}
          rating={5}
          image="https://m.media-amazon.com/images/I/51Y-MRDoOLL.jpg"
        />
    <Product
          id="130"
          title="NVIDIA SHIELD Android TV Streaming Media Player; 4K HDR, live sports, Dolby Vision-Atmos, AI-enhanced upscaling, GeForce NOW cloud gaming, Google Assistant Built-In, Works with Alexa"
          price={143}
          rating={4}
          image="https://m.media-amazon.com/images/I/51irVXBTIrL._AC_SX355_.jpg"
        />
        <Product
          id="131"
          title="Lenovo - 2022 - IdeaPad Gaming 3 - Essential Gaming Laptop Computer - 15.6"
          price={779}
          rating={4}
          image="https://m.media-amazon.com/images/I/81zcUyiNcUL._AC_SX466_.jpg"
        />
    </div>
     <div className='home__row'>
    <Product
          id="132"
          title="Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case, Bluetooth Headphones for iPhone"
          price={249}
          rating={5}
          image="https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SX522_.jpg"
        />
     <Product
          id="133"
          title="Apple 2021 10.2-inch iPad (Wi-Fi, 64GB) - Space Gray (9th Generation)"
          price={258}
          rating={5}
          image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SX522_.jpg"
        />
    </div>
    <div className="home__row">
    <Product
          id="134"
          title="Panasonic LUMIX DC-ZS70K, 20.3 Megapixel, 4K Digital Camera, Touch Enabled 3-Inch 180 Degree Flip-front Display, 30X LEICA DC VARIO-ELMAR Lens, WiFi (Black)"
          price={347}
          rating={4}
          image="https://m.media-amazon.com/images/I/91LeogPYpHL._AC_SX466_.jpg"
        />
    </div>
    <div className='home__row'>
    <Product
          id="135"
          title="Bubble Hugs Gamer Coffee Mug - Gaming Progress - Video Game Funny Humor Sarcasm Saying 15oz Black"
          price={21.9}
          rating={5}
          image="https://m.media-amazon.com/images/I/51f7JvqczwL._AC_SX679_.jpg"
        />
     <Product
          id="136"
          title="MAXJULI Blue Light Blocking Glasses,Computer Reading/Gaming/TV/Phones Glasses for Women Men(Transparent)"
          price={6.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51yeBfRCRUL._AC_SX679_.jpg"
        />
    </div>
    <div className="home__row">
    <Product
          id="137"
          title="Raccoon Brand I Paused My Game to Be Here Gaming Snapback Hat for Gamers and Video Game Streamers Black/White"
          price={12.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61Qf0-xF9XS._AC_UL1200_.jpg"
        />
    
    </div>
    <div className='home__row'>
    <Product
          id="138"
          title="Colgate Cavity Protection Toothpaste with Fluoride, Great Regular Flavor, 6 Ounce (Pack of 6)"
          price={9.9}
          rating={5}
          image="https://m.media-amazon.com/images/I/51oUE-JqtlL._SX466_.jpg"
        />
     <Product
          id="139"
          title="Philips Norelco Multigroomer All-in-One Trimmer Series 3000, 13 Piece Mens Grooming Kit, for Beard, Face, Nose, and Ear Hair Trimmer and Hair Clipper, NO Blade Oil Needed, MG3750/60"
          price={19}
          rating={4}
          image="https://m.media-amazon.com/images/I/71PD-ZfXHAL._SY355_.jpg"
        />
    </div>
    <div className="home__row">
    <Product
          id="140"
          title="What I Learned About Investing from Darwin Hardcover "
          price={14}
          rating={5}
          image="https://m.media-amazon.com/images/I/41H4+OX0tDL._SX348_BO1,204,203,200_.jpg"
        />
    <Product
          id="141"
          title="Decoding Sponsorship: The Secret Strategy to Accelerate Your Career"
          price={15}
          rating={4}
          image="https://m.media-amazon.com/images/I/41hJhiB+l4L._SX322_BO1,204,203,200_.jpg"
        />
        <Product
          id="142"
          title="LONELY GOD"
          price={12}
          rating={3}
          image="https://m.media-amazon.com/images/I/31x4mp-P4wL._SX333_BO1,204,203,200_.jpg"
        />
    </div>
    <div className="home__row">
    <Product
          id="143"
          title="Calvin Klein Men's Slim Fit Suit Separates"
          price={128.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/519AYMgDxDL._AC_UL1001_.jpg"
        />
    <Product
          id="144"
          title="P&L Men's 2 Piece Classic Fit 2 Button Suit Jacket Office Dress Blazer & Pleated Pants Set"
          price={99.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/516RLSxYikL._AC_UL1500_.jpg"
        />
    
    </div>
    <div className="home__row">
    <Product
          id="145"
          title="Dokotoo Womens Basic Casual V Neck Plaid Print Cotton Cuffed Long Sleeve Work Tops Blouses Shirts S-5XL"
          price={26.59}
          rating={4}
          image="https://m.media-amazon.com/images/I/71L34zwlHrL._AC_UL1500_.jpg"
        />
    <Product
          id="146"
          title="Dokotoo Womens 2023 Fashion Casual Open Front Printed Cardigans Sweaters Thin Coats Jackets Outerwear"
          price={29.59}
          rating={4}
          image="https://m.media-amazon.com/images/I/51Ovt+C9zZL._AC_.jpg"
        />
    </div>
    </div>
  );

}
export default Home
