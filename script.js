const gradientContainer = document.querySelector(".gradient-container");
const selectMenu = document.querySelector(".selector select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");
const getRandomColor = () => {
    // Generate random color in hex format. Example: #9770da
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}
const generateGradient = (isRandom) => {
    if(isRandom) { // If isRandom === true, update the input value with random color
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    // Using the select menu value, create a gradient string 
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientContainer.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}
// Copy textarea value and update the copy button text
const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600);
}
// Calling generateGradient function
colorInputs.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
});
selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);