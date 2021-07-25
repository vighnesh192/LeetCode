//  MY SOLUTION
function bubbleSort(arr,n){
    if(n != 1) {
        for(let i=0; i<n-1; i++) {                 
            for(let j=i+1; j<n; j++) {  
                if(arr[i] > arr[j]) {
                    arr[i] = arr[i] + arr[j];
                    arr[j] = arr[i] - arr[j];
                    arr[i] = arr[i] - arr[j];
                }
            }
        }
    }
}

// An optimized version of Bubble Sort
function bubbleSort2( arr, n) {
    let i, j;
    for (i = 0; i < n-1; i++) {
        for (j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr,j,j+1);
            }
        }
    }
}