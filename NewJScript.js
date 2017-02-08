   var flagm=false;
   var flagy=false;
   var flagc=false;
   function searchIt()
   {
   var month = document.getElementById("mon");
   var year = document.getElementById("yea");
   var country = document.getElementById("con");
  
   
   var m = month.options[month.selectedIndex].value;
   
   var y = year.options[year.selectedIndex].value;
   
   var c = country.options[country.selectedIndex].value;
   
   var myc = m +y+ c;
   var cy =c+y;
   var cm =c+m;
   var my = m+y;
   var choice=null;
   // alert(cym);	
  // var images = document.getElementById('m').getElementById("img');
  /*var images  = document.getElementsByTagName('img');
   var images_names = [];
   var cname= [];
   var temp;
   for(var i = 0; i < images.length; i += 1) {
       var j=0;
       temp = images[i].getAttribute('src').split('/');
       images_names[i] = temp[temp.length -1].split('.');
       }
    /*   for(var j = 0; j < images_names.length;) {
       cname[j]=images_names[j];
          }
    console.log(images_names); */
   // console.log(cname);
     //var monthclass = document.getElementByName("2017");
        getSearchedChoice(flagm,flagy,flagc,m,y,c);
 		/*	if(m)
 			choice = m;
 			else if(y)
 			choice = y;
 			else if(c)
 			choice =c
 			else if(m.length && y.length)
 			choice = m+y;
 			else if(m.length && c.length)
 			choice = m+y;
			else if(y.length && c.length)
 			choice = y+c;

 			else if(m.length && y.length && c.length)
 			choice = m+y+c;
 			 else
 			 choice = "Please select one of them."; 
 			 */
            
   }
   
function getSearchedChoice(flagm,flagy,flagc,m,y,c){
          
         
                    var myc = m +y+ c;
          
    if(m!=0){
        flagm = true;	     
          switch(m)
           {
            	case 'January': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},1000);
					break;
					case 'Febuary': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},1000);
					break;
					case 'Febuary': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},1000);
					break;

case 'March': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},1000);
					break;

case 'April': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},1000);
					break;

case 'May': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},1000);
					break;

case 'June': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},1000);
					break;

case 'July': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},1000);
					break;

case 'August': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},1000);
					break;

case 'September': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},1000);
					break;

case 'October': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},1000);
					break;

case 'November': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},1000);
					break;

case 'December': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},1000);
					break;
					default: "";

           }
      
      }
       if(y!=0){
            flagy=true;
    		   switch(y){	
					
				case '2015': $('html, body').animate({
				scrollTop: $('.'+y).offset().top
				
					},1000);
					break;
					
					
				case '2016': $('html, body').animate({
				scrollTop: $('.'+y).offset().top
				
					},1000);
					break;
					
					
					
					case '2017': $('html, body').animate({
				scrollTop: $('.'+y).offset().top
				
					},1000); 
					break;
					
					default: "";
			}
	
		}
		if(c!=0){ 
		var i=1;
		var delay=2500;
		 flagc=true;
			switch(c){
					case 'Boulder': 
					 $('#'+c).animate({
					                     width: "90%",
					                     height:"105%",
   										 opacity: 0.4,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    							         },1200);

					/* var call= function(i){
					var r = c.concat(i.toString());
					// alert(r);
					 $('html, body').animate({
					 scrollTop: $('#'+r).offset().top
				
					},delay); 
					
					
					};
					//if(i>0)
					while(i<3){
					i++;
					delay= delay+1000;
					call(i);
					}
					*/
					break;

					case 'Brazil'://$('#'+c).animate({height: "200px"});
					//$("#"+c).addClass('highlighted');
				//	$("animateDiv").animate({ backgroundColor: "rgb( 20, 20, 20 )" });
					//document.getElementById("center").style.color="#00FF00";
					                   $('#'+c).animate({
					                     width: "90%",
					                     height:"105%",
   										 opacity: 0.4,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    							         },1200);
          					
 					//document.getElementById("Brazil").style.borderColor="#00FF00";
					        //  $('#'+r).style.Color="#00FF00";
					      //  $('#'+c).effect( "highlight", {color:"#669966"}, 3000 );
					        //  $('#'+c).addClass('highlighted');
								/*$(document).ready(function(){
								var r = c.concat(i.toString());
								$("#"+r).addClass('border-highlight');
								});*/
					
					break;
							
							case 'Folsom': $('html, body').animate({
				scrollTop: $('#'+c).offset().top
				
					},1000); 
					
					break;
					
					
					
					case 'Switzerland': $('html, body').animate({
				scrollTop: $('#'+c).offset().top
				
					},1000); 
					break;

					default: "";
					       //alert("Please select one of them.");
            } 
            }
            //--------------------------
      if(flagm && flagy){
            
              switch (m) {
case 'January' :
case 'Febuary' :
case 'March' :
case 'April' :
case 'May' :
case 'June' :
case 'July' :
case 'August' :
case 'September' :
case 'October' :
case 'November' :
case 'December' :
							switch(y){
							case '2015':
							case '2016':
							case '2017':
							             var my=m+y;
										 $('html, body').animate({
										 scrollTop: $('.'+my).top
										 },2000);
														          
									 }
			     break;
			     }
			     flagm=false;
			     flagy=false;
		}
			if(flagm && flagc){
            
              switch (m) {
case 'January' :
case 'Febuary' :
case 'March' :
case 'April' :
case 'May' :
case 'June' :
case 'July' :
case 'August' :
case 'September' :
case 'October' :
case 'November' :
case 'December' :
							switch(c){ 
							case 'Boulder':
							case 'Brazil':
							case 'Folsom':
							case 'Mexico':
							case 'Santa_Clara':
							case 'Singapore': var mc=m+c;
											  $('html, body').animate({
											  scrollTop: $('.'+mc).top
											   },2000);
															          
									  }
			     break;	
			      }
				flagm=false;
				flagc=false;
        }
		if(flagc && flagy){
            
             switch (y) {
case '2015':
case '2016':
case '2017': 
							switch(c){ 
							case 'Boulder':
							case 'Brazil':
							case 'Folsom':
							case 'Mexico':
							case 'Santa_Clara':
							case 'Singapore': var yc=y+c;
											  $('html, body').animate({
											  scrollTop: $('.'+yc).top
											   },2000);
															          
									  }
									break;
						}	
						flagc=false;
						flagy=false;
		  }

	if(flagm && flagy && flagc ){
      switch (m) {
case 'January' :
case 'Febuary' :
case 'March' :
case 'April' :
case 'May' :
case 'June' :
case 'July' :
case 'August' :
case 'September' :
case 'October' :
case 'November' :
case 'December' :


 							switch(y){
							case '2015':
							case '2016':
							case '2017': 
							             switch(c){ case 'Boulder':
													case 'Brazil':
													case 'Folsom':
													case 'Mexico':
													case 'Santa_Clara':
													case 'Singapore': var myc=m+y+c;
													                  $('html, body').animate({
																      scrollTop: $('.'+myc).top
															          },2000);
															          
															        
												  }
							          }break;
default: alert('please select them!');
					
						  }
					  }
            //--------------------------
            
 }
