var twoSum = function (nums, target) {
  const newArray = new Map();
  for (let i = 0; i < nums.length; i++) {
    const valorQueVaiDiminuirDoTargetNaPosicaoAI = target - nums[i];
    if (newArray.has(valorQueVaiDiminuirDoTargetNaPosicaoAI)) {
      const indexOf = newArray.get(valorQueVaiDiminuirDoTargetNaPosicaoAI);
      return [i, indexOf];
    }

    newArray.set(nums[i], i);
  }
};

const nums = [3, 2, 4];
const target = 6;
console.log(twoSum(nums, target));
