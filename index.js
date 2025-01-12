// Add your code here




function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {  
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ 
            name: userName,
            email: userEmail
        })
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        document.body.textContent = data.id;
        return data.id;
    })
    .catch(error => {
        document.body.textContent = error.message;
        error.message = "Unauthorized Access"
    });
}

submitData()
