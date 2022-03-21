
let scan=()=>{


    var u=document.forms['sky'].uname.value
    var p=document.forms['sky'].pass.value
    var sa=document.forms['sky'].sans.value
    var pl=document.forms['sky'].lang.value
    var sq=document.forms['sky'].sques.value

    var op=true;

    if(u=="")
    {
        document.getElementById("uer").innerHTML="Username Mandatory"
        op=false
    }
    if(p=="")
    {
        document.getElementById("per").innerHTML=" Password Mandatory"
        op=false
    }
    if(p==/^(?=.*[0-9])(?=.*[$#*])[A-Za-z0-9$#*]{,5}/.test(p))
    {
        
        document.getElementById("per").innerHTML=" Password must have max 5 characters"
        op=false

    }
    if(sa=="")
    {
        document.getElementById("sans").innerHTML=" Answer should not be blank"
        op=false
    }
    if(pl=="none")
    {
        document.getElementById("pler").innerHTML=" Must select anyone of the language"
        op=false 
    }
    
    if(sq=="None")
    {
        document.getElementById("sqer").innerHTML=" Please select anyone of the question"
        op=false 
    }

    if(u!==(/^[a-zA-Z]+$/).test(u))
    {
        document.getElementById("uer").innerHTML="username should be alphabets"
        
        op=false
    }
    if(sa!==(/^[a-zA-Z]+$/).test(sa))
    {
        document.getElementById("sans").innerHTML="answer should be alphabets"
        op=false
    }
    
    return op;
}