// This will be the solution
function doTheTrick(arrOfDigits) {
    let endOfArray = false
    const MAX_INDEX = 100
    let maxCounter = 0
    while (!endOfArray) {
        let indexCounter = 0
        let indexToReplace = null
        for (let ix = 0; ix < arrOfDigits.length; ix++) {
            indexCounter += 1
            maxCounter += 1
            const element = arrOfDigits[ix]
            if (element == 0) {
                indexToReplace = ix
                break
            }
            if (indexCounter == MAX_INDEX || maxCounter == (MAX_INDEX * 2)) {
                endOfArray = true
                break
            }
        }
        if (indexToReplace != null) {
            // remove the zero
            let _zeroNumber = arrOfDigits.splice(indexToReplace, 1)
            // place it to the end
            arrOfDigits.push(_zeroNumber[0])
        }
    }
    console.debug(arrOfDigits)

    let finalArray = []
    // get non zeros
    arrOfDigits.forEach(element => {
        if (element !== 0) finalArray.push(element)
    })
    console.debug(finalArray)
    finalArray[finalArray.length -1] = finalArray[finalArray.length -1] + 1
    console.debug(finalArray)

    let final_array_2 = []

    finalArray.forEach((el,ix) => {
        let el2 = ix%2!=0 ? el : el*-1
        final_array_2.push(el2)
    })

    console.debug(final_array_2)
}


doTheTrick([4, 8, 0, 9, 2, 5, 0, 3, 3, 0])
