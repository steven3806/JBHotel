var nameElement = document.getElementById("username");
var emailElement = document.getElementById("useremail");
var feedbackElement = document.getElementById("feedback");
function processFormData() {
const name = nameElement.value;
const email = emailElement.value;
const feedback = feedbackElement.value;
if (name=="") {
    alert("請輸入姓名");
}
else if (email=="") {
    alert("請輸入email");
}
else if (feedback=="") {
    alert("請輸入意見");
} 
else {
    alert("謝謝" + name + "的回饋，我們將盡快透過email:" + email + "與您聯繫!");
}
nameElement.value = '';
emailElement.value = '';
feedbackElement.value = '';
}   
