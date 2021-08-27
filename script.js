console.log('Form Validation');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
// console.log(name, email, phone);

let validName = false;
let validEmail = false;
let validPhone = false;

name.addEventListener('blur', () => {
    // console.log('Name is blurred');

    // Validate name here
    let regex = /^[a-zA-Z]([a-zA-Z0-9]){2,20}$/;
    let str = name.value;
    // console.log(regex, str);

    if (regex.test(str)) {
        // console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validName = true;

    } else {
        // console.log('Your name is invalid');
        name.classList.add('is-invalid');
    }
});

email.addEventListener('blur', () => {
    // console.log('Email is blurred');

    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regex, str);

    if (regex.test(str)) {
        // console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;

    } else {
        // console.log('Your email is invalid');
        email.classList.add('is-invalid');
    }
});

phone.addEventListener('blur', () => {
    // console.log('Phone is blurred');

    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your phone number is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;

    } else {
        // console.log('Your phone number is invalid');
        phone.classList.add('is-invalid');
    }
});


let btn = document.getElementById('submitBtn');
btn.addEventListener('click', (e) => {

    e.preventDefault();

    if (validName && validEmail && validPhone) {
        let alert = document.getElementById('alertSuccess');
        alert.innerHTML = `<div id="alert" class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Great!</strong> Your travel request has been successfully submitted.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                           </div>`;

        setTimeout(() => {
            alert.innerHTML = "";
        }, 3000);

    } else {
        let alert = document.getElementById('alertSuccess');
        alert.innerHTML = `<div id="alert" class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Opps!</strong> Your travel request has not been submitted.
                                <span><strong>Please fill the form correctly.</strong></span>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                           </div>`;

        setTimeout(() => {
            alert.innerHTML = "";
        }, 5000);
    }


});