import { LightningElement ,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Ders10RecordCreation extends LightningElement {

 //   fields=['LastName','Email','Phone'];
@api recordId;
    handleSuccess(event){
        const tost = new ShowToastEvent({
            title: "Contact created",
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        }); 
        this.dispatchEvent(tost);
    }
  


}