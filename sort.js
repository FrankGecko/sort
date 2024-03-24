

/**
 * @param {[]} arr
 * @param {(a, b) => boolean} isAGreaterThanB
 */
export function selectionSort(arr, isAGreaterThanB) {
    
    for (let i = 0; arr.length; i++) {
        let minIndex = i;

        for (j = i; j < arr.length; j++) {
            if (isAGreaterThanB(arr[minIndex], arr[j])) minIndex = j;
        }

        if (minIndex !== i) exchangeValues(arr, i, minIndex);
    }
}

/**
 * 
 * @param {[]} arr 
 * @param {(a, b) => boolean} isAGreaterThanB 
 */
export function insertionSort(arr, isAGreaterThanB) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && isAGreaterThanB(arr[j], arr[j - 1]); j--) {
            exchangeValues(arr, j, j-1);
        }
    }
}

/**
 * 
 * @param {[]} arr 
 * @param {number} i 
 * @param {number} j 
 */
function exchangeValues(arr, i, j) {
    let iValue = arr[i];
    arr[i] = arr[j];
    arr[j] = iValue;
}