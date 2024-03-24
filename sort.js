

/**
 * @param {[]} arr
 * @param {(a, b) => boolean} isAGreaterThanB
 */
export function selectionSort(arr, isAGreaterThanB) {
    
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
 * @param {(a, b) => boolean} isAGreaterThanB 
 */
export function shellSort(arr, isAGreaterThanB) {
    let h = 1;
    let hFactor = 3;
    while (h < arr.length / hFactor) h = h * hFactor + 1;

    while (h >= 1) {
        for (let i = h; i < arr.length; i += h) {
            for (let j = i; j > 0; j -= h) {
                let jPreviousIndex = j - h;
                if (isAGreaterThanB(arr[j], arr[jPreviousIndex])) exchangeValues(arr, j, jPreviousIndex);
            }
        }
        h = h / hFactor;
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