function countZeroes(arr) {
  leftnum = 0
  rightnum = arr.length - 1

    while(leftnum !== rightnum){
        middlenum = Math.floor((rightnum + leftnum) /2)
        if(arr[middlenum] === 0){
            if(arr[middlenum - 1] === 1){
                return arr.length - middlenum - 1
            }
            rightnum = middlenum - 1
        }
        if(arr[middlenum] === 1){
            if(arr[middlenum + 1] === 0){
                return arr.length - middlenum - 1
            }
            lefttnum = middlenum + 1
        }
    }

}

module.exports = countZeroes