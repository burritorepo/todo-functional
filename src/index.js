import './styles/main.scss';
import { init } from './scripts/components/todo-list'

// document.querySelector('.js_form')
// .addEventListener('submit', (e) => {
//   e.preventDefault();
  
// })

init({
  input: '.js_input',
  form: '.js_form' 
});
