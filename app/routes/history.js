import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Route.extend({
    model(){
        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('history').set('usertype', usertype);

        var requestid =  this.controllerFor('userhome').get('requestid');        
        console.log('requestid :' +requestid);
        this.controllerFor('history').set('requestid', requestid);

        var status =  this.controllerFor('userhome').get('status'); 
        console.log('status from histry :' +status);
        this.controllerFor('history').set('status', status);

        var updatedby =sessionStorage.getItem('updatedby') ;
        console.log("updatedby from history : ",updatedby);

        var mycontroller = this;
                 $.ajax({
                url:CONFIG.GOURL+'/readRequest',
                type: 'GET',
                contentType: 'application/json', 
                headers:{
                    'authorization':requestid
                },
                success: function(response) {
                    // var message = response.message;
                console.log(JSON.stringify(response));
                var transactiondetails =response.message.transactionlist[0].transactiondetails;
                    console.log(JSON.stringify(transactiondetails));
                    mycontroller.controllerFor('history').set('transactiondetails', transactiondetails);
                var  transactionlist =  response.message.transactionlist; 
                    mycontroller.controllerFor('history').set('transactionlist', transactionlist);
                    /*var mylength =transactionlist.length;
                    console.log("mylength :",mylength);*/
                    var lastindex =transactionlist.slice(-1);
                    console.log("lastindex :",JSON.stringify(lastindex));

                    var secondlastindex =transactionlist.slice(-2);
                    console.log("secondlastindex------------> :",JSON.stringify(secondlastindex));

                    var secondlastusertype =  secondlastindex[0].transactiondetails.updatedBy;
                    console.log("secondlastusertype----->>>>>>>--> :",secondlastusertype);
                    mycontroller.controllerFor('history').set('secondlastusertype', secondlastusertype);

                    var lastusertype = lastindex[0].transactiondetails.updatedBy;
                    console.log("lastusertype :",lastusertype);
                    mycontroller.controllerFor('history').set('lastusertype', lastusertype);
                },      
                error: function(response) {
                   console.log('DEBUG: GET Enquiries Failed');
                   console.log("Error Message: ", response.message);
                   
                }
                
                });

                setInterval( function(){
               
                $.ajax({
                    url: CONFIG.GOURL + '/location',
                    type: 'GET',
                    contentType: 'application/json',
                    success: function(response) {
                        // var message = response.message;
                        console.log("data--->>>", JSON.stringify(response));
                        var mydata = response.data;
                        console.log("data--->>>", mydata);
                        var Elevation =mydata[0].Elevation;
                        console.log("Elevation--->>>", Elevation);
                        var Mapwidth =mydata[0].Mapwidth;
                        console.log("Mapwidth--->>>", Mapwidth);
                        var Longitude =mydata[0].Longitude;
                        console.log("Longitude--->>>", Longitude);
                        var Latitude =mydata[0].Latitude;
                        console.log("Latitude--->>>", Latitude);
                        var MapHeight =mydata[0].MapHeight;
                        console.log("MapHeight--->>>", MapHeight);
                        
                        mycontroller.controllerFor('history').set("Elevation",Elevation);
                        mycontroller.controllerFor('history').set("Mapwidth",Mapwidth);
                        mycontroller.controllerFor('history').set("Longitude",Longitude);
                        mycontroller.controllerFor('history').set("Latitude",Latitude);
                        mycontroller.controllerFor('history').set("MapHeight",MapHeight);
        
                    },
                    error: function(response) {
                        console.log('DEBUG: GET Enquiries Failed');
                        console.log("Error Message: ", response);
        
                    }
        
                });
            },3000);
    }
});
