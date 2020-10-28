
let textContainer = document.getElementById('textContainer');
let todoCloser = document.getElementById('close');
let opener = document.getElementById('secret');

opener.addEventListener('click', function() {
    localStorage.setItem('data', textContainer.value);
})


todoCloser.addEventListener('click', function() {
    textContainer.value = localStorage.getItem('data');
})

todoCloser.addEventListener('dblclick', function() {
    textContainer.value = "";
})






