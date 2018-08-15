
var _1stName1 = "";
var _1stName2 = "";
var _2ndName1 = "";
var _2ndName2 = "";
var _happyDay = "";
var _happyPlace = "";

function fieldChanged(element, value) {
    // var outputElement = element + "_Output";
    switch(element) {   
        case "person1FirstName":
        _1stName1 = value;
        updateInitials();
        updateFirstNames(); 
            break;
        case "person2FirstName":
        _1stName2 = value;
        updateInitials();
        updateFirstNames();
            break;
        case "person1LastName":
        _2ndName1 = value;
        updateLastNames();
            break;
        case "person2LastName":
        _2ndName2 = value;
        updateLastNames();
            break;
        case "date":
        _happyDay = value;
        updateDate();
            break;
        case "location":
        _happyPlace = value;
        updateLocation();
            break;
        default:
            break;
    }
}

function updateInitials() {
    var label = document.getElementById("invitation_initials_label");
    if (_1stName1.length == 0 && _1stName2.length == 0) {
        // output null if blank
        label.innerHTML = "";
        return;
    }
    if (_1stName1.length > 0 && _1stName2.length == 0) {
        // output first letter of _1stName.1 and ampersand
        label.innerHTML = (_1stName1.charAt(0) + " &").toUpperCase();
        return;
    }
    if (_1stName1.length == 0 && _1stName2.length > 0) {
        // output ampersand and first letter of _1stName2
        label.innerHTML = "& " + (_1stName2.charAt(0)).toUpperCase();
        return;
    }
    if (_1stName1.length > 0 && _1stName2.length > 0) {
        // output first letter of _1stName1 and ampersand and first letter of _1stName2
        label.innerHTML = (_1stName1.charAt(0) + " & " + _1stName2.charAt(0)).toUpperCase();
        return;
    }
}

function updateFirstNames() {
    var label = document.getElementById("invitation_firstname_label");
    if (_1stName1.length == 0 && _1stName2.length == 0) {
        // output null if blank
        label.innerHTML = "";
        return;
    }
    if (_1stName1.length > 0 && _1stName2.length == 0) {
        // output _1stName1 and ampersand
        label.innerHTML = _1stName1 + " &";
        return;
    }
    if (_1stName1.length == 0 && _1stName2.length > 0) {
        // output ampersand _1stName2
        label.innerHTML = "& " + _1stName2;
        return;
    }
    if (_1stName1.length > 0 && _1stName2.length > 0) {
        // output _1stName1 and ampersand and _1stName2
        label.innerHTML = _1stName1 + " & " + _1stName2;
        return;
    }
}

function updateLastNames() {
    var label = document.getElementById("invitation_lastname_label");
    if (_2ndName1.length == 0 && _2ndName2.length == 0) {
        // output null if blank
        label.innerHTML = "";
        return;
    }
    if (_2ndName1.length > 0 && _2ndName2.length == 0) {
        // output _2ndName1 and hyphen
        label.innerHTML = _2ndName1 + " -";
        return;
    }
    if (_2ndName1.length == 0 && _2ndName2.length > 0) {
        // output hyphen _2ndName2
        label.innerHTML = "- " + _2ndName2;
        return;
    }
    if (_2ndName1.length > 0 && _2ndName2.length > 0) {
        // output _1stName1 and ampersand and _2ndName2
        label.innerHTML = _2ndName1 + " - " + _2ndName2;
        return;
    }
}

function updateDate() {
    var label = document.getElementById("invitation_date_label");
    if (_happyDay.length == 0) {
        // output null if blank
        label.innerHTML = "";
        return;
    }
    if (_happyDay.length > 0) {
        // output _happyDay
        label.innerHTML = _happyDay;
        return;
    }
}

function updateLocation() {
    var label = document.getElementById("invitation_location_label");
    if (_happyPlace.length == 0) {
        // output null if blank
        label.innerHTML = "";
        return;
    }
    if (_happyPlace.length > 0) {
        // output _happyPlace
        label.innerHTML = _happyPlace;
        return;
    }
}

function selectClassyPreview() {
    // changes preview box to classy
    document.getElementById("display_invitation_preview_box").setAttribute("class", "display_invitation_preview_classy");
}

function selectClassierPreview() {
    // changes preview box to classier
    document.getElementById("display_invitation_preview_box").setAttribute("class", "display_invitation_preview_classier");
}

function selectClassyAFPreview() {
    // changes preview box to classy
    document.getElementById("display_invitation_preview_box").setAttribute("class", "display_invitation_preview_classyAF");
}
