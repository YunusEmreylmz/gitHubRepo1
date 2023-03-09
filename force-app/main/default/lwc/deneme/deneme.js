import { LightningElement } from 'lwc';


export default class Deneme extends LightningElement {

    url; 
    status; 
    showMessage; 
    saka;
    cevap;
    handle(){
        console.log('Handle submit');
      

        fetch('https://official-joke-api.appspot.com/random_joke' , {method:"GET"}).then(
            response => response.json() ).then(data => { 
            console.log(data); 
            console.log(data.message);
            console.log(data.status);  
            this.url = data.message; 
            this.status = data.status; 
            this.showMessage = true; 
            this.saka = data.setup;
            this.cevap = data.punchline;
        });

}
}