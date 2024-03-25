const {selectionSort} = require("./../sort.cjs");

let numberAisGreaterThanB = (a, b) => a > b;
let studentAisGreaterThanB = (a, b) => a.classYear > b.classYear;

const ARR_DISTINCT_SORTED_SMALL_NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ARR_INDISTINCT_SORTED_SMALL_NUMBER = [1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10];

const ARR_DISTINCT_SORTED_SMALL_STUDENT = [
    {studentId: 1, classYear: 1},
    {studentId: 91, classYear: 2},
    {studentId: 25, classYear: 3},
    {studentId: 920, classYear: 4},
    {studentId: 48, classYear: 5},
    {studentId: 2, classYear: 6},
    {studentId: 3, classYear: 7},
    {studentId: 12, classYear: 8},
    {studentId: 55, classYear: 9},
    {studentId: 42, classYear: 10},
];

const ARR_INDISTINCT_SORTED_SMALL_STUDENT = [
    {studentId: 1, classYear: 1},
    {studentId: 91, classYear: 2},
    {studentId: 25, classYear: 3},
    {studentId: 25, classYear: 3},
    {studentId: 48, classYear: 5},
    {studentId: 2, classYear: 6},
    {studentId: 3, classYear: 7},
    {studentId: 3, classYear: 7},
    {studentId: 12, classYear: 8},
    {studentId: 42, classYear: 10},
];

test(
    "Small, sorted, distinct array containing primitive values remains unchanged",
    () => {
        let subject = ARR_DISTINCT_SORTED_SMALL_NUMBER;
        let subjectCopy = [...subject];
        selectionSort(subjectCopy, numberAisGreaterThanB);
        expect(subjectCopy).toEqual(ARR_DISTINCT_SORTED_SMALL_NUMBER)
    }
);

test(
    "Small, sorted, distinct array containing dynamic values remains unchanged",
    () => {
        let subject = ARR_DISTINCT_SORTED_SMALL_STUDENT;
        let subjectCopy = JSON.parse(JSON.stringify(subject));
        selectionSort(subjectCopy, studentAisGreaterThanB);
        expect(subjectCopy).toEqual(ARR_DISTINCT_SORTED_SMALL_STUDENT)
    }
);

test(
    "Small, reverse sorted, distinct array containing primitive values correctly sorted",
    () => {
        let subject = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        let subjectCopy = [...subject];
        selectionSort(subjectCopy, numberAisGreaterThanB);
        expect(subjectCopy).toEqual(ARR_DISTINCT_SORTED_SMALL_NUMBER)
    }
);

test(
    "Small, reverse sorted, distinct array containing dynamic values correctly sorted",
    () => {
        let subject = [
            {studentId: 42, classYear: 10},
            {studentId: 55, classYear: 9},
            {studentId: 12, classYear: 8},
            {studentId: 3, classYear: 7},
            {studentId: 2, classYear: 6},
            {studentId: 48, classYear: 5},
            {studentId: 920, classYear: 4},
            {studentId: 25, classYear: 3},
            {studentId: 91, classYear: 2},
            {studentId: 1, classYear: 1},
        ];
        let subjectCopy = JSON.parse(JSON.stringify(subject));
        selectionSort(subjectCopy, studentAisGreaterThanB);
        expect(subjectCopy).toEqual(ARR_DISTINCT_SORTED_SMALL_STUDENT)
    }
);

test(
    "Small, unsorted, distinct array containing primitive values correctly sorted",
    () => {
        let subject = [5, 2, 4, 7, 6, 3, 1, 9, 8, 10];
        let subjectCopy = [...subject];
        selectionSort(subjectCopy, numberAisGreaterThanB);
        expect(subjectCopy).toEqual(ARR_DISTINCT_SORTED_SMALL_NUMBER)
    }
);

test(
    "Small, unsorted, distinct array containing dynamic values correctly sorted",
    () => {
        let subject = [
            {studentId: 920, classYear: 4},
            {studentId: 25, classYear: 3},
            {studentId: 3, classYear: 7},
            {studentId: 12, classYear: 8},
            {studentId: 48, classYear: 5},
            {studentId: 55, classYear: 9},
            {studentId: 2, classYear: 6},
            {studentId: 42, classYear: 10},
            {studentId: 1, classYear: 1},
            {studentId: 91, classYear: 2},
        ];
        let subjectCopy = JSON.parse(JSON.stringify(subject));
        selectionSort(subjectCopy, studentAisGreaterThanB);
        expect(subjectCopy).toEqual(ARR_DISTINCT_SORTED_SMALL_STUDENT)
    }
);

test(
    "Small, unsorted, indistinct array containing primitive values correctly sorted",
    () => {
        let subject = [6, 4, 7, 9, 4, 5, 1, 2, 10, 5, 3];
        let subjectCopy = [...subject];
        selectionSort(subjectCopy, numberAisGreaterThanB);
        expect(subjectCopy).toEqual(ARR_INDISTINCT_SORTED_SMALL_NUMBER)
    }
);

test(
    "Small, unsorted, indistinct array containing dynamic values correctly sorted",
    () => {
        let subject = [
            {studentId: 25, classYear: 3},
            {studentId: 3, classYear: 7},
            {studentId: 48, classYear: 5},
            {studentId: 1, classYear: 1},
            {studentId: 25, classYear: 3},
            {studentId: 12, classYear: 8},
            {studentId: 2, classYear: 6},
            {studentId: 42, classYear: 10},            
            {studentId: 3, classYear: 7},
            {studentId: 91, classYear: 2},
        ];
        let subjectCopy = [...subject];
        selectionSort(subjectCopy, studentAisGreaterThanB);
        expect(subjectCopy).toEqual(ARR_INDISTINCT_SORTED_SMALL_STUDENT)
    }
);