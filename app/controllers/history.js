import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Controller.extend({
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
     isShowmap:true,
      isShowmymap:false,
    actions: {
        gotoupdate: function() {
            var usertype = this.get('usertype');
            console.log("usertype", usertype);
            var status = this.get('status');
            console.log("status frim histry cntyr:", status);
            var lastusertype = this.get('lastusertype');
            console.log("lastusertype from histery cntr :", lastusertype);
            var secondlastusertype =this.get('secondlastusertype');
            console.log("secondlastusertype from histery cntr :", secondlastusertype);

            if (usertype === 'Manufacturer') {

                if (status === 'MaterialRequested') {
                    this.set('isShowmap',true);
                    this.set('isShowmymap',false);
                    if (lastusertype === "Distributor") {
                        this.transitionToRoute('quotation');
                    } else {
                        alert("This request not intended for You...1");
                    }
                }


                if (status === 'QuotationRaised') {
                    this.set('isShowmap',true);
                    this.set('isShowmymap',false);
                    if (lastusertype === "Supplier") {
                        this.transitionToRoute('purchaseorder');
                    } else {
                        alert("This request not intended for You...1");
                    }
                }

                if (status === 'POraised')
                {
                    this.set('isShowmap',true);
                    this.set('isShowmymap',false);
                    if (lastusertype === "Distributor") {
                        this.set('isShowinvoice', true);
                        this.set('isShowbuttoninvoice', false);
                        this.transitionToRoute('invoice');
                    } else {
                        alert("This request not intended for You ..3");
                    }
                }
                if (status === 'InvoiceRaised') {
                    this.set('isShowmap',true);
                    this.set('isShowmymap',false);
                    if (lastusertype === "Manufacturer") {
                        this.set('isShow', false);
                        this.set('isShowdeliveryorder', true);
                        this.transitionToRoute('deliveryorder');
                    } else {
                        alert("This request not intended for You...4");
                    }
                }
                if (status === 'DoDelivered') {
                    this.set('isShowmap',false);
                    this.set('isShowmymap',true);
                    if (lastusertype === "logistics") {
                        if(secondlastusertype === 'Supplier'){
                        this.set('isShowinvoice', false);
                        this.set('isShowbuttoninvoice', true);
                        this.transitionToRoute('invoice');
                        }
                        else {
                            alert("This request not intended for You");
                        }
                    } 
                }
                if (status === 'NotDelivered') {
                    this.set('isShowmap',false);
                    this.set('isShowmymap',true);
                    if (lastusertype === "logistics") {
                        this.set('isShowclaimdetails', false);
                        this.set("isshowbutton", true);
                        this.transitionToRoute('claimpage');
                    }

                }
                if (status === 'PaymentInitiated') {
                    this.set('isShowmap',false);
                    this.set('isShowmymap',true);
                    if (lastusertype === "banker") {

                        this.set('isShowpaymentorder', false);
                        this.set('isshowpaymentbutton', true);
                        this.transitionToRoute('paymentorder');
                    } else {
                        alert("This request not intended for You ....5");
                    }
                }

            }

            if (usertype === 'Supplier') {
                if (status === 'MaterialRequested') {
                    this.set('isShowmap',true);
                    this.set('isShowmymap',false);
                    console.log("....1.....")
                    if (lastusertype === 'Manufacturer') {
                        this.transitionToRoute('quotation');
                    } else {
                        alert("This request not intended for You ....5");
                    }
                }

                if (status === 'POraised') {
                    this.set('isShowmap',true);
                    this.set('isShowmymap',false);
                    console.log("in poraised supplirr");
                    if (lastusertype === 'Manufacturer') {
                        this.set('isShowinvoice', true);
                        this.set('isShowbuttoninvoice', false)
                        this.transitionToRoute('invoice');
                    } else {
                        alert("This request not intended for You ....5");
                    }
                }

                if (status === 'InvoiceRaised') {
                    this.set('isShowmap',true);
                    this.set('isShowmymap',false);
                    if (lastusertype === "Supplier") {

                        this.set('isShow', false);;
                        this.set('isShowdeliveryorder', true);
                        this.transitionToRoute('deliveryorder');
                    } else {
                        alert("This request not intended for You ....5");
                    }
                }
                if (status === 'PaymentInitiated') {
                    this.set('isShowmap',false);
                    this.set('isShowmymap',true);
                    if (lastusertype === "banker") {

                        this.set('isShowpaymentorder', false);
                        this.set('isshowpaymentbutton', true);
                        this.transitionToRoute('paymentorder');
                    } else {
                        alert("This request not intended for You ....5");
                    }
                }

            }
            if (usertype === 'Distributor') {
                console.log("in if distributor..............");
                if (status === 'MaterialRequested') {
                    this.set('isShowmap',true);
                    this.set('isShowmymap',false);
                    if (lastusertype === "retailer") {
                        this.transitionToRoute('quotation');
                    } else {
                        alert("This request not intended for You...1");
                    }
                }
                if (status === 'QuotationRaised') {
                    this.set('isShowmap',true);
                    this.set('isShowmymap',false);
                    if (lastusertype === "Manufacturer") {
                        this.transitionToRoute('purchaseorder');
                    } else {
                        alert("This request not intended for You ...6");
                    }
                } 

                if (status === 'NotDelivered') {
                    this.set('isShowmap',false);
                    this.set('isShowmymap',true);
                    if (lastusertype === "logistics") {
                        this.set('isShowclaimdetails', false);
                        this.set("isshowbutton", true);
                        this.transitionToRoute('claimpage');
                    }
                }
                if (status === 'PaymentInitiated') {
                    this.set('isShowmap',false);
                    this.set('isShowmymap',true);
                    if (lastusertype === "banker") {

                        this.set('isShowpaymentorder', false);
                        this.set('isshowpaymentbutton', true);
                        this.transitionToRoute('paymentorder');
                    } else {
                        alert("This request not intended for You ....5");
                    }
                }
                if (status === 'DoDelivered') {
                    this.set('isShowmap',false);
                    this.set('isShowmymap',true);
                    if (lastusertype === "logistics") {
                        if (secondlastusertype === 'Manufacturer'){
                        this.set('isShowinvoice', false);
                        this.set('isShowbuttoninvoice', true);
                        this.transitionToRoute('invoice');
                        }else {
                            alert("This request not intended for You");
                        }
                    } 
                }
                if(status === 'POraised'){
                    this.set('isShowmap',true);
                    this.set('isShowmymap',false);
                    if (lastusertype === "retailer") {
                        this.set('isShowinvoice', true);
                        this.set('isShowbuttoninvoice', false);
                        this.transitionToRoute('invoice');

                    } else {
                        alert("This request not intended for You");
                    }
                }
                if(status === 'InvoiceRaised'){
                    this.set('isShowmap',true);
                    this.set('isShowmymap',false);
                    if (lastusertype === "Distributor") {
                        this.set('isShow', false);
                        this.set('isShowdeliveryorder', true);
                        this.transitionToRoute('deliveryorder');

                    } else {
                        alert("This request not intended for You");
                    }
                }
                if(status === 'PaymentInitiated'){
                    this.set('isShowmap',false);
                    this.set('isShowmymap',true);
                    if(secondlastusertype === 'retailer'){
                        this.set('isShowpaymentorder', false);
                        this.set('isshowpaymentbutton', true);
                        this.transitionToRoute('paymentorder');
                    }else{
                        alert("This request not intended for You");
                    }
                }

            }

            if (usertype === 'logistics') {

                if (status === 'DOraised') {
                    this.set('isShowmap',false);
                    var isShowmap= this.get('isShowmap');
                    console.log('isShowmap**********************************************',isShowmap);
                    this.set('isShowmymap',true);
                      this.set('isShow', true);
                    this.transitionToRoute('deliveryorder');


                }
            }
            if (usertype === 'banker') {
                if (status === 'InvoiceApproved') {
                    this.set('isShowmap',false);
                    this.set('isShowmymap',true);
                        this.set('isShowpaymentorder', true);
                        this.set('isshowpaymentbutton', false);
                        this.transitionToRoute('paymentorder');
                    
                }
                if (status === 'claimRaised') {
                    this.set('isShowmap',true);
                    this.set('isShowmymap',false);
                    this.set('isShowpaymentorder', true);
                    this.set('isshowpaymentbutton', false);
                    this.transitionToRoute('paymentorder');

                }

            }
            if (usertype === 'insurance') {
                if (status === 'claimRequested') {
                    this.set('isShowclaimdetails', true);
                    this.set("isshowbutton", false);
                    this.transitionToRoute('claimpage');
                }
            }
            if (usertype === 'retailer') {
                if (status === 'QuotationRaised') {
                    this.set('isShowmap',true);
                    this.set('isShowmymap',false);
                    if (lastusertype === "Distributor") {
                        this.transitionToRoute('purchaseorder');
                    } else {
                        alert("This request not intended for You ...6");
                    }
                } 
                if (status === 'DoDelivered') {
                    this.set('isShowmap',false);
                    this.set('isShowmymap',true);
                    if (lastusertype === "logistics") {
                        if(secondlastusertype === 'Distributor'){
                        this.set('isShowinvoice', false);
                        this.set('isShowbuttoninvoice', true);
                        this.transitionToRoute('invoice');
                        }
                    } else {
                        alert("This request not intended for You");
                    }
                }
                


            }

            

        },
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