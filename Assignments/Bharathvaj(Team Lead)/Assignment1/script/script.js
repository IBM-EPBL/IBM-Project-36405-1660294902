function validate(){
    userName=document.getElementById("reg").value;
    password=document.getElementById("pos").value;
   
    if(userName==""){
        alert("please! enter register number or password");
    }
    else{
        if (userName=="610519104009"){
            if(password=="08-12-2001"){
                alert("Welcome to dgct ");
            }
            else{
                alert("incorrect password ");
            } 
        }
        else{
            alert("incorrect register number ");
        }
        
    }
}