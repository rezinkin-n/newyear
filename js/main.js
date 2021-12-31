let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let fourth = document.querySelector('.fourth');
let fifth = document.querySelector('.fifth');

let six = document.querySelector('.six');
let seven = document.querySelector('.seven');




first.onclick = function () {
   first.style.display = first.style.display === 'none' ? 'block' : 'none'
   second.style.display = second.style.display === 'block' ? 'none' : 'block'
}

second.onclick = function () {
   second.style.display = second.style.display === 'none' ? 'block' : 'none'
   third.style.display = third.style.display === 'block' ? 'none' : 'block'
}

third.onclick = function () {
   third.style.display = third.style.display === 'none' ? 'block' : 'none'
   fourth.style.display = fourth.style.display === 'block' ? 'none' : 'block'
}

fourth.onclick = function () {
   fourth.style.display = fourth.style.display === 'none' ? 'block' : 'none'
   fifth.style.display = fifth.style.display === 'block' ? 'none' : 'block'
}

fifth.onclick = function () {
   fifth.style.display = fifth.style.display === 'none' ? 'block' : 'none'
   six.style.display = six.style.display === 'block' ? 'none' : 'block'
}




