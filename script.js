document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(
        ".file-download-btnn"
    );

    if (!button) {
        return;
    }


    /* Button click visual feedback */

    button.addEventListener("click", function () {

        button.classList.add("button-clicked");

        setTimeout(function () {

            button.classList.remove(
                "button-clicked"
            );

        }, 180);

    });


    /* Prevent accidental form submission */

    button.addEventListener("mousedown", function () {

        button.style.webkitUserSelect = "none";
        button.style.userSelect = "none";

    });

});