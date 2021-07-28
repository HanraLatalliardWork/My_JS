function checkTheme(CookieName,listOfIDsToEdit,DictOfCodesToApply){
    currentTheme=readCookie(CookieName).toLowerCase();
    console.log("currentTheme="+currentTheme);
    console.log("CookieName="+CookieName);
    for (var i=0;i<listOfIDsToEdit.length;i++){
        document.getElementById(listOfIDsToEdit[i]).innerHTML=DictOfCodesToApply[currentTheme][listOfIDsToEdit[i]];
    }
}