var Prev = document.getElementById("Prev");
var Next = document.getElementById("Next");
var hat  = document.getElementById("hat");
var shirt= document.getElementById("shirt");
var pant = document.getElementById("pant");
var shoe = document.getElementById("shoe");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var combos = document.getElementById("combos");

var n1 =1 ,n2 =1 ,n3 =1 ,n4 = 1;

Prev.addEventListener("click",function(){
    console.log(c1.checked, c2.checked, c3.checked);
    console.log(n1,n2,n3,n4);
    if(c1.checked){
        n1 = n1-1;
        if(n1 < 1){
           n1 = 3
        }
        hat.src="imgs/gears/h"+n1+".png";
        
    }else if(c2.checked){
        n2 = n2-1;
        if(n2 < 1){
           n2 = 3
        }
        shirt.src="imgs/gears/b"+n2+".png";
    }else if(c3.checked){
        n3 = n3-1;
        if(n3 < 1){
           n3 = 3
        }
        pant.src="imgs/gears/l"+n3+".png";
    }else if(c4.checked){
        n4 = n4-1;
        if(n4 < 1){
           n4 = 3
        }
        shoe.src="imgs/gears/f"+n4+".png";
    }else{
        alert("Please select item first!");
    }
})

Next.addEventListener("click",function(){
    console.log(c1.checked, c2.checked, c3.checked);
    console.log(n1,n2,n3,n4);
    if(c1.checked){
        n1 = n1+1;
        if(n1 > 3){
           n1 = 1
        }
        hat.src="imgs/gears/h"+n1+".png";
        
    }else if(c2.checked){
        n2 = n2+1;
        if(n2 > 3){
           n2 = 1
        }
        shirt.src="imgs/gears/b"+n2+".png";
    }else if(c3.checked){
        n3 = n3+1;
        if(n3 > 3){
           n3 = 1
        }
        pant.src="imgs/gears/l"+n3+".png";
    }else if(c4.checked){
        n4 = n4+1;
        if(n4 > 3){
           n4 = 1
        }
        shoe.src="imgs/gears/f"+n4+".png";
    }else{
        alert("Please select item first!");
    }
});

combos.addEventListener("keyup",function(ev){
    if(ev.keyCode==13){
        if(combos.value == "combo1"){
            n1 = 1;
            hat.src="imgs/gears/h"+n1+".png";
            shirt.src="imgs/gears/b"+n1+".png";
            pant.src="imgs/gears/l"+n1+".png";
            shoe.src="imgs/gears/f"+n1+".png";
            
        }else if(combos.value == "combo2"){
            n2 =2;
            hat.src="imgs/gears/h"+n2+".png";
            shirt.src="imgs/gears/b"+n2+".png";
            pant.src="imgs/gears/l"+n2+".png";
            shoe.src="imgs/gears/f"+n2+".png";
            
        }else if(combos.value == "combo3"){
            n3 =3;
            hat.src="imgs/gears/h"+n3+".png";
            shirt.src="imgs/gears/b"+n3+".png";
            pant.src="imgs/gears/l"+n3+".png";
            shoe.src="imgs/gears/f"+n3+".png";
            
        }else if(combos.value == "random"){
            n1 = Math.trunc(Math.random()*3)+1;
            n2 = Math.trunc(Math.random()*3)+1;
            n3 = Math.trunc(Math.random()*3)+1;
            n4 =Math.trunc(Math.random()*3)+1;
            
            hat.src="imgs/gears/h"+n1+".png";
            shirt.src="imgs/gears/b"+n2+".png";
            pant.src="imgs/gears/l"+n3+".png";
            shoe.src="imgs/gears/f"+n4+".png";
            
            
            
        }else {
            
            list = combos.value.split(",");
            for(change of list){
                command = change.trim()
                if(command == "head1"){
                    n1=1;
                    
                }else if(command == "head2"){
                    n1=2;
                    
                }else if(command == "head3"){
                    n1=1;
                    
                }else if(command == "body1"){
                    n2=1;
                    
                }else if(command == "body2"){
                    n2=2;
                    
                }else if(command == "body3"){
                    n2=3;
                    
                }else if(command == "leg1"){
                    n3=1;
                    
                }else if(command == "leg2"){
                    n3=2;
                    
                }else if(command == "leg3"){
                    n3=3;
                    
                }else if(command == "foot1"){
                    n4=1;
                    
                }else if(command == "foot2"){
                    n4=2;
                    
                }else if(command == "foot3"){
                    n4=3;
                   
                }
                
                   
            } 
            hat.src="imgs/gears/h"+n1+".png" ;
            shirt.src="imgs/gears/b"+n2+".png" ;
            pant.src="imgs/gears/l"+n3+".png" ;
            shoe.src="imgs/gears/f"+n4+".png" ;
        }
        
        combos.value ='';
    }
    
    
    
});


