const arrayNames = ["Victor", "Marta", "Ester", "Joan", "Esperanza"];
const vocals = ["a", "e", "i", "o", "u"];

function changeVocals (arrayNames) {
    for (var i = 0; i < arrayNames.length ; i++){
        let nameSelected = arrayNames[i];
        let firstVocal = getFirstVocal(nameSelected);
        let resultVocalChanged = changeFirstVocal(nameSelected, firstVocal);
    }
    return ;
};

function getFirstVocal (nameSelected){
    let indexOfA = nameSelected.indexOf("a");
    let indexOfE = nameSelected.indexOf("e");
    let indexOfI = nameSelected.indexOf("i");
    let indexOfO = nameSelected.indexOf("o");
    let indexOfU = nameSelected.indexOf("u");
    
    console.log(indexOfA);
    console.log(indexOfE);
    console.log(indexOfI);
    console.log(indexOfO);
    console.log(indexOfU);

    if (nameSelected.indexOf("i") ){
        
    }

    return             
}

function changeFirstVocal(nameSelected, firstVocal){
    
    return 
}

console.log(changeVocals(arrayNames));