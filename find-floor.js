function findFloor(arr, num) {
  let left = 0
  let right = arr.length - 1
  while(left !== right){
    let mid = Math.floor((left + right) / 2 )
    if(arr[mid] > num){
        right = mid - 1
    }
    if(arr[mid] < num){
        if(arr[mid +1] > num){
            return arr[mid]
        }
        left = mid + 1
    }

  }
  return -1
}

module.exports = findFloor