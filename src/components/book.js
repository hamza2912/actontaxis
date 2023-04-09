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
                                <button id="get-quotes" type="button" class="btn custom-btn-1 custom-btns col-sm-12 col-12 w-1/2 mt-2 font-semibold quote rounded-full" title="Click to get quotes">Book Now</button>
                            </div>
                        </div>
                    </form>
                    {/* Via Modal */}
                    <div class="modal fade hidden" id="exampleModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2 class="modal-title">Add Vias</h2>
                                    
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body ui-front text-center">
                                    <table class="table custom-tables">
                                        <tbody id="via-list"></tbody>
                                    </table>
                                    <button id="add-via" type="button" class="btn custom-btn-1 font-bold" >Add another via</button>
                                </div>
                                <div class="modal-footer py-1">
                                    <button id="updateVia" type="button" class="btn custom-btn-1 font-bold" data-dismiss="modal" aria-label="close">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Via Modal End */}

                     {/* wait and return modal  */}
                    <div class="modal fade hidden" id="timeModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-body text-center">
                                    <div class="row justify-content-center">
                                        <div class="col-md-4 col-6 mb-md-0 mb-3">
                                            <label class="wait-label" for="minwaittime">Waiting Time: </label>
                                        </div>

                                        <div class="col-md-5 col-6 mb-md-0 mb-3">
                                            <div class="input-group mb-0">
                                                <input id="minwaittime" class="form-control custom-inputs" type="number"  min="1" max="60" value="1" />
                                                
                                                <div class="input-group-append">
                                                    <span class="input-group-text">
                                                        <label> minutes</label>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-5">
                                            <button class="btn custom-btn-1 w-100 h-100 py-2 wait-and-return-btn" onclick="savewaitnreturn()" >Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* wait and return modal end  */}

                     {/* Luggage modal */}
                    <div class="modal fade hidden" id="MoreItemModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm">
                            <div class="modal-content">
                                {/* <div class="modal-header d-block text-center">
                                    <h2 class="modal-title">Select More Items</h2>
                                </div> */}

                                <div class="modal-body">
                                    <div class="accordion" id="accordionExample" role="tablist" aria-multiselectable="true">
                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingOne">
                                                <h3 class="luggage-headings">
                                                    <button disabled class="btn collapsed luggage-btns" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        Luggage
                                                    </button>
                                                </h3>
                                            </div>
                                            <div id="collapseOne" class="collapse" data-parent="#accordionExample" aria-labelledby="headingOne">
                                                <div class="card-body">
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Hand Luggage</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Suitcase</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Backpack</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingTwo">
                                                <h3 class="luggage-headings">
                                                    <button class="btn collapsed luggage-btns" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Boxes
                                                    </button>
                                                </h3>
                                            </div>
                                            <div id="collapseTwo" class="collapse" data-parent="#accordionExample" aria-labelledby="headingTwo">
                                                <div class="card-body">
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Small Small box (14 x 12 x 15 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Medium box (16 x 16 x 16 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Large box (20 x 20 x 20 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">XL box (24 x 24 x 33 inches)</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingThree">
                                                <h3 class="luggage-headings">
                                                    <button class="btn collapsed luggage-btns" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Child Items
                                                    </button>
                                                </h3>
                                            </div>
                                            <div id="collapseThree" class="collapse" data-parent="#accordionExample" aria-labelledby="headingThree">
                                                <div class="card-body">
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Child's pram</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Child's foldable pushchair</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingFour">
                                                <h3 class="luggage-headings">
                                                    <button class="btn collapsed luggage-btns" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                                        Outdoor items
                                                    </button>
                                                </h3>
                                            </div>

                                            <div id="collapseFour" class="collapse" data-parent="#accordionExample" aria-labelledby="headingFour">
                                                <div class="card-body">
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Tent</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Large Rucksack</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Ironing board</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Pair of skis</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Snowboard</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Bike</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Bike box</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Golf bag</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingFive">
                                                <h3 class="luggage-headings">
                                                    <button class="btn collapsed luggage-btns" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        Pets
                                                    </button>
                                                </h3>
                                            </div>

                                            <div id="collapseFive" class="collapse" data-parent="#accordionExample" aria-labelledby="headingFive">
                                                <div class="card-body">
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Small pet (in cage)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Large dog</button>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingSix">
                                                <h3 class="luggage-headings">
                                                    <button class="btn collapsed luggage-btns" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                        Household items
                                                    </button>
                                                </h3>
                                            </div>

                                            <div id="collapseSix" class="collapse" data-parent="#accordionExample" aria-labelledby="headingSix">
                                                <div class="card-body">
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">TV (less than 30 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">TV (30 to 60 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Ironing board</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Music speaker (Large)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Mirror (upto 60x36 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Rug (upto 24x84 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Single Mattress</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Bedside table (45x55cm)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Microwave oven</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Vacuum cleaner</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">TV stand</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Large musical instrument case (upto 60x24 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Closet</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal-footer py-1">
                                    <button type="button" class="btn custom-btn-1 close-luggage" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade hidden" id="itemcount" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-sm">
                            <div class="modal-content">
                                <div class="modal-header d-block text-center">
                                    <h2 class="modal-title">Enter Quantity</h2>
                                </div>

                                <div class="modal-body">
                                    <label for="numbermoreitm hidden">Luggage</label>
                                    <input type="hidden" id="nameid" value="" />
                                    <input type="number" max="99" min="1" placeholder="1" class="form-control custom-inputs" id="numbermoreitm" />

                                </div>
                                <div class="modal-footer py-1">
                                    <button type="button" class="btn custom-btn-1 close-luggage addluggage" onclick="additem($('#nameid').val(),$('#numbermoreitm').val())" data-dismiss="modal">Save</button>
                                    <button type="button" class="btn custom-btn-1 close-luggage ml-auto" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* luggage modal end  */}

                    {/* loader  */}
                    <div class="loading-div hidden">
                        <div class="inner-loading-div">
                            <h2 class="loading-heading">Please Wait...</h2>

                            <div class="loading-imgs-div mx-auto">
                                <img class="img-fluid steer" src="contents/images/steering.webp" alt="steering" width="200" />
                            </div>
                        </div>
                    </div>
                    {/* Loader end --> */}
                    
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
                            <button id="get-quotes" type="button" class="btn custom-btn-1 custom-btns col-sm-12 col-12 w-full mt-2 font-semibold quote rounded-full" title="Click to get quotes">Book Now</button>
                        </div>
                    </form>

                    {/* Via Modal */}
                    <div class="modal fade hidden" id="exampleModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2 class="modal-title">Add Vias</h2>
                                    
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body ui-front text-center">
                                    <table class="table custom-tables">
                                        <tbody id="via-list"></tbody>
                                    </table>
                                    <button id="add-via" type="button" class="btn custom-btn-1 font-bold" >Add another via</button>
                                </div>
                                <div class="modal-footer py-1">
                                    <button id="updateVia" type="button" class="btn custom-btn-1 font-bold" data-dismiss="modal" aria-label="close">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Via Modal End */}

                     {/* wait and return modal  */}
                    <div class="modal fade hidden" id="timeModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-body text-center">
                                    <div class="row justify-content-center">
                                        <div class="col-md-4 col-6 mb-md-0 mb-3">
                                            <label class="wait-label" for="minwaittime">Waiting Time: </label>
                                        </div>

                                        <div class="col-md-5 col-6 mb-md-0 mb-3">
                                            <div class="input-group mb-0">
                                                <input id="minwaittime" class="form-control custom-inputs" type="number"  min="1" max="60" value="1" />
                                                
                                                <div class="input-group-append">
                                                    <span class="input-group-text">
                                                        <label> minutes</label>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-5">
                                            <button class="btn custom-btn-1 w-100 h-100 py-2 wait-and-return-btn" onclick="savewaitnreturn()" >Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* wait and return modal end  */}

                     {/* Luggage modal */}
                    <div class="modal fade hidden" id="MoreItemModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm">
                            <div class="modal-content">
                                {/* <div class="modal-header d-block text-center">
                                    <h2 class="modal-title">Select More Items</h2>
                                </div> */}

                                <div class="modal-body">
                                    <div class="accordion" id="accordionExample" role="tablist" aria-multiselectable="true">
                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingOne">
                                                <h3 class="luggage-headings">
                                                    <button disabled class="btn collapsed luggage-btns" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        Luggage
                                                    </button>
                                                </h3>
                                            </div>
                                            <div id="collapseOne" class="collapse" data-parent="#accordionExample" aria-labelledby="headingOne">
                                                <div class="card-body">
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Hand Luggage</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Suitcase</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Backpack</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingTwo">
                                                <h3 class="luggage-headings">
                                                    <button class="btn collapsed luggage-btns" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Boxes
                                                    </button>
                                                </h3>
                                            </div>
                                            <div id="collapseTwo" class="collapse" data-parent="#accordionExample" aria-labelledby="headingTwo">
                                                <div class="card-body">
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Small Small box (14 x 12 x 15 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Medium box (16 x 16 x 16 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Large box (20 x 20 x 20 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">XL box (24 x 24 x 33 inches)</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingThree">
                                                <h3 class="luggage-headings">
                                                    <button class="btn collapsed luggage-btns" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Child Items
                                                    </button>
                                                </h3>
                                            </div>
                                            <div id="collapseThree" class="collapse" data-parent="#accordionExample" aria-labelledby="headingThree">
                                                <div class="card-body">
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Child's pram</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Child's foldable pushchair</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingFour">
                                                <h3 class="luggage-headings">
                                                    <button class="btn collapsed luggage-btns" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                                        Outdoor items
                                                    </button>
                                                </h3>
                                            </div>

                                            <div id="collapseFour" class="collapse" data-parent="#accordionExample" aria-labelledby="headingFour">
                                                <div class="card-body">
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Tent</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Large Rucksack</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Ironing board</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Pair of skis</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Snowboard</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Bike</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Bike box</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Golf bag</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingFive">
                                                <h3 class="luggage-headings">
                                                    <button class="btn collapsed luggage-btns" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        Pets
                                                    </button>
                                                </h3>
                                            </div>

                                            <div id="collapseFive" class="collapse" data-parent="#accordionExample" aria-labelledby="headingFive">
                                                <div class="card-body">
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Small pet (in cage)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Large dog</button>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingSix">
                                                <h3 class="luggage-headings">
                                                    <button class="btn collapsed luggage-btns" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                        Household items
                                                    </button>
                                                </h3>
                                            </div>

                                            <div id="collapseSix" class="collapse" data-parent="#accordionExample" aria-labelledby="headingSix">
                                                <div class="card-body">
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">TV (less than 30 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">TV (30 to 60 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Ironing board</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Music speaker (Large)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Mirror (upto 60x36 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Rug (upto 24x84 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Single Mattress</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Bedside table (45x55cm)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Microwave oven</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Vacuum cleaner</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">TV stand</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Large musical instrument case (upto 60x24 inches)</button>
                                                    <button type="button" class="btn luggage-items-btn" onclick="addvalue(this)">Closet</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal-footer py-1">
                                    <button type="button" class="btn custom-btn-1 close-luggage" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade hidden" id="itemcount" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-sm">
                            <div class="modal-content">
                                <div class="modal-header d-block text-center">
                                    <h2 class="modal-title">Enter Quantity</h2>
                                </div>

                                <div class="modal-body">
                                    <label for="numbermoreitm hidden">Luggage</label>
                                    <input type="hidden" id="nameid" value="" />
                                    <input type="number" max="99" min="1" placeholder="1" class="form-control custom-inputs" id="numbermoreitm" />

                                </div>
                                <div class="modal-footer py-1">
                                    <button type="button" class="btn custom-btn-1 close-luggage addluggage" onclick="additem($('#nameid').val(),$('#numbermoreitm').val())" data-dismiss="modal">Save</button>
                                    <button type="button" class="btn custom-btn-1 close-luggage ml-auto" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* luggage modal end  */}

                    {/* loader  */}
                    <div class="loading-div hidden">
                        <div class="inner-loading-div">
                            <h2 class="loading-heading">Please Wait...</h2>

                            <div class="loading-imgs-div mx-auto">
                                <img class="img-fluid steer" src="contents/images/steering.webp" alt="steering" width="200" />
                            </div>
                        </div>
                    </div>
                    {/* Loader end --> */}

                    

                </div>
        </div>
        );    
    }
}


export default Book;

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