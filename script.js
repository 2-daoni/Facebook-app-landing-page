const btns = document.querySelectorAll('.slides_btn');
const slides = document.querySelectorAll('.slides');

function Slide(i) {
  // console.log(i);
  for (let slide of slides) slide.classList.remove('active');
  slides[i].classList.add('active');

  for (let btn of btns) btn.classList.remove('active');
  btns[i].classList.add('active');
}

for (let p = 0; p < btns.length; p++) {
  btns[p].addEventListener('click', function () {
    Slide(p);
  });
}
