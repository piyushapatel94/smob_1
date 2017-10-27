import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';

export default Ember.Controller.extend({

    actions:{
        myMap:function(){
            console.log("in mymap function");
            var mapProp= {
                center:new google.maps.LatLng(51.508742,-0.120850),
                zoom:5,
            };
            var map=new google.maps.Map(this.get("googleMap"),mapProp);
        }
    }
});