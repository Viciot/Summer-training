const arrayNames = ["Victor", "Ester", "Marta", "Joan"];
const vocals = ["a", "e", "i", "o", "u"];

function convertNames (arrayNames) {
    var _namesReplaced = arrayNames;
    for (var i = 0; i < arrayNames.length ; i++){
        let nameSelected = arrayNames[i];
        //console.log(nameSelected);
        let _firstVocal = getFirstVocal (nameSelected);
        //console.log("_firstVocal -> " + _firstVocal);
        if(_firstVocal != null){
            let replacedName = replaceVocal(
                { 
                    firstVocal: _firstVocal, 
                    name: nameSelected
                }
            );
            _namesReplaced[i] = replacedName;
        }
    }
    return _namesReplaced;
}

function getFirstVocal (nameSelected){
    let _iFirstVocal;
    let _minIndex = -1;
    var iIndex;
    for(let i=0; i<vocals.length; i++){
        iIndex = nameSelected.indexOf(vocals[i]);
        console.log( vocals[i] + " -> " + iIndex);
        if(iIndex >= 0){ //Si ha encontrado la vocal
            if( _minIndex < 0 || iIndex < _minIndex){ //Si la vocal es mas pequeña que la anterior
                _minIndex = iIndex;
            }
        }
    }
    if(_minIndex >= 0){ return nameSelected.charAt(_minIndex); }
    return null;
}
function replaceVocal (oName) {
    let _vocal = oName.firstVocal;
    let _name = oName.name;
    for(let i=0; i<vocals.length; i++){
        _name = _name.replaceAll(vocals[i], _vocal);
    }
    return _name;
}

console.log(convertNames (arrayNames));