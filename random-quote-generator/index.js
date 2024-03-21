
const API_URL='https://api.quotable.io/random'

const quoteBox=document.querySelector('.quote');
const btn=document.querySelector('.quots-btn');
async function getQuote(){
    try{
      const response=await fetch(API_URL);
      const data=await response.json();
      quoteBox.innerHTML=`<p>${data.content}</p>
                          <p>AUTHOR- ${data.author}</p>`;

    }
    catch(error){
        alert(error);
    }
}
btn.addEventListener('click',getQuote);