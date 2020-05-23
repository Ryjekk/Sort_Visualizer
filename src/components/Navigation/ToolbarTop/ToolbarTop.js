import React from "react";

import classes from './ToolbarTop.module.css'

const toolbarTop = (props) => {
    return (
        <div className={classes.TopNavWrapper}>
            <p>Sort Algorithm</p>
            <p className={classes.MadeByText}>by Marcin Ryjewsky</p>
        </div>
    )
}

export default toolbarTop;