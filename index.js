window.onload = () => {
    const element = document.getElementById("typed-name");
    const message = "Hi, I'm Aaron Tsang";
    let index = 0;

    function type() {
        if (index < message.length) {
            element.textContent += message[index++];
            setTimeout(type, 100); // adjust speed here
        }
    }

    type();
};