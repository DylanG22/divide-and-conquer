function sortedFrequency(arr,val) {
    leftnum = 0
    rightnum = arr.length - 1
    let count = 0

    while(leftnum !== rightnum){
        middlenum = Math.floor((rightnum + leftnum) /2)
        if(arr[middlenum] > val){
            rightnum = middlenum -1
        }
        if(arr[middlenum] < val){
            if(arr[middlenum + 1] === 0){
                return arr.length - middlenum
            }
            lefttnum = middlenum + 1
        }
        if(arr[middlenum] === val){
            count++
            let i = middlenum - 1
            while(arr[i] === val){
                count++
                i--
            }
            let i2 = middlenum + 1
            while(arr[i] === val){
                count++
                i2++
            }
        }
    }
    return count


}

module.exports = sortedFrequency