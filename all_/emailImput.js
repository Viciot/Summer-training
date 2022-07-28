gigya.accounts.getAccountInfo({ 
    include:"groups", 
    callback: function(oResponse){
        var lockEmail = false;
        try{ 
            if(oResponse.groups.organizations.length > 0){
               lockEmail = true;         
            }
        }catch(oErr){}
        $(".emailFieldVisible input").prop( "disabled", lockEmail );   
    }
})