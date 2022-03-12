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
}

function update_list() {
    let div = document.getElementById("list_div");
    div.innerHTML = "";

    // get data from db
    fetch('/api').then(resp => {
        console.log(resp);
    });
}

// SETUP
update_list();