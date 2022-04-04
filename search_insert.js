nums1 = [1,3,5,6]
target1 = 5

nums2 = [1,3,5,6]
target2 = 2

nums3 = [1,3,5,6]
target3 = 7

var searchInsert = function(nums, target) {
    let index = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i]==target){
            index = i;
            return index;
        }
        else {
            if (target > nums[i] ) {
                index = i+1;
            }
        }
    }
    return index;


};

console.log(searchInsert(nums1,target1))
console.log(searchInsert(nums2,target2))
console.log(searchInsert(nums3,target3))