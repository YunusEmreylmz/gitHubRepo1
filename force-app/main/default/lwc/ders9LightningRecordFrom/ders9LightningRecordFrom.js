import { LightningElement,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import Languages_FIELD from '@salesforce/schema/Contact.Languages__c';

export default class Ders9LightningRecordFrom extends LightningElement {

@api recordId;
@api objectApiName;
   // fields=['Name', 'LastName','Email','Phone'];

fields = [NAME_FIELD,PHONE_FIELD,Languages_FIELD];
}