/**
 * Created by STDev031 on 10/9/2018.
 */

var isOpened = false;
const dropLabel = document.getElementById('drop-label');
const dropdown = document.getElementById('advanced-options');
dropLabel.onclick = function() {
    if(!isOpened) {
        dropdown.style.display = "block";
        isOpened = true;
    }
    else {
        dropdown.style.display = "none";
        isOpened = false;
    }
};