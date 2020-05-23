// HELPER FUNCTION //
const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

// -------- BUBBLE SORT -------- //
export const bubbleSort = (array) => {
    if( array.length === 1 ){
        return array
    }

    // Loop for length
    for (let i = 0; i < array.length; i++) {
        // Loop for arr items
        for (let j = 0; j < array.length; j++) {
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
