window.onload = function() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        document.getElementById('navList').style.display = 'none';
    }
};

document.getElementById('dropdownButton').addEventListener('click', function() {
    var navList = document.getElementById('navList');
    if (navList.style.display === 'none') {
        navList.style.display = 'block';
    } else {
        navList.style.display = 'none';
    }
});