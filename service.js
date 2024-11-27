document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("main a button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Button clicked!");
        });
    });
});
