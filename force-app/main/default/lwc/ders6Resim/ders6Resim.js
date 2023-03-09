import { LightningElement } from 'lwc';
import wsly from '@salesforce/resourceUrl/wesley';

export default class Ders6Resim extends LightningElement {

sneijder = wsly;
goster = false;

handleclick(){
    this.goster= !this.goster;
     
}
 
}