var select = document.getElementById('semester');

var sem1 = document.querySelectorAll('.sem1');
var sem2 = document.querySelectorAll('.sem2');
var sem3 = document.querySelectorAll('.sem3');
var sem4 = document.querySelectorAll('.sem4');
var sem5 = document.querySelectorAll('.sem5');
var sem6 = document.querySelectorAll('.sem6');

// var select = document.getElementById('language');
// var value = select.options[select.selectedIndex].value;

const search = document.getElementById('search');
search.addEventListener('click', () => {
    var value = select.options[select.selectedIndex].value;

    if (value==="01") {
        sem1.forEach((sem1) => {
            sem1.classList.remove('hide')
        })
        sem2.forEach((sem2) => {
            sem2.classList.add('hide')
        })
        sem3.forEach((sem3) => {
            sem3.classList.add('hide')
        })
        sem4.forEach((sem4) => {
            sem4.classList.add('hide')
        })
        sem5.forEach((sem5) => {
            sem5.classList.add('hide')
        })
        sem6.forEach((sem6) => {
            sem6.classList.add('hide')
        })
    }


    else if (value==="02") {
        sem2.forEach((sem2) => {
            sem2.classList.remove('hide')
        })
        sem1.forEach((sem1) => {
            sem1.classList.add('hide')
        })
        sem3.forEach((sem3) => {
            sem3.classList.add('hide')
        })
        sem4.forEach((sem4) => {
            sem4.classList.add('hide')
        })
        sem5.forEach((sem5) => {
            sem5.classList.add('hide')
        })
        sem6.forEach((sem6) => {
            sem6.classList.add('hide')
        })
    }

    else if (value==="03") {
        sem3.forEach((sem3) => {
            sem3.classList.remove('hide')
        })
        sem1.forEach((sem1) => {
            sem1.classList.add('hide')
        })
        sem2.forEach((sem2) => {
            sem2.classList.add('hide')
        })
        sem4.forEach((sem4) => {
            sem4.classList.add('hide')
        })
        sem5.forEach((sem5) => {
            sem5.classList.add('hide')
        })
        sem6.forEach((sem6) => {
            sem6.classList.add('hide')
        })
    }

    else if (value==="04") {
        sem4.forEach((sem4) => {
            sem4.classList.remove('hide')
        })
        sem1.forEach((sem1) => {
            sem1.classList.add('hide')
        })
        sem3.forEach((sem3) => {
            sem3.classList.add('hide')
        })
        sem2.forEach((sem2) => {
            sem2.classList.add('hide')
        })
        sem5.forEach((sem5) => {
            sem5.classList.add('hide')
        })
        sem6.forEach((sem6) => {
            sem6.classList.add('hide')
        })
    }

    else if (value==="05") {
        sem5.forEach((sem5) => {
            sem5.classList.remove('hide')
        })
        sem1.forEach((sem1) => {
            sem1.classList.add('hide')
        })
        sem3.forEach((sem3) => {
            sem3.classList.add('hide')
        })
        sem4.forEach((sem4) => {
            sem4.classList.add('hide')
        })
        sem2.forEach((sem2) => {
            sem2.classList.add('hide')
        })
        sem6.forEach((sem6) => {
            sem6.classList.add('hide')
        })
    }

    else if (value==="06") {
        sem6.forEach((sem6) => {
            sem6.classList.remove('hide')
        })
        sem1.forEach((sem1) => {
            sem1.classList.add('hide')
        })
        sem3.forEach((sem3) => {
            sem3.classList.add('hide')
        })
        sem4.forEach((sem4) => {
            sem4.classList.add('hide')
        })
        sem5.forEach((sem5) => {
            sem5.classList.add('hide')
        })
        sem2.forEach((sem2) => {
            sem2.classList.add('hide')
        })
    }
})

// sem1.classList.remove('sem1')