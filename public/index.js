

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