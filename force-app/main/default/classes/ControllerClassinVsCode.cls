public with sharing class ControllerClassinVsCode {
   @auraEnabled (cacheable = true)
    public static list<Opportunity> GetOppRecords(){

return [Select id,Name,Amount,CloseDate,StageName,Probability  from Opportunity];

    }

}