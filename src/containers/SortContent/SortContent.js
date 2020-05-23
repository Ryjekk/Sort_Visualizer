import React, {Component} from "react";
import Aux from '../../hoc/Aux/Aux'

import classes from './SortContent.module.css'

import ToolbarLeft from "../../components/Navigation/ToolbarLeft/ToolbarLeft";
import {mergeSort} from '../../helperFunction/SortingAlgorithms/MergeSort'
import {bubbleSort} from '../../helperFunction/SortingAlgorithms/BubbleSort'
import {selectionSort} from '../../helperFunction/SortingAlgorithms/SelectionSort'
import {insertionSort} from "../../helperFunction/SortingAlgorithms/InsertionSort";

class SortContent extends Component {
    state = {
        array: [],
        test: false
    };

    componentDidMount() {
        this.resetArray();
    };

    // Create + reset array
    resetArray =  () => {
        const array = [];
        // TODO add number of poles according to dynamic width according to window scree object
        // TODO to make a length of arr random add instead 250 = randomIntFromInterval(5, 1000) [check test function]
        for (let i = 0; i < 30; i++) {
            // TODO add max number according to dynamic screen size in place of 1000
            array.push(randomIntFromInterval(5, 1000))
        }
        this.setState({array: array})
    };

    // Merge sort
    mergeSort = () => {
        const javaScriptSortedArray = this.state.array.slice().sort((a,b) => a - b);
        const sortedArray = mergeSort(this.state.array);

        console.log(areArraysAreEqual(javaScriptSortedArray, sortedArray));
    };

    // Bubble sort
    bubbleSort = () => {
        const javaScriptSortedArray = this.state.array.slice().sort((a,b) => a - b);
        const sortedArray = bubbleSort(this.state.array);

        console.log(areArraysAreEqual(javaScriptSortedArray, sortedArray));
    };

    // Selection sort
    selectionSort = () => {
        const javaScriptSortedArray = this.state.array.slice().sort((a,b) => a - b);
        const sortedArray = selectionSort(this.state.array);

        console.log(areArraysAreEqual(javaScriptSortedArray, sortedArray));
    };

    // Insertion sort
    insertionSort = () => {
        const javaScriptSortedArray = this.state.array.slice().sort((a,b) => a - b);
        const sortedArray = insertionSort(this.state.array);

        console.log(areArraysAreEqual(javaScriptSortedArray, sortedArray));
    };

    // Test 100 sorts
    testAlgorithm = () => {
        console.log(`** TEST CHECK **`);
      for (let i = 0; i < 100; i++) {
          const array = [];
          const randomLengthOfArr = randomIntFromInterval(5, 1000);
          for(let i = 0; i < randomLengthOfArr; i++) {
              array.push(randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a,b) => a - b);
          const mergeSortedArray = mergeSort(array.slice());
          const bubbleSortedArray = bubbleSort(array.slice());
          const selectionSortedArray = selectionSort(array.slice());
          const insertionSortedArray = insertionSort(array.slice());
          console.log(`-> Merge Sort Check`, areArraysAreEqual(javaScriptSortedArray, mergeSortedArray),
                    '\n',
                    `-> Bubble Sort Check`, areArraysAreEqual(javaScriptSortedArray, bubbleSortedArray),
                    '\n',
                    `-> Selection Sort Check`, areArraysAreEqual(javaScriptSortedArray, selectionSortedArray),
                    '\n',
                    `-> Insertion Sort Check`, areArraysAreEqual(javaScriptSortedArray, insertionSortedArray),
          );

      }
    };

    render () {
        const array = this.state.array;
        // const {array} = this.state ==== same syntax

        return (
            <Aux>
                <ToolbarLeft
                    resetArray={this.resetArray}
                    mergeSort={this.mergeSort}
                    bubbleSort={this.bubbleSort}
                    selectionSort={this.selectionSort}
                    insertionSort={this.insertionSort}
                    testAlgorithm={this.testAlgorithm}
                />
                <div className={classes.SortContent}>
                    {array.map((value, idx) => {
                        return (
                            <div
                                id="array-bar"
                                className={classes.ArrayBar}
                                key={idx}
                                style={{height: `${value}px`}}
                            >
                            </div>
                        )
                    })}
                </div>
            </Aux>
        )
    }
}

// from https://gist.github.com/spyesx/485e4584aae767201f41
function randomIntFromInterval(min,max) {
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}

// test if arrays are same - same length and same values
function areArraysAreEqual(arrOne, arrTwo) {
    if (arrOne.length !== arrTwo.length) {
        return false
    }
    for (let i = 0; i< arrOne.length; i++) {
        if (arrOne[i] !== arrTwo[i]) {
            return false
        }
    }
    return true
}

export default SortContent;