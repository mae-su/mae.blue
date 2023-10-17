// Listen for keydown events on the document
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'D'
    if (event.key === 'd' || event.key === 'D') {
      // Toggle the "dark-mode" class on the body element
    
      document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
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
console.log(MOTD)

document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('darkMode') === 'enabled') {
    addBodyClass('dark-mode');
    console.log('Restored dark mode preference.')
  } else if(localStorage.getItem('darkMode') === 'disabled'){
    rmBodyClass('dark-mode')
    console.log('Restored light mode preference.')
  } else if (!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      addBodyClass('dark-mode')
      console.log('Dark mode preference preferred.')
    } 
}, false);
