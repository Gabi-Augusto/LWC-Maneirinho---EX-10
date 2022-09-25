import { LightningElement, wire} from 'lwc';
import getApprovalOpportunities from '@salesforce/apex/OppApprovalControllerC.getApprovalOpportunities';

export default class ViewApprovalOpp extends LightningElement {

    opportunity;
    error;

    columns = [
        {label: 'Id',  fieldName: 'Id'},
        {label: 'Nome', fieldName: 'Name'},
        {label: 'Valor', fieldName: 'Amount', type:'currency'},
        {label: 'Fase', fieldName: 'StageName'}
    ]
    
    @wire(getApprovalOpportunities)wiredOpportunities({error, data}) {
        if(data) {
            this.opportunity = data;
            this.error = undefined;
            console.log(data);
        } else if(error) {
            this.opportunity = undefined;
            this.error = error;
            console.log(error);
        }
    }
}
