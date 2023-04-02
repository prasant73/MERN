import React from "react";
import ankit from "../images/ankit.png"

const ContactCard = (props) => {
    const { id, name, email } = props.contact; // destructuring
    console.log(id + " " +  name);
    return(
        <div className='item'>
            <img className="ui avatar image" src={ankit} alt="ankit" />
            <div className='content'>
                <div className='header'>{ name }</div>
                <div className='header'>{ email }</div>
            </div>
            <i 
            className='trash alternate outline right floated icon'
            style={{ color: 'red', marginTop: "7px"}}
            
            onClick={() => props.clickHandler(id)}></i>
        </div>
    );
}

export default ContactCard;