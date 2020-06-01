// HELPER FUNCTION //
function swap (array, a, b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp
}

// -------- QUICk SORT -------- //
export const quickSort = (array, start, end) => {
    if (start >= end) return;

    let idx = partition(array, start, end);
    quickSort(array, start, idx - 1);
    quickSort(array, idx + 1, end)
    return array;
};

function partition(array, start, end) {
    let pivotIdx = start;
    let pivotVal = array[end];

    for (let i = start; i < end; i++) {
        if (array[i] < pivotVal) {
            swap(array, i, pivotIdx);
            pivotIdx++
        }
    }
    swap(array, pivotIdx, end);
    return pivotIdx;
}

