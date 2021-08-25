const email = document.getElementById('email');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const pword = document.getElementById('password');
fname.addEventListener('input', function () {
	if (fname.validity.valueMissing){
		fname.setCustomValidity('First name cannot be empty');
	}
	else {fname.setCustomValidity('');};
})
lname.addEventListener('input', function () {
 if(lname.validity.valueMissing) {
	lname.setCustomValidity('Last name cannot be empty');
} else {
	lname.setCustomValidity('');
}
})
email.addEventListener('input', function () {
	if (email.validity.typeMismatch) {
		email.setCustomValidity('Looks like this is not an email');
		
	} else{ email.setCustomValidity('');};
})
pword.addEventListener('input', function () {
	if(pword.validity.valueMissing) {
		pword.setCustomValidity('Password cannot be empty')
	}
})

