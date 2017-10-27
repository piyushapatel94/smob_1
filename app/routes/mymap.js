import Ember from 'ember';

export default Ember.Route.extend({
    actions:{
        myMap:function(){
            console.log("in mymap function");
            var mapProp= {
                center:new google.maps.LatLng(51.508742,-0.120850),
                zoom:5,
            };
            var map=new google.maps.Map(this.get("googleMap"),mapProp);
        }
    },
    model(){
        /*var mapProp= {
            center:new google.maps.LatLng(51.508742,-0.120850),
            zoom:5,
        };
        var map=new google.maps.Map(this.get("googleMap"),mapProp);*/
    }
});
