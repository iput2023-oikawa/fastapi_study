async function callApi(method, data = null){
    // const res = await fetch("http://localhost:8000/tasks");
    // const tasks = await res.json();
    // console.log(tasks);

    // const req = {
    //     title: 'またまたチェック'
    // };
    // const postRes = await fetch("http://localhost:8000/tasks",{
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(req),
    // });
    // console.log(await postRes.json());

    // const  putReq = {
    //     title: "更新する～"
    // };
    // const putRes = await fetch("http://localhost:8000/tasks/10",{
    //     method: "PUT",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(putReq),
    // });
    // console.log(await putRes.json());

    // const deleteRes = await fetch("http://localhost:8000/tasks/12",{
    //     method: "DELETE",
    // });
    // console.log(await deleteRes.json());

    let url = "http://localhost:8000/tasks";
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
});

document.getElementById("post").addEventListener("click", async () => {
    const postData = { title: "test_task"};
    const result = await callApi("POST", postData);
    console.log(result);
});

document.getElementById("put").addEventListener("click", async () => {
    const putData = { title: "さらなる更新を目指して"};
    const result = await callApi("PUT", putData);
    console.log(result);
});

document.getElementById("delete").addEventListener("click", async () => {
    const result = await callApi("DELETE");
    console.log(result);
});