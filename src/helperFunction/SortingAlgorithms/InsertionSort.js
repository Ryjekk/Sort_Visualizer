// -------- INSERTION SORT -------- //
export const insertionSort = (array) => {
    if( array.length === 1 ){
        return array
    }

    // Loop for length from el 2
    for (let i = 1; i < array.length; i++) {
        // Current value
        let key = array[i];
        // One element before to compare with
        let j = i -1;
        // While j > 0 and is previous el grater than our key [next value]
        while (j >= 0 && array[j] > key) {
            // Switch position
            array[j+1] = array[j];
            // Move backwards to left
            j--;
        }
        // Insert element in key value
        array[j+1] = key
    }
    return array
};

// -------- INSERTION SORT VISUALISATION -------- //
export function getInsertionSortAnimations(array) {
    if (array.length <= 1) return array;
    const animations = [];
    const auxiliaryArray = array.slice();
    doInsertionSort(auxiliaryArray, animations);
    return animations
}

function doInsertionSort(auxiliaryArray, animations) {
    const length = auxiliaryArray.length;

    for (let i = 1; i < length; i++) {
        let key = auxiliaryArray[i];
        let j = i - 1;
        animations.push(['n1', j, i]);
        animations.push(['n2', j, i]);
        while (j >= 0 && auxiliaryArray[j] > key) {
            animations.push(["overwrite", j + 1, auxiliaryArray[j]]);
            auxiliaryArray[j+1] = auxiliaryArray[j];
            j--;
            if(j >= 0) {
                animations.push(["comparision1", j, i]);
                animations.push(["comparision2", j, i]);
            }
        }
        animations.push(["overwrite", j + 1, key]);
        auxiliaryArray[j+1] = key;
    }
}