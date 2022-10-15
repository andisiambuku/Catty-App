import React from "react";

function Footer(){
return (
    <div>
        <div className="bg-white text-center lg:text-left">
        <div className="text-yellow-400 font-montserrat text-center p-4" >
                    Powered by  
                <a className="font-montserrat text-yellow-400" href ="https://thecatapi.com/"> The Cat API</a>
            </div>
            <div className="text-yellow-400 font-montserrat text-center p-4" >
                     Created by  <a className="text-yellow-400" text-center href="https://www.linkedin.com/in/roseland-ambuku/"> Roseland Andisi Ambuku</a>
                     
            </div>
            <div className="font-montserrat text-yellow-400 text-center p-4" >
                     © 2022 All Rights Reserved  
            </div>
        </div>
    </div>
);
}

export default Footer;