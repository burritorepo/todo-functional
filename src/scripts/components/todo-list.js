import './todo-list.scss';

function getValue(element) {
  return document.querySelector(element).value
}

function hashId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function makeItem(value) {
  const item = document.createElement('div');
  item.id = hashId();

  item.innerHTML = `
    <form class="todo-item form-inline mt-3">
      <span class="form-span mb-2">${value}</span>
      <input required class="form-input form-control mb-2" type="text" value="${value}"> 
      <button type="submit" class="js_edit mx-sm-2 btn btn-primary mb-2">Editar</button>
      <button type="button" class="js_delete btn btn-danger mb-2">Eliminar</button>
    </form>
  `;

  item.querySelector('form').onsubmit = (e) => { 
    e.preventDefault(); 
    editItem(item) 
  };

  item.querySelector('.js_delete').onclick = () => { deleteItem(item) };

  return item;
}

function toggleButton(item) {
  return item.classList.contains('is-edit')
}

function editItem(item) {
  let buttonEdit = item.querySelector('.js_edit');

  return toggleButton(item) ? (() => { 
    const { value } = item.querySelector('input');
    const { id } = item;

    item.classList.remove('is-edit')  
    buttonEdit.textContent = 'Editar';

    replaceElement(id, makeItem(value));
  })() : (() => { 
    item.classList.add('is-edit')  
    buttonEdit.textContent = 'Guardar';
  })()
}

function deleteItem(element) {
  return element.remove();
}

function addDom(element) {
  return document.querySelector('#todo').appendChild(element);
}

function replaceElement(id, element) {
  const target = document.getElementById(id);
  const parent = target.parentNode;

  return parent.replaceChild(element, target)
}

/**
 * Init of todo
 * @param {*} input
 * @param {*} form
 */
export function init({input, form} = {}) {
  document
  .querySelector(form)
  .addEventListener('submit', (e) => {
    e.preventDefault();
    addDom(makeItem(getValue(input)))
    document.querySelector('input').value = '';
  });
}
