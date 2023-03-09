import { LightningElement,track } from 'lwc';
import getOpp from '@salesforce/apex/ControllerGetRecords.GetOppRecords';

export default class Ders15CheckSharing extends LightningElement {

@track columns = [{
    label:'Opp Name', fieldName:'Name',type:'text'
},{
    label:'Opp Close Date', fieldName:'CloseDate',type:'date'
},{
    label:'Amount', fieldName:'Amount',type:'currency'
},{
    label:'Stage', fieldName:'StageName',type:'picklist'
},{
    label:'Probability', fieldName:'Probability',type:'percent'
}
];

Opps;
errorList;
handleClick(){

    getOpp().then(res => {this.Opps = res} )
    .catch(error => {this.errorList = error})

}
}