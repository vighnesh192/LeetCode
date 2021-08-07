class SortColors {
    public void sortColors(int[] nums) {
        if(nums.length > 1) {
            int cnt0=0, cnt1=0, cnt2=0;
            for(int i=0; i<nums.length; i++) {
                if(nums[i] == 0) {
                    cnt0 += 1;
                }
                else if(nums[i] == 1) {
                    cnt1 += 1;
                }
                else {
                    cnt2 += 1;
                }
            }

            int j=0;
            while(j < cnt0) {
                nums[j] = 0;
                j++;
            }
            while(j < cnt1+cnt0) {
                nums[j] = 1;
                j++;
            }
            while(j < cnt1+cnt0+cnt2) {
                nums[j] = 2;
                j++;
            }
        }
    }
}