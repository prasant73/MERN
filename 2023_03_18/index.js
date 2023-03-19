// const promise = new Promise((resolve, reject) => {
//     // perform some async operation
//     // when it gets done, call eitrher `resolve(result)`, 
//     // or `reject(result)`
// });


// .then(result => { // hppens when promise is fulfilled
// })

// .catch(result) => {handle the error} // happens when promise is unfulfilled


// async function getData(){
//     const response = await fetch("https://randomuser.me/api");
//     const data = await response.json();
//     return data;
// }

// getData()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error + " - data not found");
//     })

function getRandomUser(){
    return fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => data.results[0])
}

// async function that uses getRandomUser
async function displayRandomUser(){
    const user = await getRandomUser();
    const container = document.getElementById('user-container');
    container.innerHTML = `
        <hr>
        <img src="${user.picture.large}">
        <h2>${user.name.first} ${user.name.last}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Location: ${user.location.city}, ${user.location.country}</p>
    `;
}

const generatebtn = document.getElementById('generate-btn');
generatebtn.addEventListener('click', displayRandomUser);