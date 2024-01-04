// script.js

document.addEventListener('DOMContentLoaded', function() {
    var teleportButton = document.getElementById('teleportButton');

    teleportButton.addEventListener('mouseover', function() {
        var newX = Math.random() * window.innerWidth - teleportButton.clientWidth;
        var newY = Math.random() * window.innerHeight - teleportButton.clientHeight;

        // Ensure the button stays within the viewport
        newX = Math.max(0, newX);
        newY = Math.max(0, newY);

        teleportButton.style.position = 'absolute';
        teleportButton.style.left = newX + 'px';
        teleportButton.style.top = newY + 'px';
    });
});
