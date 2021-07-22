var twoSum = function(numbers, target) {
    /*** BRUTE FORCE ***/
    // for(let i=0; i<numbers.length-1; i++) {
    //     for(let j=i+1; j<numbers.length; j++) {
    //         if(numbers[i] + numbers[j] == target) {
    //             answer.push(i+1);
    //             answer.push(j+1);
    //             return answer;
    //         }
    //     }
    // }
    
    
    /*** DIVIDE AND CONQUER ***/
    let answer = [];
    
    for(let [index, el] of numbers.entries()) {
        let l = 0, r = (numbers.length-1);
        while(l <= r) {
            let mid = Math.floor(l + ((r-l)/2));
            if(el + numbers[mid] == target) {
                if(index != mid) {
                    answer.push(index+1);
                    answer.push(mid+1);
                    return answer;
                } 
            }    
            if(el + numbers[mid] > target) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
    }
    
    return answer;
};