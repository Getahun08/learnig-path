const inputbox=document.getElementById("input_box");
const listcontainer=document.getElementById("list_cotainer");
function addTask(){
    if(inputbox.value ==''){
        alert("please first put something")
    }
    else{
        let li =document.createElement("li");
        li.innerHTML =inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span)
    }
    inputbox.value='';
    saveData();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName =="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data") || ""; // Use fallback if "data" is null
}

showTask();



