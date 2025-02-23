function showInfo(animal) {
    let infoText = document.getElementById("info-text");

    if (animal === "lion") {
        infoText.innerHTML = "🦁 Lions are known as the 'King of the Jungle' and live in prides!";
    } else if (animal === "elephant") {
        infoText.innerHTML = "🐘 Elephants are the largest land animals and have incredible memory!";
    } else if (animal === "zebra") {
        infoText.innerHTML = "🦓 Zebras have unique black and white stripes, just like fingerprints!";
    }
}
