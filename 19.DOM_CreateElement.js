let fun =(e) =>{
    e.preventDefault()
    let data = e.target[0].value 
    let tagName = document.createElement('h1')
    // tagName.innerText = 'Welcome'
    tagName.innerText = data
    document.body.appendChild(tagName)
}




