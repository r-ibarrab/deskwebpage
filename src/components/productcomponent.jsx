import React from 'react'
import './styles/pdcomponent.css'
const productcomponent = (props) => {

    let img;
    let title = props.match.params.id;
    
    
    if(title === "Tijua"){
        img = "/resources/tijua.jpg" ; 
    }else if(title === "Cachanilla"){
        img = "/resources/cacha.jpg";
    }else{
        img = "/resources/port.jpg";
    }

    const orderbutton=()=>{
        alert(":)");
    }

    return(
        <div className="prod-item">
            <div className="product-container-img pitem">
                <img className="producst-page" src={img} alt="hola"/>
              
            </div>
            <div className="product-description">
                <h1 className="prod-title">{title}</h1>
                <p>This desk is well known for its durability<br/> 
                    and dimensions. It is 150cm long and<br/> 
                    40cm width.</p>
                <div className="units">
                    <h4>units</h4>
                    <div className="units-square">
                        <input className="input-input" type="number" placeholer="1"/>
                    </div>
                </div>
                <h3 onClick={()=>{orderbutton()}} className="order-button">order</h3>

             

            </div>
        </div>
    );
}

export default productcomponent;