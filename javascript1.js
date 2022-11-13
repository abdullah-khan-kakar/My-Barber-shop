var s = document.getElementById("text");
var t = document.getElementById("list");
var a = document.getElementById("image");
var b = document.getElementById("onepic");
var c = document.getElementById("image");
var d = document.getElementById("twopic");
var e = document.getElementById("image");
var g = document.getElementById("threepic");
var h = document.getElementById("image");
var i = document.getElementById("fourpic");
function f1(){
    a.innerHTML='<img src="images/click1.jpg">';
    b.style.outline="4px solid #f8bf79";
    s.innerText="HAIDER ALI"
    t.innerHTML="<li>Hair Cut</li><li>Hair Shampoo</li><li>Hair Style</li><li>Face Shave</li><li>Coluring of hairs</li>";
    d.style.outline="none";
    g.style.outline="none";
    i.style.outline="none";
}
function f2(){
    c.innerHTML='<img src="images/click2.jpg">';
    d.style.outline="4px solid #f8bf79";
    s.innerText="KHASIF KHAN"
    t.innerHTML="<li>Long Hair Cutting</li><li>Long Hair Shampoo</li><li>Hair Style</li><li>Face Shave</li>";
    b.style.outline="none";
    g.style.outline="none";
    i.style.outline="none";

}
function f3(){
    e.innerHTML='<img src="images/click3.jpg">';
    g.style.outline="4px solid #f8bf79";
    s.innerText="TAHA SHAFIQUE"
    t.innerHTML="<li>Briddle Makeup</li><li>Cutting Briddle</li><li>Cream Massag</li><li>Face Shave</li><li>Hair Spray</li>";
    d.style.outline="none";
    b.style.outline="none";
    i.style.outline="none";

}
function f4(){
    h.innerHTML='<img src="images/click4.jpg">';
    i.style.outline="4px solid #f8bf79";
    s.innerText="ABDULLAH KHAN"
    t.innerHTML="<li>Shave Cut Designer</li><li>Long Hair Styles</li><li>Neck Massage</li><li>Brain Relaxment Massage</li><li>Hair Styles</li>";
    d.style.outline="none";
    g.style.outline="none";
    b.style.outline="none";

}
function youtube(){
    var icon = document.getElementById("belvd");
    icon.style.display='none';
    var video = document.getElementById("vd");
    video.style.display='block';
    var btn = document.getElementById("you-btn");
    btn.style.display = 'block';
    var padd = document.getElementById("you-id");
    padd.style.padding='10px 0 30px 0';
}
function button(){
    var icon = document.getElementById("belvd");
    icon.style.display='block';
    var video = document.getElementById("vd");
    video.style.display='none';
    var btn = document.getElementById("you-btn");
    btn.style.display = 'none';
    icon.style.display='flex';
    icon.style.alignItems='center';
    icon.style.justifyContent='center';
    var padd = document.getElementById("you-id");
    padd.style.padding='90px 0';   
}
// var username = document.getElementById("input1");
// var email = document.getElementById("input2");
// var password = document.getElementById("input3");
// var location = document.getElementById("input4");
// var firstp = document.getElementById("para1");
// var secondp = document.getElementById("para2");
// var thirdp = document.getElementById("para3");
// var fourthp = document.getElementById("para4");
// function validate(){
//     if(username.length.trim() == ""){
//        username.style.border = "2px solid red";
//        firstp.style.visibility = "visible";
//        firstp.innerText = "(Name can't be blanck)";
//        return false;
//     }
//     else if(username.length.trim() >= 20){
//        username.style.border = "2px solid red";
//        firstp.style.visibility = "visible";
//        firstp.innerText = "(Name can't be exceed from 20 characters)";
//        return false;
//     }
//     else if(username.length.trim() <= 5){
//        username.style.border = "2px solid red";
//        firstp.style.visibility = "visible";
//        firstp.innerText = "(Name must be greater than 5 characters)";
//        return false;
//     }
//     else if(email.length.trim() == ""){
//        email.style.border = "2px solid red";
//        secondp.style.visibility = "visible";
//        secondp.innerText = "(Email can't be blanck)";
//        return false;
//     }
//     else if(password.length.trim() == ""){
//        password.style.border = "2px solid red";
//        thirdp.style.visibility = "visible";
//        thirdp.innerText = "(Password can't be blanck)";
//        return false;
//     }
//     else if(password.length.trim() <= 5){
//        password.style.border = "2px solid red";
//        thirdp.style.visibility = "visible";
//        thirdp.innerText = "(Password must be greater than 5 characters)";
//        return false;
//     }
//     else if(password.length.trim() >= 20){
//        password.style.border = "2px solid red";
//        thirdp.style.visibility = "visible";
//        thirdp.innerText = "(Password can't be greater than 20 characters)";
//        return false;
//     }
//     else if(location.length.trim() == ""){
//        location.style.border = "2px solid red";
//        fourthp.style.visibility = "visible";
//        fourthp.innerText = "(Location can't be blanck)";
//        return false;
//     }
//     else if(location.length.trim() >= 10){
//        location.style.border = "2px solid red";
//        fourthp.style.visibility = "visible";
//        fourthp.innerText = "(Location can't be greater then 10 characters)";
//        return false;
//     }
//     else{
//        true;
//     }
// }

