const clips_div = document.querySelector('#clips');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const clr = document.querySelector('#devbtn');

let clips = 0;
let upgrade = 1;
let niewolnik = 1;
let niewolnik_gen = 0;
let godzina = new Date().getHours() + ":" + new Date().getMinutes();

window.onload = getinfo()

function updategodzina(){

  godzina = new Date().getHours() + ":" + new Date().getMinutes();
  setTimeout("updategodzina()", 1000);

}
updategodzina();


btn1.addEventListener('click', ()=>{
    clips = clips + upgrade;
    clips_div.innerHTML = clips;
    console.log(`[LOG][${godzina}]Naciśnięto button`)
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

function slave()
{
    let slave_timeout = setTimeout( slave , 4000);

    console.log(`[LOG][${godzina}]Dodano pieniądze z niewolnika`)

    clips += niewolnik_gen;
    clips_div.innerHTML = clips;
}
