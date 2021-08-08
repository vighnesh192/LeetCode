class Solution {
    public void swap(int[] nums, int i, int j) {
        nums[i] = nums[i] + nums[j];
        nums[j] = nums[i] - nums[j];
        nums[i] = nums[i] - nums[j];
    }
    
    public int findKthLargest(int[] nums, int k) {
        for(int i=0; i<k; i++) {
            for(int j=0; j<nums.length-i-1; j++) {
                if(nums[j] > nums[j+1]) {
                    swap(nums, j, j+1);
                }
            }
        }
        return nums[nums.length-k];
    }
}