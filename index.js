

function submitData(userName, userMail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name:userName,
            email:userMail
        }),
    })
    .then(res => res.json())
    .then(res => {
        let body = document.querySelector('body');
        body.innerHTML = res.id;
       
    })
    .catch(() => {
        let body = document.querySelector('body');
        body.innerHTML = "Unauthorized Access";
    });


}