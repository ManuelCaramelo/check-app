import React from 'react';


function Contact (props){
    return(
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt={props.name}/>
        <div>
            <h1 className="name">{props.name}</h1>
            <div className="status">
            <div className = {props.isOnline ? "status:online" : "status:offline"}></div>
            </div>
            <p className="status-text">{props.isOnline ? "Online" : "Offline"}</p>
        </div>
        </div>
    )
}
export default Contact
