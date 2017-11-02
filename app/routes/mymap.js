import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Route.extend({
    
    model: function() {
        console.log("abc")
     /*   return Ember.A([
          {title: "Home", lat: 14.766127, lng: 102.810987, body: "Here is B&H's home"},
          {title: "Shop", lat: 14.762963, lng: 102.812285, body: "Here is B&H's shop", isInfoWindowVisible: true},
          {title: "Hay's", lat: 14.762900, lng: 102.812018, body: "Here is Hay's shop"}
        ]);*/
       
        var mycontroller = this;
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
                
                mycontroller.controllerFor('mymap').set("Elevation",Elevation);
                mycontroller.controllerFor('mymap').set("Mapwidth",Mapwidth);
                mycontroller.controllerFor('mymap').set("Longitude",Longitude);
                mycontroller.controllerFor('mymap').set("Latitude",Latitude);
                mycontroller.controllerFor('mymap').set("MapHeight",MapHeight);

            },
            error: function(response) {
                console.log('DEBUG: GET Enquiries Failed');
                console.log("Error Message: ", response);

            }

        });

      }
});
