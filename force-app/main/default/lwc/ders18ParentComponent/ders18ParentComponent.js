import { LightningElement } from 'lwc';

export default class Ders18ParentComponent extends LightningElement {

value;
    handleChange(event){
this.value = event.target.value*10;

    }

}