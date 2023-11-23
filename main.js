document.getElementById('dropdownButton').addEventListener('click', function() {
    var navList = document.getElementById('navList');
    if (navList.style.display === 'none') {
        navList.style.display = 'block';
    } else {
        navList.style.display = 'none';
    }
});