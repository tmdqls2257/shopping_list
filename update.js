const Ul = document.querySelector('.items');
const input =  document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd(){
  if (input.value === ''){
    input.focus();
    return;
  }
  console.log(input.value);
  const item = makeItem();
  Ul.appendChild(item);
// 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({blck: 'center'});
// 5. 인풋을 초기화
  input.value = '';
  input.focus();
}
let id = 0;
function makeItem(){
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
  <div class="item">
    <span class="item__name">${input.value}</span>
    <button class="item__delete">
      <i class="fas fa-trash-alt" data-id=${id}></i>
    </button>
  </div>
  <div class="item__divider"></div>`;
  id ++;
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', event => {
  if(event.keyCode === 13){
    onAdd();
  }
});

Ul.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if(id){
    const tobeDelete = document.querySelector(`.item__row[data-id="${id}"]`);
    tobeDelete.remove();
}});