// -------- BOGO SORT -------- //
function shuffle (list) {
    // Shuffling the list
    for(let j, x, i = list.length; i; j = Math.floor(Math.random() * i), x = list[--i], list[i] = list[j], list[j] = x);
    return list;
}

function isSorted(list){
    // Loop on array elements to check if are in order
    for(let i = 1; i < list.length; i++) {
        if (list[i-1] > list[i]) { return false; }
    }
    return true;
}

export const bogoSort = (array) => {
    let sorted = false;
    // Loop until is shuffled in a sorted way
    while(sorted === false){
        array = shuffle(array);
        sorted = isSorted(array);
    }
    return array;
};


// -------- BOGO SORT VISUALISATION -------- //
export function getBogoSortAnimations(array) {
    if (array.length <= 1) return array;
    const animations = [];
    const auxiliaryArray = array.slice();
    doBogoSort(auxiliaryArray, animations);
    return animations
}

function shuffleVisual (list, animations) {
    // Shuffling the list
    for(let j, x, i = list.length; i; j = Math.floor(Math.random() * i), x = list[--i], list[i] = list[j], list[j] = x);
    console.log(list);
    animations.push(list);
    return list;
}


function isSortedVisual(auxiliaryArray, animations){
    // Loop on array elements to check if are in order
    for(let i = 1; i < auxiliaryArray.length; i++) {
        if (auxiliaryArray[i-1] > auxiliaryArray[i]) {
            return false;
        }
    }
    return true;
}


function doBogoSort (auxiliaryArray, animations) {
    let sorted = false;
    // Loop until is shuffled in a sorted way
    while(sorted === false){
        // animations.push([Math.floor(Math.random() * auxiliaryArray.length),Math.floor(Math.random() * auxiliaryArray.length)]);
        // animations.push([Math.floor(Math.random() * auxiliaryArray.length),Math.floor(Math.random() * auxiliaryArray.length)]);
        auxiliaryArray = shuffleVisual(auxiliaryArray, animations);
        sorted = isSortedVisual(auxiliaryArray, animations);
    }
}