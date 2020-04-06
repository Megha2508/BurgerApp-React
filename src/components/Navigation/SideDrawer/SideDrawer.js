import React from 'react'

import './SideDrawer.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backrop/Backdrop'
import Aux from '../../../hoc/Auxiliary/auxiliary'

const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close']
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open']
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo height="10%" marginBottom="32px"/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;