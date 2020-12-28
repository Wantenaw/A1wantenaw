// localStorage
myStorage = window.localStorage;
localStorage.setItem('fName', 'Willem');
localStorage.setItem('lName', 'Wantenaar');
localStorage.setItem('studentId', '991512290');
localStorage.setItem('login', 'WANTENAW');

// declaring variables to be used
let fName = 'Willem';
let lName = 'Wantenaar';
let sID = 991512290;
let username = 'WANTENAW';

// creating function to be called for header information
let headerText = headFunction();
function headFunction() {
    return `${fName} ${lName} / A01 / SYST24444`;
}

// creating array of nato phonetic names and corresponding morse code images
var myData = new Array();
class MyData{
    constructor(letter, element, imgName){
        if (letter >= 1 && letter <=26){
            this.letter = letter;
            this.element = element;
            this.imgName = imgName;
        }
        else{
            
        }
    }
}

// filling table with values
myData.push(new MyData("1", "Alfa", "Alfa.png"));
myData.push(new MyData("2", "Bravo", "Bravo.png"));
myData.push(new MyData("3", "Charlie", "Charlie.png"));
myData.push(new MyData("4", "Delta", "Delta.png"));
myData.push(new MyData("5", "Echo", "Echo.png"));
myData.push(new MyData("6", "Foxtrot", "Foxtrot.png"));
myData.push(new MyData("7", "Golf", "Golf.png"));
myData.push(new MyData("8", "Hotel", "Hotel.png"));
myData.push(new MyData("9", "India", "India.png"));
myData.push(new MyData("10", "Juliett", "Juliett.png"));
myData.push(new MyData("11", "Kilo", "Kilo.png"));
myData.push(new MyData("12", "Lima", "Lima.png"));
myData.push(new MyData("13", "Mike", "Mike.png"));
myData.push(new MyData("14", "November", "November.png"));
myData.push(new MyData("15", "Oscar", "Oscar.png"));
myData.push(new MyData("16", "Papa", "Papa.png"));
myData.push(new MyData("17", "Quebec", "Quebec.png"));
myData.push(new MyData("18", "Romeo", "Romeo.png"));
myData.push(new MyData("19", "Sierra", "Sierra.png"));
myData.push(new MyData("20", "Tango", "Tango.png"));
myData.push(new MyData("21", "Uniform", "Uniform.png"));
myData.push(new MyData("22", "Victor", "Victor.png"));
myData.push(new MyData("23", "Whiskey", "Whiskey.png"));
myData.push(new MyData("24", "Xray", "Xray.png"));
myData.push(new MyData("25", "Yankee", "Yankee.png"));
myData.push(new MyData("26", "Zulu", "Zulu.png"));

// function for a button to toggle the visibility of any lines of Tangos in the html
var toBeAltered = "W";
function search() {
    var serchFor = document.getElementById(toBeAltered);
    if (serchFor.style.display === "none") {
        serchFor.style.display = "block";
    } else {
        serchFor.style.display = "none";
    }
}

// class for holding css changes by tampering button
class ToggleClass{
    constructor(bgColour, textAlteration) {
        this.bgColour = bgColour;
        this.textAlteration = textAlteration;
    }
}
let defaultVar = new ToggleClass("white", "normal");
let toggledVar = new ToggleClass("lightblue", "italic");
//function for a button to tamper with the styling of the list area
function listTamper(){
    var serchFor = document.getElementById("listArea");
    if (serchFor.style.backgroundColor === defaultVar.bgColour) {
        serchFor.style.backgroundColor = toggledVar.bgColour;
        serchFor.style.fontStyle = toggledVar.textAlteration;
    } else {
        serchFor.style.backgroundColor = defaultVar.bgColour;
        serchFor.style.fontStyle = defaultVar.textAlteration;
    }
}




// creating function to be called for footer information
let footerText = footFunction();
function footFunction() {
    return `${sID} / ${username}`;
}
