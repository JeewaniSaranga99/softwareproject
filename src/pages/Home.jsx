import React from "react";
import Navbar from "../components/Navbar";
import person from '../assets/person.png';
import tomato from '../assets/tomato.jpg';
import pineapple from '../assets/pineapple.jpg';

import pumpkin from '../assets/pumpkin.jpg';

function Home(){
    return(
        <div className="container-fluid">
            <div className="flex">
                <div className="w-1/4">
                    <Navbar />
                </div>

                <div className="w-3/4">
                    <div className="flex items-center">
                        <div>
                            <h1 className="text-2xl">Dashboard</h1>
                            <div className="text-gray-500 text-base hover:bg-gray-200 hover:font-bold">Welcome Back!</div>
                        </div>
                        <div className="ml-auto flex items-center">
                            <img src={person} alt="user" className="w-8 h-8 mr-2" />
                            <p className="text-sm">
                               <a href="mailto:user@gmail.com">user@gmail.com</a>
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="bg-green-500 inline-block px-4 py-1 rounded hover:bg-gray-600">
                            <h6 className="text-white ">Available items</h6>
                        </div>
                        

                        <div className="flex mt-4 justify-center gap-8">
                        <div className="flex flex-col items-center border-double border-4 border-gray-300 hover:scale-110">
                            <img src={tomato} alt="fruits" className="block mb-2 " width="200" height="200"  />
                            <p className="font-bold text-center text-green-600 hover:text-gray-500">TOMATO</p>
                        </div>
                        <div className="flex flex-col items-center border-double border-4 border-gray-300 hover:scale-110">
                            <img src={pumpkin} alt="vegetables" className="block mb-2" width="200" height="200" />
                            <p className="font-bold text-center mt-8 text-green-600 hover:text-gray-500">PUMPKIN</p>
                        </div>
                        <div className="flex flex-col items-center border-double border-4 border-gray-300 hover:scale-110">
                            <img src={pineapple} alt="grains" className="block mb-2 " width="200" height="200" />
                            <p className="font-bold text-center mt-8  text-green-600 hover:text-gray-500">PINEAPPLE</p>
                        </div>
                        
                    </div>


                    </div>


                    <div className="mt-4">


                    <hr />
                    </div>

                    <div className="mt-8">
                        <div className="bg-green-500 inline-block px-4 py-1 rounded hover:bg-gray-600">
                            <h6 className="text-white">Data Analysis</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;