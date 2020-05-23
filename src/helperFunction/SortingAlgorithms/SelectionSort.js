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
