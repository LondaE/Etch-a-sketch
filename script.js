function reset(){

    let container = document.querySelector('#container');
    let squares = document.querySelectorAll('.grid-square');
    for(let i = 0; i < squares.length; i++)
    {
        container.removeChild(squares.item(i));
    }
    for(let i = 0; i<256; i++)
    {
        let div = document.createElement('div');    
        container.appendChild(div);    
        div.classList.add('grid-square');
        div.addEventListener('mouseover', () => {div.classList.add('activated')});
    }
}
