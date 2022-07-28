gigya.accounts.getAccountInfo(
    {callback: function(oResponse){
        console.error(JSON.stringify(oResponse.profile.firstName));
    }
    }
)