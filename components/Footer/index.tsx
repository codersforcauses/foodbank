import React from 'react';

const Footer = () => {
    return(
        <header className= "px-5 flex bg-primary h-16 content-center justify-between items-center">
                <div className="bg-orange text-white font-serif text-2xl px-3 rounded hover:bg-white hover:text-orange transition ease-linear duration-200">
                    Other Characters
                </div>
                <div className = "right-0 bg-blue text-black font-serif text-2xl px-3 rounded hover:bg-white hover:text-blue transition ease-linear duration-200">
                    TRANSFORM
                </div>
        </header>
    )    
}
export default Footer