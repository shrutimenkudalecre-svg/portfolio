document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();
document.getElementById("responseMessage").innerText="Thank you! Your message has been received.";
this.reset();
});