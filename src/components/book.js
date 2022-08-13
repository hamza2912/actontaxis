import React from "react";


function Book() {


    return (

      <div class="w-full h-auto bg-blue px-12 py-8">
        <div class="w-full h-auto text-center text-white text-2xl font-bold">
            <h2>Book Your Journey</h2>
        </div>
            <div class="w-full h-auto">
                <form action="">
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
                </form>
            </div>
      </div>

    );
}

export default Book;