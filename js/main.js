/*  */
const ordenable = document.querySelector(".ordenList");
const dragDrop = ordenable.querySelectorAll(".item");

dragDrop.forEach(item => {
    item.addEventListener("dragstart", () => {
        // Agregar clase de arrastre
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    // Eliminando la clase de arrastre
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initordenable = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");

    let siblings = [...ordenable.querySelectorAll(".item:not(.dragging)")];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    ordenable.insertBefore(draggingItem, nextSibling);
}

ordenable.addEventListener("dragover", initordenable);
ordenable.addEventListener("dragenter", e => e.preventDefault());