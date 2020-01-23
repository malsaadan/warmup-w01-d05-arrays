const countAndSum = function(nums) {
    let pos = [], neg = [], empty = [];

    if(nums.length === 0 || nums.every(element => element === null)){
        return empty;
    }

    else {
        for(let i = 0; i < nums.length; i++){
            if(nums[i] >= 0 ){
                pos.push(nums[i]);
            }
            else if (nums[i] < 0){
                neg.push(nums[i]);
            }
            else{
                continue;
            }
        }
        let count = pos.length, sum = 0;
        for(let i = 0; i < neg.length; i++){
            sum += neg[i];
        }

        return 'Count of positives: ' + count + ', Sum of negatives: ' + sum + '.';
    }
}


nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
emptyArr = []