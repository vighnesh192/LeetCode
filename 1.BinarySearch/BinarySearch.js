class Solution {
    
    searchInSorted(arr, N, K)
    {
        // your code here
        var found = false;
        while(arr.length > 0) {
            let mid = Math.floor(N/2);
            // console.log('arr', arr)
            // console.log('MID', mid);
            // console.log('arr[mid]', arr[mid])
            // console.log('ARR LENGTH', arr.length)
            
            if(K == arr[mid] ){
                // console.log('equal')
                found = true;
                return 1;
            }
            else {
                if(K > arr[mid]) {
                    arr = arr.slice(mid + 1, N);
                    N = arr.length;
                    // console.log('GREATER', arr, N)
                    // return this.searchInSorted(arr, arr.length, K);
                }
                else {
                    arr = arr.slice(0, mid);
                    N = arr.length;
                    // console.log('GREATER', arr, N)
                    // return this.searchInSorted(arr, arr.length, K);
                }
            }    
            // found = false;
            // console.log('found', found)
            if(found) {
                return 1;
            }
        }
        return -1;
        // if(found){
        //     console.log('found', found)
        //     return 1    
        // } 
        // else {
            // return -1;
        // }
    }
}