class blueElement{ 
    constructor(ID){
        this.elem = document.getElementById(ID);
        this.ID = ID;
        this.elem.setAttribute()
    }

    setPosition(x=null, y=null){
        if(x != null){
            this.elem.style.transformStyle = ""
        }
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function addBodyClass(name){
    document.body.classList.add(name)
}

function rmBodyClass(name){
    document.body.classList.remove(name)
}

const MOTDs = ["i like to make stuff.", "embrace the nonstandard.","make cool stuff."]
const shortenedMOTDs = ["make cool stuff.", "nonstandard.","make cool stuff."]
const MOTDselector = Math.floor(Math.random() * MOTDs.length)
const MOTD = MOTDs[MOTDselector]
const shortenedMOTD = shortenedMOTDs[MOTDselector]
document.title = ".blue | " + shortenedMOTD;
document.getElementById("test").innerText = MOTD;
console.log(MOTD)
delay(1500).then(() => {rmBodyClass("preMainScreen")});