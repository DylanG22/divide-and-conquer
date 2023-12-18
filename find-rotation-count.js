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

module.exports = findRotationCount