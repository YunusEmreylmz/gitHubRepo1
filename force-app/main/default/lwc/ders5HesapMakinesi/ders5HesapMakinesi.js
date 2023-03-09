import { LightningElement } from 'lwc';

export default class Ders5HesapMakinesi extends LightningElement {

number1;    
number2;
sonuc;
oncekiSonuclar = [];
goster = false;
    handlemethod1(event){ 
    if(event.target.name === 'num1'){
      this.number1 = event.target.value;  
    }    
    if(event.target.name === 'num2'){
        this.number2 = event.target.value;  
      } 
    } 

toplama(){
this.sonuc = parseInt(this.number1)  + parseInt(this.number2);
this.oncekiSonuclar.push(this.sonuc);
}
cikarma(){
this.sonuc = (this.number1)  - (this.number2);
this.oncekiSonuclar.push(this.sonuc);    }
carpma(){
this.sonuc = (this.number1)  * (this.number2);
this.oncekiSonuclar.push(this.sonuc); }
bolme(){
this.sonuc = (this.number1)  / (this.number2);
this.oncekiSonuclar.push(this.sonuc);            }
silme(){
    this.sonuc= '';  
    this.oncekiSonuclar=[]; 
}

handleclick(){
    this.goster= !this.goster;
}

}