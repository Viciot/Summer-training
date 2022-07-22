    /*
    	Function for managing the CSS Styles in an unified "site", for reusing it in all the "expandable" radioButton or Checkboxes
    */
        _customizeExpandandable: function(sCSSClassName){

            var customCSS = 
            " .gigya-screen ." + sCSSClassName + "CDC .gigya-label {" +
            "    display: none;" +
            " }" +        
            " .gigya-screen ." + sCSSClassName + "CDCLabelDisplay .gigya-label {" +
            "    display: block!important;"+
            " }" +
            " h2.gigya-composite-control.gigya-composite-control-header." + sCSSClassName + "Title:hover {}" +
            " h2.gigya-composite-control.gigya-composite-control-header." + sCSSClassName + "Title." + sCSSClassName + "TitleDown {"+
            "    padding-bottom: 0px;"+
            " } " +
            " ." + sCSSClassName + "TitleDown:after {"+
            "    content: \"\\25BC\";  " +
            " } " +
            " ." + sCSSClassName + "TitleUp:after {"+
            "    content: \"\\25B2\";   "+
            " } "+
            " ." + sCSSClassName + "CDC .gigya-multi-choice-item label { "+
            "    font-weight: normal;" +
            " }";        
     
            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = customCSS;
            document.getElementsByTagName('head')[0].appendChild(style);
         },
           
         /* 
             Function for managing the visibility and the style applied to a label for hidding or showing the expandable text under it. 
          */
         _fncTitlePressEventNew: function(idTitle){
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
         },
     
         /* 
             Function for managing the visibility and CSS Styles in an unified "site", for reusing it in all the "expandable" radioButton or Checkboxes
         */
         _configureExplandable: function(sClassName){
             try{
                 this.customizeExpandandable(sClassName);
                 this.fncTitlePressEventNew(sClassName);
             }catch(oError){ }           
         },