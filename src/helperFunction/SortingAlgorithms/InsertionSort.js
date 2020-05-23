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