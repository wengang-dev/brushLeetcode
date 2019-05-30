var threeSumClosest = function(nums, target) {
  var min = Math.abs(nums[1] + nums[2] + nums[0] - target) //To memo the distance to target
  var i, j, k // index
  var num1, num2, num3
  var result = nums[1] + nums[2] + nums[0]

  nums.sort(function(a, b) {
    return a - b
  })

  for (i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue
    num1 = nums[i]
    j = i + 1
    k = nums.length - 1
    while (j < k) {
      while (j > i + 1 && j < k && nums[j] == nums[j - 1]) j++
      while (k < nums.length - 1 && j < k && nums[k] == nums[k + 1]) k--
      if (j == k) break

      num2 = nums[j]
      num3 = nums[k]
      let temp = num1 + num2 + num3 - target
      if (temp === 0) return target
      if (temp > 0) {
        k--
      } else {
        j++
      }
      if (Math.abs(temp) < min) {
        min = Math.abs(temp)
        result = num1 + num2 + num3
      }
    }
  }
  return result
}

var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let sum = Infinity
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const s = nums[i] + nums[left] + nums[right]
      if (Math.abs(s - target) < Math.abs(sum - target)) sum = s
      if (s - target < 0) left += 1
      else if (s - target > 0) right -= 1
      else return s
    }
  }
  return sum
}
