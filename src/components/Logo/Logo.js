import React from 'react'
import './Logo.css'
import Logo from '../../assets/Images/burger-logo.png' 

const logo = (props) => (
    <div 
        className='Logo' 
        style={{
            height: props.height, 
            marginBottom: props.marginBottom
            }}>
        <img src={Logo} alt="MyBurger"/>
    </div>
);

export default logo;