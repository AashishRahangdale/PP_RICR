function AddTask(){
    let task=document.getElementById("taskIP");

    if(task.value.trim()===""){
alert("Please Add The Task")
    }

    const list =document.getElementById("taskList");

    const li=document.createElement("li");
    li.classList.add("my-2");
    const span=document.createElement("span");
    span.innerText=task.value.trim();

    const btn=document.createElement("button");
    btn.classList.add("rounded", "bg-danger",  "mx-3", "px-4" );
    btn.onclick= () => {li.remove();};
    btn.innerText="Delete";

    li.appendChild(span);
    li.appendChild(btn);
    taskList.appendChild(li);
    

    task.value='';
}
