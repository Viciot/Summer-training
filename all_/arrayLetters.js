/*

const letters = {
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    5:"e",
    6:"f",
    7:"g",
    8:"h",
    9:"i",
    10:"j",
    11:"k",
    12:"l",
    13:"m",
    14:"n",
    15:"o",
    16:"p",
    17:"q",
    18:"r",
    19:"s",
    20:"t",
    21:"u",
    22:"v",
    23:"w",
    24:"x",
    25:"y",
    26:"z"
}

*/

const letters = {
    1:"a",
    2:"a",
    3:"a",
    4:"a",
    5:"e",
    6:"e",
    7:"e",
    8:"e",
    9:"i",
    10:"i",
    11:"i",
    12:"i",
    13:"i",
    14:"i",
    15:"o",
    16:"o",
    17:"o",
    18:"o",
    19:"o",
    20:"o",
    21:"u",
    22:"u",
    23:"u",
    24:"u",
    25:"u",
    26:"u"
}

function printLetters (numLetters) {
    let arrayNum = [];

    for (var i = 0; i < numLetters ; i++){
        arrayNum[i]= letters[i+1];
        
    }
    
    return arrayNum
};



console.log(printLetters(14))

