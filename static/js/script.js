async function callApi(){
    const lists = document.getElementById("lists");
    const res = await fetch("http://localhost:8000/tasks");
    const tasks = await res.json();
    // tasks.forEach(function(task){
    //     const list = document.createElement("li");
    //     list.innerText = task.title;
    //     lists.appendChild(list);
    //     // console.log(task);
    // })
    console.log(tasks);
}

callApi();