import React from "react";


function Book({type}) {

    if(type == 'home'){
        return (
            <div class="w-full h-auto flex justify-center">
                <div class="lg:w-1/2 w-4/5 h-auto bg-blue text-center px-8 py-6 rounded-lg">
                    <h1 class="lg:text-3xl text-xl text-white font-semibold">Book Your Journey</h1>
                    <form class="container">
                        <div class="form-row justify-content-center mt-4">
                            <div class="input-group mb-2 col-lg-4 col-md-6 col-sm-12 col-12 order-1 order-lg-1 order-md-1">
                                <input id="pickup" class="form-control px-3 py-1 w-full focus:outline-none custom-inputs ui-autocomplete-input" type="text" placeholder="Pickup postcode or place name" title="Pickup postcode or place name" />
                            </div>
                            <div class="input-group mb-2 col-lg-4 col-md-6 col-sm-12 col-12 order-4 order-lg-3 order-md-3">
                                <input id="dropof" class="form-control px-3 py-1 w-full focus:outline-none custom-inputs ui-autocomplete-input" type="text" placeholder="Destination postcode or place name" title="Destination postcode or place name" autocomplete="off" />
                            </div>

                            <div class="input-group mb-2 col-lg-4 col-md-6 col-sm-12 col-12 order-2  order-lg-4 order-md-4">
                                <input id="book_pick_from_doorno" class="form-control px-3 py-1 w-full focus:outline-none custom-inputs ui-autocomplete-input" type="text" placeholder="Door No. for Pick up" title="Pick from door no." autocomplete="off" />
                            </div>

                            <div class="input-group mb-2 col-lg-4 col-md-6 col-sm-12 col-12 order-5 order-lg-5 order-md-5">
                                <input id="book_pick_to_doorno" class="form-control px-3 py-1 w-full focus:outline-none custom-inputs ui-autocomplete-input" type="text" placeholder="Door No. for Drop off" title="Pick to door no." autocomplete="off" />
                            </div>

                            <div class="input-group mb-2 col-lg-4 col-md-6 col-sm-12 col-12 order-6  order-lg-6 order-md-6">
                                <input id="book_pick_date" class="form-control px-3 py-1 w-full focus:outline-none custom-inputs" type="date" title="Journey Date" />
                            </div>

                            <div class="input-group mb-2 col-lg-3 col-md-6 col-sm-12 col-12 order-7  order-lg-7 order-md-7">
                                <input id="book_pick_time" class="form-control px-3 py-1 w-full focus:outline-none custom-inputs" type="time" title="Journey Time" />
                            </div>

                            <div class="input-group mb-2 col-lg-3 col-md-6 col-sm-12 col-12 order-8 order-lg-8 order-md-8">
                                <select id="Passenger" class="form-control px-3 py-1 w-full focus:outline-none custom-inputs" title="Number of Passengers">
                                    <option selected="" value="1">1 Passenger</option>
                                    {[...Array(20)].map((x, i) =>
                                        <option value={i+2}>{i+2} Passengers</option>
                                    )}
                                    {/* <script>
                                        for (var i = 2; i <= 200; i++) {
                                            document.write("<option value=" + i + ">" + i + " Passengers</option>");
                                        }
                                    </script> */}
                                </select>
                            </div>

                            <div class="input-group mb-2 col-lg-3 col-md-6 col-sm-12 col-12 order-9 order-lg-9 order-md-10">
                                <input id="luggage" class="form-control px-3 py-1 w-full focus:outline-none custom-inputs" type="text" placeholder="Add Luggage Items" title="Luggage Items" data-toggle="modal" data-target="#MoreItemModal" />
                            </div>

                            <div class="input-group mb-2 col-lg-3 col-md-6 col-sm-12 col-12 order-10 order-lg-10 order-md-9">
                                <select id="journeytype" onchange="iswaitnreturn(this)" class="form-control px-3 py-1 w-full focus:outline-none custom-inputs" title="Journey Type">
                                    <option selected value="ST">Single Trip</option>                   
                                    <option value="WR">Wait and Return</option>       
                                </select>
                            </div>

                            <div class="col-12 mx-auto order-11">
                                <div id="holdabledata" class="row justify-content-center">
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-5 col-sm-12 col-12 mx-auto order-12">
                                <button id="get-quotes" type="button" class="btn custom-btn-1 custom-btns col-sm-12 col-12 w-1/2 mt-2 font-semibold quote rounded-full" title="Click to get quotes">Get Quotes</button>
                            </div>
                        </div>
                    </form>
                    {/* <form action="">
                        <div class="w-full h-auto mt-6">
                            <ul>
                                <li class="w-full h-auto">
                                    <label for="source">Name:</label>
                                    <input placeholder="Start Address" type="text" id="source" name="from"
                                        class="form-control ui-autocomplete-input w-full h-auto rounded p-2 focus:outline-none"
                                        required autocomplete="off" />
                                </li>
                                <li>
                                    <label for="dest">Name:</label>
                                    <input placeholder="End Address" type="text" id="dest" name="to"
                                        class="form-control ui-autocomplete-input w-full h-auto rounded p-2 mt-4 focus:outline-none"
                                        required="" autocomplete="off" />
                                </li>
                                <li>
                                    <input type="hidden" name="office_name" value="TNW" />
                                    <input type="hidden" name="office_details" value=""/>
                                    <button name="button" type="submit" id="submit"
                                        class="btn btn-primary w-full h-auto rounded bg-blue-400 text-white p-2 mt-4 hover:bg-blue-500 focus:outline-none text-lg font-semibold">GET
                                        QUOTE</button>
                                </li>
                            </ul>
                        </div>
                    </form> */}
                </div>
            </div>
      
          );
    }

    else{
        return (

        <div class="w-full h-auto bg-blue px-12 py-8">
            <div class="w-full h-auto text-center text-white text-2xl font-bold">
                <h2>Book Your Journey</h2>
            </div>
                <div class="w-full h-auto">
                    {/* <form action="">
                        <div class="w-full h-auto lg:pr-8 mt-6">
                            <ul class="flex lg:flex-row flex-col justify-between items-center">
                                <li class="w-full h-auto">
                                    <label for="source">Name:</label>
                                    <input placeholder="Start Address" type="text" id="source" name="from"
                                        class="form-control ui-autocomplete-input w-full h-auto rounded p-2 mr-4 focus:outline-none mt-2 lg:mt-0"
                                        required autocomplete="off" />
                                </li>
                                <li class="w-full h-auto">
                                    <label for="dest">Name:</label>
                                    <input placeholder="End Address" type="text" id="dest" name="to"
                                        class="form-control ui-autocomplete-input w-full h-auto rounded p-2 lg:mx-4 focus:outline-none mt-2 lg:mt-0"
                                        required="" autocomplete="off" />
                                </li>
                                <li class="w-full h-auto">
                                    <input type="hidden" name="office_name" value="TNW" />
                                    <input type="hidden" name="office_details" value="" />
                                    <button name="button" type="submit" id="submit"
                                        class="w-full h-auto rounded lg:ml-8 bg-blue-400 text-white p-2 hover:bg-blue-700 focus:outline-none mt-2 lg:mt-0 text-lg font-semibold">GET
                                        QUOTE</button>
                                </li>
                            </ul>
                        </div>
                    </form> */}
                    <form class="container">
                        <div class="form-row justify-content-center mt-4 grid lg:grid-cols-3 grid-cols-2 gap-2">
                            <div class="input-group mb-2 col-lg-4 col-md-6 col-sm-12 col-12 order-1 order-lg-1 order-md-1">
                                <input id="pickup" class="form-control px-3 py-2 w-full focus:outline-none custom-inputs ui-autocomplete-input" type="text" placeholder="Pickup postcode or place name" title="Pickup postcode or place name" />
                            </div>
                            <div class="input-group mb-2 col-lg-4 col-md-6 col-sm-12 col-12 order-4 order-lg-3 order-md-3">
                                <input id="dropof" class="form-control px-3 py-2 w-full focus:outline-none custom-inputs ui-autocomplete-input" type="text" placeholder="Destination postcode or place name" title="Destination postcode or place name" autocomplete="off" />
                            </div>

                            <div class="input-group mb-2 col-lg-4 col-md-6 col-sm-12 col-12 order-2  order-lg-4 order-md-4">
                                <input id="book_pick_from_doorno" class="form-control px-3 py-2 w-full focus:outline-none custom-inputs ui-autocomplete-input" type="text" placeholder="Door No. for Pick up" title="Pick from door no." autocomplete="off" />
                            </div>

                            <div class="input-group mb-2 col-lg-4 col-md-6 col-sm-12 col-12 order-5 order-lg-5 order-md-5">
                                <input id="book_pick_to_doorno" class="form-control px-3 py-2 w-full focus:outline-none custom-inputs ui-autocomplete-input" type="text" placeholder="Door No. for Drop off" title="Pick to door no." autocomplete="off" />
                            </div>

                            <div class="input-group mb-2 col-lg-4 col-md-6 col-sm-12 col-12 order-6  order-lg-6 order-md-6">
                                <input id="book_pick_date" class="form-control px-3 py-2 w-full focus:outline-none custom-inputs" type="date" title="Journey Date" />
                            </div>

                            <div class="input-group mb-2 col-lg-3 col-md-6 col-sm-12 col-12 order-7  order-lg-7 order-md-7">
                                <input id="book_pick_time" class="form-control px-3 py-2 w-full focus:outline-none custom-inputs" type="time" title="Journey Time" />
                            </div>

                            <div class="input-group mb-2 col-lg-3 col-md-6 col-sm-12 col-12 order-8 order-lg-8 order-md-8">
                                <select id="Passenger" class="form-control px-3 py-2 w-full focus:outline-none custom-inputs" title="Number of Passengers">
                                    <option selected="" value="1">1 Passenger</option>
                                    {[...Array(20)].map((x, i) =>
                                        <option value={i+2}>{i+2} Passengers</option>
                                    )}
                                    {/* <script>
                                        for (var i = 2; i <= 200; i++) {
                                            document.write("<option value=" + i + ">" + i + " Passengers</option>");
                                        }
                                    </script> */}
                                </select>
                            </div>

                            <div class="input-group mb-2 col-lg-3 col-md-6 col-sm-12 col-12 order-9 order-lg-9 order-md-10">
                                <input id="luggage" class="form-control px-3 py-2 w-full focus:outline-none custom-inputs" type="text" placeholder="Add Luggage Items" title="Luggage Items" data-toggle="modal" data-target="#MoreItemModal" />
                            </div>

                            <div class="input-group mb-2 col-lg-3 col-md-6 col-sm-12 col-12 order-10 order-lg-10 order-md-9">
                                <select id="journeytype" onchange="iswaitnreturn(this)" class="form-control px-3 py-2 w-full focus:outline-none custom-inputs" title="Journey Type">
                                    <option selected value="ST">Single Trip</option>                   
                                    <option value="WR">Wait and Return</option>       
                                </select>
                            </div>

                            <div class="col-12 mx-auto order-11">
                                <div id="holdabledata" class="row justify-content-center">
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/4 w-4/5 mx-auto">
                            <button id="get-quotes" type="button" class="btn custom-btn-1 custom-btns col-sm-12 col-12 w-full mt-2 font-semibold quote rounded-full" title="Click to get quotes">Get Quotes</button>
                        </div>
                    </form>
                </div>
        </div>
        );    
    }
}


export default Book;