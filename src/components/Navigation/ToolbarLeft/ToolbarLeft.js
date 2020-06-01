import React, {Component} from "react";

import classes from './ToolbarLeft.module.css'

import sortICO from '../../../assets/sort1.svg'
import sort1ICO from '../../../assets/sort.svg'
import propsICO from '../../../assets/pen.svg'
import bulletICO from '../../../assets/nav.svg'

class ToolbarLeft extends Component {
    state = {
        activeAlgorithm: function () {},
        name: ''
    };

    passAlgorithmHandler = (algorithm, name) => {
       this.setState({activeAlgorithm: algorithm, name: name})
    };

    render() {
        return (
            <div className={classes.NavContainer}>
                <nav className={classes.NavWrapper}>
                    <div className={classes.NavHeaders}><img className={classes.NavImg} src={sortICO} alt="sort"/>Sort Algorithm</div>
                    <hr/>
                    <div className={classes.NavHeaders}><img className={classes.NavImg} src={propsICO} alt="props"/>Props</div>
                    <div>
                        <div className={classes.NavElementsButton} onClick={this.props.resetArray}><img className={classes.NavImg} src={bulletICO} alt="bullet"/>Generate Array</div>
                        <div className={classes.NavElementsButton}><img className={classes.NavImg} src={bulletICO} alt="bullet"/>Number of inputs</div>
                    </div>
                    <hr/>
                    <div className={classes.NavHeaders}><img className={classes.NavImg} src={sort1ICO} alt="sort type"/>Sort type</div>
                    <div>
                        <div
                            className={classes.NavElementsButton}
                            onClick={() => this.passAlgorithmHandler(this.props.mergeSort, "Merge")}>
                            <img className={classes.NavImg} src={bulletICO} alt="bullet"/>Merge Sort
                        </div>
                        <div
                            className={classes.NavElementsButton}
                            onClick={() => this.passAlgorithmHandler(this.props.bubbleSort, "Bubble")}>
                            <img className={classes.NavImg} src={bulletICO} alt="bullet"/>Bubble Sort
                        </div>
                        <div
                            className={classes.NavElementsButton}
                            onClick={() => this.passAlgorithmHandler(this.props.selectionSort, "Selection")}>
                            <img className={classes.NavImg} src={bulletICO} alt="bullet"/>Selection Sort
                        </div>
                        <div
                            className={classes.NavElementsButton}
                            onClick={() => this.passAlgorithmHandler(this.props.insertionSort, "Insertion")}>
                            <img className={classes.NavImg} src={bulletICO} alt="bullet"/>Insertion Sort
                        </div>
                        <div
                            className={classes.NavElementsButton}
                            onClick={() => this.passAlgorithmHandler(this.props.bogoSort, "Bogo")}>
                            <img className={classes.NavImg} src={bulletICO} alt="bullet"/>Bogo Sort
                        </div>
                        <div
                            className={classes.NavElementsButton}
                            onClick={() => this.passAlgorithmHandler(this.props.quikSort, "Quick")}>
                            <img className={classes.NavImg} src={bulletICO} alt="bullet"/>Quick Sort [Lomuto]
                        </div>
                    </div>
                </nav>
                <div>
                    <div className={classes.ActionBtn} onClick={this.state.activeAlgorithm}>
                        {this.state.name} Sort!
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