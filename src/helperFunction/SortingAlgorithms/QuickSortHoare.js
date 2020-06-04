// HELPER FUNCTION //
function swap (array, a, b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp
}

// -------- QUICK SORT Hoare -------- //
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

// -------- QUICK SORT Hoare VISUALISATION -------- //
export function getQuickSortHoareAnimations(array) {
    const animations = [];
    const auxiliaryArray = array.slice();
    doQuickSortHoare(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
    return animations
}

function  doQuickSortHoare(auxiliaryArray, left, right, animations) {
    if (left >= right) return;

    let idx = partitionHealper(auxiliaryArray, left, right, animations);
    doQuickSortHoare(auxiliaryArray, left, idx - 1, animations);
    doQuickSortHoare(auxiliaryArray, idx, right, animations);
}

function partitionHealper(auxiliaryArray, left, right, animations) {
    const pivot = auxiliaryArray[Math.floor((left+right)/2)];
    animations.push([pivot, left, right]);
    animations.push([pivot, left, right]);

    while (left <= right) {
        while(auxiliaryArray[left] < pivot) {
            left++;
        }
        while(auxiliaryArray[right] > pivot) {
            right--;
        }
        if(left <= right) {
            animations.push([pivot, left, right]);
            animations.push([pivot, right, left]);
            swap(auxiliaryArray, left, right);
            left++;
            right--;
        }
    }
    return left
}

