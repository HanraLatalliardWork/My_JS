function AddScripts(IDTo){
    var TheScripts="",
    homeSite="https://hanralatalliardwork.github.io/wolf_escape_home/",
    homeScripts="https://hanralatalliardwork.github.io/My_styling/",
    e=document.getElementById(IDTo).innerHTML;
    TheScripts+='    <script type="text/JavaScript" src="'+homeScripts+'files/js/cookie_dealing.js"></script>\n';
    TheScripts+='    <script type="text/JavaScript" src="'+homeSite+'files/customisation/js/script.js"></script>\n';
    TheScripts+='    <script type="text/JavaScript" src="'+homeScripts+'files/js/dark_light.js"></script>\n';
    TheScripts+='    <script type="text/JavaScript" src="'+homeSite+'files/customisation/js/head.js"></script>\n';
    TheScripts+='    <script type="text/JavaScript" src="'+homeSite+'files/customisation/js/BodyHeader.js"></script>\n';
    TheScripts+='    <script type="text/JavaScript" src="'+homeScripts+'files/js/apply_d_l_from_theme.js"></script>\n';
    e+=TheScripts;
    document.getElementById(IDTo).innerHTML=e;
    bootThemHead(IDTo);
}

function bootThemHead(IDTo){
    var TheHead="",
    e=document.getElementById(IDTo).innerHTML;
    TheHead+='    <meta charset="utf-8">\n';
    TheHead+='    <meta lang="eng">\n';
    TheHead+='    <meta id="theme">\n';
    TheHead+='    <meta id="theHead">\n';
    TheHead+='    <script type="text/JavaScript">initialiseHeader("theHead",2);</script>\n';
    TheHead+='    <link rel="stylesheet" href="files/customisation/css/stylesheet.css">\n';
    TheHead+='    <link rel="stylesheet" href="https://hanralatalliardwork.github.io/My_styling/files/css/toggle.css"></link>\n';
    e+=TheHead;
    document.getElementById(IDTo).innerHTML=e;
}

function bootScripts(IDTo){
    var BootScripts="",
    e=document.getElementById(IDTo).innerHTML;
    BootScripts+='    <script type="text/JavaScript">writeBodyHeader("header");</script>\n';
    BootScripts+='    <script type="text/JavaScript">initialiseTheme("theme","darkOrLight",\'https://hanralatalliardwork.github.io/wolf_escape_home/\',\'files/customisation/css/boostrap_dark.css\',\'files/customisation/css/bootstrap.css\');</script>\n';
    BootScripts+='    <script type="text/JavaScript">UpdateTheme();</script>\n';
    BootScripts+='    <!-- Place this tag in your head or just before your close body tag. -->\n';
    BootScripts+='    <script async defer src="https://buttons.github.io/buttons.js"></script>\n';
    e+=BootScripts;
    document.getElementById(IDTo).innerHTML=e;
}