let container = document.querySelector('#container');
for(let i = 0; i<256; i++)
{
    let div = document.createElement('div');    
    container.appendChild(div);    
    div.classList.add('grid-square');
    div.addEventListener('mouseover', () => {div.classList.add('activated')});
}