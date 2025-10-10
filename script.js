const isEmailValid = (email) =>{
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

const emailInput = document.querySelector("input");
const subscribeBtn = document.querySelector("#subBtn");

emailInput.addEventListener("input", function(){
	 
	 const email = this.value;

	 if(isEmailValid(email)){
	 	subscribeBtn.style.background = "linear-gradient(to right, #FF6A3A, #FF527B)";
	 	subscribeBtn.style.boxShadow = "0px 16px 32px rgba(255, 97, 85, 0.5)";
	 }else {
	 	subscribeBtn.style.background = "#242742";
	 	subscribeBtn.style.boxShadow = "none";
	 }
});

const form = document.querySelector("form");
const modal = document.querySelector('.modal');
const emailError = document.querySelector(".email-error");

function handleSubmit(e) {
  e.preventDefault();
  const field = e.target.querySelector("input");
  if(isEmailValid(field.value)){
  	modal.style.display = 'block';
  	//capture email value and fit in success state
  	const successEmail = document.querySelector(".success-email");
  	successEmail.innerHTML = field.value;
  	form.reset();
  	subscribeBtn.style.background = "#242742";
  	subscribeBtn.style.boxShadow = "none";
  }else{
  	emailError.style.display = "inline";
  	emailInput.style.border = "1px solid red";
  	emailInput.style.color = "#FF6155";
  }
}
form.addEventListener('submit', handleSubmit);

//Remove error state after wrong email try.Better usability.
emailInput.addEventListener("click", function(){
	emailError.style.display = "none";
	emailInput.style.border = "1px solid #242742";
	emailInput.style.color = "unset";
})

const dismissBtn = document.querySelector(".dismissBtn");
dismissBtn.addEventListener("click", function(){
	modal.style.display = "none";
})
