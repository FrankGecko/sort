const {selectionSort} = require("../sort");

let numberAisGreaterThanB = (a, b) => a > b;

const ARR_DISTINCT_SORTED_SMALL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ARR_INDISTINCT_SORTED_SMALL = [1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10];

test(
    "Small, sorted, distinct array remains unchanged",
    () => {
        let subject = ARR_DISTINCT_SORTED_SMALL;
        let subjectCopy = [...subject];
        selectionSort(subjectCopy, numberAisGreaterThanB);
        expect(subjectCopy).toEqual(ARR_DISTINCT_SORTED_SMALL)
    }
);

test(
    "Small, reverse sorted, distinct array correctly sorted",
    () => {
        let subject = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        let subjectCopy = [...subject];
        selectionSort(subjectCopy, numberAisGreaterThanB);
        expect(subjectCopy).toEqual(ARR_DISTINCT_SORTED_SMALL)
    }
);

test(
    "Small, unsorted, distinct array correctly sorted",
    () => {
        let subject = [5, 2, 4, 7, 6, 3, 1, 9, 8, 10];
        let subjectCopy = [...subject];
        selectionSort(subjectCopy, numberAisGreaterThanB);
        expect(subjectCopy).toEqual(ARR_DISTINCT_SORTED_SMALL)
    }
);

test(
    "Small, unsorted, indistinct array correctly sorted",
    () => {
        let subject = [6, 4, 7, 9, 4, 5, 1, 2, 10, 5, 3];
        let subjectCopy = [...subject];
        selectionSort(subjectCopy, numberAisGreaterThanB);
        expect(subjectCopy).toEqual(ARR_INDISTINCT_SORTED_SMALL)
    }
);