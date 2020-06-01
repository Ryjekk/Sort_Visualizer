// HELPER FUNCTION //
function swap (array, a, b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp
}

// -------- QUICK SORT Lomuto -------- //
export const quickSort = (array, start, end) => {
    if (start >= end) return;

    let idx = partition(array, start, end);
    quickSort(array, start, idx - 1);
    quickSort(array, idx + 1, end);
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


// -------- QUICK SORT Lomuto VISUALISATION -------- //
export function getQuickSortAnimations(array) {
    const animations = [];
    const auxiliaryArray = array.slice();
    doQuickSort(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
    return animations
}

function doQuickSort(auxiliaryArray, start, end, animations) {
    if (start >= end) return;

    let idx = partitionHelper(auxiliaryArray, start, end, animations);
    doQuickSort(auxiliaryArray, start, idx - 1, animations);
    doQuickSort(auxiliaryArray, idx + 1, end, animations)

}

function partitionHelper(auxiliaryArray, start, end, animations) {
    let pivotIdx = start;
    let pivotVal = auxiliaryArray[end];

    for (let i = start; i < end; i++) {
        animations.push([i, end]);
        animations.push([i, end]);
        if (auxiliaryArray[i] < pivotVal) {
            animations.push([i, auxiliaryArray[pivotIdx]]);
            animations.push([pivotIdx, auxiliaryArray[i]]);
            swap(auxiliaryArray, i, pivotIdx);
            pivotIdx++
        } else {
            animations.push([-1, -1]);
            animations.push([-1, -1]);
        }
        animations.push([-1, -1]);
        animations.push([-1, -1]);
    }
    animations.push([-1, -1]);
    animations.push([-1, -1]);
    animations.push([-1, -1]);
    animations.push([-1, -1]);


    animations.push([pivotIdx, auxiliaryArray[end]]);
    animations.push([end, auxiliaryArray[pivotIdx]]);
    swap(auxiliaryArray, pivotIdx, end);
    return pivotIdx;
}

