
function task(){
 
 let taskinput= document.getElementById("texts");//written text
 const tasktext=taskinput.value.trim();//read the value and trim

    if(tasktext===""){
        alert("Please enter a task");
        return;
    }

    let tasklist=document.getElementById("tasklist")
    const listItem=document.createElement("li")//stored in memory // creates a new <li> element.

    const taskspan=document.createElement("span")//for style later the text //inline container for text.
    taskspan.textContent=tasktext//Sets the text inside the taskspan to whatever the user typed.

    //Complete button
    const completebutton=document.createElement("button") //the user to mark the task as complete.
    completebutton.innerHTML="✓";
    completebutton.title="Mark as Complete"

    completebutton.onclick=()=>{
        taskspan.classList.toggle("completed")//Adds/removes .completed class
    };

//Remove button
    const removebutton=document.createElement("button")
    removebutton.textContent="Remove";
    removebutton.className="remove-btn";//styling
    removebutton.title="Remove Task";
    removebutton.onclick=()=>{
        tasklist.removeChild(listItem);
    }
    //Append
    listItem.appendChild(completebutton)
    listItem.appendChild(taskspan)
    listItem.appendChild(removebutton)

    tasklist.appendChild(listItem);
    taskinput.value=''//clear the field for new task
}

