import { LightningElement,wire } from 'lwc';
import getAcc from '@salesforce/apex/ControllerGetRecords.getAccounts';

export default class Ders13DataTable extends LightningElement {
    columns = [
        { label: 'Account Name', fieldName: 'Name'  },
        { label: 'Website', fieldName: 'Website', type: 'url' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Site', fieldName: 'Site', type: 'text' },
        { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
    ];

stn = columns;    
acclist;
error;

@wire (getAcc) getAccRecords({data,error}){
if(data){
    this.acclist = data;  
}
else if(error){
    this.error = error;
}

};
}