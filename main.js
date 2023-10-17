// Listen for keydown events on the document
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'D'
    if (event.key === 'd' || event.key === 'D') {
      // Toggle the "dark-mode" class on the body element
      document.body.classList.toggle('dark-mode');
    }
  });
  

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

document.addEventListener('DOMContentLoaded', function() {
  
}, false);