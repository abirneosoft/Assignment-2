

function fun(){
    var nameNode=document.getElementById("name").value;
    var error=document.getElementById("errorname");
    
    var expName=/^[a-zA-Z ]{2,100}$/;
    if(!(nameNode.match(expName)) || (nameNode=="")){
        nameNode.focus;
        error.innerHTML="Plz enter your name";
        
    }
    else{
        return true;
    }
}
    function fun1(){
    var mailNode=document.getElementById("email").value;
    var expEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var error1=document.getElementById("errormail");
    if(!(mailNode.match(expEmail))||(mailNode=="")){
        mailNode.focus;
        error1.innerHTML="plz enter your mail";

    }
    else{
        return true;
    }
    
    }
    
    function fun2(){
    var sub=document.getElementById("subject").value;
    var error2=document.getElementById("errorsubject");

    if((sub=="")){
        sub.focus;
        error2.innerHTML="Plz entire your require subject";
        
    }
    else{
        return true;
    }

    }
    function fun3(){
    var sms=document.getElementById("msg").value;
    var error3=document.getElementById("errormsg");
    if(sms==""){
        sms.focus;
       error3.innerHTML="Plz entire atleast require messege";
       
   }
   else{
       return true;
   }

}
    

        
    
   
function valid(){


    let s1=fun();
    let s2=fun1();
    let s3=fun3();
    let s4=fun2();
    if(s1 && s2 && s3 && s4){
       return true; 

    }
    else{
        return false;
    }
}
