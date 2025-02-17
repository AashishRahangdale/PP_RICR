
function submit(){
    let name=document.getElementById("fullname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirm-password").value;
    let gender=document.querySelector("input[name='gender']:checked").value;
    const ck=document.getElementById("accept").checked;
    if(!ck){
        alert("please accept the term and condition")
        return;
    }

    console.log(name,email,password,confirmPassword,gender,ck);
}
