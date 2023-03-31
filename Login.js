var password = "onlinetraining"
var email = "onlinetraining@gmail.com"
function accesstopage()
{
    var usergivenUSID=document.getElementById("userEmail").value
    var usergivenUSP = document.getElementById("userPass").value
    if(usergivenUSID == email && usergivenUSP == password)
    {
        var fom = document.forms
        fom[0].action="./webpage.html"
        fom[0].elements[2].type="submit"
    }
    else if(usergivenUSID != email && usergivenUSP == password)
    {
        document.getElementById("status").innerHTML="INCORRECT EMAIL-ID"
        document.getElementById("userEmail").style.borderColor="red"
        document.getElementById("userPass").style.borderColor="royalblue"
    }
    else if(usergivenUSID == email && usergivenUSP != password)
    {
        document.getElementById("status").innerHTML="INCORRECT PASSWORD"
        document.getElementById("userEmail").style.borderColor="royalblue"
        document.getElementById("userPass").style.borderColor="red"
    }
    else
    {
        document.getElementById("status").innerHTML="INCORRECT EMAILID AND PASSWORD"
        document.getElementById("userEmail").style.borderColor="red"
        document.getElementById("userPass").style.borderColor="red"
    }
}
function visiblePass()
{
    var fom=document.forms
    fom[0].elements[1].type="text"
    document.getElementById("visible").style.transform="rotateY(360deg)"
    document.getAnimations("visible").style.transition="transform 0.2s"
    var img=document.images
    img[0].src="eye.jpg"
}
function inVisiblePass()
{
    var fom=document.forms
    fom[0].elements[1].type="password"
    var img=document.images
    img[0].src="students.png"
    document.getElementById("visible").style.transform="rotateY(-360deg)"
    document.getAnimations("visible").style.transition="transform 0.2s"
     
}