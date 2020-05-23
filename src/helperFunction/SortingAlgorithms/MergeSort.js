// -------- MERGE SORT Original -------- //
export const mergeSort = (array) => {
    if (array.length === 1) {
        return array
    };
    // Get middle index
    const middleIdx = Math.floor(array.length / 2);
    // Using recursion slice arr in half
    const firstHalf = mergeSort(array.slice(0, middleIdx));
    const secondHalf = mergeSort(array.slice(middleIdx));
    const sortedArray = [];

    let i = 0;
    let j = 0;

    // Check if right and left arr is empty
    while (i < firstHalf.length && j < secondHalf.length) {
        // Find lover value
        if (firstHalf[i] < secondHalf[j]) {
            sortedArray.push(firstHalf[i++]);
        } else {
            sortedArray.push(secondHalf[j++]);
        }
    }

    // Merge left array
    while (i < firstHalf.length) {
        sortedArray.push(firstHalf[i++])
    }

    // Merge right array
    while (j < secondHalf.length) {
        sortedArray.push(secondHalf[j++])
    }
    return sortedArray;
};