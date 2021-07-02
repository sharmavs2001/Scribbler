/* Open signIn Modal*/

var signInModal = document.getElementById('signInModal');
var signIn = document.getElementById('signInBtn');
signIn.onclick = function() { signInModal.style.display = "block"; }


/* Close signIn Modal*/
var signInCross = document.getElementsByClassName('close')[0];
signInCross.onclick = function() { signInModal.style.display = "none"; }


/* Open signUp Modal*/
var signUpModal = document.getElementById('signUpModal');
var signUp = document.getElementById('signUpBtn');
signUp.onclick = function() { signUpModal.style.display = "block"; }

/* Close signIn Modal*/
var signUpCross = document.getElementsByClassName('close')[1];
signUpCross.onclick = function() { signUpModal.style.display = "none"; }


/* Open signIn Modal using Bottom bannner*/
var signUpBottom = document.getElementsByClassName('signUpBottom')[0];
signUpBottom.onclick = function() {
    signInModal.style.display = "none";
    signUpModal.style.display = "block";

}