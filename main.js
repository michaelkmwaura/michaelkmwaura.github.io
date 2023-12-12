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
});
const elements = document.querySelectorAll('.fade-in');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .4
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});