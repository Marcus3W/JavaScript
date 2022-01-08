//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    // console.log(question);
    const btn = question.querySelector(".question-btn");
    // console.log(btw);
    btn.addEventListener('click', function() {

        // this closes a question if another is opened
        questions.forEach(function(item) {
            if(item !==question) {
                item.classList.remove('show-text');
            }
        });
        // toggles question
        question.classList.toggle('show-text');
    })
})


// SECOND OPTION
    /*
// traversing the dom
const questionBtn = document.querySelectorAll(".question-btn");

questionBtn.forEach(function(btn) {
    btn.addEventListener('click', function (e) {
       const question = e.currentTarget.parentElement.parentElement;
       question.classList.toggle('show-text')
    });
})
*/

