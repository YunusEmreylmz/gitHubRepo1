import { LightningElement } from 'lwc';
export default class Ders21DOM extends LightningElement {

    isim;
    handleClick(){
       this.template.querySelector('.div1').textContent += 'Merhaba Dünya'; 
       this.isim = this.template.querySelector('.inp').value; 
       this.template.querySelector('p').textContent = this.isim;
    }   

}