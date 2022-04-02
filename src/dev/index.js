import { marked } from 'marked';
import { getStorageItem, setStorageItem } from './storage';
import example1 from './md/example1.md?raw';
import example2 from './md/example2.md?raw';
import example3 from './md/example3.md?raw';
import './app.scss';

const $html = document.querySelector('html');
const $body = document.getElementById('body');
const $button = document.querySelectorAll('#example_nav button');

// content body
function changeBody(key, save = false)
{
  let selected = false;
  $button.forEach((button) => {
    if (button.dataset['id'] === key)
    {
      button.classList.add('on');
      selected = true;
    }
    else
    {
      button.classList.remove('on');
    }
  });
  if (!selected)
  {
    key = $button[0].dataset['id'];
    $button[0].classList.add('on');
  }
  let str;
  switch (key)
  {
    case 'example1':
      str = example1;
      break;
    case 'example2':
      str = example2;
      break;
    case 'example3':
      str = example3;
      break;
  }
  $body.innerHTML = marked(str);
  if (save) setStorageItem('menu', key);
}
$button.forEach((button,key) => {
  button.addEventListener('click', e => {
    const $self = e.currentTarget;
    if ($self.classList.contains('on')) return;
    const id = e.currentTarget.dataset.id;
    changeBody(id, true);
  });
});
changeBody(getStorageItem('menu') || 'example1', false);

// color theme
const $selectTheme = document.querySelector('#select-theme');
let theme = getStorageItem('theme') || 'system';
function changeTheme(name, save = true)
{
  $html.dataset['theme'] = name;
  if (save) setStorageItem('theme', name);
}
$selectTheme.addEventListener('change', e => changeTheme(e.target.value, true));
changeTheme(theme, false);
$selectTheme.value = theme;
