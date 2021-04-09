function maxSumSubArray(array) {
    let localMax = array[0];
    let globalMax = -Infinity;
    
    for (let item of array) {
        localMax = Math.max(item, item + localMax);
        if (localMax > globalMax) {
            globalMax = localMax;
        }
    }

    return globalMax;
}