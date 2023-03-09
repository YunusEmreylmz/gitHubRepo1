import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import LightningModal from 'lightning/modal'

export default class ModalPopup extends LightningModal{

    handleSuccess(event){
        this.close('okay');
        const tost = new ShowToastEvent({
            title: "Contact created",
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        }); 
        this.dispatchEvent(tost);
    }

}