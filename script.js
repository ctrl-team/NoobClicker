const clips_div = document.querySelector('#clips');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const clr = document.querySelector('#devbtn');

let clips = 0;
let upgrade = 1;
let niewolnik = 1;
let niewolnik_gen = 0;
let koparka = 1;
let koparka_gen = 0;
let godzina = new Date().getHours() + ":" + new Date().getMinutes();

window.onload = ()=>{
  
getinfo()
  
  console.log(localStorage)
  
for(let i = 0; i <= 5; i++)
{
       
    switch(i)
    {
        case 0:
          niewolnik = parseInt(localStorage.getItem('niewolnik'))
          continue;
        case 1:
          koparka_gen = parseInt(localStorage.getItem('koparka_gen'))
          continue;
        case 2:
          clips = parseInt(localStorage.getItem('clips'))
          continue;
        case 3:
          niewolnik_gen = parseInt(localStorage.getItem('niewolnik_gen'))
          continue;
        case 4:
          koparka = parseInt(localStorage.getItem('koparka'))
          continue;
        case 5:
          upgrade = parseInt(localStorage.getItem('upgrade'))
          break;
      }
  
  clips_div.innerHTML = clips;
  btn2.value = "ulepsz ("+ upgrade +")";
  btn2.title = upgrade * 10 + " spinaczy";
  btn3.title = niewolnik * 100 + " spinaczy";
  btn4.title = koparka * 1000 + " spinaczy"
  
}}

const buttons = document.querySelectorAll('.btn')
buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', ()=>{
    localStorage.setItem('clips', clips)
  localStorage.setItem('upgrade', upgrade)
  localStorage.setItem('niewolnik', niewolnik)
  localStorage.setItem('niewolnik_gen', niewolnik_gen)
  localStorage.setItem('koparka' , koparka)
  localStorage.setItem('koparka_gen' , koparka_gen)
  })
})

function updategodzina(){

  godzina = new Date().getHours() + ":" + new Date().getMinutes();
  setTimeout("updategodzina()", 1000);

}
updategodzina();


btn1.addEventListener('click', ()=>{
    clips += upgrade;
    clips_div.innerHTML = clips;
    console.log(`[LOG][${godzina}]Naciśnięto button`);
})

btn2.addEventListener('click', ()=>{

    let upgrade_price = upgrade * 10;

    if(clips<upgrade_price){

        alert('Za mało spinaczy');

    }
    else if(clips >= upgrade_price)
    {

        upgrade++;
        clips = clips - upgrade_price;
        clips_div.innerHTML = clips;
        btn2.value = "ulepsz ("+ upgrade +")"
        btn2.title = upgrade * 10 + " spinaczy"
        console.log(`[LOG][${godzina}]Kupiono upgrade`)
    }
})

clr.addEventListener('click', ()=>{
    clips+=100
    clips_div.innerHTML = clips;
})
btn3.addEventListener('click', ()=>{

  let niewolnik_price = niewolnik * 100;

  if(clips<niewolnik_price)
  {
    alert('Za mało spinaczy')
  }
  else if(clips >= niewolnik_price)
  {

    niewolnik++;
    niewolnik_gen += 4;

    slave()

    clips = clips - niewolnik_price;
    clips_div.innerHTML = clips;
    btn3.title = niewolnik * 100 + " spinaczy"
    console.log(`[LOG][${godzina}]Kupiono niewolnika`)

  }

})

btn4.addEventListener('click', ()=>{

  let koparka_price = koparka * 1000;

  if(clips<koparka_price)
  {
    alert('Za mało spinaczy')
  }
  else if(clips >= koparka_price)
  {

    koparka++;
    koparka_gen += 10;

    slave2()

    clips = clips - koparka_price;
    clips_div.innerHTML = clips;
    btn4.title = koparka * 1000 + " spinaczy"
    console.log(`[LOG][${godzina}]Kupiono koparke`)

  }

})


function slave()
{
    let slave_timeout = setTimeout( slave , 4000);

    console.log(`[LOG][${godzina}]Dodano pieniądze z niewolnika`)

    clips += niewolnik_gen;
    clips_div.innerHTML = clips;
}
function slave2()
{
    let slave2_timeout = setTimeout( slave2 , 6200);

    console.log(`[LOG][${godzina}]Dodano pieniądze z koparki`)

    clips += koparka_gen;
    clips_div.innerHTML = clips;
}

function getinfo() {
console.log(`[Browser][${new Date().getHours() + ":" + new Date().getMinutes()}]Wszedł z: ` + navigator.appName + " | " + navigator.appVersion)
}

function wyczysc()
{
  localStorage.setItem('clips', '0')
  localStorage.setItem('upgrade', '1')
  localStorage.setItem('niewolnik', '0')
  localStorage.setItem('niewolnik_gen', '0')
  localStorage.setItem('koparka' , '0')
  localStorage.setItem('koparka_gen' , '0')
  location.reload();
}