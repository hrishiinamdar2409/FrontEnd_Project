const HeroSection=()=>{
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    </p>
                    <div className="hero-btn">
                        <button>Shop Now</button>
                        <button className="secondary-btn">Catagory</button>
                    </div>

                    <div className="Shopping">
                        <p>Also available On</p>

                        <div className="brand-icon">
                            <img src="/Images/amazon.png" alt="amazon-logo"></img>
                             <img src="/Images/flipkart.png" alt="flipkart-logo"></img>
                        </div>




                    </div>


            </div>
            <div className="hero-image"></div>
            <img src="/Images/shoe_image.png" alt="shoe_image"></img>

        </main>
    )
};

export default HeroSection;