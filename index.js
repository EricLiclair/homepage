
let textContainer = document.getElementById('textContainer');
let todoCloser = document.getElementById('close');
let opener = document.getElementById('secret');

let githubTrigger = document.getElementById('github-trigger');
let googleTrigger = document.getElementById('google-trigger');
let youtubeTrigger = document.getElementById('youtube-trigger');
let spotifyTrigger = document.getElementById('spotify-trigger');

let githubGraphic = document.getElementById('github');
let googleGraphic = document.getElementById('google');
let youtubeGraphic = document.getElementById('youtube');
let spotifyGraphic = document.getElementById('spotify');

// trigger for github graphic
githubTrigger.addEventListener('mouseover', function() {
    githubGraphic.style.left='-5%';
})

githubTrigger.addEventListener('mouseleave', function() {
    githubGraphic.style.left='-100%';
})

//trigger for google graphic
googleTrigger.addEventListener('mouseover', function() {
    googleGraphic.style.left='-5%';
})

googleTrigger.addEventListener('mouseleave', function() {
    googleGraphic.style.left='-100%';
})

//trigger for youtube graphic
youtubeTrigger.addEventListener('mouseover', function() {
    youtubeGraphic.style.left='-5%';
})

youtubeTrigger.addEventListener('mouseleave', function() {
    youtubeGraphic.style.left='-100%';
})

//trigger for spotify graphic
spotifyTrigger.addEventListener('mouseover', function() {
    spotifyGraphic.style.left='-5%';
})

spotifyTrigger.addEventListener('mouseleave', function() {
    spotifyGraphic.style.left='-100%';
})








opener.addEventListener('click', function() {
    if(textContainer.value == "") {
        return ;
    }
    localStorage.setItem('data', textContainer.value);
})


todoCloser.addEventListener('click', function() {
    textContainer.value = "";
})

todoCloser.addEventListener('dblclick', function() {
    textContainer.value = localStorage.getItem('data');
})






