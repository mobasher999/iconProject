var icon = document.querySelectorAll(".icon i");


icon.forEach(l => {
    l.addEventListener("click", (e) => {
        console.log(e.target.dataset.icon);
        handleActive(e);
        const viow = document.querySelector("input");
        // viow.value = e.target.dataset.icon
        icon_name = e.target.dataset.icon
        iconLink = '<i class="fa fa-' + icon_name + '"></i>'

        viow.value = iconLink

    });
});
function handleActive(ev) {
    ev.target.parentElement.querySelectorAll('.active').forEach(element => {
        element.classList.remove("active");
    });
    ev.target.classList.add("active");
}
