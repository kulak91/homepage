// Changing palettes section
let avatar = document.getElementById('avatar');
let introText = document.querySelector('.intro_text')
let element = document.body;
let resume = document.querySelector(".resume");
let funnyIntro = "Meow. I am a Binary Studio cat. Still got 7 lives. Work in IT, Full Stack Evil, all I do is sleep and try to help out hoomans with their projects whenever they need me."
let normalIntro = "Hello. I am a self-taught developer. Still got a lot of topics to learn. Solving riddles is my passion and programming fulfills it. My dream is to work in IT."
let timeline = document.getElementById("timeline");
function changeImage() {
    element.classList.toggle("pink-mode");
    resume.classList.toggle("white-mode")

    if (avatar.src.includes('avatar')) {
        avatar.src = avatar.src.replace("avatar", "kitty");
        changeIntro("kitty")
    } else {
        avatar.src = avatar.src.replace("kitty", "avatar");
        changeIntro("normal")
    }

}

function changeIntro(mode) {
    switch (mode) {
        case "kitty":
            introText.textContent = funnyIntro;
            break;
        case "normal":
            introText.textContent = normalIntro;
    }

}

function toggleTimeline() {
    if (timeline.style.display === "none") {
        timeline.style.display = "block";
    } else {
        timeline.style.display = "none";
    }
}