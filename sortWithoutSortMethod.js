// Given two sorted arrays, merge them into a single sorted array.
//  Do not use the bult-in sort functions.

function mergeAndSort (arr1, arr2) {
    let arr = arr1.concat(arr2)
    var tempor = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    tempor = arr[j];
                    arr[j] = arr[i];
                    arr[i] = tempor;
                }
            }
        }
    console.log(arr);
}
mergeAndSort([1,6,2],[45,3,66,0])