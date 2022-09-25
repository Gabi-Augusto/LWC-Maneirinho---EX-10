public with sharing class OppApprovalControllerC {

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getApprovalOpportunities() {
        return [SELECT Id, Name, Amount, StageName FROM Opportunity WHERE StageName = 'Aprovação' ORDER BY CreatedDate DESC LIMIT 5];
    }
}
