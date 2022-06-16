var getConcatenation = function(nums) {
  let len = nums.length;
    let ans = nums;
    for(let i = 0; i < len ;i++){
        ans.push(nums[i]);
    } console.log(ans);
    //return ans;

};

let nums = [1,2,3];
//console.log(getConcatenation(nums));
const ans = getConcatenation(nums);
console.log(ans);
