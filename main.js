
const Ul = document.createElement('ul'),
  plusClick = document.querySelector('.plus'),
  Input = document.querySelector('.footer__input');

function addRemoveList() {


    Input.value = '';
    Image.addEventListener("click", () =>{
      Ul.removeChild(li);
    });
    if(Input.value === ''){
      input.focus();
      return;
    }
}

function onAdd(){
  const text = input.value;
  console.log(text);
  const item = createItem();
  Ul.appendChild(item);
  input.value = '';
  input.focus();
}

function createItem(){
  const 
  li = document.createElement("li"),
  span = document.createElement("span"),
  Image = document.createElement("i");
    li.setAttribute("class", "ul__list");
    span.setAttribute("class", "list__item");
    Image.setAttribute("class", "fas fa-trash-alt trash");
    Section.appendChild(Ul);
    Ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(Image);
}

plusClick.addEventListener("click", () => {
  addRemoveList();
  });

Input.addEventListener("keypress", () => {
    addRemoveList();
    });