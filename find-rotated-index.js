function findRotatedIndex(arr,num) {
  let count = findRotationCount(arr)
    if(count > 0 && num >= arr[0] && num <= arr[count]){
        return binarySearch(arr,num, 0, count)
    }
    else{
        return binarySearch(arr,num, count,arr.length - 1)
    }
}



function findRotationCount(arr) {
    let max = arr[0]
    let leftnum = 0
    let rightnum = arr.length - 1 
    if (arr[rightnum] < arr[leftnum]) return 0;
    if (arr[rightnum] === arr[leftnum]) return leftnum;
    while(rightnum !== leftnum){
        let middlenum = Math.floor((leftnum + rightnum) /2 )
        if(arr[middlenum] > max){
            max = arr[middlenum]
            if(arr[middlenum + 1] < max){
                return middlenum
            }
            leftnum = middlenum + 1 
        }
        if(arr[middlenum] < max ){
            rightnum = middlenum
        }
    }
    return 0
}

function binarySearch(array, num, start, end) {
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[end]) return -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (num < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}



module.exports = findRotatedIndex