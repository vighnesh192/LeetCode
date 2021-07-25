//SELECTION SORT
var merge = function(nums1, m, nums2, n) {
    console.log(nums2)
    if(m==0 && n>0) {
        for(let i=0; i<nums2.length; i++) {
            nums1[i] = nums2[i]
        }
    }
    else {
        let j = 0;
        for(let i=nums1.length-n; i<nums1.length; i++) {
            nums1[i] = nums2[j];
            j+=1;
        }
        for(let x=0; x<nums1.length-1; x++) {
            let min = x;
            for(let y=x+1; y<nums1.length; y++) {
                if(nums1[min] > nums1[y]) {
                    min = y;
                }
            }
            if(min != x) {
                nums1[x] = nums1[x] + nums1[min];
                nums1[min] = nums1[x] - nums1[min];
                nums1[x] = nums1[x] - nums1[min];
            }
        }
    }
};