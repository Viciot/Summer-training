/* DACI personalization - BEGIN */
var customizeExpandandable = function(sClassName){
    debugger;
	var customCSS = "."+sClassName+"{ background: red !important; }";
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = customCSS;
    document.getElementsByTagName('head')[0].appendChild(style);
   
}

customizeExpandandable("gigya-composite-control.gigya-composite-control-multi-choice");