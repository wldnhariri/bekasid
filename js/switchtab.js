const tabLinks = document.querySelectorAll(".tab-nav li a");

tabLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const targetPaneId = this.getAttribute("href");
        const targetPane = document.querySelector(targetPaneId);

        tabLinks.forEach((link) => link.parentElement.classList.remove("active"));
        document
            .querySelectorAll(".tab-pane")
            .forEach((pane) => pane.classList.remove("active"));

        this.parentElement.classList.add("active");
        targetPane.classList.add("active");
    });
});
