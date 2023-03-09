import { LightningElement } from 'lwc';
import getOpp from '@salesforce/apex/ControllerGetRecords.GetOppAmountRecords'
export default class Ders16ImperativelySlider extends LightningElement {

    columns = [{
        label:'Opp Name', fieldName:'Name',type:'text'
    },{
        label:'Opp Close Date', fieldName:'CloseDate',type:'date'
    },{
        label:'Amount', fieldName:'Amount',type:'currency'
    },{
        label:'Stage', fieldName:'StageName',type:'picklist'
    } 
    ];

    myValue=0; //50000 
    Opps;
    errorList;
    handleChange(event){
        this.myValue = event.target.value; 
        //parametreli imperatively syntax
        getOpp({num:this.myValue}).then(res => {this.Opps = res})
        .catch(error => {this.errorList = error})
    }

}