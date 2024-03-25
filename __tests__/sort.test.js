const {selectionSort, insertionSort, shellSort} = require("./../sort.cjs");

describe("selection sort on", () => {
    describe("arrays consisting of primitive,", () => {
        describe("distinct,", () => {
            test(
                "sorted values are correctly sorted",
                () => {
                    let subject = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                    selectionSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                }
            );    
            test(
                "unsorted values are correctly sorted",
                () => {
                    let subject = [5, 2, 4, 7, 6, 3, 1, 9, 8, 10];
                    selectionSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                }
            );
            test(
                "reverse sorted values are correctly sorted",
                () => {
                    let subject = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
                    selectionSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                }
            );
        });

        describe("indistinct,", () => {
            test(
                "sorted values are correctly sorted",
                () => {
                    let subject = [1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10];
                    selectionSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10]);
                }
            );
            test(
                "unsorted values are correctly sorted",
                () => {
                    let subject = [6, 4, 7, 9, 4, 5, 1, 2, 10, 5, 3];
                    selectionSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10]);
                }
            );
            test(
                "reverse sorted values are correctly sorted",
                () => {
                    let subject = [10, 9, 7, 6, 5, 5, 4, 4, 3, 2, 1];
                    selectionSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10]);
                }
            );
        });
    });
    describe("arrays consisting of dynamic,", () => {
        describe("distinct,", () => {
            test(
                "sorted values are correctly sorted",
                () => {
                    let subject = [
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
                    selectionSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );    
            test(
                "unsorted values are correctly sorted",
                () => {
                    let subject = [
                        {studentId: 48, classYear: 5},
                        {studentId: 12, classYear: 8},
                        {studentId: 1, classYear: 1},
                        {studentId: 920, classYear: 4},
                        {studentId: 91, classYear: 2},
                        {studentId: 2, classYear: 6},
                        {studentId: 25, classYear: 3},
                        {studentId: 42, classYear: 10},
                        {studentId: 55, classYear: 9},
                        {studentId: 3, classYear: 7},
                    ];
                    selectionSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
            test(
                "reverse sorted values are correctly sorted",
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
                    selectionSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
        });

        describe("indistinct,", () => {
            test(
                "sorted values are correctly sorted",
                () => {
                    let subject = [
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
                    selectionSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
            test(
                "unsorted values are correctly sorted",
                () => {
                    let subject = [
                        {studentId: 25, classYear: 3},
                        {studentId: 3, classYear: 7},
                        {studentId: 91, classYear: 2},
                        {studentId: 48, classYear: 5},
                        {studentId: 2, classYear: 6},
                        {studentId: 42, classYear: 10},
                        {studentId: 3, classYear: 7},
                        {studentId: 12, classYear: 8},
                        {studentId: 25, classYear: 3},
                        {studentId: 1, classYear: 1},
                    ];
                    selectionSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
            test(
                "reverse sorted values are correctly sorted",
                () => {
                    let subject = [
                        {studentId: 42, classYear: 10},
                        {studentId: 12, classYear: 8},
                        {studentId: 3, classYear: 7},
                        {studentId: 3, classYear: 7},
                        {studentId: 2, classYear: 6},
                        {studentId: 48, classYear: 5},
                        {studentId: 25, classYear: 3},
                        {studentId: 25, classYear: 3},
                        {studentId: 91, classYear: 2},
                        {studentId: 1, classYear: 1},
                    ];
                    selectionSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
        });
    });
});

describe("insertion sort on", () => {
    describe("arrays consisting of primitive,", () => {
        describe("distinct,", () => {
            test(
                "sorted values are correctly sorted",
                () => {
                    let subject = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                    insertionSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                }
            );    
            test(
                "unsorted values are correctly sorted",
                () => {
                    let subject = [5, 2, 4, 7, 6, 3, 1, 9, 8, 10];
                    insertionSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                }
            );
            test(
                "reverse sorted values are correctly sorted",
                () => {
                    let subject = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
                    insertionSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                }
            );
        });

        describe("indistinct,", () => {
            test(
                "sorted values are correctly sorted",
                () => {
                    let subject = [1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10];
                    insertionSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10]);
                }
            );
            test(
                "unsorted values are correctly sorted",
                () => {
                    let subject = [6, 4, 7, 9, 4, 5, 1, 2, 10, 5, 3];
                    insertionSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10]);
                }
            );
            test(
                "reverse sorted values are correctly sorted",
                () => {
                    let subject = [10, 9, 7, 6, 5, 5, 4, 4, 3, 2, 1];
                    insertionSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10]);
                }
            );
        });
    });
    describe("arrays consisting of dynamic,", () => {
        describe("distinct,", () => {
            test(
                "sorted values are correctly sorted",
                () => {
                    let subject = [
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
                    insertionSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );    
            test(
                "unsorted values are correctly sorted",
                () => {
                    let subject = [
                        {studentId: 48, classYear: 5},
                        {studentId: 12, classYear: 8},
                        {studentId: 1, classYear: 1},
                        {studentId: 920, classYear: 4},
                        {studentId: 91, classYear: 2},
                        {studentId: 2, classYear: 6},
                        {studentId: 25, classYear: 3},
                        {studentId: 42, classYear: 10},
                        {studentId: 55, classYear: 9},
                        {studentId: 3, classYear: 7},
                    ];
                    insertionSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
            test(
                "reverse sorted values are correctly sorted",
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
                    insertionSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
        });

        describe("indistinct,", () => {
            test(
                "sorted values are correctly sorted",
                () => {
                    let subject = [
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
                    insertionSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
            test(
                "unsorted values are correctly sorted",
                () => {
                    let subject = [
                        {studentId: 25, classYear: 3},
                        {studentId: 3, classYear: 7},
                        {studentId: 91, classYear: 2},
                        {studentId: 48, classYear: 5},
                        {studentId: 2, classYear: 6},
                        {studentId: 42, classYear: 10},
                        {studentId: 3, classYear: 7},
                        {studentId: 12, classYear: 8},
                        {studentId: 25, classYear: 3},
                        {studentId: 1, classYear: 1},
                    ];
                    insertionSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
            test(
                "reverse sorted values are correctly sorted",
                () => {
                    let subject = [
                        {studentId: 42, classYear: 10},
                        {studentId: 12, classYear: 8},
                        {studentId: 3, classYear: 7},
                        {studentId: 3, classYear: 7},
                        {studentId: 2, classYear: 6},
                        {studentId: 48, classYear: 5},
                        {studentId: 25, classYear: 3},
                        {studentId: 25, classYear: 3},
                        {studentId: 91, classYear: 2},
                        {studentId: 1, classYear: 1},
                    ];
                    insertionSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
        });
    });
});

describe("shell sort on", () => {
    describe("arrays consisting of primitive,", () => {
        describe("distinct,", () => {
            test(
                "sorted values are correctly sorted",
                () => {
                    let subject = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                    shellSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                }
            );    
            test(
                "unsorted values are correctly sorted",
                () => {
                    let subject = [5, 2, 4, 7, 6, 3, 1, 9, 8, 10];
                    shellSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                }
            );
            test(
                "reverse sorted values are correctly sorted",
                () => {
                    let subject = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
                    shellSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                }
            );
        });

        describe("indistinct,", () => {
            test(
                "sorted values are correctly sorted",
                () => {
                    let subject = [1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10];
                    shellSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10]);
                }
            );
            test(
                "unsorted values are correctly sorted",
                () => {
                    let subject = [6, 4, 7, 9, 4, 5, 1, 2, 10, 5, 3];
                    shellSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10]);
                }
            );
            test(
                "reverse sorted values are correctly sorted",
                () => {
                    let subject = [10, 9, 7, 6, 5, 5, 4, 4, 3, 2, 1];
                    shellSort(subject, (a, b) => a > b);
                    expect(subject).toEqual([1, 2, 3, 4, 4, 5, 5, 6, 7, 9, 10]);
                }
            );
        });
    });
    describe("arrays consisting of dynamic,", () => {
        describe("distinct,", () => {
            test(
                "sorted values are correctly sorted",
                () => {
                    let subject = [
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
                    shellSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );    
            test(
                "unsorted values are correctly sorted",
                () => {
                    let subject = [
                        {studentId: 48, classYear: 5},
                        {studentId: 12, classYear: 8},
                        {studentId: 1, classYear: 1},
                        {studentId: 920, classYear: 4},
                        {studentId: 91, classYear: 2},
                        {studentId: 2, classYear: 6},
                        {studentId: 25, classYear: 3},
                        {studentId: 42, classYear: 10},
                        {studentId: 55, classYear: 9},
                        {studentId: 3, classYear: 7},
                    ];
                    shellSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
            test(
                "reverse sorted values are correctly sorted",
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
                    shellSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
        });

        describe("indistinct,", () => {
            test(
                "sorted values are correctly sorted",
                () => {
                    let subject = [
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
                    shellSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
            test(
                "unsorted values are correctly sorted",
                () => {
                    let subject = [
                        {studentId: 25, classYear: 3},
                        {studentId: 3, classYear: 7},
                        {studentId: 91, classYear: 2},
                        {studentId: 48, classYear: 5},
                        {studentId: 2, classYear: 6},
                        {studentId: 42, classYear: 10},
                        {studentId: 3, classYear: 7},
                        {studentId: 12, classYear: 8},
                        {studentId: 25, classYear: 3},
                        {studentId: 1, classYear: 1},
                    ];
                    shellSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
            test(
                "reverse sorted values are correctly sorted",
                () => {
                    let subject = [
                        {studentId: 42, classYear: 10},
                        {studentId: 12, classYear: 8},
                        {studentId: 3, classYear: 7},
                        {studentId: 3, classYear: 7},
                        {studentId: 2, classYear: 6},
                        {studentId: 48, classYear: 5},
                        {studentId: 25, classYear: 3},
                        {studentId: 25, classYear: 3},
                        {studentId: 91, classYear: 2},
                        {studentId: 1, classYear: 1},
                    ];
                    shellSort(subject, (a, b) => a.classYear > b.classYear);
                    expect(subject).toEqual(
                        [
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
                        ]
                    );
                }
            );
        });
    });
});