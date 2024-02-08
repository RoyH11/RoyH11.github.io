window.onload = function() {
    var dropdownButton = document.getElementById('dropdownButton');
    var navList = document.getElementById('navList');
    navList.style.display = 'none';

    dropdownButton.addEventListener('click', function() {
        var display = navList.style.display;
        
        if (display == 'none') {
            navList.style.display = 'block';
        } else {
            navList.style.display = 'none';
        }
    });
};