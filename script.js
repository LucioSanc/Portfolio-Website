const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransition() {
    const ctrlButton = document.querySelectorAll(".control").forEach(btn => {
        btn.addEventListener("click", function (e) {
            let currentBtn = document.querySelector(".active-btn").classList.remove("active-btn");
            e.target.classList.add("active-btn");
        })
    })
    allSections.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (id) {
            sectBtns.forEach(btn => {
                btn.classList.remove("active")
            })

            e.target.classList.add("active")

            sections.forEach(section => {
                section.classList.remove("active");
            })
            
            const element = document.getElementById(id);
            element.classList.add("active")
        }


    })

    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", ()=>{
        let element = document.body;
        element.classList.toggle("light-mode");
    })
}
pageTransition();

