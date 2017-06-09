   var flagm=false;
   var flagy=false;
   var flagc=false;
   var flagconti = false;
   var flagImage = false;
    var arr=[];
    var j=0;
    var k=0;
    var m=0;
    var storedImg = [];
  
   function searchIt()
   {
   jQuery('.load-gif').css('display', 'block');
   h_adjust();
    $('.January, .Febuary, .July, .December').hide();
/*$(document).ready(function(){
						    $("#con").prop("disabled", true);  
							}); */

	   
     var images_names = [];
 	var cname= [];
 	var temp;
	var count = document.querySelectorAll("img").length;
	var images  =	document.querySelectorAll('img');
	  
   var month = document.getElementById("mon");
   var year = document.getElementById("yea");
   var country = document.getElementById("con");
   
   var counti = document.getElementById("conti");
  
   
   var m = month.options[month.selectedIndex].value;
   
   var y = year.options[year.selectedIndex].value;
   
   if( document.getElementById("con").options.length == 0)
  		 var c = 0;
   else
  		 var c = country.options[country.selectedIndex].value;
  		 c= c.toString();
  		 c=c.replace(/[^A-Z0-9]+/ig, "");
  		 
   
   if( document.getElementById("conti").options.length == 0)
  		 var conti = 0;
   else

   var conti = counti.options[counti.selectedIndex].value;
    	
   var myc = m +y+ c;
   var cy =c+y;
   var cm =c+m;
   var my = m+y;
  
     
        arr.push(c);
    
        if(arr.length>1){
				refresh();
				j++;
				}
   			
      getSearchedChoice(flagm,flagy,flagc,flagconti,m,y,c,conti);
     }
   
function getSearchedChoice(flagm,flagy,flagc,flagconti,m,y,c,conti){
          
         
                    var myc = m +y+ c;
                    var my = m + y;
                    var mc = m + c;
                    var yc = y + c;
                    
                    var mconti = m+conti;
                    var myconti = m+y+conti;
                    var yconti = y+conti;
                 
                  
                         

      				
    if(m!=0){
        flagm = true;
        
      				  $('.January, .Febuary, .July,.November, .December').hide();
      				       		
        				if(y!=0 && c==0 && conti==0)
        				{
        					flagy=true;
        					
        					if($("#" + my).length != 0) {
        					
        					$('#'+my).toggle(500, function(){
        						
        						$('html, body').animate({
        						scrollTop: $('#'+my).offset().top
        						},500);
        					});
        					
        					$('#'+ my).show();
				        					callNotSelectedImg();
											
               			}
        					else{
						 		 alert("Oops! Not Available.."); 
								}
        					       				   
			               
						} // end if y..
						
         				else if(c!=0 && y==0 && conti==0)
        				{
        					flagc=true;
        					if(checkImageAvailability(c)==true){
        				
        					}
        					else
        					alert("Site Not Found");
        					 if(c=="Boulder" || c=="Brazil" || c=="Folsom" ||  c=="Singapore" || c=="Santa Clara" || c=="Mexico"){
        					 
		        	
		        		  var c2=c;
		         			 c="Boulder";
		         			 var c1 = c;
							var mc1 = m+c1;
        					if($("#" + mc1).length != 0) {
        					
        											$('.'+m).toggle(500, function(){

        													$('html, body').animate({scrollTop: $('.'+m).offset().top},500);
        											});
        					$('.'+ m).show();
        					CallCountry(c2);

        					}
        					else
        					alert("Oops! Not Available..");

        					}
        					else
        					alert("Oops! Not Available..");
        					
        			
						} // end if c..
						//.....................Creating Conti Code here
						
						else if(conti!=0 && y==0 && c==0)
						{
							flagconti=true;
							if(checkImageAvailability(conti)==true || Get_All_Divs_Ids(conti,c)==true){
							switch(conti){
        	 							case 'Austria':
        	 							var setColToBol = "Vienna";
        	 							//CallCountry(setColToBol);
        	 							var mcol = m+setColToBol;
        	 					
										if($("." + m).length!=0){
			        	 				
			        	 					$('.'+m).toggle(500, function(){
			        	 				$('html, body').animate({scrollTop: $('.'+m).offset().top},500);
			        	 				});
			        	 				$('.'+ m).show();
			        	 				CallCountry(setColToBol);
										}
										else
											alert("Please check it out!");
		        	 				break;
		        	 				case 'Brazil':
        	 							var setColToBol = "Sau Paulo";
        	 							//CallCountry(setColToBol);
        	 							var mcol = m+conti;
        	 					
										if($("." + m).length!=0){
			        	 				
			        	 					$('.'+m).toggle(500, function(){
			        	 				$('html, body').animate({scrollTop: $('.'+m).offset().top},500);
			        	 				});
			        	 				$('.'+ m).show();
			        	 				CallCountry(conti);
										}
										case 'California':
        	 							//var setColToBol = "Sau Paulo";
        	 							//CallCountry(setColToBol);
        	 							var mcol = m+conti;
        	 					
										if($("." + m).length!=0){
			        	 				
			        	 					$('.'+m).toggle(500, function(){
			        	 				$('html, body').animate({scrollTop: $('.'+m).offset().top},500);
			        	 				});
			        	 				$('.'+ m).show();
			        	 			//	CallCountry(conti);
										}

										else
											alert("Please check it out!");
		        	 				break;

			        	 				default:
			        	 					//alert("Hello..");
			        					 }
								}
								else
								alert("Not Available");
						}
						
						//...................
			 
			  else if(y!=0 && c!=0 && conti==0)
			  {	 
		        flagy=true;
		        flagc=true;
		        
		        if(c=="Boulder" || c=="Brazil" || c=="Folsom" ||  c=="Singapore" || c=="Santa Clara" || c=="Mexico"){
		       //  CallCountry(c);
		          c1="Boulder";
		          //var c1 = c;
		       var  myc1 = my+c1;
		        //  alert(myc1);
		        if(checkImageAvailability(c)==true){
        					//alert("Country Found");
        					$('#'+my).toggle(500, function(){
		       // CallCountry(c);
		        $('html, body').animate({scrollTop: $('.'+myc1).offset().top},500); 
		        });
		        $('#'+ my).show();
		        CallCountry(c);

        		
        					}
        					else{
        					alert("Country Not Found");
        					//break;
							}

		     
		      if(flagImage==true){ // recently updated..

		    /*    $('#'+my).toggle(500, function(){
		       // CallCountry(c);
		        $('html, body').animate({scrollTop: $('.'+myc1).offset().top},500); 
		        });
		        $('#'+ my).show();
		        CallCountry(c); */
		        }
		        else
		        alert("Oops! Not Available..");
		        }
		        else
		        alert("Oops! Not Available..");
        	  } // end of else if y && c..
        	 ////////////////////////////////////// CONTI PARTS...Not reachable here...
        	else if(y!=0 && conti!=0 && c==0)
        	 {
        	 flagconti = true;
        	 flagy = true;
              callValidConti(y, conti, m ,c);
        	 } 
        	 else if(c!=0 && conti!=0 && y==0)// Check_Site_Country_Combination(m , y  ,c , conti);	
        	 Display_Site_Country_Combination(y,conti,m,c);

                	 		
        	 else if(c!=0 && conti!=0 && y!=0) //Check_Site_Country_Combination(m , y  ,c , conti);
        	 Display_Site_Country_Combination(y,conti,m,c);

        	         	
		     else{    
				if($('.' + m).length!=0){ 
				var n = !m;
            switch(m)
         	{
         			
            	case 'January': 
            		$('.'+m).toggle(600, function(){
					$('html, body').animate({
				scrollTop: $('.'+m).offset().top
				
					},800);
					});
					$('.'+m).show();
					callNotSelectedImg();
        	 													        	 														
        	 		
					
					break;
					case 'Febuary': $('html, body').animate({
				scrollTop: $('.'+m).offset().top
				
					},500);
					$('.'+m).toggle("slow");
					break;
				
					case 'March': $('html, body').animate({
				scrollTop: $('.'+m).offset().top
				
					},500);
					break;

					case 'April': $('html, body').animate({
				scrollTop: $('.'+m).offset().top
				
					},500);
					break;

					case 'May': $('html, body').animate({
				scrollTop: $('.'+m).offset().top
				
					},500);
					break;

					case 'June': $('html, body').animate({
				scrollTop: $('.'+m).offset().top
				
					},500);
					break;

					case 'July': 
							$('.'+m).toggle(100, function(){
							$('html, body').animate({
						//	scrollTop: $('.'+m).offset({top: 300, left: 100}).top
							scrollTop: $('.'+m).offset().top
							},100);
						
					});
					$('.'+m).show();
					callNotSelectedImg();
					break;

					case 'August': $('html, body').animate({
				scrollTop: $('.'+m).offset().top
				
					},500);
					break;

					case 'September': $('html, body').animate({
				scrollTop: $('.'+m).offset().top
				
					},500);
					break;

					case 'October': $('html, body').animate({
				scrollTop: $('.'+m).offset().top
				
					},500);
					break;

					case 'November':$('html, body').animate({ scrollTop: $('.'+m).offset().top},500);	$('.'+m).show(); callNotSelectedImg();
					break;

				case 'December': 
					$('.'+m).show();callNotSelectedImg();
					break;
					
					default: "";

           } // end switch
           }
           else
           alert("Oops! Not Available..");
        } //else end curly brace
      
     } // end of main if m!=0 .. 
       else if(y!=0){
            flagy=true;
                     $('.January, .Febuary, .July,.November, .December').show();
         			  $('.2015, .2016, .2017').hide();
             			/*	if(m!=0 && c==0 && conti==0)
        				{
        					flagm=true;
        					$('#'+my).toggle(600, function(){
        					$('html, body').animate({scrollTop: $('#'+my).offset().top},500);
        					});
								$('#'+my).show();
        				}*/ // end if m..
        				 if(c!=0 && m==0 && conti==0)
        				{
        					flagc=true;
        					if(checkImageAvailability(c)==true){
        				
        					$('.'+y).toggle(500, function(){
				
							 $('html, body').animate({
								scrollTop: $('.'+y).offset().top
				
							},500);
							});
							
							$('.'+y).show();
							CallCountry(c);
        					}
        					else
        					alert("Site Not Found");
						}	
        				else if(conti!=0 && m==0 && c==0)
						{
							flagconti=true;
							if(checkImageAvailability(conti)==true || Get_All_Divs_Ids(conti,c)==true){
							switch(conti){
        	 							case 'Austria':
        	 							var setColToBol = "Vienna";
        	 							        	 					
										if($("." + y).length!=0){
										$('.'+y).toggle(500, function(){
			        	 				$('html, body').animate({scrollTop: $('.'+y).offset().top},500);
			        	 				});
			        	 				$('.'+y).show();
			        	 				$('.'+conti).show();
			        	 				CallCountry(setColToBol);
										}
										else
											alert("Please check it out!");
		        	 				break;
		        	 				case 'California':
	        							callValidConti(y ,conti ,m, c)
        							
        								break;

			        	 				default:
			        	 					alert("Not Available!");;
			        					 }
							}
							else
							alert("Not Available!");
						}

				else if(m==0 && c!=0 && conti!=0){
				
					//	Check_Site_Country_Combination(m , y  ,c , conti);
						Display_Site_Country_Combination(y,conti,m,c);

				
				}
				
				else{    
		
					if($('.' + y).length!=0){ 
                                            h_adjust();		
    		   switch(y){	
					
				case '2015': $('.'+y).toggle(500, function(){ $('html, body').animate({scrollTop: $('.'+y).offset().top},500);});$('.'+y).show();callNotSelectedImg();break;
					
				case '2016': $('.'+y).toggle(500, function(){$('html, body').animate({scrollTop: $('.'+y).offset().top},500);});$('.'+y).show();callNotSelectedImg();break;
					
				case '2017': $('.'+y).toggle(500, function(event){ $('html, body').animate({scrollTop: $('.'+y).offset().top},500);});$('.'+y).show();callNotSelectedImg();break;
					
				default: $('.2015, .2016,.2017').fadeOut("slow");
					
						} // end switch..  
					} //endif
					else
					alert("Oops Not Available..");
				 } // end of else curly brace..
			
		} // end of main else if..
		
		else if (c!=0){ 
				
				var i=1;
				var delay=2500;
				 flagc=true;
        										if(m==0 && y==0 && conti!=0)
						 {
								 		//	Check_Site_Country_Combination(m , y  ,c , conti);	
								 			Display_Site_Country_Combination(y,conti,m,c);
							 
						 }	  
									  
						//..........................................						  
						 else{
		//-----------------------
							$('.January, .Febuary, .July, .December,.November, .hideMe,.2015, .2016,.2017').fadeIn("slow");
						   		 if(checkImageAvailability(c)==true){
        					
        							$('#'+c).fadeIn("slow");
        				   	    	CallCountry(c);
        							}
        						else
        						alert("Site Not Found");
        					
	      			  		 } // end of else..
        } //end of main else if
      
           else if(flagm && flagy){
           
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
							            
							             if(($('#'+my).length)){
							             alert("Found it..");
										 $('html, body').animate({
										 scrollTop: $('.'+my).top
										 },500);
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
											   },500);
															          
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
											   },500);
															          
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
															          },500);
															          
															        
												  }
							          }break;
default:
   
  confirm('please select them!');
  $('.January, .Febuary, .July, .December,.November, .hideMe,.2015, .2016,.2017').fadeIn("slow");
  callNotSelectedImg();
  $('table#t1').css({ 'width':'804px'});
  $('table#t1 td.imgtd').addClass('image');
  $('table#t1 td.imgtd').addClass('image img');
 // $('table#t1 td.imgtd').addClass('image after');
					
						  }
					  } 
            //--------------------------
            
 }
 function Animate_Site_Country(c)
 {
 					var i=1;
					var j=1;
				
					var showFlag=false;
						var showImg= function(){
					    showFlag = true;
					     
							$('#t1').removeClass('image');
					          if(showFlag){
					          		  
					                  while(i<10){
					                  var r = c.concat(i.toString());
									
					 $('#'+r).animate({
					 
					 					
					                     width: "175px",
					                     height:"115px",
   										 opacity: 1,
   										 marginLeft: "0.2px",
  										 fontSize: "4em",
    									 borderWidth: "6pt",
    									 
    							         },800).css({'border' : '1px solid lightblue', 'padding' : '2px','box-shadow': '0 15px 20px rgba(0, 0, 0, 0.3)','border-style': 'inset'}).addClass('image img'); 
    							         i++;
    							          										 
 										

          										  }
          									
          									}
          							
          								}
          								showFlag=false;
          							showImg();

 }

 function CallCountry(c)
 {
 			switch(c){
 			//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 			
 			        case 'Vienna':Animate_Site_Country(c);break;
				    case 'Boulder':Animate_Site_Country(c);break;
					
					case 'SauPaulo':Animate_Site_Country(c);break;
					case 'Folsom': Animate_Site_Country(c);break;
					case 'Singapore': Animate_Site_Country(c);break;
					case 'Mexico':Animate_Site_Country(c);break;
					case "SantaClara": Animate_Site_Country(c);break;
					case "LittleFalls":Animate_Site_Country(c);break; 
					case 'Mulgrave': case 'Sydney':Animate_Site_Country(c);break;
					case 'Diegem':Animate_Site_Country(c);break;
					case 'Mississauga': case 'SaintLaurent': Animate_Site_Country(c);break;
					case 'Beijing': case 'Chengdu':case "Chongqing":case "Guangzhou":case 'Hangzhou':case 'Nanjing':case 'Qingdao':case 'Shanghai':case 'Shenyang': 	case 'Shenzhen': case 'Wuhan':case "Xian":Animate_Site_Country(c);break;
					case "Glostrup":Animate_Site_Country(c);break; 
					case 'Espoo':Animate_Site_Country(c);break;
				    case 'LesUlis':case 'Vennissieux':Animate_Site_Country(c);break;
					case 'Frankfurt':case 'Munich':	case 'Ratingen': case 'Waldbronn':Animate_Site_Country(c);break;
					case "HongKong": Animate_Site_Country(c);break;
					case "Ahmedabad":case "Bengaluru" : case "Chennai" : case "Chandigarh": case "Delhi" : case "Hyderabad" : case "Kolkata": case "Manesar" : case "Mumbai":Animate_Site_Country(c);break; 
					case 'Cork':Animate_Site_Country(c);break;
					case 'AzorimPark': Animate_Site_Country(c);break;
					case 'Leini': case 'Milan': case 'Rome': Animate_Site_Country(c);break;
					case 'Hachioji' : case 'Osaka': case 'Shibaura':Animate_Site_Country(c);break;
					case "Daejeon": case "Seoul": Animate_Site_Country(c);break;
					case "KualaLumpur" : case "Penang":Animate_Site_Country(c);break; 
					case 'Guadalajara' : case 'Mexico City':Animate_Site_Country(c);break;
					case 'Amstelveen' : case 'Middelburg': Animate_Site_Country(c);break;
					case 'Moscow': Animate_Site_Country(c);break;
					case 'Barcelona' : case 'Madrid':Animate_Site_Country(c);break;
					case "Kista": Animate_Site_Country(c);break;
					case "Basel" : case "Morges":Animate_Site_Country(c);break; 
					case 'Chungli': case 'Kaohsiung': case 'Taipei':Animate_Site_Country(c);break;
					case 'Bangkok': Animate_Site_Country(c);break;
					case 'Bracknell': case 'Cheadle': case 'ChurchStretton' : case 'CravenAmrs':  case 'Edinburgh': case 'Yarnton': Animate_Site_Country(c);break;
					case 'Alpharetta': case 'Boulder' : case 'Cary': case 'CedarCreek': case 'ColoradoSprings': case 'Danbury' : case 'Englewood': case 'Folsom': case 'LaJolla': case 'Lexington': case 'LittleFalls': case 'Madison': case 'Newport': case 'SantaClara': case 'Schaumburg': case 'Wakefield': case 'WoodDale':Animate_Site_Country(c);break;
					
					
					default: "";
					       alert("Please select Country.");
					       $("#contentId").find("div").each(function(){ 
												$('.'+ c).css({"border-style": "inset","box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 2.2), 0 6px 20px 0 rgba(0, 0, 0, 2.19)","border": "2px solid #6699FF","background": "white","border-color":"white",  "box-shadow":"1px 2px 4px rgba(0, 0, 0, 2.5)",  "-moz-box-shadow":"1px 2px 4px rgba(0, 0, 0,2.5)", " -webkit-box-shadow":" 1px 2px 4px rgba(0, 0, 0, 2.5)" });
												
								   			    });

              } // end switch
              

 }
   function refresh(){
       
   
       var i = 1;
   
        while(i <10){
     				  
     				   var getId  = arr[j]+i;
     				 //  alert(arr[j]);
     				   $('#' + getId).animate({
     		   			width:"138px",
     		   			height:"84px",
     		   			opacity:1,
     									     },800).css({'border' : '1px solid black', 'padding' : '0px'}); 
     									     i++;
      				}
      	 }
     
 function checkImageAvailability(Simg){
 var count = document.querySelectorAll("img").length;
	 			    var images  =	document.querySelectorAll('img');
 			    			      
 			      
 	  				var images_names = [];
 	  				var cname= [];
 	  				var temp;
 	  				var Sim = Simg + ".jpg";
 	  				var PngSim = Simg + ".png";

 	  				//alert(Sim);
   	   		for(var i = 1; i < count; i += 1)
   	   		 {
    		    var j=0;
    			temp = images[i].getAttribute('src').split('/');
   			    images_names[i] = temp[temp.length -1];     
   			    var t = images_names[i].split('.');
   			    
   			    
   			 
 				if(images_names[i]==Sim)
 				   {	
 	 		 	 				   $('.'+t[0]).show();
 	 					   		 	
  				   }
  				  
  				  else{
  				 $("."+t).hide();
  				
  				 }
  
      	   	}
           var  img_index = 1;
	   for(var i=1; i < count; i += 1)
	   {
	  	
		
		  if(Sim==images_names[i] || PngSim==images_names[i]){
	 	   		flagImage = true;
	 	   	 	 
	 	   		for(var m=1; m < count; m += 1)
			   	{	
			   		var i_name= images_names[m];
			   		if(m!=i)
			   		{
						  $("."+ i_name).fadeOut("slow", function(){
			   			 
			   			   alert("ok");
			   			   },500); 
							$("."+i_name).animate({
     		   															width:"124px",
     		   															height:"84px",
     		   															opacity:0,
     									    	 }) 

	   	   			}
	   						   				
	   			}  
 
	 		
	   		break;
	   		return flagImage;
	   	}else{
	   		
	   	flagImage = false;} 
	    }
	   
return flagImage;

}
function callNotSelectedImg(){
			var images_names = [];
		 	var cname= [];
		 	var temp;
			var count = document.querySelectorAll("img").length;
			var images  =	document.querySelectorAll('img');
		    			
			var t;
 			for(var i = 0; i < count; i += 1) {
 		       
 		        temp = images[i].getAttribute('src').split('/');
 		        images_names[i] = temp[temp.length -1];
 		      t  = images_names[i].split('.');
 		      $('.'+t).show();
       
	         }
			
			}
	
 function Get_All_Divs_Ids(conti , c)
{

			
				var GetClassFlag  = false; 
				var IDs = [];
							$("#contentDiv").find("div").each(function(){ IDs.push(this.className); });
				
				for(var i = 0; i< IDs.length-1; i++)
				{
				 if(IDs[i] == conti){
								
									if(conti=="US" || conti=="Austria") Dis_Selected_Divs_Country(c);
									GetClassFlag = true;
						break;
		         	}
					else
					GetClassFlag = false;
					$('.image').css("box-shadow" , "0 0px 0px rgba(0, 0, 0, 0)");
				}
			return GetClassFlag;

}
function Dis_Selected_Divs_Country(c){
							
					    						$('.'+c).show();
												//$(this).find("."+cfArray[i]).show();
												$("#contentId").find("div").each(function(){ 
												$('.'+ c).css({"border-style": "inset","box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 2.2), 0 6px 20px 0 rgba(0, 0, 0, 2.19)","border": "2px solid #6699FF","background": "white","border-color":"white",  "box-shadow":"1px 2px 4px rgba(0, 0, 0, 2.5)",  "-moz-box-shadow":"1px 2px 4px rgba(0, 0, 0,2.5)", " -webkit-box-shadow":" 1px 2px 4px rgba(0, 0, 0, 2.5)" });
												
								   			    });
								
}
function Display_Site_Country_Combination(y,conti,m,c){
								
					var my = m+y;
        	 		var myc = m + y + c;
        	 	
							  if($("#" + my).length!=0){
        	 					$('#'+my).toggle(500, function(){
        	 						$('html, body').animate({scrollTop: $('#'+my).offset().top},800);
        	 								});
        	 								$('#'+ my).show();
        	 							 	if(checkImageAvailability(conti)==true || Get_All_Divs_Ids(conti , c)==true){
        	 							 	
        	 							 			Check_Img_Month_Year_Wise(c,m,y);
        	 							 			if(c!=0 && conti!=0){
        	 							 		//$('.January, .July, .December,.November, .2015, .2016,.2017').show(); 
        	 							 		
        	 									$('.'+c).show();
												CallCountry(c);

           	 							 			}
        	 							 			else
        	 							 			$('.'+conti).show();
        	 							 	}
        	 							 	else
        	 							 	alert("Not Availavle!");
        	 								
								}
							else if(my==0){
							
         								if(checkImageAvailability(c)==true && Get_All_Divs_Ids(conti , c)==true)
											{
									
												if(c!=0 && conti!=0){
													$('.January, .July, .December,.November, .2015, .2016,.2017').show(); 
														 (function(){
        	 											$('html, body').animate({scrollTop: $('.'+ c).offset().top},800);
        	 											})();

        	 											$('.'+conti).show();
														CallCountry(c);
														 $('table#t1').css({ "width":"826px","border-style": "inset", "box-shadow": "4px 4px 8px 4px rgba(0, 0, 0, 2.2), 2px 6px 20px 0 rgba(0, 0, 0, 2.19)" });

												     				}											
        	 							 	 }
												else
												alert("Not Available!");					
							
							}
							else if(myc==0){
											if(checkImageAvailability(setColToBol)==true)  CallCountry(setColToBol);
							
							}
							else if(m==0 && y!=0 && c!=0 && conti!=0){
							var setImgFound = false;
									if(checkImageAvailability(conti)==true || Get_All_Divs_Ids(conti,c)==true){
								//	alert(y);
								//			if(y)
										CheckImgIn_Table(c ,y);
											
											//	var getCount = $(count).length; 												
											//alert(getY);
											    $('.'+c).show(); CallCountry(c);												
												$('.'+y).toggle(500, function(){ $('html, body').animate({scrollTop: $('.'+y).offset().top},500); }); 	$('.'+ y).show();
										}
										else
										alert("Not Available!");

							}
							else if(m==0 && c==0){
							
												if(checkImageAvailability(c)==true || Get_All_Divs_Ids(conti , c)==true) $('.'+conti).show();
												else
												alert("Not Available!");
												$('.'+y).toggle(500, function(){ $('html, body').animate({scrollTop: $('.'+y).offset().top},500);}); $('.'+ y).show();
        	 				}
							else if(y==0){
										if(checkImageAvailability(conti)==true || Get_All_Divs_Ids(conti , c)==true){ Check_Img_MonthWise(c,m);  $('.'+c).show();CallCountry(c);
																																	
											
										$('.'+m).toggle(500, function(){ $('html, body').animate({scrollTop: $('.'+m).offset().top},500); });	$('.'+ m).show();										
										
										}
										else
										alert("Not Available!");
							
							}
							else{
							alert("Not Available!");$("#contentId").find("div").each(function(){ 
												$('.'+ c).css({"border-style": "inset","box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 2.2), 0 6px 20px 0 rgba(0, 0, 0, 2.19)","border": "2px solid #6699FF","background": "white","border-color":"white",  "box-shadow":"1px 2px 4px rgba(0, 0, 0, 2.5)",  "-moz-box-shadow":"1px 2px 4px rgba(0, 0, 0,2.5)", " -webkit-box-shadow":" 1px 2px 4px rgba(0, 0, 0, 2.5)" });
												 $('table#t1').css({ "width":"826px","border-style": "inset", "box-shadow": "4px 4px 8px 4px rgba(0, 0, 0, 2.2), 2px 6px 20px 0 rgba(0, 0, 0, 2.19)" });

								   			    });

								}

}
function Check_Img_Month_Year_Wise(c,m,y){
								var my = m+y;
								var MYImages = $('#' + my).find('img');
											var MYImagesCount = $('#' + my).find('img').length;
										
									    	var selectedImg = c +".jpg";
											var MYImages_names = [];
		 									var temp2;
											
											var setImgFound = false;
		    			
											var t2;
 											for(var i = 0; i < MYImagesCount; i += 1) {
 		       
 		    							    temp2= MYImages[i].getAttribute('src').split('/');
 		    							   	  MYImages_names[i] = temp2[temp2.length -1];
 		    								  t2  = MYImages_names[i].split('.');
 		    																				
 		    								 if( MYImages_names[i]==selectedImg){ setImgFound = true; break;}
       										 else 				 setImgFound = false;
	        								 }
	        								 	if(setImgFound){ alert("ok. can proceed now..");$("#contentId").find("div").each(function(){ 
												$('.'+ c).css({"border-style": "inset","box-shadow": "4px 4px 8px 4px rgba(0, 0, 0, 2.2), 2px 6px 20px 0 rgba(0, 0, 0, 2.19)","border": "2px solid #6699FF","background": "white","border-color":"white",  "box-shadow":"1px 2px 4px rgba(0, 0, 0, 2.5)",  "-moz-box-shadow":"1px 2px 4px rgba(0, 0, 0,2.5)", " -webkit-box-shadow":" 1px 2px 4px rgba(0, 0, 0, 2.5)" });
												
								   			    });
								   			    $('table#t1').css({ "width":"826px","border-style": "inset", "box-shadow": "4px 4px 8px 4px rgba(0, 0, 0, 2.2), 2px 6px 20px 0 rgba(0, 0, 0, 2.19)" });
}
	        								 	else		   {					 alert('Image Not Found.try again..');	
															   }


}

function Check_Img_MonthWise(c,m){

								var MImages = $('.' + m).find('img');
											var MImagesCount = $('.' + m).find('img').length;
										
									    	var selectedImg = c +".jpg";
											var MImages_names = [];
		 									var temp2;
											
											var setImgFound = false;
		    			
											var t2;
 											for(var i = 0; i < MImagesCount; i += 1) {
 		       
 		    							    temp2= MImages[i].getAttribute('src').split('/');
 		    							   	  MImages_names[i] = temp2[temp2.length -1];
 		    								  t2  = MImages_names[i].split('.');
 		    																				
 		    								 if( MImages_names[i]==selectedImg){ setImgFound = true; break;}
       										 else 				 setImgFound = false;
	        								 }
	        								 	if(setImgFound){ alert("ok. can proceed now.."); $("#contentId").find("div").each(function(){ 
												$('.'+ c).css({"border-style": "inset","box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 2.2), 0 6px 20px 0 rgba(0, 0, 0, 2.19)","border": "2px solid #6699FF","background": "white","border-color":"white",  "box-shadow":"1px 2px 4px rgba(0, 0, 0, 2.5)",  "-moz-box-shadow":"1px 2px 4px rgba(0, 0, 0,2.5)", " -webkit-box-shadow":" 1px 2px 4px rgba(0, 0, 0, 2.5)" });
												 $('table#t1').css({ "width":"826px","border-style": "inset", "box-shadow": "4px 4px 8px 4px rgba(0, 0, 0, 2.2), 2px 6px 20px 0 rgba(0, 0, 0, 2.19)" });

								   			    });
}
	        								 	else		   {					 alert('Image Not Found.try again..');}

}
function CheckImgIn_Table(c ,y)
{

			var YImages = $('.' + y).find('img');
											var YImagesCount = $('.' + y).find('img').length;
										
									    	var selectedImg = c +".jpg";
											var YImages_names = [];
		 									var temp1 ,temp2;
											var setImgFound = false;
											
		    			
											var t2;
 											for(var i = 0; i < YImagesCount; i += 1) {
 		       
 		    							    temp2= YImages[i].getAttribute('src').split('/');
 		    							   	  YImages_names[i] = temp2[temp2.length -1];
 		    								  t2  = YImages_names[i].split('.');
 		    																				
 		    								 if( YImages_names[i]==selectedImg){ setImgFound = true; break;}
       										 else 				 setImgFound = false;
	        								 }
	        								 	if(setImgFound){ alert("ok. can proceed now..");$("#contentId").find("div").each(function(){ 
												$('.'+ c).css({"border-style": "inset","box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 2.2), 0 6px 20px 0 rgba(0, 0, 0, 2.19)","border": "2px solid #6699FF","background": "white","border-color":"white",  "box-shadow":"1px 2px 4px rgba(0, 0, 0, 2.5)",  "-moz-box-shadow":"1px 2px 4px rgba(0, 0, 0,2.5)", " -webkit-box-shadow":" 1px 2px 4px rgba(0, 0, 0, 2.5)" });
												
								   			    });

	        								 	}
	        								 	else		   {					 alert('Image Not Found.try again..');}



}
function h_adjust() {
	jQuery('body').css({
		'opacity' : 0,
		'-moz-transition' : 'all 0.01s ease',
		 '-webkit-transition' : 'all 0.01s ease',
		 
		 '-o-transition' : 'all 0.01s ease',
		 '-ms-transition' : 'all 0.01s ease', 
		 'transition' : 'all 0.01s ease'
	});
	/*  */
	setTimeout(function(){
	
		if(jQuery('#JanDiv').css('display') == 'block') {
			jQuery('#tabLoc #JanDiv').next("tr").css('margin-top', '0px' );
		}
		jQuery('body').css({
				'opacity' : 1,
              			}); 
			jQuery('.load-gif').css('display', 'none');

	}, 1220);

};	