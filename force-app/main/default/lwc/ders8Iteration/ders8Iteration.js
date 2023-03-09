import { LightningElement } from 'lwc';

export default class Ders8Iteration extends LightningElement {

country = [ 'USA','Türkiye','Poland','Germany','England','Türkmenistan' ];
animal=['Cat','Dog','Eagle','Tiger','Horse'];
friend=['Hatice','Elif','Serap','Seda','Fatma','Bahar'];

goster=false;
goster1=false;
goster2=false;

handleClick(event){
    if(event.target.name==='cntry'){
        this.goster = !this.goster;
    }
      if(event.target.name==='nml'){
        this.goster1 = !this.goster1;
    }
      if(event.target.name==='frnd'){
        this.goster2 = !this.goster2;
    }
}
}