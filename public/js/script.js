const answers_no = {
    english: [
        "No",
        "Tf!!",
        "Son I'm crying son",
        "Are being fr rn??!!",
        "NIGGA!!!!",
        "Pretty pleasee",
        "Why tho?!",
        "yoo that's crazyy",
        "No again!!!!",
        "Ok u ain't escaping me",
        "That's harsh",
        "Why are you doing this to me?",
        "We'll eat icecream",
        "Okay okay icecream and mutt bir",
        "Rethink yo lyf decisions"
    ],
    bengali: [
        "Hutt",
        "Hell Noo Komla",
        "Ajuba naa bolso kn?!",
        "Areh pagol :(",
        "khichke aso?!",
        "Areh na kn?!",
        "Ami ki korlam?!",
        "Asaa solo ice khbo snowberry r",
        "assa ice ar golbari r mutt",
        "ekhono naa?!",
        "Areh pleaseee",
        "Ajuba korso Kom",
        "Mann jao Ghugni-bhat man",
        "Amare keliye niyo khon pore",
        "Haa na bolle tomr mukti nai"
    ],
};

answers_yes = {
    "english": "Yes",
    "bengali": "Haa rnd",
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    // Update question heading
    const questionHeading = document.getElementById("question-heading");
    if (language === "french") {
        questionHeading.textContent = "Tu veux être mon valentin?";
    } else if (language === "thai") {
        questionHeading.textContent = "คืนดีกับเราได้อ่ะป่าว?";
    } else {
        questionHeading.textContent = "Will you be my valentine?";
    }

    // Reset yes button text
    yes_button.innerHTML = answers_yes[language];

    // Reset button text to first in the new language
    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    // Update success message
    const successMessage = document.getElementById("success-message");
    if (language === "bengali") {
        successMessage.textContent = "Lesgooo tumi onk gula dark choc paba :3";
    } else if (language === "thai") {
        successMessage.textContent = "ฮูเร่ คืนดีกันแล้วน้า :3";
    } else {
        successMessage.textContent = "Yepppie, see you sooonnn :3";
    }
}