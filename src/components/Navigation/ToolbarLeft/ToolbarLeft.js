import React, {Component} from "react";

import classes from './ToolbarLeft.module.css'

import dashboardICO from '../../../assets/dashboard.svg'
import sortICO from '../../../assets/sort1.svg'
import sort1ICO from '../../../assets/sort.svg'
import propsICO from '../../../assets/pen.svg'
import bulletICO from '../../../assets/nav.svg'

class ToolbarLeft extends Component {
    render() {
        return (
            <div className={classes.NavContainer}>
                <nav className={classes.NavWrapper}>
                    <div className={classes.NavHeaders}><img className={classes.NavImg} src={dashboardICO} alt="dashboard"/>Dashboard</div>
                    <hr/>
                    <div className={classes.NavHeaders}><img className={classes.NavImg} src={sortICO} alt="sort"/>Sort Algorithm</div>
                    <div className={classes.NavHeaders}><img className={classes.NavImg} src={propsICO} alt="props"/>Props</div>
                    <div>
                        <div className={classes.NavElements} onClick={this.props.resetArray}><img className={classes.NavImg} src={bulletICO} alt="bullet"/>Generate random Array</div>
                        <div className={classes.NavElements}><img className={classes.NavImg} src={bulletICO} alt="bullet"/>Number of inputs</div>
                    </div>
                    <div className={classes.NavHeaders}><img className={classes.NavImg} src={sort1ICO} alt="sort type"/>Sort type</div>
                    <div>
                        <div className={classes.NavElements} onClick={this.props.mergeSort}><img className={classes.NavImg} src={bulletICO} alt="bullet"/>Merge Sort</div>
                        <div className={classes.NavElements} onClick={this.props.bubbleSort}><img className={classes.NavImg} src={bulletICO} alt="bullet"/>Bubble Sort</div>
                        <div className={classes.NavElements} onClick={this.props.selectionSort}><img className={classes.NavImg} src={bulletICO} alt="bullet"/>Selection Sort</div>
                        <div className={classes.NavElements} onClick={this.props.insertionSort}><img className={classes.NavImg} src={bulletICO} alt="bullet"/>Insertion Sort</div>
                    </div>
                </nav>
                <div>
                    <div className={classes.ActionBtn}>
                        Sort Array!
                    </div>
                    <div className={classes.ActionBtn} onClick={this.props.testAlgorithm}>
                        Test In Console
                    </div>
                </div>
            </div>
        )
    }
}

export default ToolbarLeft;