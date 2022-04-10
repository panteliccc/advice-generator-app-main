var advice_id = document.querySelector(".advice_id");
var advice = document.querySelector(".advice");
let api = `https://api.adviceslip.com/advice`
async function  random() {
    const resp = await fetch(api)
    const data = await resp.json();
    advice_id.innerHTML = `advice #${data.slip.id}`;
    advice.innerHTML = `"${data.slip.advice}"`;
}
random()
const dice = document.querySelector(".border");
dice.addEventListener("click",random)