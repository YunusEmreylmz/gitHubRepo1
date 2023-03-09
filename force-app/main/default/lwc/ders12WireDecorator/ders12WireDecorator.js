import { LightningElement,api,wire } from 'lwc';
import getAcc from '@salesforce/apex/ControllerGetRecords.getAccounts';

export default class Ders12WireDecorator extends LightningElement {

acclist; //data var - collection
error; // error
lapp;
@wire  (getAcc) getAccRecords({data,error}){
if(data){


    
    this.acclist = data;
    this.lapp = JSON.parse(JSON.stringify(data));
    console.log("JSON.stringify===> "+ JSON.stringify(data));
}
else if(error){
    this.error = error;
}

};

}