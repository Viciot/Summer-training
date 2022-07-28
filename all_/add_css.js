/* DACI personalization - BEGIN */
var customizeExpandandable = function(sCSSClassName){
    debugger;
	var customCSS = 
        ".gigya-screen ." + sCSSClassName + " .gigya-label {" +
        "    display: none;" +
        "}" +        
        ".gigya-screen ." + sCSSClassName + "LabelDisplay .gigya-label {" +
        "    display: block!important;"+
        "}" +
        "h2.gigya-composite-control.gigya-composite-control-header." + sCSSClassName + "Title:hover {}" +
        "h2.gigya-composite-control.gigya-composite-control-header." + sCSSClassName + "Title." + sCSSClassName + "TitleDown {"+
        "    padding-bottom: 0px;"+
        "}" +
        "." + sCSSClassName + "TitleDown:after {"+
        "    content: \"\25B2\";" +
        "}" +
        "." + sCSSClassName + "TitleUp:after {"+
        "    content: \"\25B2\";"+
        "}"+
        "." + sCSSClassName + "CDC .gigya-multi-choice-item label { "+
        "    font-weight: normal;" +
        "}";        
        
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = customCSS;
    document.getElementsByTagName('head')[0].appendChild(style);
   
}

customizeExpandandable("gigya-composite-control.gigya-composite-control-multi-choice");