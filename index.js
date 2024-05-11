const bulbSwitch=document.querySelector('#bulbSwitch');
const bulb=document.querySelector('#bulb');



bulbSwitch.addEventListener('click', function(){
    // bulbSwitch.style.color='yellow';
    console.log(bulb.src);

    if(bulb.src.match('off')){
        bulb.src='./bulb-on.jpg';
        bulbSwitch.innerHTML='Turn OFF';
    }else{
        bulb.src='./bulb-off.jpg';
        bulbSwitch.innerHTML='Turn ON';
    }
   
   
})

// const root=document.querySelector('#root');

// const button=document.querySelector('button');

// function createItem(item){

//     // card
//     const card=document.createElement('div');
//     card.classList.add('add');


//     // photo

//     const photo=document.createElement('img');
//     photo.src=item.thumbnailUrl;

//     // title
//     const title=document.createElement('h4');
//     title.innerHTML=item.title;
//     card.appendChild(photo);
//     card.appendChild(title);
//     root.appendChild(card);

// }

// function displayImages(items) {
//    items.forEach(function (item){
//       createItem(item);
//    });
   

//    }

// button.addEventListener('click', function(){
//     fetch('https://jsonplaceholder.typicode.com/photos')
    
// .then((res) =>res.json())

// .then((items)=>{
//     displayImages(items);

// });

// });

