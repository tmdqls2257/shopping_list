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

function makeItem(){
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');
  itemRow.appendChild(item);

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');
  itemRow.appendChild(itemDivider);
  
  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = input.value;
  item.appendChild(name);

  const img = document.createElement('i');
  const Btn = document.createElement('button');
  Btn.setAttribute('class', 'item__delete');
  img.setAttribute('class', 'fas fa-trash-alt');
  item.appendChild(Btn);
  Btn.appendChild(img);
  Btn.addEventListener("click", () => {
    itemRow.remove();
  })
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', event => {
  if(event.keyCode === 13){
    onAdd();
  }
})