// Завдання 1
document.getElementById('b-1').addEventListener('click', function() {
    var div = document.getElementById('div-1');
    div.style.width = '200px';
    div.style.height = '90px';
    div.innerText = `Ширина: ${div.style.width}, Висота: ${div.style.height}`;
});

// Завдання 2
document.getElementById('b-2').addEventListener('click', function() {
    document.getElementById('div-2').classList.toggle('bg-orange');
});

// Завдання 3
document.getElementById('b-3').addEventListener('click', function() {
    var hasClass = document.getElementById('div-2').classList.contains('bg-orange');
    document.querySelector('.out-3').innerText = hasClass;
});

// Завдання 4
document.getElementById('b-4').addEventListener('click', function() {
    document.querySelectorAll('.out-4').forEach(function(block) {
        block.classList.add('bg-red');
    });
});

// Завдання 5
document.querySelectorAll('.out-5').forEach(function(block) {
    block.addEventListener('click', function() {
        this.classList.toggle('bg-blue');
    });
});

// Завдання 6
var value = 0;
document.getElementById('increase').addEventListener('click', function() {
    document.getElementById('display').innerText = ++value;
});
document.getElementById('decrease').addEventListener('click', function() {
    document.getElementById('display').innerText = --value;
});

// Завдання 7
document.getElementById('add-block').addEventListener('click', function() {
    var block = document.createElement('div');
    block.className = 'color-block';
    block.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    block.addEventListener('click', function() {
        this.remove();
    });
    document.getElementById('container').appendChild(block);
});

// Завдання 8
document.querySelectorAll('.color-box').forEach(function(box) {
    box.addEventListener('click', function() {
        document.getElementById('text').style.color = this.getAttribute('data-color');
    });
});
