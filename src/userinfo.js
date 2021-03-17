let nameofuser = sessionStorage.getItem("user_name_is");
let score = sessionStorage.getItem("point");

document.querySelector(".name").innerHTML = " " + nameofuser;
document.querySelector(".points").innerHTML = score + "/5";