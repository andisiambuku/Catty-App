import React from "react";


function About(){
    return(
        <div>
            <h1 className="text-4xl font-montserrat text-center md:text-6xl xl:text-7xl text-gray-600 font-bold tracking-tight mb-6">Catty App <br /><span className="text-yellow-400">A haven for cat lovers</span></h1>
                <h2 className="mb-5 text-3xl text-center font-montserrat text-gray-600">This is an app straight out of kitty heaven. <br/> View images of cute kitties and like your favourite</h2>
            <div className="mx-80">
            

                <p className="ml-20 text-gray-700 font-montserrat">Sign up for our newsletter to be a part of the cat community</p>
            <div class=" block ml-20 mt-2 p-6 rounded-lg shadow-lg bg-white max-w-md">
                <form >
                    <div class="grid grid-cols-2 gap-4">
                    <div class="form-group mb-6">
                        <input type="text" class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" id="exampleInput123"
                        aria-describedby="emailHelp123" placeholder="First name">
                        </input>
                    </div>
                    <div class="form-group mb-6">
                        <input type="text" class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" id="exampleInput124"
                        aria-describedby="emailHelp124" placeholder="Last name">
                        </input>
                    </div>
                    </div>
                    <div class="form-group mb-6">
                    <input type="email" class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" id="exampleInput125"
                        placeholder="Email address">
                        </input>
                    </div>
                    <div class="form-group mb-6">
                    <input type="password" class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" id="exampleInput126"
                        placeholder="Password">
                        </input>
                    </div>
                    <div class="form-group form-check text-align: text-center mb-6">
                    <input type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-600 checked:border-yellow-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                        id="exampleCheck25" checked>
                        </input>
                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck25">Subscribe to our newsletter</label>
                    </div>
                    <button type="submit" class="
                    w-full
                    px-6
                    py-2.5
                    bg-yellow-400
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-yellow-700 hover:shadow-lg
                    focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-yellow-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">Sign up</button>
                </form>
                </div>
            </div>
        </div>
    );
}


export default About;