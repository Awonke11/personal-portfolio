import React from "react";

const Socials = () => {
    return (
        <div className='socials'>
            <a 
                href="https://github.com/Awonke11" 
                rel="noopener noreferrer" 
                target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>
            <a 
                href="https://www.instagram.com/aj_mnotoza/" 
                rel="noopener noreferrer" 
                target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a 
                href="https://wa.me/0636672687" rel="noopener noreferrer" 
                target="_blank">
                <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a 
                href="mailto:mnotozawonke@gmail.com">
                <i class="fa-solid fa-envelope"></i>
            </a>
        </div>
    )
}

export default Socials;