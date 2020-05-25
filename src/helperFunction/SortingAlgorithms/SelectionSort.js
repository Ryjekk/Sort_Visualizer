// HELPER FUNCTION //
const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

// -------- SELECTION SORT -------- //
export const selectionSort = (array) => {
    if( array.length === 1 ){
        return array
    }

    // Loop for length
    for (let i = 0; i < array.length; i++) {
        let minValue = i;
        // Loop for arr items
        for (let j = i + 1; j < array.length; j++) {
            // If value is smaller than assign new smallest value
            if (array[j] < array[minValue]) {
                minValue = j
            }
        }
        // Swap small value to front. making sorting from smallest to biggest
        if (minValue !== i) {
            swap(array, i, minValue)
        }
    }
    return array;
};

// -------- SELECTION SORT VISUALISATION -------- //
export function getSelectionSortAnimations(array) {
    if (array.length <= 1) return array;
    const animations = [];
    const auxiliaryArray = array.slice();
    doSelectionSort(auxiliaryArray, animations);
    return animations
}

function doSelectionSort (auxiliaryArray, animations) {
    const length = auxiliaryArray.length;

    for (let i = 0; i < length - 1; i++) {
        let minValue = i;
        for (let j = i + 1; j < length; j++) {
            // These are the values that we're comparing; we push them once
            // to change their color, than change color again
            animations.push([`n1`, j, minValue]);
            animations.push([`n2`, j, minValue]);
            if (auxiliaryArray[j] < auxiliaryArray[minValue]) {
                minValue = j
            }
        }
            animations.push([`swap`, minValue, auxiliaryArray[i]]);
            animations.push([`swap`, i, auxiliaryArray[minValue]]);
            swap(auxiliaryArray, i, minValue)
    }
}