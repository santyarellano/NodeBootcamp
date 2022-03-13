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
    // TO DO...
    console.log("Hello");
}

// SETUP
update_list();