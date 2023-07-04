import './style.css';


import Sortable from 'sortablejs/modular/sortable.complete.esm.js';
var el = document.getElementById('tasks');
var sortable = Sortable.create(el,{
    swapThreshold: 1,
    animation: 150,
    ghostClass: "g",
});
var card = document.querySelectorAll('.card-item');

