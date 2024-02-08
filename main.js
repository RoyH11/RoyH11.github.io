window.onload = function() {
    var dropdownButton = document.getElementById('dropdownButton');
    var navList = document.getElementById('navList');

    dropdownButton.addEventListener('click', function() {
        var display = window.getComputedStyle(navList).display;
        
        if (display == 'none') {
            navList.style.display = 'block';
        } else {
            navList.style.display = 'none';
        }
    });
};