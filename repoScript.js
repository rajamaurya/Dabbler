   var flagm=false;
   var flagy=false;
   var flagc=false;
    var arr=[];
    var j=0;
   function searchIt()
   {
   
   var month = document.getElementById("mon");
   var year = document.getElementById("yea");
   var country = document.getElementById("con");
  
   
   var m = month.options[month.selectedIndex].value;
   
   var y = year.options[year.selectedIndex].value;
   
   var c = country.options[country.selectedIndex].value;
	// window.location.reload(false);     
 //function refresh() {

   // window.location.reload(false);
   // $("#sButton").click(function(){
    //    $("#"+c).stop();
   /// });
  // $.fx.off=true;
        
    
  //  }
	//refresh();
	
	  
/* month.setAttribute("data-month",m);
   year.setAttribute("data-year",y);
   country.setAttribute("data-country",c);
   
   alert(month.getAttribute("data-month"));
   alert(year.getAttribute("data-year"));
	alert(country.getAttribute("data-country"));   
	
	$("table").each(function( index ) {
	if(m!=0)
    $(this).attr("data-tableid", m);
    $('html, body').animate({scrollTop: $('#'+m).offset().top},2000);
});
*/
   var myc = m +y+ c;
   var cy =c+y;
   var cm =c+m;
   var my = m+y;
  
        
        arr.push(c);
      //  alert(arr);
        if(arr.length>1){
				refresh();
				j++;
				}
   
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
        
 	            
   }
   
function getSearchedChoice(flagm,flagy,flagc,m,y,c){
          
         
                    var myc = m +y+ c;
                    var my = m + y;
                    var mc = m + c;
                    var yc = y + c;
          
    if(m!=0){
        flagm = true;
        //started thinking here---
        
       		// if(y!=0 || c!=0)
       		// {
        				if(y!=0 && c==0)
        				{
        					flagy=true;
        					
        					if($("." + my).length != 0) {
        					$('html, body').animate({
        					scrollTop: $('.'+my).offset().top
        					},2000);
        					}
        				else{
						  //it doesn't exist
						  alert("Oops! Not Available.."); 
						}
        					       				   //  flagm=false;
			               //  flagy=false;
						} // end if y..
         				else if(c!=0 && y==0)
        				{
        					flagc=true;
        					 if(c=="Boulder" || c=="Brazil" || c=="Folsom" ||  c=="Singapore" || c=="Santa Clara" || c=="Mexico"){
        					 
		        		 // CallCountry(c);
		        		  var c2=c;
		         			 c="Boulder";
		         			 var c1 = c;
							var mc1 = m+c1;
        					if($("#" + mc1).length != 0) {
        					CallCountry(c2);
        					$('html, body').animate({scrollTop: $('#'+mc1).offset().top},2000);
        				//	CallCountry(c);
        					}
        					else
        					alert("Oops! Not Available..");

        					}
        					else
        					alert("Oops! Not Available..");
        					
        			
						} // end if c..
			 // }	//end if y || c
			  else if(y!=0 && c!=0)
			  {	 
		        flagy=true;
		        flagc=true;
		        
		        if(c=="Boulder" || c=="Brazil" || c=="Folsom" ||  c=="Singapore" || c=="Santa Clara" || c=="Mexico"){
		       //  CallCountry(c);
		          c1="Boulder";
		          //var c1 = c;
		       var  myc1 = my+c1;
		        //  alert(myc1);
		        if($("." + myc1).length!=0){
		        CallCountry(c);
		        $('html, body').animate({scrollTop: $('.'+myc1).offset().top},2000); }
		        else
		        alert("Oops! Not Available..");
		        }
		        else
		        alert("Oops! Not Available..");
        	  } // end of else if y && c..
		     else{    
		//completing rhe task----
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

           } // end switch
        } //else end curly brace
      
     } // end of main if m!=0 .. 
       else if(y!=0){
            flagy=true;
            ///-------------------------------------------------------------------------
            
            //started thinking here---
       			//if(m!=0 || c!=0)
        	//	{
        				if(m!=0 && c==0)
        				{
        					flagm=true;
        					$('html, body').animate({scrollTop: $('.'+my).offset().top},2000);

        				} // end if m..
        				else if(c!=0 && m==0)
        				{
        					flagc=true;
        					if(c=="Boulder" || c=="Brazil" || c=="Folsom" ||  c=="Singapore" || c=="Santa Clara" || c=="Mexico"){
		                   // CallCountry(c);
		                    var c1 ="Boulder";
		                    var yc1  =y+c1;
							
        					if($('.' + yc1).length!=0){ //yc
        					CallCountry(c);
        					$('html, body').animate({scrollTop: $('.'+yc1).offset().top},2000);
        					}
							else
							alert("Oops! Not Available..");
						}
						else
						alert("Oops! Not Available..");
        				} // end if c..
			//	}	// end if m || c
				else if(m!=0 && c!=0)
				{ 
					 flagm=true;
					 flagc=true;
		 			// $('html, body').animate({scrollTop: $('.'+myc).offset().top},2000);
		 			 if(c=="Boulder" || c=="Brazil" || c=="Folsom" ||  c=="Singapore" || c=="Santa Clara" || c=="Mexico"){
		        // CallCountry(c);
		          c="Boulder";
		          var c1 = c;
		         var myc1 = mc+y;
		        //  alert(myc1);
		        if($("." + myc1).length!=0){
		        CallCountry(c);
		        $('html, body').animate({scrollTop: $('.'+myc1).offset().top},2000); }
		        else
		        alert("Oops! Not Available..");
		        }
		        else
		        alert("Oops! Not Available..");


		
				} //end of above else if m && c..
				else{    
		//completing rhe task---- 
            
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
					
						} // end switch..  
			
			} // end of else curly brace..
			
		} // end of main else if..
		
		else if (c!=0){ 
				
				var i=1;
				var delay=2500;
				 flagc=true;
		 //---------------------
				// if(m!=0 || y!=0)
        		// {
        				if(m!=0 && y==0)
        				{
        					$('html, body').animate({scrollTop: $('#'+mc).offset().top},2000);
        				//	goto start;
        				CallCountry(c);
        				//break;
						}
						else if(y!=0 && m==0){
							$('html, body').animate({scrollTop: $('.'+yc).offset().top},2000);
						}
				//  }
				 else if(m!=0 && y!=0)
				 {
		            		$('html, body').animate({scrollTop: $('.'+myc).offset().top},2000);
				  }
					else{
		//-----------------------
		CallCountry(c);
			//	[lbl] start:	
			// var callCountry = function(c){
			/*	switch(c){
					case 'Boulder': 
					 $('#'+c).animate({
					                     width: "90%",
					                     height:"105%",
   										 opacity: 0.4,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    							         },1200);

										break;

					case 'Brazil':
									var i=1;
					var j=1;
					var showFlag=false;
				//	$("animateDiv").animate({ backgroundColor: "rgb( 20, 20, 20 )" });
					//document.getElementById("center").style.color="#00FF00";
					var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = c.concat(i.toString());
					                   $('#'+r).animate({
					                     width: "90%",
					                     height:"105%",
   										 opacity: 0.4,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    									 
    							         },3000); 
    							         i++;
          										  }
          										  
          									}
          								
          								}
          								showFlag=false;
          							showImg();
 					//document.getElementById("Brazil").style.borderColor="#00FF00";
					        //  $('#'+r).style.Color="#00FF00";
					      //  $('#'+c).effect( "highlight", {color:"#669966"}, 3000 );
					        //  $('#'+c).addClass('highlighted');
								/*$(document).ready(function(){
								var r = c.concat(i.toString());
								$("#"+r).addClass('border-highlight');
								});
					
					break;
							
							case 'Folsom': 
								        $('#'+c).animate({
					                     width: "90%",
					                     height:"105%",
   										 opacity: 0.4,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    									 
    							         },3000); 
    							         
          										
					
					break;
					
					
					
					case 'Switzerland': $('html, body').animate({
				scrollTop: $('#'+c).offset().top
				
					},1000); 
					break;

					default: "";
					       //alert("Please select one of them.");
              } */ // end switch
            //  } //end of function
             // callCountry(c);
            } // end of else..
        } //end of main else
        
        
        
  
            //--------------------------
      else if(flagm && flagy){
           // alert("you are in m & y.");
              switch ($('#'+m).length) {
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
							switch($('#'+y).length){
							case '2015':
							case '2016':
							case '2017':
							            // var my = m + y;
							             if(($('.'+my).length)){
							             alert("Found it..");
										 $('html, body').animate({
										 scrollTop: $('.'+my).top
										 },2000);
										 			  }
										else
										alert("Try another Combination!");				          
									 }
			     break;
			     }
			     flagm=false;
			     flagy=false;
		} 
			else if(flagm && flagc){
            
              switch ($('#'+m).length) {
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
							switch($('#'+c).length){ 
							case 'Boulder':
							case 'Brazil':
							case 'Folsom':
							case 'Mexico':
							case 'Santa_Clara':
							case 'Singapore':// var mc=m+c;
											  $('html, body').animate({
											  scrollTop: $('.'+mc).top
											   },2000);
															          
									  }
			     break;	
			      }
				flagm=false;
				flagc=false;
        } 
		else if(flagc && flagy){
            
             switch ($('#'+y).length) {
case '2015':
case '2016':
case '2017': 
							switch($('#'+c).length){ 
							case 'Boulder':
							case 'Brazil':
							case 'Folsom':
							case 'Mexico':
							case 'Santa_Clara':
							case 'Singapore':// var yc=y+c;
											  $('html, body').animate({
											  scrollTop: $('.'+yc).top
											   },2000);
															          
									  }
									break;
						}	
						flagc=false;
						flagy=false;
		  } 

	//if(flagm && flagy && flagc )
	else{
      switch ($('#'+m).length) {
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


 							switch($('#'+y).length){
							case '2015':
							case '2016':
							case '2017': 
							             switch($('#'+c).length){ case 'Boulder':
													case 'Brazil':
													case 'Folsom':
													case 'Mexico':
													case 'Santa_Clara':
													case 'Singapore': //var myc=m+y+c;
																	 
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
 function CallCountry(c)
 {
 			switch(c){
					case 'Boulder':
						var i=1;
					var j=1;
					var showFlag=false;
						var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = c.concat(i.toString());

					 $('#'+r).animate({
					                     width: "90%",
					                     height:"105%",
   										 opacity: 0.4,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    							         },1200);
    							         i++;
          										  }
          										  
          									}
          								
          								}
          								showFlag=false;
          							showImg();

									
									
										break;

					case 'Brazil':
									var i=1;
					var j=1;
					var showFlag=false;
				//	$("animateDiv").animate({ backgroundColor: "rgb( 20, 20, 20 )" });
					//document.getElementById("center").style.color="#00FF00";
					var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = c.concat(i.toString());
					                   $('#'+r).animate({
					                     width: "90%",
					                     height:"105%",
   										 opacity: 0.4,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    									 
    							         },3000); 
    							         i++;
          										  }
          										  
          									}
          								
          								}
          								showFlag=false;
          							showImg();
 					//document.getElementById("Brazil").style.borderColor="#00FF00";
					        //  $('#'+r).style.Color="#00FF00";
					      //  $('#'+c).effect( "highlight", {color:"#669966"}, 3000 );
					        //  $('#'+c).addClass('highlighted');
								/*$(document).ready(function(){
								var r = c.concat(i.toString());
								$("#"+r).addClass('border-highlight');
								});*/
					
					break;
							
							case 'Folsom': 
								var i=1;
					var j=1;
					var showFlag=false;
						var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = c.concat(i.toString());

								        $('#'+r).animate({
					                     width: "90%",
					                     height:"105%",
   										 opacity: 0.4,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    									 
    							         },3000); 
    							         i++;
    							         	  }
          										  
          									}
          								
          								}
          								showFlag=false;
          							showImg();
 					
    							         
          										
					
					break;
					
					
					
					case 'Singapore': 
					var i=1;
					var j=1;
					var showFlag=false;
						var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = c.concat(i.toString());

									 $('#'+r).animate({
					                     width: "90%",
					                     height:"125%",
   										 opacity: 0.4,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    									 
    							         },2000); 
    							         i++;
    							         	  }
          										  
          									}
          								
          								}
          								showFlag=false;
          							showImg();
 					

					
					break;
					
					case 'Mexico':
					var i=1;
					var j=1;
					var showFlag=false;
						var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = c.concat(i.toString());

								 $('#'+r).animate({
					                     width: "90%",
					                     height:"105%",
   										 opacity: 0.4,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    									 
    							         },2000); 
    							         i++;
    							         	  }
          										  
          									}
          								
          								}
          								showFlag=false;
          							showImg();
 					

					
					break;
					
					case "SantaClara": 
					var i=1;
					var j=1;
					var showFlag=false;
						var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = c.concat(i.toString());

									  $('#'+r).animate({
					                     width: "90%",
					                     height:"105%",
   										 opacity: 0.4,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    									 
    							         },3000); 
    							          i++;
    							         	  }
          										  
          									}
          								
          								}
          								showFlag=false;
          							showImg();
 					

					
					break;
					
					case "LittleFalls": 
					var i=1;
					var j=1;
					var showFlag=false;
						var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = c.concat(i.toString());

									  $('#'+r).animate({
					                     width: "90%",
					                     height:"105%",
   										 opacity: 0.4,
   										 marginLeft: "0.1in",
  										 fontSize: "3em",
    									 borderWidth: "7pt",
    									 
    									 
    							         },2000); 
    							          i++;
    							         	  }
          										  
          									}
          								
          								}
          								showFlag=false;
          							showImg();

					
					break;


					default: "";
					       alert("Please select Country.");
              } // end switch
              

 }
 
      function refresh(){
       
   
       var i = 1;
     //   alert(arr);
      //  var getId  = arr[0]+i;
      
   
     
      // var j=0;
     // alert(j);
        while(i <10){
        var getId  = arr[j]+i;
        $('#' + getId).animate({
        			width:"117px",
        			height:"78px",
        			opacity:1,
        })
        i++;
      }
  } 
