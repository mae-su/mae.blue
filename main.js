document.title = ".blue | nonstandard.";
let pageInitTime = new Date();
const STREAM_TIMING = 5000;

function introComplete() {
  let currentTime = new Date();
  return (currentTime - pageInitTime >= STREAM_TIMING);
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
z}

function addBodyClass(name) {
  document.body.classList.add(name)
}

function rmBodyClass(name) {
  document.body.classList.remove(name)
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'd' || event.key === 'D') {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  }
});

async function fetchHTMLWithProgress(url) {
  return new Promise((resolve, reject) => {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open("GET", url, true);

    // Set the expected response type to 'text' as we're fetching HTML
    xhr.responseType = "text";

    // Event listener for progress
    xhr.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        // Calculate and show the percentage
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        console.log(`Loading: ${percentComplete}%`);
      } else {
        console.log("Loading...");
      }
    });

    // Event listener for when the request is completed
    xhr.addEventListener("load", () => {
      resolve(xhr.response);
    });

    // Event listener for request errors
    xhr.addEventListener("error", () => {
      reject(new Error("There was a network error."));
    });

    // Send the request
    xhr.send();
  });
}

async function loadSiteContent(stream_div){
  const fetchedHTML = await fetchHTMLWithProgress("./content/stream.html");
  if (introComplete()) {
    stream_div.innerHTML += fetchedHTML;
  } else {
    let remainingTime = STREAM_TIMING - (new Date() - pageInitTime);
    console.log(`Time to inject: ${remainingTime}`);
    setTimeout(() => {
      stream_div.innerHTML += fetchedHTML;
    }, remainingTime);
  }
}

document.addEventListener('DOMContentLoaded', async function () {
  if (localStorage.getItem('darkMode') === 'enabled') {
    addBodyClass('dark-mode');
    console.log('Restored dark mode preference.')
  } else if (localStorage.getItem('darkMode') === 'disabled') {
    rmBodyClass('dark-mode')
    console.log('Restored light mode preference.')
  } else if (!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    addBodyClass('dark-mode')
    console.log('Dark mode preference preferred.')
  }
  const DEBUG = String(document.location.href).includes('debug.html');
  var stream_div = document.getElementById('stream')
  if (DEBUG) {
    window.onerror = function (error) { document.title = ".blue | error"; };
    console.log('Debug mode detected.')
    if (String(document.location.href).includes('inject')) {
      console.log('-- Simulating injection --')
      document.title = ".b | simulating injection";
      console.log('- Removing \'stream\' elements.')
      stream_div.innerHTML = ''
      console.log('- Attempting to fetch ./content/stream.html')
      await loadSiteContent(stream_div)
    }
  } else{
    loadSiteContent(stream_div)
  }

}, false);
