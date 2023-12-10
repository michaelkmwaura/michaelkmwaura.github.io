const lightBtn = document.querySelectorAll(".lightBtn");
const menuBtn = document.getElementById("menuBtn");
const body = document.body;
const menuLightBtn = document.getElementById("menuLightBtn");
const menuCrossBtn = document.getElementById("menuCrossBtn");
const opacity = document.getElementById("opacity");
const links = document.querySelectorAll(".links");


lightBtn.forEach((e)=>{
    e.addEventListener("click", ()=>{
        const links = document.querySelectorAll(".links");
        const skill = document.getElementById("skills");
        const image1 = document.getElementById("lightLogo");
        const image2 = document.getElementById("darkLogo")
        const gradient = document.querySelectorAll(".gradient");
        body.classList.toggle("lightModeBody");
        skill.classList.toggle("lightModeBorder");
        links.forEach((e)=>{
            e.classList.toggle("lightMode");
        })
        gradient.forEach((e)=>{
            e.classList.toggle("lightPText")
        })
        image1.classList.toggle("hide");
        image2.classList.toggle("hide")
    });
})
menuBtn.addEventListener("click", ()=>{
    opacity.style.display = "block";
});
menuCrossBtn.addEventListener("click", ()=>{
    opacity.style.display = "none";
});
links.forEach((e)=>{
    e.addEventListener("click",()=>{
        opacity.style.display = "none"
    })
})