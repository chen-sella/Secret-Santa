
function Match(){
    var form, names, elements, inputlist, perlist, randomNumber, b, compare, again, array, c;
    console.log("button pressed");
    names =[];
    array = [];

    // loops over the inputs and create an array containind their values
    form = document.querySelector('form').addEventListener("submit", function(e){
        e.preventDefault();
        elements = document.querySelector('form').elements;
        for (var i = 0 ; i<elements.length-1 ; i++) {
            names.push(elements[i].value);
        }

        for (i=0 ; i<names.length ; i++){
            array.push(names[i]);
        }
        
        generateList(names , inputlist);
        generateButton(again); 
        deleting (b,c);
        random(array);         
    });
    }
        
function generateList(names , inputlist){
    for (var i=0 ; i<names.length ; i++){
        if (names[i] != "" ){
            inputlist = document.createElement('li');
            inputlist.setAttribute('class', 'il1')
            inputlist.setAttribute('id', 'li-'+i);
            inputlist.textContent = names[i] + ' >>>';
            document.querySelector('.input-list').appendChild(inputlist);
        }
    }
}

function generateButton(again){
    again = document.createElement('button');
    again.setAttribute('class', 'new-button');
    again.setAttribute('id', 'btn2');
    again.textContent = "Tray Again";
    // again.onClick = refreshPage();
    document.querySelector('.new-page-button').appendChild(again);
    again.addEventListener('click', function(e) {
        location.reload();
    })
}


function deleting (b,c){
    b = document.querySelector('form').elements;
    for (var i = 0 ; i <= b.length +2; i++){
        var remove = document.getElementById('name-'+i)
        remove.parentNode.removeChild(remove);
        } 
    c = document.querySelector('#add');
    c.parentNode.removeChild(c);
}

function random(array){
    while (array.length >=1){
        randomNumber = (Math.floor(Math.random()*(array.length)));
        if (array[randomNumber] != ""){
            perlist = document.createElement('li');
            perlist.setAttribute('class' , 'il2')
            perlist.setAttribute('id', 'perli-'+randomNumber);
            perlist.textContent = array[randomNumber];
            document.querySelector('.per-list').appendChild(perlist);   
            array.splice(randomNumber, 1);
        }    
     } 
}

function refreshPage(){
    window.location.reload();
}