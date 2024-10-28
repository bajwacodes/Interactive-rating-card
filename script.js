const buttons = document.querySelectorAll('.btn');
const submitBtn = document.getElementById('submit-btn');
const ratingBox = document.querySelector('.ratings-box');
const userRating = document.querySelector('#user-rating');
const title = document.querySelector('.title-txt');
const description = document.querySelector('.desc-box');
const descText = document.querySelector('.desc-txt')
const logoBox = document.querySelector('.logo-box');
const thanksImg = document.querySelector('.thanks-img-wrapper');
const resultBar = document.querySelector('.rating-result-wrapper');
const cardBox = document.querySelector('.card-wrapper');
const error = document.getElementById('error');
let selectedRating = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('selected-btn');
        })

        button.classList.add('selected-btn');

        selectedRating = button.dataset.value;

        error.textContent = "";
    })
})

submitBtn.addEventListener('click', () => {
    if(selectedRating){
        logoBox.style.display = 'none';
        thanksImg.style.display = 'block';
        resultBar.style.display = 'block';

        userRating.textContent = selectedRating;

        title.textContent = "Thank you!";

        descText.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";

       ratingBox.style.display = 'none';
       submitBtn.style.display = 'none';

        cardBox.style.textAlign = 'center';

    } else{
        error.style.display = 'block';
        error.textContent = "Please select a rating";
    }
})
