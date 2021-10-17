const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showBoxes);
showBoxes();

function showBoxes() {
  const trigger = window.innerHeight - 150;
  console.log(trigger);
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigger) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
