let avatar = document.getElementById('avatar');
function changeImage() {
    console.log("clicked", avatar.src)
    let element = document.body;
    let main = document.body.querySelector("main");
    let resume = document.querySelector(".resume");
    resume.classList.toggle("white-mode")
    element.classList.toggle("pink-mode");




    avatar.src.includes('avatar') ?  avatar.src = avatar.src.replace("avatar", "kitty") : avatar.src = avatar.src.replace("kitty", "avatar")   
    
}
