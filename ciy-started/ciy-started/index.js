const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
  
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    
  


function renderList(){
    var result = '';
    numbers.forEach((value, index)=>{
        result = result + `<div class="item item${value}" id='item${value}'>${value}</div>`;
    });
    document.getElementById('items').innerHTML = result;
}



renderList();


function doPush(){
    var end= numbers[numbers.length - 1];
    numbers.push(end +1);
    renderList();
}


function doPop(){
    var end= numbers[numbers.length + 1];
    numbers.pop(end -1 );
    renderList();
}

function doShift(){
    var end= numbers[numbers.length + 1];
    numbers.shift(end -1 );
    renderList();
}

function doUnShift(){
    var end= numbers[0];
    numbers.unshift(end-1);
    renderList();
}  

function doSplice(){
    var end= numbers[0];
    numbers.splice(3,1,4.5);
    renderList();
}   

function doSort(){
    numbers.reverse();
    renderList();
}   