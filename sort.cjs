

/**
 * @param {[]} arr
 * @param {(a, b) => boolean} isAGreaterThanB
 */
function selectionSort(arr, isAGreaterThanB) {
    
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i; j < arr.length; j++) {
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
function insertionSort(arr, isAGreaterThanB) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && isAGreaterThanB(arr[j - 1], arr[j]); j--) {
            exchangeValues(arr, j, j - 1);
        }
    }
}

/**
 * 
 * @param {[]} arr 
 * @param {(a, b) => boolean} isAGreaterThanB 
 */
function shellSort(arr, isAGreaterThanB) {
    let h = 1;
    let hFactor = 3;

    while (h < arr.length / hFactor) h = h * hFactor + 1;

    while (h >= 1) {
        for (let i = h; i < arr.length; i++) {
            for (let j = i; j >= h && isAGreaterThanB(arr[j - h], arr[j]); j -= h) {
                exchangeValues(arr, j, j - h);
            }
        }
        h = Math.floor(h / hFactor);
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

module.exports = {selectionSort, insertionSort, shellSort};