function validate()
{
    
    console.log("login call")
    var uname= document.getElementById("uname").value;
    var em=document.getElementById("em").value;
    var psw =document.getElementById("psw").value;
    // console.log(uname+em+psw);
    var upper = /[A-Z] /;
    var number = /[0-9]/;
    if (psw < 6 || !number.test(psw) || !upper.test(psw)) 
    {
        if (psw < 6) 
        {
            alert("Please make sure password is longer than 6 characters.")
            return false;
        }
    
        var counter = 0;
        var i;
        for(i = 0; i < psw.length; i++)
        {
           psw.charAt(i)
           
           if(psw.charAt(i) >= 'A'  && psw.charAt(i)<='Z')
           {
              console.log(psw.charAt(i))
               counter++;
              // break;
           }
       }
       if( counter < 2 ){
            alert("Please make sure password includes 2 capital letters")
            return false;
    
        }
    
        if (!number.test(psw)) {
            alert("Please make sure Password Includes a Digit")
            return false;
        }
    }
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (! em.match(validRegex)) 
     {
        alert("Please make sure email is in correct formal")
        return false;
     }
     if(!(uname.match(/^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$/)))
     {
         alert("Please enter correct name");
         return false;
     }
     else{
        alert("Account created");
     document.getElementById("uname").value="";
    document.getElementById("em").value="";
    document.getElementById("psw").value="";
        
     }
     
 }