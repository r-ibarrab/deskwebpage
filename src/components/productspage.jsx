import React from 'react';
import Product from './product'
import './styles/productspage.css'
const productspage = ()=>{
    setTimeout(()=>{
    document.getElementById("contact-button").classList.remove('deactive');
    document.getElementById("products-button").classList.add('deactive');
    },5)

    return(
        <div className="products-page">
            <Product className="products-page-1" title="Cachanilla" img="resources/cacha.jpg"/>
            <Product className="products-page-2" title="Tijua" img="resources/tijua.jpg"/>
            <Product className="products-page-3" title="Portense" img="resources/port.jpg"/>

        </div>
    )
}
export default productspage;