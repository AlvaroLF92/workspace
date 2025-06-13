const url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url, {
//     method: 'POST', // GET, POST , PUT ,PATCH , DELETE
//     headers: {
//         'Content-Type' : 'application/json' ,
//         'Authorization' : 'Bearer axcbahdhalfhwlhfjwfj'
//     },
//     body: JSON.stringify({
//         name: 'Chanchito feliz' ,
//         website: 'google.com'
//     })
// })
//  .then((response) => response.json())
//  .then(patito => console.log(patito))

const fn = async () => {
    
   const response = await fetch(url, {
        method: 'POST', // GET, POST , PUT ,PATCH , DELETE
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer axcbahdhalfhwlhfjwfj'
        },
        body: JSON.stringify({
            name: 'Chanchito feliz',
            website: 'google.com'
        })
    })
    const patito = await response.json()
    console.log(patito);
}
fn()