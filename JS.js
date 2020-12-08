var inputs =[{type: "input", class:"inputs", id:"name-0" ,placeholder:"First Participant" ,value:"Chen"},
{type: "input", class:"inputs", id:"name-1", placeholder:"Second Participant", value:"Orr"},
{type: "input", class:"inputs", id:"name-2", placeholder:"Third Participant", value:"Noam"},
{type: "input", class:"inputs", id:"name-3", placeholder:"Forth Participant", value:"Gila"},
{type: "input", class:"inputs", id:"name-4", placeholder:"Fifth Participant", value:"Dubi"}];


function pageRender(){
    var input, div, firstList;
    div = document.querySelector('.container');
    console.log(typeof(div));
    firstList = document.createElement('div');
    firstList.setAttribute('class', 'first-list');

    for (var i=0; i<inputs.length; i++){
        input = document.createElement(inputs[i].type);
        input.setAttribute('class', inputs[i].class);
        input.setAttribute('id', inputs[i].id);
        input.setAttribute('placeholder', inputs[i].placeholder);
        // input.setAttribute('value', inputs[i].value);
        div.appendChild(input);
    }
    var btn = document.createElement('button');
    btn.setAttribute('class', 'btn1');
    btn.textContent = 'Match';
    btn.addEventListener('click', ()=> match());
    div.appendChild(btn);
}

function match(){
    var names, elements;
    names =[];

    elements = document.querySelector('form').elements;
    
    for (var i = 0 ; i<elements.length-1 ; i++){
        if (elements[i].value !== ""){
            names.push(elements[i].value);
        }
    }
    if (names.length !== 0){
        generateList(names);
        random(names);         
        generateButton();
        deleting ();
    }   
}
        
function generateList(names){
    var ul, inputlist, firstList;
    ul = document.createElement('ul');
    ul.setAttribute('class', 'input-list');
    firstList = document.createElement('div');
    firstList.setAttribute('class', 'first-list');

    for (var i=0 ; i<names.length ; i++){
        if (names[i] !== " "){
            inputlist = document.createElement('li');
            inputlist.setAttribute('class', 'li1')
            inputlist.setAttribute('id', 'li-'+i);
            inputlist.textContent = names[i];
            ul.appendChild(inputlist);
        }
    }
    firstList.appendChild(ul);
    document.querySelector('.new-page').appendChild(firstList);
}

function random(names){
    var ul, randomNumber, secondList;
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'per-list');
    secondList = document.createElement('div');
    secondList.setAttribute('class', 'second-list');
    while (names.length >=1){
        var randomNumber = (Math.floor(Math.random()*(names.length)));
        if (names[randomNumber] != ""){
            perlist = document.createElement('li');
            perlist.setAttribute('class' , 'li2')
            perlist.setAttribute('id', 'perli-'+randomNumber);
            perlist.textContent = names[randomNumber];
            ul.appendChild(perlist);   
            names.splice(randomNumber, 1);
        }
     }
     secondList.appendChild(ul);
     document.querySelector('.new-page').appendChild(secondList); 
}

function generateButton(){
    var again = document.createElement('button');
    again.setAttribute('class', 'btn2');
    again.textContent = "Try Again";
    document.querySelector('.new-page').appendChild(again);
    again.addEventListener('click',()=> firstPage());
}

function deleting (){
    var container = document.querySelector('.container');
    container.innerHTML = "";
}

function firstPage(){
    var page = document.querySelector('.new-page');
    page.innerHTML = "";
    pageRender();
}

pageRender();
