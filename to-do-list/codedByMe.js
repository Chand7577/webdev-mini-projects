var Submit=document.getElementsByClassName('btn-dark');
var inputVal=document.getElementById('item');
var itemsList=document.getElementById('items');
var button=document.getElementsByTagName('button');
var filter=document.getElementById('filter');



Submit[0].addEventListener('click',addItems);
itemsList.addEventListener('click',removeItems);
filter.addEventListener('keyup',(event)=>{
    const subText=event.target.value.toLowerCase();
    const items=document.getElementsByTagName('li');
    let newarr=Array.from(items);
    newarr.forEach(item=>{
         if(item.firstChild.textContent.toLowerCase().indexOf(subText)!=-1){
            item.style.display='block';
         }
         else{
            item.style.display='none';
         }
    })
});


function removeItems(event){
        let selectedLi=event.target.parentNode;
        itemsList.removeChild(selectedLi);


}


function addItems(event)
{    event.preventDefault();
     const li=document.createElement('li');
     li.innerText=inputVal.value;
     li.className='list-group-item';
     const cancelbtn=document.createElement('button');
     cancelbtn.className='btn btn-danger btn-sm float-right delete';
     cancelbtn.innerText='X';
    li.appendChild(cancelbtn); 
     itemsList.insertBefore(li,itemsList.firstChild);
}