(function(){
   
    const dugme = document.querySelectorAll('.dugme')
    const smesti = document.querySelectorAll('.store-item')

    dugme.forEach((button)=> {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter
            
            smesti.forEach((item)=> {
                if (filter === 'sve'){
                    item.style.display = 'block'
                } else {
                    if (item.classList.contains(filter)){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            })
        })
    })

})();


(function(){

    const pretraga = document.querySelector('#search-item')
    const smesti = document.querySelectorAll('.store-item')

    pretraga.addEventListener('keyup', (e) => {
    
        const filterPretrage = e.target.value.toLowerCase().trim()
        
        smesti.forEach((item) => {
            if (item.textContent.includes(filterPretrage)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })

})();


var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var img6 = document.getElementById('myImg6');
var img7 = document.getElementById('myImg7');
var img8 = document.getElementById('myImg8');
var img9 = document.getElementById('myImg9');
var img10 = document.getElementById('myImg10');
var img11 = document.getElementById('myImg11');
var img12 = document.getElementById('myImg12');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img10.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img11.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img12.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = () => modal.style.display = "none";


const limitForm = document.getElementById("form-limit");
const cenaForm = document.getElementById("form-cena");

const limitIn = document.getElementById("limit-input");
const cenaIn = document.getElementById("cena-input");

const limitOut = document.getElementById("limit-din");
const cenaOut = document.getElementById("cena-din");
const raspolozivostOut = document.getElementById("raspolozivost-din");

var cene = [];

limitForm.addEventListener("submit", function(event){
  event.preventDefault();
  dodajLimit();
});
cenaForm.addEventListener("submit", function(event){
  event.preventDefault();
  dodajCenu();
});

function dodajLimit() {
	const limit = limitIn.value;	
	limitOut.innerHTML = limit;
	limitIn.value = "";
	izracunajRaspolozivost();
}

function dodajCenu() {
	cene.push({
		cena: cenaIn.value,
	});
	const cena = cene.map(({ cena }) => cena).reduce(saberiCene);
	cenaOut.innerHTML = cena;
	cenaIn.value = "";
	izracunajRaspolozivost();
}
function saberiCene(start, clan) {
 return parseFloat(start) + parseFloat(clan);
}
function izracunajRaspolozivost(){
	raspolozivostOut.innerHTML = limitOut.innerHTML - cenaOut.innerHTML;
}

