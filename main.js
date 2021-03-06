document.querySelector('button').addEventListener('click', getTemp)



function getTemp(){
console.log('hello')

// assigns a url to variable
let city = encodeURIComponent(document.getElementById('city').value)
let country = encodeURIComponent(document.getElementById('country').value)
let url = `http://api.weatherstack.com/current?access_key=a96e29af67aedb670b62374881830d89&query=${city},${country}`



console.log(url)
console.log(country)


fetch(url)
 .then(res => res.json()) // parse response as JSON
 .then(data => {
 console.log(data)
 document.querySelector('h2').innerText = data.current.temperature * 1.8 + 32
 })
 .catch(err => {
 console.log(`error ${err}`)
 });

}
