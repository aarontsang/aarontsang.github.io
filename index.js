window.onload = () => {
    const element = document.getElementById("typed-name");
    const message = "Hello, my name is Aaron. Welcome to my website!";
    let index = 0;

    function type() {
        if (index < message.length) {
            element.textContent += message[index++];
            setTimeout(type, 75); // adjust speed here
        }
    }

    type();
};