import React from 'react';
import NavBar from './navbar'
 const layout = (props)=>{

    return(
            <div className="body-content">
                <NavBar/>
                    {
                    props.children
                    }
            </div>

       
    );

}
export default layout;