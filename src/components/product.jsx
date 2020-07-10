import React from 'react';
import './styles/product.css'
import { Link } from 'react-router-dom';

const products = (props)=>{

    const gotoproduct=()=>{
            document.getElementById("contact-button").classList.remove('deactive');
            document.getElementById("products-button").classList.remove('deactive');
            
    }    

    return(
        <div className="product-container products-page-1">

            <div className="product-container-img imghover">
            <Link to={"products/"+props.title} onClick={()=>{gotoproduct()}}>
                <img src={props.img} alt="product"/>
            </Link>

            </div>

            <h3 className="product-container-title">{props.title}</h3>

        </div>
    )


}




export default products;