import { LightningElement,wire,api ,track} from 'lwc';
import getCon from '@salesforce/apex/ControllerGetRecords.getContact';
  
export default class Ders14WireParams extends LightningElement {
   @track columns = [
        { label: 'Contact LastName', fieldName: 'LastName'  },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Birthdate', fieldName: 'Birthdate', type: 'date' },
        { label: 'Title', fieldName: 'Title', type: 'text' },
    ];

stn=columns;
conlist;
errorlist; 
params;//inputa girdiğim değer --- ab
limit =3;
handleChange(event){
    this.params = event.target.value;
} 
handleClick(){
    this.limit +=2;
}
@wire (getCon,{str:'$params',lmt:'$limit' } ) getContact({data,error}){
    if(data){
        this.conlist = data;  
    }
    else if(error){
        this.errorlist = error;
    }
}

}