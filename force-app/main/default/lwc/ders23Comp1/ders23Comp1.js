import { LightningElement,wire } from 'lwc';
import {publish,MessageContext} from 'lightning/messageService';
import mesaj from '@salesforce/messageChannel/componentCommunication__c'
export default class Ders23Comp1 extends LightningElement {

@wire(MessageContext) mesCont;
isim;
handleChange(event){
this.isim = event.target.value;
}
handleClick(){
    const message = {
        postakusu: this.isim
    };
publish(this.mesCont,mesaj,message);
}

}