async function callApi(method, data = null, id = null){
    let url = "http://localhost:8000/tasks";
    if (id) {
        url += `/${id}`;
    }
    let options = {
        method: method,
        headers: {
            'Content-Type' : 'application/json'
        },
        body: data ? JSON.stringify(data) : null
    };

    const response = await fetch(url, options);
    return response.json();
}

document.getElementById("get").addEventListener("click", async () => {
    const result = await callApi("GET");
    console.log(result);
    displayData(result);
});

document.getElementById("post").addEventListener("click", async () => {
    const taskTitle = document.getElementById("taskTitle").value;
    const postData = { title: taskTitle};
    const result = await callApi("POST", postData);
    console.log(result);
});

document.getElementById("put").addEventListener("click", async () => {
    const taskTitle = document.getElementById("taskTitle").value;
    const putData = { title: taskTitle};
    const taskId = prompt("updateしたいidを入力")
    const result = await callApi("PUT", putData, taskId);
    console.log(result);
});

document.getElementById("delete").addEventListener("click", async () => {
    const taskId = prompt("削除したいidを入力")
    const result = await callApi("DELETE", null, taskId);
    console.log(result);
});

function displayData(data) {
    const dataDisplay = document.getElementById("dataDisplay");
    // const formattedJson = JSON.stringify(data, null, 2);
    // const htmlFormattedJson = formattedJson.replace(/\n/g, `<br>`);
    // dataDisplay.innerHTML = htmlFormattedJson;
    data.forEach(item => {
        const itemString = JSON.stringify(item, null, 2);
        dataDisplay.innerHTML += `{<br>${itemString}<br>}<br>`;
    })
}