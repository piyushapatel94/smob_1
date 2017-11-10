import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';

export default Ember.Controller.extend({
    //zoom: 17,
    //centerLat: 14.7646531,
    //centerLng: 102.8115874
    sourcelist:['mumbai','delhi','pune','kolkata','chennai'],
    destinationlist:['mumbai','delhi','pune','kolkata','chennai'],
    myIcon: {
        url: "assets/images/t1.svg",
        size: new google.maps.Size(40,40),
        scaledSize: new google.maps.Size(30,30),
        anchor: new google.maps.Point(15, 15),
        origin: new google.maps.Point(0, 0),
        labelOrigin: new google.maps.Point(30, 15),
      },
      myIcon2: {
        url: "assets/images/p3.svg",
        size: new google.maps.Size(40,40),
        scaledSize: new google.maps.Size(30,30),
        anchor: new google.maps.Point(15, 15),
        origin: new google.maps.Point(0, 0),
        labelOrigin: new google.maps.Point(30, 15),
      },

    actions:{
        submit:function(){
            var selectedsource =this.get('selectedsource');
            console.log("selectedsource :--",selectedsource);
             var selectedDestination =this.get('selectedDestination');
             console.log("selectedDestination:---",selectedDestination);
             
             if(selectedsource === 'mumbai' && selectedDestination === 'delhi')
                {
                    this.set('Slat',19.0759606);
                    this.set('Slan',72.8776386);
                    this.set('Dlat',28.7038935);
                    this.set('Dlan',77.1025762);

                }

                if(selectedsource === 'mumbai' && selectedDestination === 'pune')
                    {
                        this.set('Slat',19.0759606);
                        this.set('Slan',72.8776386);
                        this.set('Dlat', 18.5206624);
                        this.set('Dlan', 73.8567415);
    
                    }
                if(selectedsource === 'mumbai' && selectedDestination === 'kolkata')
                    {
                        this.set('Slat',19.0759606);
                        this.set('Slan',72.8776386);
                        this.set('Dlat',22.5728457);
                        this.set('Dlan',88.36398369999999);
        
                    }
                    if(selectedsource === 'mumbai' && selectedDestination === 'chennai')
                        {
                            this.set('Slat',19.0759606);
                            this.set('Slan',72.8776386);
                            this.set('Dlat',13.0826809);
                            this.set('Dlan', 80.2706974);
            
                        }
                        if(selectedsource === 'delhi' && selectedDestination === 'mumbai')
                            {
                                this.set('Slat',28.7038935);
                                this.set('Slan',77.1025762);
                                this.set('Dlat',19.0759606);
                                this.set('Dlan',72.8776386);
                                
            
                            }  
                        if(selectedsource === 'delhi' && selectedDestination === 'pune')
                            {
                                this.set('Slat',28.7038935);
                                this.set('Slan',77.1025762);
                                this.set('Dlat', 18.5206624);
                                this.set('Dlan', 73.8567415);
                
                            }    
                        if(selectedsource === 'delhi' && selectedDestination === 'kolkata')
                            {
                                this.set('Slat',28.7038935);
                                this.set('Slan',77.1025762);
                                this.set('Dlat',22.5728457);
                                this.set('Dlan',88.36398369999999);
                
                            }     
                    if(selectedsource === 'delhi' && selectedDestination === 'chennai')
                        {
                            this.set('Slat',28.7038935);
                            this.set('Slan',77.1025762);
                            this.set('Dlat',13.0826809);
                            this.set('Dlan', 80.2706974);
            
                        }     
                     if(selectedsource === 'chennai' && selectedDestination === 'delhi')
                            {
                                this.set('Slat',13.0826809);
                                this.set('Slan', 80.2706974);
                                this.set('Dlat',28.7038935);
                                this.set('Dlan',77.1025762);
                            } 
                    if(selectedsource === 'chennai' && selectedDestination === 'kolkata')
                            {
                                this.set('Slat',13.0826809);
                                this.set('Slan', 80.2706974);
                                this.set('Dlat',22.5728457);
                                this.set('Dlan',88.36398369999999);
                            }      
                         if(selectedsource === 'chennai' && selectedDestination === 'mumbai')
                            {
                                this.set('Slat',13.0826809);
                                this.set('Slan', 80.2706974);
                                this.set('Dlat',19.0759606);
                                this.set('Dlan',72.8776386);
                             }  
                    if(selectedsource === 'chennai' && selectedDestination === 'pune')
                        {
                            this.set('Slat',13.0826809);
                            this.set('Slan', 80.2706974);
                            this.set('Dlat', 18.5206624);
                            this.set('Dlan', 73.8567415);
                        }    
                if(selectedsource === 'kolkata' && selectedDestination === 'chennai')
                    {
                        this.set('Slat',22.5728457);
                        this.set('Slan',88.36398369999999);
                        this.set('Dlat',13.0826809);
                        this.set('Dlan', 80.2706974);
                    }
                if(selectedsource === 'kolkata' && selectedDestination === 'pune')
                    {
                        this.set('Slat',22.5728457);
                        this.set('Slan',88.36398369999999);
                        this.set('Dlat', 18.5206624);
                        this.set('Dlan', 73.8567415);
                    }
                    if(selectedsource === 'kolkata' && selectedDestination === 'mumbai')
                        {
                            this.set('Slat',22.5728457);
                            this.set('Slan',88.36398369999999);
                            this.set('Dlat',19.0759606);
                            this.set('Dlan',72.8776386);
                    }
                if(selectedsource === 'kolkata' && selectedDestination === 'delhi')
                    {
                        this.set('Slat',22.5728457);
                        this.set('Slan',88.36398369999999);
                        this.set('Dlat',28.7038935);
                        this.set('Dlan',77.1025762);
                    }
            if(selectedsource === 'pune' && selectedDestination === 'kolkata')
                {
                    this.set('Slat', 18.5206624);
                    this.set('Slan', 73.8567415);
                    this.set('Dlat',22.5728457);
                    this.set('Dlan',88.36398369999999);
                    
                }
                if(selectedsource === 'pune' && selectedDestination === 'delhi')
                    {
                        this.set('Slat', 18.5206624);
                        this.set('Slan', 73.8567415);
                        this.set('Dlat',28.7038935);
                        this.set('Dlan',77.1025762);
                        
                    }
                if(selectedsource === 'pune' && selectedDestination === 'mumbai')
                    {
                        this.set('Slat', 18.5206624);
                        this.set('Slan', 73.8567415);
                        this.set('Dlat',19.0759606);
                        this.set('Dlan',72.8776386);
                        
                    }
                    if(selectedsource === 'pune' && selectedDestination === 'chennai')
                        {
                            this.set('Slat', 18.5206624);
                            this.set('Slan', 73.8567415);
                            this.set('Dlat',13.0826809);
                            this.set('Dlan', 80.2706974);
                            
                        }
                        
                  
        }
    }
});