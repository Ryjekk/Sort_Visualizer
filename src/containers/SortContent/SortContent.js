import React, {Component} from "react";
import Aux from '../../hoc/Aux/Aux'

import classes from './SortContent.module.css'

import ToolbarLeft from "../../components/Navigation/ToolbarLeft/ToolbarLeft";
import {mergeSort, getMergeSortAnimations} from '../../helperFunction/SortingAlgorithms/MergeSort'
import {bubbleSort, getBubbleSortAnimations} from '../../helperFunction/SortingAlgorithms/BubbleSort'
import {selectionSort, getSelectionSortAnimations} from '../../helperFunction/SortingAlgorithms/SelectionSort'
import {insertionSort, getInsertionSortAnimations} from "../../helperFunction/SortingAlgorithms/InsertionSort";
import {bogoSort, getBogoSortAnimations} from "../../helperFunction/SortingAlgorithms/BogoSort";

// Number of bars
const NUMBER_OF_ARRAY_BARS = 20;
// Main and following color.
const PRIMARY_COLOR = 'pink';
const SECONDARY_COLOR = 'tomato';
// Animation speed.
const ANIMATION_SPEED_MS = 10;

class SortContent extends Component {
    // TODO add button functionality and disable button after clicked
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
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            // TODO add max number according to dynamic screen size in place of 1000
            array.push(randomIntFromInterval(5, 1000))
        }
        this.setState({array: array})
    };

    // Merge sort
    mergeSort = () => {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    };

    // Bubble sort
    bubbleSort = () => {
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = (i % 4 === 0) || (i % 4 === 1);
            if (isColorChange) {
                // USING ES6 destructuring
                // var introduction = ["Hello", "I" , "am", "Sarah"];
                // var [greeting, pronoun] = introduction;
                // console.log(greeting);//"Hello"
                // console.log(pronoun);//"I"
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                // Animate pools
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS)
            } else {
                const [barIdx, newHeight] = animations[i];
                if (barIdx === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIdx].style;
                // Animate sort
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS)
            }
        }
    };

    // Selection sort
    selectionSort = () => {
        const animations = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = (animations[i][0] === 'n1') || (animations[i][0] === 'n2');
            if (isColorChange) {
                const [tempTextMark, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (animations[i][0] === 'n1') ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS)
            } else {
                const [tempTextMark, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
    };

    // Insertion sort
    insertionSort = () => {
        const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            if(isColorChange === true) {
                const [tempTextMark, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
    };

    // Bogo sort
    bogoSort = () => {
        const [animations] = getBogoSortAnimations(this.state.array);
        console.log(animations)
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
                    bogoSort={this.bogoSort}
                    testAlgorithm={this.testAlgorithm}
                />
                <div className={classes.SortContent}>
                    {array.map((value, idx) => {
                        return (
                            <div
                                className="array-bar"
                                key={idx}
                                style={{
                                    width:"10px",
                                    margin: "0 1px",
                                    backgroundColor: PRIMARY_COLOR,
                                    height: `${value}px`}}
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