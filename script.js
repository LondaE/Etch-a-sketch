function reset(){

    let newSize = prompt("Enter new grid size", "64");

    if(newSize > 100)
    {
        alert("Maximum grid size exceeded");
        reset();
    }
    let container = document.querySelector('#container');
    let squares = document.querySelectorAll('.grid-square');

    for(let i = 0; i < squares.length; i++)
    {
        container.removeChild(squares.item(i));
    }

    container.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
    container.style.gridTemplateColumns= `repeat(${newSize}, 1fr)`;

    for(let i = 0; i < newSize*newSize; i++)
    {
        let div = document.createElement('div');    
        container.appendChild(div);    
        div.classList.add('grid-square');
        div.addEventListener('mouseover', () => {div.classList.add('activated')});
    }
}
