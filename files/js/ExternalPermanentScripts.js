function AddScripts(IDTo){
    console.log(`In AddScripts(${IDTo})`)
    var TheScripts="",
    homeSite="https://hanralatalliardwork.github.io/wolf_escape_home/",
    homeScripts="https://hanralatalliardwork.github.io/My_styling/",
    e=document.getElementById(IDTo).innerHTML;
    console.log(`Vars inintialised:\n TheScripts='${TheScripts}'\nhomeSite='${homeSite}'\nhomeScripts='${homeScripts}'`)
    TheScripts+='\n    <script type="text/JavaScript" src="'+homeScripts+'files/js/cookie_dealing.js"></script>\n';
    TheScripts+='    <script type="text/JavaScript" src="'+homeScripts+'files/customisation/js/show_hide_id.js"></script>\n';
    TheScripts+='    <script type="text/JavaScript" src="'+homeScripts+'files/js/dark_light.js"></script>\n';
    TheScripts+='    <script type="text/JavaScript" src="'+homeSite+'files/customisation/js/head.js"></script>\n';
    TheScripts+='    <script type="text/JavaScript" src="'+homeSite+'files/customisation/js/BodyHeader.js"></script>\n';
    // TheScripts+='    <script type="text/JavaScript" src="'+homeScripts+'files/js/apply_d_l_from_theme.js"></script>\n';
    console.log("TheScripts has been loaded with info.\n e='"+e+"'")
    e+=TheScripts;
    document.getElementById(IDTo).innerHTML=e;
    console.log(`The content of e has been written.\nCalling bootThemeHead(${IDTo})`)
    bootThemeHead(IDTo);
    console.log(`The function bootThemeHead(${IDTo}) was called successefully.`)
}

function bootThemeHead(IDTo){
    var TheHead="",
    e=document.getElementById(IDTo).innerHTML;
    console.log(`The vars have been initialised.\nTheHead='${TheHead}'\ne='${e}'`)
    TheHead+='\n'
    TheHead+='    <meta charset="utf-8">\n';
    TheHead+='    <meta lang="eng">\n';
    TheHead+='    <meta id="theme">\n';
    TheHead+='    <meta id="theHead">\n';
    TheHead+='    <script type="text/JavaScript">initialiseHeader("theHead",2);</script>\n';
    TheHead+='    <link rel="stylesheet" href="css/stylesheet.css">\n';
    TheHead+='    <link rel="stylesheet" href="https://hanralatalliardwork.github.io/My_styling/files/css/toggle.css"></link>\n';
    console.log("TheHead has been loaded")
    e+=TheHead;
    document.getElementById(IDTo).innerHTML=e;
    console.log("TheHead has been added to e and e has been written in the body of the page.")
}

function bootScripts(IDTo){
    console.log(`bootScripts(${IDTo}) has sucessefully been called.`)
    var BootScripts="",
    e=document.getElementById(IDTo).innerHTML;
    console.log("Vars initialised.")
    BootScripts+='\n    <script type="text/JavaScript">writeBodyHeader("header");</script>\n';
    BootScripts+='    <script type="text/JavaScript">initialiseTheme("theme","darkOrLight",\'https://hanralatalliardwork.github.io/wolf_escape_home/\',\'files/customisation/css/boostrap_dark.css\',\'files/customisation/css/bootstrap.css\');</script>\n';
    // BootScripts+='    <script type="text/JavaScript">UpdateTheme();</script>\n';
    BootScripts+='    <!-- Place this tag in your head or just before your close body tag. -->\n';
    BootScripts+='    <script async defer src="https://buttons.github.io/buttons.js"></script>\n';
    BootScripts+='    <script type="text/JavaScript">writeBodyHeader("header");</script>'
    e+=BootScripts;
    console.log("BootScripts written into e")
    document.getElementById(IDTo).innerHTML=e;
    console.log("e written into page")
}