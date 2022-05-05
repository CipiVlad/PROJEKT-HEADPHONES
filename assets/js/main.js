

function hitsubscribe() {
    let confirm = document.getElementById('confirmation');
    confirm.innerHTML = 'Your Email has been successfully confirmed.';

    let thx = document.getElementById('thx');
    thx.innerHTML = 'Thank you!';
    thx.style.fontSize = '1rem';

    let plsclick = document.getElementById('pleaseclick');
    plsclick.innerHTML = 'Glad to have you on board!';

    let email = document.getElementById('email');
    email.style.visibility = 'hidden';

    let button = document.getElementById('email').value;
    document.getElementById("button").style.visibility = 'hidden';

    let buttonBack = document.getElementById('backToheader');
    document.getElementById('backToheader').style.visibility = 'visible';

}

function hitBack() {
    let buttonBack = document.getElementById('backToheader');
    document.getElementById('header').scrollIntoView();
    document.getElementById('backToheader').style.visibility = 'visible';
    console.log(button);
}