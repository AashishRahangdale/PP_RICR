function set(){
let isValid=true;

    const txt=document.getElementById("text").value.trim();
const eml=document.getElementById("email").value.trim();
    const nm=document.getElementById("number").value.trim();
    const dob=document.getElementById("date").value.trim();
    const pwd=document.getElementById("passward").value.trim();
    const ad=document.getElementById("adress").value.trim();

    //making to default look
  document.querySelectorAll(".ip").forEach((element) => {
    element.classList.remove("error")
  })




//validating the name
     if(!/^[A-Za-z\s]+$/.test(txt) || txt.length<3){
document.getElementById("text").classList.add("error");
isValid=false
    }

    //validating the email
    if(!/^[a-zA-Z\d._]+@(gmail|yahoo|outlook|hotmail|ricr).(com|in|co.in)$/.test(eml) || eml.length<9){
        document.getElementById("email").classList.add("error");
        
        isValid=false

    }

    //validating the phone number
    if(!/^[6-9]\d{9}$/.test(nm)){
        document.getElementById("number").classList.add("error");
        isValid=false

            }

            if(!pwd){
                document.getElementById("passward").classList.add("error");
                isValid=false
            }

            if(!ad){
                document.getElementById("adress").classList.add("error");
                isValid=false
            }
            if(!dob){
                document.getElementById("date").classList.add("error")
            }


            if(isValid){
                console.log(txt,eml,nm,dob,pwd,ad);
                document.querySelectorAll(".ip").forEach((element) => {
                    element.value="";
                })


            }
        }      
    
