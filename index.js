import Sortable from 'sortablejs/modular/sortable.complete.esm.js';
import './style.css';
var el = document.getElementById('tasks');
var sortable = Sortable.create(el,{
    swapThreshold: 1,
    animation: 150,
    ghostClass: "g",
});
 
let form = document.querySelector('#task_form')
console.log(form)
var tasklist = document.querySelector('#tasks')
console.log(tasks)
let taskinput= document.querySelector('#new_task');
console.log(taskinput)
let addtask = document.querySelector('#add_task')
console.log(addtask)


form.addEventListener('submit', addtrellotask);
addtask.addEventListener('click', addtrellotask);
document.addEventListener('DOMContentLoaded', setTaskformLocalStore)



    
function addtrellotask(e)
{
    if(taskinput === null){
        
    }
    else{
        //top section card
        let list_container = document.createElement('div')
        list_container.classList.add('list_container')
        
        let div = document.createElement('div')
        div.classList.add('w-[268px]', 'bg-gray-200', 'p-2', 'rounded-lg', 'm-2','card-container')
        
        let wrapperdiv = document.createElement('div');
        div.appendChild(wrapperdiv);
        
        wrapperdiv.classList.add('flex')
        //title container
        let title_container= document.createElement('div');
            title_container.classList.add('flex');
            
        let text = document.createElement('div')
        text.classList.add('title-card')
        text.style.width="220px";
        text.style.cursor="pointer"
       
        let span =document.createElement('div')
        let icon = document.createElement('i')
        icon.classList.add('fa-solid', 'fa-ellipsis')
        span.appendChild(icon);
        
        text.appendChild(document.createTextNode(taskinput.value))
        title_container.appendChild(text);
        title_container.appendChild(span);
        wrapperdiv.appendChild(title_container);
       
        //add button
        let add_button_div= document.createElement('div');
        wrapperdiv.appendChild(add_button_div)
        list_container.appendChild(div)
        tasklist.appendChild(list_container)
        storeTaskInLocalStore(taskinput.value,)
        

        var cardtitle = Array.from(document.querySelectorAll('.title-card'))
        var contenttext = Array.from(document.querySelectorAll('.content-text'))

 for(let i =0;i<cardtitle.length;i++){
    cardtitle[i].addEventListener('click', function(){
        cardtitle[i].setAttribute("contenteditable","true")
        cardtitle[i].style.cursor='pointer';

    })
 }

 
    
 //add a card
 let addcard=document.createElement('div');
 addcard.classList.add('flex');
 
 let containeraddtocard= document.createElement('div');
 containeraddtocard.classList.add('flex','containeraddtocard');
 addcard.appendChild(containeraddtocard);
 let addcardbutton= document.createElement('div')
     addcardbutton.classList.add('flex','gap-1' ,'add_a_card')
     addcardbutton.style.width="220px";
     containeraddtocard.appendChild(addcardbutton);
     
     let span_add_card= document.createElement('span');
     let icon_add_card = document.createElement('i');
     icon_add_card.classList.add('fa-solid','fa-plus')
     span_add_card.appendChild(icon_add_card);
     let text_div=document.createElement('div');
     let text_add_card=document.createElement('p');
     text_add_card.appendChild(document.createTextNode('Add a card'))
     text_div.appendChild(text_add_card);
     
     addcardbutton.appendChild(span_add_card);
     addcardbutton.appendChild(text_div);
     //end left side
     //right side 
     let template_icon = document.createElement('div')
        let template_icon_container= document.createElement('span');
        let template_icon_img= document.createElement('i')
            template_icon_img.classList.add('fa-solid', 'fa-image');
            template_icon_container.appendChild(template_icon_img);
            template_icon.appendChild(template_icon_container);
            containeraddtocard.appendChild(template_icon)
      //end right side   
      //composer card
      let card_composer = document.createElement('div');
    card_composer.classList.add('card_composer','w-[256px]','bg-gray-200', 'p-2', 'rounded-lg')
    let card_description_div= document.createElement('div');
    card_description_div.classList.add('w-full')
        let text_area = document.createElement('textarea');
        text_area.classList.add('w-full','texta-area')
        card_description_div.appendChild(text_area);
        card_composer.appendChild(card_description_div);
    div.appendChild(card_composer)

     div.appendChild(addcard)
     
    
        
 }
    

}
function storeTaskInLocalStore(task){
    let tasks;
    if(localStorage.getItem('tasks')==null){
        tasks=[]
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
function setTaskformLocalStore(){
    let tasks;
    if(localStorage.getItem('tasks')==null){
        tasks=[]
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    
    
    tasks.forEach(task => {
         //top section card
         let list_container = document.createElement('div')
        list_container.classList.add('list_container')
         let div = document.createElement('div')
         div.classList.add('w-[268px]', 'bg-gray-200', 'p-2', 'rounded-lg', 'm-2','card-container')
         
         let wrapperdiv = document.createElement('div');
         div.appendChild(wrapperdiv);
         
         wrapperdiv.classList.add('flex')
         //title container
         let title_container= document.createElement('div');
             title_container.classList.add('flex');
             
         let text = document.createElement('div')
         text.classList.add('title-card')
         text.style.width="220px";
         text.style.cursor="pointer"
        
         let span =document.createElement('div')
         let icon = document.createElement('i')
         icon.classList.add('fa-solid', 'fa-ellipsis')
         span.appendChild(icon);
         
         text.appendChild(document.createTextNode(task))
         title_container.appendChild(text);
         title_container.appendChild(span);
         wrapperdiv.appendChild(title_container);
        
         //add button
         let add_button_div= document.createElement('div');
         wrapperdiv.appendChild(add_button_div)
         
         list_container.appendChild(div)
        tasklist.appendChild(list_container)
         
         
 
         var cardtitle = Array.from(document.querySelectorAll('.title-card'))
         var contenttext = Array.from(document.querySelectorAll('.content-text'))
 
  for(let i =0;i<cardtitle.length;i++){
     cardtitle[i].addEventListener('click', function(){
         cardtitle[i].setAttribute("contenteditable","true")
         cardtitle[i].style.cursor='pointer';
 
     })
  }
 
  
     
  //add a card
  let addcard=document.createElement('div');
  addcard.classList.add('flex','containeraddtocard');
  
  let containeraddtocard= document.createElement('div');
  containeraddtocard.classList.add('flex');
  addcard.appendChild(containeraddtocard);
  let addcardbutton= document.createElement('div')
      addcardbutton.classList.add('flex','gap-1' ,'add_a_card')
      addcardbutton.style.width="220px";
      containeraddtocard.appendChild(addcardbutton);
      
      let span_add_card= document.createElement('span');
      let icon_add_card = document.createElement('i');
      icon_add_card.classList.add('fa-solid','fa-plus')
      span_add_card.appendChild(icon_add_card);
      let text_div=document.createElement('div');
      let text_add_card=document.createElement('p');
      text_add_card.appendChild(document.createTextNode('Add a card'))
      text_div.appendChild(text_add_card);
      
      addcardbutton.appendChild(span_add_card);
      addcardbutton.appendChild(text_div);
      //end left side
      //right side 
      let template_icon = document.createElement('div')
         let template_icon_container= document.createElement('span');
         let template_icon_img= document.createElement('i')
             template_icon_img.classList.add('fa-solid', 'fa-image');
             template_icon_container.appendChild(template_icon_img);
             template_icon.appendChild(template_icon_container);
             containeraddtocard.appendChild(template_icon)
       //end right side
        let create_card_container = document.createElement('div');
            create_card_container.classList.add('card-item')
            div.appendChild(create_card_container)
       //composer card
       let card_composer = document.createElement('div');
       
     card_composer.classList.add('card_composer')
     let card_description_div= document.createElement('div');
     card_description_div.classList.add('w-full','text-area-container');
     
         let text_area = document.createElement('textarea');
         text_area.classList.add('w-full','texta-area')
         card_description_div.appendChild(text_area);
         card_composer.appendChild(card_description_div);
         let card_composer_button= document.createElement('div')
         card_composer_button.classList.add('card_composer_button_containner')
         let button_card_composer= document.createElement('button')
         button_card_composer.appendChild(document.createTextNode('Add Card'))
         button_card_composer.classList.add('capitalize', 'bg-sky-600','text-white','p-1','rounded-l','button_card_composer')
         card_composer_button.appendChild(button_card_composer);
         let span_button= document.createElement('span');
          span_button.classList.add('clsoe_btn')
            let spanIcon= document.createElement('i')
            span_button.appendChild(spanIcon)
            spanIcon.classList.add('fa-solid', 'fa-xmark')
            span_button.appendChild(spanIcon)
                card_composer_button.appendChild(span_button)
                span_button.classList.add('p-2')
                card_composer.appendChild(card_composer_button)
         
         div.appendChild(card_composer)
 
      div.appendChild(addcard)
      
      

    });
    

    var cardtitle = Array.from(document.querySelectorAll('.title-card'))
    var contenttext = Array.from(document.querySelectorAll('.content-text'))
   
 for(let i =0;i<cardtitle.length;i++){
    cardtitle[i].addEventListener('click', function(){
        cardtitle[i].setAttribute("contenteditable","true")
        cardtitle[i].style.cursor='pointer';

    })
    
}
var card_composer =Array.from( document.querySelectorAll('.card_composer'))
var add_a_card =Array.from(document.querySelectorAll('.containeraddtocard'))
var card_container= Array.from(document.querySelectorAll('.card-container'))
var clsoe_btn= Array.from(document.querySelectorAll('.clsoe_btn'))
var tasksoutside = document.querySelector('.tasks')
show_cardComposer(card_composer,add_a_card,card_container)
hide_cardComposer(clsoe_btn, card_composer,add_a_card)
let new_card = Array.from(document.querySelectorAll('.texta-area'))

 
 let button_card_composer= Array.from(document.querySelectorAll('.button_card_composer'));
 let card_item= Array.from(document.querySelectorAll('.card-item'))
 addTocard(button_card_composer,new_card,card_item)
 let list_add_to_card = Array.from(document.querySelectorAll('.card-item'));
 sortablelist(list_add_to_card)

 

//  for(let i =0;i<button_card_composer.length;i++){
//     button_card_composer[i].addEventListener('click',addTocard(new_card))
//  }

}

// function addcard (){
    
    
//     let addcard=document.createElement('div');
//     addcard.classList.add('flex','py-14');
    
//     let containeraddtocard= document.createElement('div');
//     containeraddtocard.classList.add('flex');
//     addcard.appendChild(containeraddtocard);

//     let addcardbutton= document.createElement('div')
//         addcardbutton.classList.add('flex','gap-1')
//         containeraddtocard.appendChild(addcardbutton);
        
//         let span= document.createElement('span');
//         let icon = document.createElement('i');
//         icon.classList.add('fa-solid','fa-plus')
//         span.appendChild(icon);
//         let text_div=document.createElement('div');
//         let text=document.createElement('p');
//         text.appendChild(document.createTextNode('Add a card'))
//         text_div.appendChild(text);
        
//         addcardbutton.appendChild(span);
//         addcardbutton.appendChild(text_div);
       


//         cardcontainer.appendChild(addcard)
//         let cardcontainer=document.querySelector('.card-container');



// }
// function addallcard(add_a_card,card_container,card_composer){
    
//     let add_a_card_all = add_a_card
//     let all_card_container= card_container
//     let all_card_composer= card_composer;
//     console.log(all_card_composer)
//         for(let i =0 ;i<add_a_card_all.length;i++){
//             add_a_card_all[i].addEventListener('click', function(){
//                 all_card_composer[i].style.display='inline-block';
//                 // add_a_card_all[i].style.display='none'

                
//             })
//         } 
       
        
    
// }

// function show(close,card_composer,add_a_card){
//  var close = close;
//  var card_composer= card_composer;
//  var add_a_card= add_a_card
//  for(let i =0; i<close.length;i++){
//     close[i].addEventListener('click', function(){
//         card_composer[i].style.display='none';
//         // add_a_card[i].style.display='inline-block'
        
//     })
//  }

// }

function show_cardComposer(card_composer,add_a_card,card_container){
    
    var card_composer= card_composer;
    var add_a_card = add_a_card;
    var card_container = card_container;
    
    for(let i =0 ;i<add_a_card.length;i++){
        add_a_card[i].addEventListener('click', function(){
           
           card_composer[i].style.display='inline-block';
           add_a_card[i].style.display='none'
        })
    }
}


function hide_cardComposer(clsoe_btn, card_composer,add_a_card){
    var clsoe_btn= clsoe_btn;
    var card_composer= card_composer;
   var  add_a_card = add_a_card;
    for(let i =0 ; i<clsoe_btn.length;i++){
        clsoe_btn[i].addEventListener('click', function(){
            card_composer[i].style.display='none';
            add_a_card[i].style.display='block'
        })
    }
}

function addTocard(button_card_composer,new_card,card_item){
 var button_card_composer = button_card_composer;
 var new_card = new_card;
 var card_item = card_item
 console.log(card_item)
  for(let i =0;i<button_card_composer.length;i++){
    button_card_composer[i].addEventListener('click', function(){
        if(new_card[i].value ===''){
            console.log('enter somthing')
        }
        else{
            
        let card = document.createElement('div');
            card.classList.add('card')
         let carditem= document.createElement('div')
         card.appendChild(carditem);
         let cardtitle= document.createElement('p');
         cardtitle.classList.add('cardtitle');  
         cardtitle.appendChild(document.createTextNode(new_card[i].value))
         carditem.appendChild(cardtitle); 
        card_item[i].appendChild(card)
         

        }
    })
  }
    
}
function sortablelist(list_add_to_card){
    var list_add_to_card = list_add_to_card; 
     for(let i =0;i<list_add_to_card.length;i++){
        var sortable = Sortable.create(list_add_to_card[i],{
            swapThreshold: 1,
            animation: 150,
            group:'shared',
            
            ghostClass: 'blue-background-class'
            
        });
     }

}

// window.gtranslateSettings = {"default_language":"en","languages":["en","fr","de","it","es"],"wrapper_selector":".gtranslate_wrapper","alt_flags":{"en":"usa"}}
