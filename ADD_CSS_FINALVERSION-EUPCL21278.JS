try{
                
    customizeExpandandable =  function(sCSSClassName){

        var customCSS = 
        "        .gigya-screen ." + sCSSClassName + "CDC .gigya-label {" +
        "    display: none;" +
        "}" +        
        "        .gigya-screen ." + sCSSClassName + "CDCLabelDisplay .gigya-label {" +
        "    display: block!important;"+
        "}" +
        "        h2.gigya-composite-control.gigya-composite-control-header." + sCSSClassName + "Title:hover {}" +
        "        h2.gigya-composite-control.gigya-composite-control-header." + sCSSClassName + "Title." + sCSSClassName + "TitleDown {"+
        "    padding-bottom: 0px;"+
        "}" +
        "        ." + sCSSClassName + "TitleDown:after {"+
        "    content: \"\25B2\";" +
        "}" +
        "        ." + sCSSClassName + "TitleUp:after {"+
        "    content: \"\25B2\";"+
        "}"+
        "        ." + sCSSClassName + "CDC .gigya-multi-choice-item label { "+
        "    font-weight: normal;" +
        "}";        

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = customCSS;
    document.getElementsByTagName('head')[0].appendChild(style);

    };
    customizeExpandandable("directMarketingConsent");



    var fncTitlePressEventNew = function(idTitle){
       var aConsentTitle = document.getElementsByClassName(idTitle + "Title");
       for(var i=0; i<aConsentTitle.length;i++){
         (function(index){
            var aConsentTitle_input = aConsentTitle[index].getElementsByTagName("input");
            if(aConsentTitle[i] !== undefined){
                aConsentTitle[i].addEventListener("click", function() {
                    var bDisplayConsentCDC = (this.classList.contains(idTitle + "TitleDown")) ? true : false;
                    var aConsentCDC = document.getElementsByClassName(idTitle + "CDC");
                    if(aConsentCDC != null && aConsentCDC.length > 0){
                        for(var index_CDC = 0; index_CDC < aConsentCDC.length; index_CDC++){
                            if(bDisplayConsentCDC){
                                this.classList.remove(idTitle + 'TitleDown');
                                this.classList.add(idTitle + 'TitleUp');
                                aConsentCDC[index_CDC].classList.add(idTitle + 'CDCLabelDisplay');
                            }else{
                                this.classList.remove(idTitle + 'TitleUp');
                                this.classList.add(idTitle + 'TitleDown');
                                aConsentCDC[index_CDC].classList.remove(idTitle + 'CDCLabelDisplay');
                            }
                        }
                    }
                });
            }
          })(i);
        }
    };

    fncTitlePressEventNew("directMarketingConsent");
}catch(oError){
    //do nothing
}