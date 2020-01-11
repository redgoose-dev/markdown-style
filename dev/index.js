import example1 from './md/example1.md';
import example2 from './md/example2.md';
import example3 from './md/example3.md';
import './app.scss';

const $body = document.getElementById('body');
const $button = document.querySelectorAll('#example_nav button');

/**
 * render
 *
 * @param {string} str
 */
function render(str)
{
  $body.innerHTML = str;
}

function changeActiveClassFromButtons(n)
{
  $button.forEach((button) => {
    button.classList.remove('on');
  });
  $button[n].classList.add('on');
}

// events
$button.forEach((button,key) => {
  button.addEventListener('click', function(e) {
    const id = e.currentTarget.dataset.id;
    changeActiveClassFromButtons(key);
    switch (id)
    {
      case 'example1':
        render(example1);
        break;
      case 'example2':
        render(example2);
        break;
      case 'example3':
        render(example3);
        break;
    }
  });
});

// initial
changeActiveClassFromButtons(0);
render(require('./md/example1.md'));
