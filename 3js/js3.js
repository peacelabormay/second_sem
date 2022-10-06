
let view = document.querySelector('.modal');//модальное окно

//открытие окна по нажатию кнопки
document.getElementById('open').onclick = function () {
    document.body.style.overflow='hidden';
    view.classList.add('show');
}

//закрытие окна при нажатии кнопки
document.getElementById('close').onclick = function () {
    document.body.style.overflow='';
    view.classList.remove('show');
}

//закрытие окна при нажатии вне его
view.addEventListener('click', function (event) {
    //var target = event.target;
    var menu = document.querySelector('.modal-content');

    if (!menu.contains(event.target)) {
        view.classList.remove('show');
        //console.log('work');
    }
});


const email = document.getElementById("mail"),
pass=document.getElementById("pass"),
agree = document.getElementById("agree"),
agreePers = document.getElementById("agree_pers");


email.addEventListener('blur', function(event)
{
    switch(true) {
        case email.validity.valueMissing:
            email.setCustomValidity("Заполните поле!");
            break;
        case email.validity.typeMismatch:
            email.setCustomValidity("Неправильный адрес электронной почты");
            break;
        default: 
            email.setCustomValidity("");
    }
    email.reportValidity();
}
);


pass.addEventListener('blur', function()
{
    switch(true) {
        case pass.validity.valueMissing:
            pass.setCustomValidity("Заполните поле!");
            break;
        case pass.validity.tooShort:
            pass.setCustomValidity("Пароль слишком короткий! Не меньше 6 символов!");
            break;
        case pass.validity.tooLong:
            pass.setCustomValidity("Пароль слишком длинный! Не больше 20 символов!");
            break;
        default: 
            pass.setCustomValidity("");
    }
    pass.reportValidity();
}
);

//отмена действия по умолчанию - отправка формы на сервер и вывод данных формы в консоль

const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const data = {
        email: email.value,
        password: pass.value,
        agreement: agree.checked,
        agreement_person: agreePers.checked
    }
    console.table(data);
}
);
 