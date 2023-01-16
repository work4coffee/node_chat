function poll() {
    
    let connection = new XMLHttpRequest()

    connection.open("GET", "http://127.0.0.1:1337/connection")

    connection.send()


    connection.onload = function() {

        let li = document.createElement("li")

        li.textContent = connection.responseText


        messages.appendChild(li)


        poll()
    }
}


form.onsubmit = function(event) {

    event.preventDefault()


    let text = message.value


    let request = new XMLHttpRequest()

    request.open("POST", "http://127.0.0.1:1337/message")

    request.setRequestHeader("Content-type", "text/plain")
    request.withCredentials = true

    request.send(text)

}

poll()