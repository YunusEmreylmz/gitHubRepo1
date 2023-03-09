import { LightningElement } from 'lwc';

export default class Ders25API extends LightningElement {

    link;
    saka;
    cevap;
    show=false;
    name;
    gender;

    handleblur(event){
        this.name = event.target.value;
    }

    handleClick(){

fetch('https://api.genderize.io?name='+ this.name.toString() , {method:'GET'}  ).then(
   response => response.json() ).then( data => {
console.log(data); //object array- içinde message ve status
//console.log(data.message); //resmin linki
//console.log(data.status); //success
//this.link = data.message;
//this.saka = data.setup;
//this.cevap = data.punchline;
//this.show = false;
this.gender = data.gender;
   }

   )
}

click(){
this.show = true;
}

}