let avatar = document.getElementById('avatar');
function changeImage() {
    console.log("clicked", avatar.src)
    avatar.src.includes('avatar') ?  avatar.src = avatar.src.replace("avatar", "kitty") : avatar.src = avatar.src.replace("kitty", "avatar")   
    
}