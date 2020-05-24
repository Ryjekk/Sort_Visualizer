// HELPER FUNCTION //
const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

// -------- BUBBLE SORT -------- //
export const bubbleSort = (array) => {
    if( array.length === 1 ){
        return array
    }

    // Loop for length
    for (let i = 0; i < array.length - 1; i++) {
        // Loop for arr items
        for (let j = 0; j < array.length - i - 1; j++) {
            // If value is bigger than nex - swap. Comparing two next values
            if (array[j] > array[j+1]) {
                // Other solution
                // let temp = array[j];
                // array[j] = array[j+1];
                // array[j+1] = temp;
                swap(array, j, j + 1)
            }
        }
    }
    return array;
};

// -------- BUBBLE SORT VISUALISATION -------- //
export function getBubbleSortAnimations(array) {
    if (array.length <= 1) return array;
    const animations = [];
    const auxiliaryArray = array.slice();
    doBubbleSort(auxiliaryArray, animations);
    return animations
}

function doBubbleSort (auxiliaryArray, animations) {
    const length = auxiliaryArray.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            // These are the values that we're comparing; we push them once
            // to change their color, than change color again
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if (auxiliaryArray[j] > auxiliaryArray[j+1]) {
                // We overwrite the value at index in the original array
                animations.push([j, auxiliaryArray[j + 1]]);
                animations.push([j + 1, auxiliaryArray[j]]);
                swap(auxiliaryArray, j, j + 1)
            } else {
                animations.push([-1, -1]);
                animations.push([-1, -1]);
            }
        }
    }
}