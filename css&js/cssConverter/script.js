document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("letter-input");
    
    inputField.addEventListener("input", function () {
        this.value = this.value.replace(/[^ab01]/g, ""); //Remove character that is not 'a', 'b', '0', or '1'
    });

    //User Input
    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const word = event.target.value.toLowerCase();
            displayWordImage(word);
        }
    });

    document.getElementById("enter-button").addEventListener("click", function() {
        const word = inputField.value.toLowerCase();
        displayWordImage(word);
    });

    document.getElementById("clear-button").addEventListener("click", function() {
        inputField.value = '';
        document.getElementById("letter-image").innerHTML = '';
    });
});
