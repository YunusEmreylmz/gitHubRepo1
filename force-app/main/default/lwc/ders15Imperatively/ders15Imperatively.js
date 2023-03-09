import { LightningElement,track } from 'lwc';
import getOpp from '@salesforce/apex/ControllerClassinVsCode.GetOppRecords'
export default class Ders15Imperatively extends LightningElement {

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

Opps;
errorList;
handleClick(){
//parametresiz imperatively syntax
    getOpp().then(res => {this.Opps = res} )
    .catch(error => {this.errorList = error})

}

}