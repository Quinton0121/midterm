var head = document.getElementById("bg1");
var body = document.getElementById("bg2");
var leg = document.getElementById("bg3");
var shoe = document.getElementById("bg4");
var main = document.getElementById("main");
var title = document.getElementById("title");
var thing1 = document.getElementById("thing1");
var thing2 = document.getElementById("thing2");
var thing3 = document.getElementById("thing3");

head.addEventListener("click",function(){
    main.style.display = "block";
    title.innerHTML = "Head Gear";
    thing1.style.backgroundImage = "url('imgs/gears/h1.png')";
    thing2.style.backgroundImage = "url('imgs/gears/h2.png')";
    thing3.style.backgroundImage = "url('imgs/gears/h3.png')";


    
});

body.addEventListener("click",function(){
    main.style.display = "block";
    title.innerHTML = "body";
    thing1.style.backgroundImage = "url('imgs/gears/b1.png')";
    thing2.style.backgroundImage = "url('imgs/gears/b2.png')";
    thing3.style.backgroundImage = "url('imgs/gears/b3.png')";


});

leg.addEventListener("click",function(){
    main.style.display = "block";
    title.innerHTML = "leg";
    thing1.style.backgroundImage = "url('imgs/gears/l1.png')";
    thing2.style.backgroundImage = "url('imgs/gears/l2.png')";
    thing3.style.backgroundImage = "url('imgs/gears/l3.png')";
});

shoe.addEventListener("click",function(){
    main.style.display = "block";
    title.innerHTML = "shoe";
    thing1.style.backgroundImage = "url('imgs/gears/f1.png')";
    thing2.style.backgroundImage = "url('imgs/gears/f2.png')";
    thing3.style.backgroundImage = "url('imgs/gears/f3.png')";
});


