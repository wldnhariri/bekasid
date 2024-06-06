document.getElementById('formFile').addEventListener('change', function (e) {
    var img = document.querySelector('.p-profile');
    img.src = URL.createObjectURL(e.target.files[0]);
}, false);

document.getElementById('formFile2').addEventListener('change', function (e) {
    var img = document.querySelector('.p-profile2');
    img.src = URL.createObjectURL(e.target.files[0]);
}, false);