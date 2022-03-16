const idSpan = document.querySelector('.box__id-number')
const adviceBox = document.querySelector('.box__advice')
const btn = document.querySelector('.box__icon')
const btnIcon = document.querySelector('.box__icon__img')
let rotateDeg = 0;

const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(json => {
            let advice = json.slip.advice
            let id = json.slip.id
            idSpan.textContent = id
            adviceBox.textContent = `"${advice}"`
        })
        .catch(err => console.log(err));

        rotateDeg = rotateDeg + 180
        console.log(rotateDeg);

        btnIcon.style.transform = `rotate(${rotateDeg}deg)`
        // "rotate(-45deg)"

}

btn.addEventListener('click', getAdvice)
getAdvice()
