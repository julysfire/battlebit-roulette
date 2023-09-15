function startRandom(option){
    if(option == 'new'){
        getRandomLoadout(jsonData, validData);
    }else if(option == 'first'){
        rerollMain(jsonData, validData);
    }else if(option == 'second'){
        rerollSec(jsonData, validData);
    }
}

function getRandomLoadout(jsonData, validData){
    document.getElementById("getRandomButt").disabled = true;
    document.getElementById("mainWepHolder").hidden = false;
    document.getElementById("secWepHolder").hidden = false;
    document.getElementById("nothingImg").hidden = true;

    //Unhide
    unhideRows('b');

    //Get options and build weapon list
    var weaponList = getWepList(jsonData);

    if(weaponList.length == 0){
        nothingHere();
        return;
    }

    //Get Random weapons
    main_wep = weaponList[Math.floor(Math.random() * weaponList.length)];
    sec_wep = jsonData["secondary_weps"][Math.floor(Math.random() * jsonData["secondary_weps"].length)];

    easterCheck(main_wep);

    var wepAttachmentsMain = validateWeapon(main_wep, 'main', jsonData, validData);
    var wepAttachmentsSec = validateWeapon(sec_wep, 'sec', jsonData, validData);

    //Apply all to page
    applyToPage(wepAttachmentsMain, 'main', main_wep);
    applyToPage(wepAttachmentsSec, 'sec', sec_wep);

    hideRows('b');

    document.getElementById("getRandomButt").disabled = false;
    document.getElementById("rerollMainButt").disabled = false;
    document.getElementById("rerollSecButt").disabled = false;
}

//Functions for randoms
function getMainScopes(jsonData){
    var randScopeId = jsonData["scopes_id"][Math.floor(Math.random() * jsonData["scopes_id"].length)];

    if(randScopeId == "iron"){
        return ["Ironsights", null, null];
    }else{
        var scope_main_list = jsonData["scopes_main"][randScopeId];
        
        var scope_main = scope_main_list[Math.floor(Math.random() * scope_main_list.length)];
        var scope_canted = jsonData["scopes_canted"][Math.floor(Math.random() * jsonData["scopes_canted"].length)];
        var scope_top = null;
        if(randScopeId == "medium" || randScopeId == "long"){
            scope_top = jsonData["scopes_top"][Math.floor(Math.random() * jsonData["scopes_top"].length)];
        }

        return [scope_main, scope_canted, scope_top]
    }
}

function rerollMain(jsonData, validData){
    var wepList = getWepList(jsonData);

    if(wepList.length == 0){
        nothingHere();
        return;
    }

    unhideRows('m');

    //Get random weapon, validate and attach to page
    var main_wep = wepList[Math.floor(Math.random() * wepList.length)];
    var wepAttachmentsMain = validateWeapon(main_wep, 'main', jsonData, validData);
    applyToPage(wepAttachmentsMain, 'main', main_wep);    
    hideRows('m');
}

function rerollSec(jsonData, validData){
    unhideRows('s');

    //Get random weapon, validate and attach to page
    var sec_wep = jsonData["secondary_weps"][Math.floor(Math.random() * jsonData["secondary_weps"].length)];
    var wepAttachmentsSec = validateWeapon(sec_wep, 'sec', jsonData, validData);
    applyToPage(wepAttachmentsSec, 'sec', sec_wep);
    hideRows('s');
}

function getWepList(jsonData){
    var wList = [];

    if(document.getElementById("arCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["ar"].length; i++) {
            wList.push(jsonData["main_weps"]["ar"][i]);
        }
    }
    if(document.getElementById("smgCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["smg"].length; i++) {
            wList.push(jsonData["main_weps"]["smg"][i]);
        }
    }
    if(document.getElementById("pdwCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["pdw"].length; i++) {
            wList.push(jsonData["main_weps"]["pdw"][i]);
        }
    }
    if(document.getElementById("carbineCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["carbine"].length; i++) {
            wList.push(jsonData["main_weps"]["carbine"][i]);
        }
    }
    if(document.getElementById("lsgCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["lsg"].length; i++) {
            wList.push(jsonData["main_weps"]["lsg"][i]);
        }
    }
    if(document.getElementById("lmgCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["lmg"].length; i++) {
            wList.push(jsonData["main_weps"]["lmg"][i]);
        }
    }
    if(document.getElementById("dmrCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["dmr"].length; i++) {
            wList.push(jsonData["main_weps"]["dmr"][i]);
        }
    }
    if(document.getElementById("sniperCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["sniper"].length; i++) {
            wList.push(jsonData["main_weps"]["sniper"][i]);
        }
    }

    return wList;
}

function validateWeapon(wep, wep_type, jsonData, validData){
    var validWepAttachments = validData[wep];
    var validator = true;
    var wepAttachments = [];

    if(wep_type == 'main'){
        //Scopes
        while(validator){
            var mainScopes = getMainScopes(jsonData);
            for(var i = 0; i < mainScopes.length; i++){
                if(mainScopes[i] != null){
                    if(validWepAttachments.includes(mainScopes[i])){
                        validator = false;
                    }else{
                        validator = true;
                        break;
                    }
                }
            }
        }
        validator = true;
        wepAttachments.push(mainScopes[0]);

        var cantedScope = null;
        var topScope = null;
    
        if(mainScopes[1] != null && mainScopes[0] != "Ironsights"){
            cantedScope = mainScopes[1];
        }
        if(mainScopes[2] != null && ["1 P78", "Echo", "T R I4 X32", "Burris A R332"].includes(mainScopes[0]) == false){
            topScope = mainScopes[2];
        }

        wepAttachments.push(cantedScope);
        wepAttachments.push(topScope);
    }else{
        //Scopes
        while(validator){
            var secondaryScope = jsonData["scopes_secondary"][Math.floor(Math.random() * jsonData["scopes_secondary"].length)];
            if(validWepAttachments.includes(secondaryScope)){
                validator = false;
            }else{
                validator = true;
            }
        }
        validator = true;
        wepAttachments.push(secondaryScope);
        wepAttachments.push(null);
        wepAttachments.push(null);
    }

    //Barrel
    while(validator){
        var barrel = jsonData["barrels"][Math.floor(Math.random() * jsonData["barrels"].length)];
        if(validWepAttachments.includes(barrel)){
            validator = false;
        }else{
            validator = true;
        }
    }
    validator = true;
    wepAttachments.push(barrel);

    //Get random grip
    while(validator){
        var grip = jsonData["grips"][Math.floor(Math.random() * jsonData["grips"].length)];
        if(validWepAttachments.includes(grip)){
            validator = false;
        }else{
            validator = true;
        }
    }
    validator = true;
    wepAttachments.push(grip);

    while(validator){
        var sideRail = jsonData["side_rails"][Math.floor(Math.random() * jsonData["side_rails"].length)];
        if(validWepAttachments.includes(sideRail)){
            validator = false;
        }else{
            validator = true;
        }
    }
    validator = true;
    wepAttachments.push(sideRail);

    while(validator){
        var mags = jsonData["magazines"][Math.floor(Math.random() * jsonData["magazines"].length)];
        if(validWepAttachments.includes(mags)){
            validator = false;
        }else{
            validator = true;
        }
    }
    validator = true;
    wepAttachments.push(mags);

    if(wep == "SSG 69" || wep == "SV-98" || wep == "L96" || wep == "Rem700" || wep == "M200" || wep == "MSR"){
        while(validator){
            var bolt = jsonData["bolts"][Math.floor(Math.random() * jsonData["bolts"].length)];
            if(validWepAttachments.includes(bolt)){
                validator = false;
            }else{
                validator = true;
            }
        }
        validator = true;
        wepAttachments.push(bolt);
    }else{
        wepAttachments.push(null);
    }

    return wepAttachments;
}

function applyToPage(wepAttachments, wepType, wep_name){
    var wepNameClean = wep_name.replace(" ","").toLowerCase();

    if(wepType == 'main'){
        //Weapon name
        document.getElementById('randomWepMain').innerHTML = wep_name;
        
        //Scopes
        document.getElementById('randomMainScopes').innerHTML = wepAttachments[0];

        if(wepAttachments[1] != null){
            document.getElementById('randomMainCanted').innerHTML = wepAttachments[1];
        }else{
            document.getElementById('randomMainCanted').innerHTML = "";
        }

        if(wepAttachments[2] != null){
            document.getElementById('randomMainTop').innerHTML = wepAttachments[2];
        }else{
            document.getElementById('randomMainTop').innerHTML = "";
        }

        //Barrel
        document.getElementById('randomMainBarrel').innerHTML = wepAttachments[3];

        //Grip
        document.getElementById('randomMainGrip').innerHTML = wepAttachments[4];

        //Side Rails
        document.getElementById('randomMainSide').innerHTML = wepAttachments[5];

        //Mag
        document.getElementById('randomMainMag').innerHTML = wepAttachments[6];

        //Bolt
        if(wepAttachments[7] != null){
            document.getElementById('randomMainBolt').innerHTML = wepAttachments[7];
        }else{
            document.getElementById('randomMainBolt').innerHTML = "";
        }

        document.getElementById('mainWepImg').src = "imgs/" + wepNameClean + ".png" 
    }else{
        //Weapon Name
        document.getElementById('randomWepSec').innerHTML = wep_name;

        //Scopes
        document.getElementById('randomSecScope').innerHTML = wepAttachments[0];

        //Barrel
        document.getElementById('randomSecBarrel').innerHTML = wepAttachments[3];

        //Side Rails
        document.getElementById('randomSecSide').innerHTML = wepAttachments[5];

        //Mag
        document.getElementById('randomSecMag').innerHTML = wepAttachments[6];

        document.getElementById('secWepImg').src = "imgs/" + wepNameClean + ".png" 
    }
}

function unhideRows(opt){
    if(opt == 'm' || opt == 'b'){
        var wepTable = document.getElementById("mainWepTable").children[0].children;
        for(var i = 0; i < wepTable.length; i++){
            if(wepTable[i].tagName == 'TR'){
                if(wepTable[i].hidden == true){
                    wepTable[i].hidden = false;
                }
            }
        }
    }
    if(opt == 's' || opt == 'b'){
        var wepTableSec = document.getElementById("secWepTable").children[0].children;
        for(var i = 0; i < wepTableSec.length; i++){
            if(wepTableSec[i].tagName == 'TR'){
                if(wepTableSec[i].hidden == true){
                    wepTableSec[i].hidden = false;
                }
            }
        }
    }
}

function hideRows(opt){
    //Hide rows when needed
    if(opt == 'm' || opt == 'b'){
        var wepTable = document.getElementById("mainWepTable").children[0].children;
        for(var i = 0; i < wepTable.length; i++){
            if(wepTable[i].tagName == 'TR'){
                if(wepTable[i].children[1].innerHTML == "" || wepTable[i].children[1].innerHTML == "None"){
                    wepTable[i].hidden = true;
                }
            }
        }
    }
    if(opt == 's' || opt == 'b'){
        var wepTableSec = document.getElementById("secWepTable").children[0].children;
        for(var i = 0; i < wepTableSec.length; i++){
            if(wepTableSec[i].tagName == 'TR'){
                if(wepTableSec[i].children[1].innerHTML == "" || wepTableSec[i].children[1].innerHTML == "None"){
                    wepTableSec[i].hidden = true;
                }
            }
        }
    }
}

function nothingHere(){
    document.getElementById("nothingImg").src = "imgs/you-get-nothing.gif";
        
    document.getElementById("mainWepHolder").hidden = true;
    document.getElementById("secWepHolder").hidden = true;
    document.getElementById("nothingImg").hidden = false;

    document.getElementById("getRandomButt").disabled = false;
    document.getElementById("rerollMainButt").disabled = true;
    document.getElementById("rerollSecButt").disabled = true;
}

async function getData(){
    const response = await fetch('/data');
    const data = await response.json();
    return JSON.parse(data);
}

async function getValid(){
    const response = await fetch('/valid');
    const data = await response.json();
    return JSON.parse(data);
}

function easterCheck(wep){
    
    
    if(wep == "SSG 69" || wep == "SV-98" || wep == "L96" || wep == "Rem700" || wep == "M200" || wep == "MSR"){
        document.getElementById("easterImg").src = "imgs/glint.png";
    }else if(wep == "MG36" || wep == "L86A1" || wep == "M249" || wep == "Ultimax100"){
        document.getElementById("easterImg").src = "imgs/turtle.png";
    }else{
        document.getElementById("easterImg").src = "";
    }
}