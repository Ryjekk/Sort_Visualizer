// HELPER FUNCTION //
function swap (array, a, b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp
}

// -------- QUICK SORT Lomuto -------- //
export const quickSortHoare = (array, left, right) => {
    if (left >= right) return;

    let idx = partition(array, left, right);
    quickSortHoare(array, left, idx - 1);
    quickSortHoare(array, idx, right);
    return array;
};

function partition(array, left, right) {
    const pivot = array[Math.floor((left+right)/2)];

    while (left <= right) {
        while(array[left] < pivot) {
            left++;
        }
        while(array[right] > pivot) {
            right--;
        }
        if(left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }
    return left;
}