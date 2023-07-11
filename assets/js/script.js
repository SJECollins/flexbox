const scrollBtn = document.getElementById("scroll-up")
scrollBtn.addEventListener("click", () => {
    console.log("cliecked")
    window.scrollTo({top: 0, behavior: "smooth"})
})