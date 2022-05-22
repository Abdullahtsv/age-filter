var age = +prompt("Enter your age");
if(age >= 18 && age < 60){
    document.write("<h1>" + "You are welcome" + "</h1>");
    alert("You are welcome")
}
else{
    document.write("<h1>" + "You are not eligible" + "</h1>");
    alert("You are not eligible")
}
