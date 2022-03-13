function task_submit() {
    let task_input = document.getElementById("task_input");
    let task_txt = task_input.value;

    
    const data = { task_txt };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch('/api', options).then(response => {
        console.log(response.json());
    }); // post

    task_input.value = "";
    update_list();
}

function update_list() {
    let div = document.getElementById("list_div");
    div.innerHTML = "";

    // get data from db
    fetch('/get_tasks').then(resp => {
        resp.json().then((res) => {

            res.data.forEach(row => {
                let txt = document.createElement("div");
                txt.innerHTML += row.task;

                div.appendChild(txt);
            });
            
        });
    });
}

// SETUP
update_list();