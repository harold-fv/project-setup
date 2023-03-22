let baseBMR = 2000;
let targetBMR = [];
let weightLossOrFatBurn = false;
let weightSameOrTone = false;
let weightGain = true;

if(weightLossOrFatBurn = true) {
    targetBMR = baseBMR - 20%baseBMR;
    return targetBMR;
}

if(weightSameOrTone = true) {
    targetBMR = baseBMR;
    return targetBMR;
}

if(weightGain = true){
    targetBMR = baseBMR + 20%baseBMR;
    return targetBMR;
}

console.log(targetBMR);