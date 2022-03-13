async function task_submit() {
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

    const response = await fetch('/api', options);
    const to_json = await response.json();
    //console.log(to_json.data);

    task_input.value = "";
    update_list();
}

async function update_list() {
    // Query db for tasks
    const response = await fetch('/api');
    const data = await response.json();

    // Add tasks to div
    let div = document.getElementById('list_div');
    div.innerHTML = "";
    data.forEach((row) => {
        div.innerHTML += row.task_txt + '<br>';
    });

    //console.log(data);
}

// SETUP
update_list();