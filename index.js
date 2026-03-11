// Yoinked from https://www.w3schools.com/howto/howto_js_draggable.asp <3
dragElement(document.getElementById("draggableWindow"));
dragElement(document.getElementById("draggableWindowAboutMe"));
dragElement(document.getElementById("draggableWindowAndroidWarning"));

// Currently unused elements. To be used in the future.
// dragElement(document.getElementById("draggableWindowTerminal"));

function dragElement(elmnt){
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if(document.getElementById(elmnt.id + "Header")){
        // If the header exists, we move from that.
        document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
    } else {
        // Or, we move it from anywhere in the div.
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e){
        e = e || window.event;
        e.preventDefault();

        // Get cursor position (important)
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;

        // Call whenever cursor moves.
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        
        // Calculate new pos!
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // Set the actual windows new position.
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // And stop on mouse release! Obviously!
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// For making windows show on top regardless of where clicked.
var highestZ = 5;

function bringToFront(elmnt){
    // Raise zIndex on top to make it pop above.
    // Works like a windows 95 window!
    highestZ++;
    elmnt.style.zIndex = highestZ;
}

function updateClock(){
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('taskbarClock').textContent = h + ':' + m;
}
setInterval(updateClock, 1000);
updateClock();

function closeWindow(windowId) {
  document.getElementById(windowId).style.display = "none";
}

function openWindow(windowId) {
    document.getElementById(windowId).style.display = "block";
}

function toggleStartMenu() {
  document.getElementById('startMenu').classList.toggle('hidden');
}

document.addEventListener('click', (e) => {
  const menu = document.getElementById('startMenu');
  const btn = document.getElementById('startBtn');
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.add('hidden');
  }
});