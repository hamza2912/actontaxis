import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function London() {


    return (

        <>
    
        <Header />
     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">ACTON TO LONDON CITY</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <p>If you have an airport transfer coming up, it’s normal to feel anxious since it’s something unfamiliar to you.
                    </p>
                    <p>However, there’s no need for you to worry since we are a taxi company available for you 24/7 and provide exceptional airport transfers Acton to London City.
                    </p>
                    <p>Our cars are the finest and most luxurious. We have executive cars, MPVs, saloon cars and many more options available through which you can travel without worrying about the timings. Thus the only thing that is going to be on your mind is having fun while travelling in an excellent car while it chauffeurs you to your destination.
                    </p>
                    <p>Order a taxi Acton to London City now!
                    </p>
                  
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/pexels-jonas-togo-2876838.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            <Book />
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default London;