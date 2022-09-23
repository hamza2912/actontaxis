import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Bridge() {


    return (

        <>
    
        <Header />

        <Book />

     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">ACTON TO LONDON BRIDGE</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <p>If you don’t own a vehicle, travelling to one place from another can be difficult. Especially when it comes to station transfer, you have to rely on a taxi company to provide you cheap fare taxis so you can travel without having to worry about hefty fares. And if you need one of such taxi services, consider us at your service. We provide taxis London Bridge to South Acton and taxis London Bridge to West Acton. You can use our services to ensure you one time and safe and sound transfer
                    </p>
                    <p>If you need cheap fare taxi services, consider us at your service! You can travel from London Bridge to West Ealing with us. Here at our company, you will get a reliable taxi service to and from South Ealing and London Bridge stations.
                    </p>
                  
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/pexels-sevenstorm-juhaszimrus-575362.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Bridge;