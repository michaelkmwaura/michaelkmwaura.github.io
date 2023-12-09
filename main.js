const lightBtn = document.querySelectorAll(".lightBtn");
const menuBtn = document.getElementById("menuBtn");
const body = document.body;
const menuLightBtn = document.getElementById("menuLightBtn");
const menuCrossBtn = document.getElementById("menuCrossBtn");
const opacity = document.getElementById("opacity");
const links = document.querySelectorAll(".links");
const image = document.getElementById("homePageLogo");
console.log(image)

lightBtn.forEach((e)=>{
    e.addEventListener("click", ()=>{
        const links = document.querySelectorAll(".links");
        const skill = document.getElementById("skills");
        const image = document.getElementById("homePageLogo");
        const gradient = document.querySelectorAll(".gradient");
        body.classList.toggle("lightModeBody");
        skill.classList.toggle("lightModeBorder");
        links.forEach((e)=>{
            e.classList.toggle("lightMode");
        })
        gradient.forEach((e)=>{
            e.classList.toggle("lightPText")
        })
        image.src == "http://127.0.0.1:3001/images/1.png" ? image.setAttribute("src","./images/2.png") : image.setAttribute("src","./images/1.png");
        console.log(image.src)
    });
})
menuBtn.addEventListener("click", ()=>{
    opacity.style.display = "block";
});
menuCrossBtn.addEventListener("click", ()=>{
    opacity.style.display = "none"
});
links.forEach((e)=>{
    e.addEventListener("click",()=>{
        opacity.style.display = "none"
    })
})