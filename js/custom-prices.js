document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myForm1').style.display = 'block';
    document.getElementById('myForm2').style.display = 'none';
    

    // Thêm sự kiện click cho nút "Cá nhân"
    document.getElementById('showFormBtn1').addEventListener('click', function () {
        handlePersonalButton();
    });

    // Thêm sự kiện click cho nút "Công ty"
    document.getElementById('showFormBtn2').addEventListener('click', function () {
        handleCompanyButton();
    });

    document.getElementById('showFormBtn1').classList.add('active');
});

document.getElementById('showFormBtn1').addEventListener('click', function () {
    toggleForm('myForm1');
    hideForm('myForm2');
});

document.getElementById('showFormBtn2').addEventListener('click', function () {
    toggleForm('myForm2');
    hideForm('myForm1');
});

function toggleForm(formId) {
    var form = document.getElementById(formId);
    form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
}

function hideForm(formId) {
    var form = document.getElementById(formId);
    form.style.display = 'none';
}

function handlePersonalButton() {
    document.getElementById('showFormBtn1').classList.add('active');
    document.getElementById('showFormBtn2').classList.remove('active');
}

function handleCompanyButton() {
    document.getElementById('showFormBtn1').classList.remove('active');
    document.getElementById('showFormBtn2').classList.add('active');
}
