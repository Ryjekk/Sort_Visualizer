import React from "react";

import ToolbarTop from '../../components/Navigation/ToolbarTop/ToolbarTop'

import classes from './Layout.module.css'

const layout = (props) => {
    return (
        <div className={classes.LayoutWrapper}>
            <ToolbarTop/>
            <div className={classes.ContentWrapper}>
                {props.children}
            </div>
        </div>
    )
}

export default layout;