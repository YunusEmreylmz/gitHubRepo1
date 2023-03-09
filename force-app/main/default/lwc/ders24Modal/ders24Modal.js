import { LightningElement } from 'lwc';
import ModalPopup from 'c/modalPopup';
export default class Ders24Modal extends LightningElement {


async handleButon(){
const modal = await ModalPopup.open({
size: 'medium',
});
    }
}