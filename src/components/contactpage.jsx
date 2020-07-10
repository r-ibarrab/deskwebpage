import React from 'react';

 const contactpage = ()=>{

    setTimeout(()=>{
    document.getElementById("products-button").classList.remove('deactive');
    document.getElementById("contact-button").classList.add('deactive');
    },5);

    return(
        <div className="contact-page">

            <p>mail: contact@buydesks.com<br/>
                facebook: facebook.com/buydesks<br/>
                whatsapp: +52 686 111 1111</p>
            

        </div>
    )
}

export default contactpage;