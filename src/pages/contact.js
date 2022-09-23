import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Contact() {


    return (

    <>

    <Header />

    <Book />

 
      <section>
        <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">Contact Us</h1>
        <main>
        <div class="w-full h-auto lg:p-16 p-6 flex lg:flex-row flex-col">
            <div class="lg:w-1/2 w-full h-auto px-8">
                <h1 class="font-bold text-3xl text-center lg:text-left">Acton Taxis</h1>
                <p class="text-lg mt-6"><i class="fa-solid fa-location-dot green mr-3"></i>Ealing Green, Ealing, London W5 5QT, United Kingdom</p>
                <p class="text-lg mt-4"><i class="fa-solid fa-envelope green mr-3"></i>info@ealingtaxis.co.uk</p>
                <p class="text-lg mt-4"><i class="fa-solid fa-phone green mr-3"></i>02038134149</p>
                <p class="text-lg mt-4"><i class="fa-regular fa-clock green mr-3"></i>24 /7, Pre booking taken: 24/7</p>
                <img class="w-full h-auto mt-6" src="images/Screen_Shot_2017_07_08_at_11.59.04_AM.0.jfif" alt="map"/>
            </div>
            <div class="lg:w-1/2 w-full h-auto px-8 mt-8 lg:mt-0">
                <div class="contactForm w-full h-auto">
                    <form method="post" action="contactform.php">
                        <div class="form-group mb-6 form33">
                            <input type="text" class="form-control-2" placeholder="Name" name="name"/>
                        </div>
                        <div class="form-group form33 second mb-6">
                            <input type="email" class="form-control-2" placeholder="Email" name="email"/>
                        </div>
                        <div class="form-group form33 last mb-6">
                            <input type="number" class="form-control-2" placeholder="Telephone" name="phoneNumber"/>
                          </div>
                        <div class="form-group mt-4">
                            <textarea placeholder="Message" name="message"></textarea>
                        </div>
                        <button class="send mt-4" type="submit" name="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </main>


       
    </section>

    <Footer />

    </>

    );
}

export default Contact;