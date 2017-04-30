   var flagm=false;
   var flagy=false;
   var flagc=false;
   var flagconti = false;
   var flagImage = false;
    var arr=[];
    var contiArr= [];
    var j=0;
    var k=0;
    var m=0;
    var storedImg = [];
  
   
   // $("#hideMe").fadeOut();
   
   function searchIt()
   {
   jQuery('.load-gif').css('display', 'block');
   h_adjust();
  // h_fix();
  //var getHidden =  document.getElementById("hideMe");
    //$("#hideMe").fadeOut();
    $('.January, .Febuary, .July, .December').hide();
		h_fix();
		
   
     var images_names = [];
 	var cname= [];
 	var temp;
	var count = document.querySelectorAll("img").length;
	var images  =	document.querySelectorAll('img');
	
/*	var elements =  document.getElementsByClassName('Boulder.jpg');

	 
	 for (var i = 0; i < elements.length; i++){
        elements[i].style.display = none;
    		} */
   // alert(count);
   
   
   var month = document.getElementById("mon");
   var year = document.getElementById("yea");
   var country = document.getElementById("con");
   
   var counti = document.getElementById("conti");
  
   
   var m = month.options[month.selectedIndex].value;
   
   var y = year.options[year.selectedIndex].value;
   
   var c = country.options[country.selectedIndex].value;
   
   var conti = counti.options[counti.selectedIndex].value;
    
    
  // var count = document.querySelectorAll('.January img').length;
 // var count = document.getElementByClass('January').getElementsByTagName('img').length;

  // alert(count);
	
   var myc = m +y+ c;
   var cy =c+y;
   var cm =c+m;
   var my = m+y;
  
      //  alert(c);
        arr.push(c);
    //  alert(arr.length);
        if(arr.length>1){
				refresh();
				j++;
				}
   
   contiArr.push(conti);
    // alert(contiArr.length);
      	if(contiArr.length>1){
   	//	refreshConti();
   		refMe();
   		k++;
   	//	k++;
   		}
 /*  $(function () {
   		$('#t1 tr').resizable();
   });*/
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
          //$('#' + m).hide();
           /* $(window).load(function() {
   
   			 $('#loading').show("slow", function(){ $('#loading').hide();},3000);)
			}); */

    if(m!=0){
        flagm = true;
        //started thinking here---
      				  $('.January, .Febuary, .July, .December').hide();
      				  h_fix();
       		     //   $(".hideMe").fadeOut("slow");
       		
        				if(y!=0 && c==0 && conti==0)
        				{
        					flagy=true;
        					
        					if($("#" + my).length != 0) {
        					
        					$('#'+my).toggle(500, function(){
        						
        						$('html, body').animate({
        						scrollTop: $('#'+my).offset().top
        						},500);
        					});
        					h_adjust();
        					$('#'+ my).show();
        					h_adjust();
        					}
        					else{
						 		 alert("Oops! Not Available.."); 
								}
        					       				   
			               
						} // end if y..
						
         				else if(c!=0 && y==0 && conti==0)
        				{
        					flagc=true;
        					if(checkImageAvailability(c)==true){
        					alert("image Found");
        					}
        					else
        					alert("Site Not Found");
        					 if(c=="Boulder" || c=="Brazil" || c=="Folsom" ||  c=="Singapore" || c=="Santa Clara" || c=="Mexico"){
        					 
		        		 // CallCountry(c);
		        		  var c2=c;
		         			 c="Boulder";
		         			 var c1 = c;
							var mc1 = m+c1;
        					if($("#" + mc1).length != 0) {
        					//CallCountry(c2);
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
							if(checkImageAvailability(conti)==true || Get_All_Divs_Ids(conti)==true){
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
        					CallCountry(c);
        					}
        					else{
        					alert("Country Not Found");
        					//break;
							}

		      //  if($("." + myc1).length!=0){
		      if(flagImage==true){

		        $('#'+my).toggle(500, function(){
		       // CallCountry(c);
		        $('html, body').animate({scrollTop: $('.'+myc1).offset().top},500); 
		        });
		        $('#'+ my).show();
		        CallCountry(c);
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
        	 //-------------------------................................-----------------------------New Method
        	// if(checkImageAvailability(c)==true || Get_All_Divs_Ids(conti)==true)){
        	 callValidConti(y, conti, m ,c);
        	// }
        	/* switch(conti){
        	 			case 'Austria':
        	 			var setColToBol = "Vienna";
        	 			CallCountry(setColToBol);
        	 		//	var mycol = m+ y+setColToBol;
        	 			if($("#" + my).length!=0){
        	 			$('.'+m).toggle(500, function(){
        	 			//CallCountry(setColToBol);
        	 			$('html, body').animate({scrollTop: $('#'+my).offset().top},500);
        	 			});
        	 			$('.'+ m).show();
        	 			CallCountry(setColToBol);
							}
							else
							alert("Not Available!");
        	 			break;
        	 			default:
        	 			alert("Not Available!");;
        				 } */
        	 
        	 //.........................................
        	// .........................................................................Old method
        	//  if(conti=="Colorado" || conti=="Brazil" || conti=="Folsom" ||  conti=="Singapore" || conti=="Santa Clara" || conti=="Mexico"){
		       // .... CallCountry(c);
		    //    var  cont="Boulder";
		          //...var c1 = c;
		     //  var  myconti = my+cont;

        	//  if($("." + myconti).length!=0){
        	// CallCountry(conti);
		     //   DialCountry(conti,m,y);
		  //     $('html, body').animate({scrollTop: $('.'+myconti).offset().top},500);
		       //  }
		       // else
		        //alert("Oops! Not Available..");

        	  //}
        	//  ......................................................................
        	 } 
        	 else if(c!=0 && conti!=0 && y==0){
        	// if(checkImageAvailability(c)==true || Get_All_Divs_Ids(conti)==true))
        	 	Check_Site_Country_Combination(m , y  ,c , conti);		
        	 }

        	 else if(c!=0 && conti!=0 && y!=0)
        	 {
        	 	//alert("Please Select Either Site or Country.!");
        	 	// validate the Site & Country combination.
        	 /*	if(conti=="California")
        	 	{
        	 				// then  check
        	 				switch(c){
        	 					case 'Folsom':
        	 					case 'SantaClara':
        	 					case 'La Jolla':
        	 									alert("valid combination");
        	 					break;
        	 					
        	 					default:alert("find me");
        	 				}
        	 	}
        	 	else
        	 	alert("Not a valid Combianation"); */
        	 	Check_Site_Country_Combination(m , y  ,c , conti);
        	 /*	switch(true){
        	 	
        	 				case ((conti=="California")):
        	 											switch(c){
        	 											
        	 														case 'Folsom':
        	 														case 'SantaClara':
        	 														case 'LaJolla':
        	 																	//	alert("Valid Combination !");
        	 																		callValidConti(y,conti,m ,c);
        	 																//		alert("caught u");
        	 																//		 $('html, body').animate({scrollTop: $('#'+my).offset().top},500);
        	 																//		 $('.'+ m ).show();
        	 														break;
        	 														default: alert("Not a valid combination");
        	 											}
        	 											break;
        	 			   case ((conti=="Colorado")):
        	 			   								switch(c){
        	 			   											case 'Boulder':
        	 			   											case 'ColoradoSprings':
        	 			   											case 'Englewood':
        	 			   																alert("valid !");
        	 			   											break;
        	 			   											default: alert("Not a valid combination");
        	 			   								}
        	 			   								break;
        	 			   	default:
        	 			   	       alert("Select Valid Country !");
        	 	} */
			 }
        	 //////////////////////////////////////////
		     else{    
		//completing rhe task----
		if($('.' + m).length!=0){ 
		var n = !m;
		//	var  delayLoading = function(){
			//alert("Loading...");
		//	}
		//	delayLoading();
            switch(m)
         	{
         			
            	case 'January': /*$('html, body').animate({
				scrollTop: $('.'+m).offset().top
				
					},500); */
					$('.'+m).toggle(600, function(){
					$('html, body').animate({
				scrollTop: $('.'+m).offset().top
				
					},800);
					});
					/*
					var curr = $(".hideMe:visible");
    				curr.next(".question").show();
    				curr.hide();
    				*/
					$('.'+m).show();
					//$('#'+m).fadeIn("slow");

										//$("#" + m).removeClass('hide').addClass('show');
    				
				//	if($('#' + n ).length==0){
					
					//$('#'+m).fadeOut("slow");}
					//else
				//	$('#'+m).show();
					break;
					case 'Febuary': $('html, body').animate({
				scrollTop: $('.'+m).offset().top
				
					},500);
					$('.'+m).toggle("slow");
					break;
				/*	case 'Febuary': $('html, body').animate({
				scrollTop: $('#'+m).offset().top
				
					},500);
					break; */

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

					case 'July': /*$('html, body').animate({
				scrollTop: $('.'+m).offset({ top: -100, left: 0 })
				
					},500);*/
					$('.'+m).toggle(100, function(){
							$('html, body').animate({
							scrollTop: $('.'+m).offset({top: 300, left: 100}).top
				
							},100);
						
					});
					/*
					var curr = $(".hideMe:visible");
    				curr.next(".question").show();
    				curr.hide();
    				*/
					$('.'+m).show();

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

					case 'November': $('html, body').animate({
				scrollTop: $('.'+m).offset().top
				
					},500);
					break;

				case 'December': /*$('html, body').animate({
				scrollTop: $('.'+m).offset({ top: -150, left: 0 })
				
					},500); */
					$('.'+m).toggle(500, function(){ 
						 $('html, body').animate({
				scrollTop: $("."+m).offset().top
														
				},500); 

				});
					$('.'+m).show();
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
            ///-------------------------------------------------------------------------
            $('.2015, .2016, .2017').hide();
            h_fix();
            //started thinking here---
       			//if(m!=0 || c!=0)
        	//	{
        				if(m!=0 && c==0 && conti==0)
        				{
        					flagm=true;
        					$('#'+my).toggle(600, function(){
        					$('html, body').animate({scrollTop: $('#'+my).offset().top},500);
        					});
								$('#'+my).show();
        				} // end if m..
        				else if(c!=0 && m==0 && conti==0)
        				{
        					flagc=true;
        				/*	$('.'+yc).toggle(600, function(){
							$('html, body').animate({scrollTop: $('.'+yc).offset().top},500);
								});
								//	$('.'+yc).show();
									CallCountry(c);
							$('.'+yc).show(); */
							if(checkImageAvailability(c)==true){
        					// alert("image Found");
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
							
        					////////////////
        				/*	if(c=="Boulder" || c=="Brazil" || c=="Folsom" ||  c=="Singapore" || c=="Santa Clara" || c=="Mexico"){
		                   // CallCountry(c);
		                    var c1 ="Boulder";
		                    var yc1  =y+c1;
							
        					if($('.' + yc1).length!=0){ //yc
        					$('.'+y).show();
        					$('.'+yc1).toggle(500, function(){
        					$('html, body').animate({scrollTop: $('.'+y).offset().top},500);
        					});
        					CallCountry(c);
        					$('.'+y).show();
        					} 
							else
							alert("Oops! Not Available..");
						}
						else
						alert("Oops! Not Available.."); */
        				} // end if c..
			//	}	// end if m || c
					//........................................Creating Conti Code..
						else if(conti!=0 && m==0 && c==0)
						{
							flagconti=true;
							if(checkImageAvailability(conti)==true || Get_All_Divs_Ids(conti)==true){
							switch(conti){
        	 							case 'Austria':
        	 							var setColToBol = "Vienna";
        	 							//CallCountry(setColToBol);
        	 						//	var ycol = y+setColToBol;
        	 					
										if($("." + y).length!=0){
										$('.'+y).toggle(500, function(){
			        	 				//CallCountry(setColToBol);
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
									//	var setConti  =  "Folsom"; 
        							//	CallCountry(setConti);
        							callValidConti(y ,conti ,m, c)
        							//	$('.'+conti).show();
        								
										break;

			        	 				default:
			        	 					alert("Not Available!");;
			        					 }
							}
							else
							alert("Not Available!");
						}


					//............................................ 
				else if(m!=0 && c!=0)
				{ 
					 flagm=true;
					 flagc=true;
		 			// $('html, body').animate({scrollTop: $('.'+myc).offset().top},500);
		 			 if(c=="Boulder" || c=="Brazil" || c=="Folsom" ||  c=="Singapore" || c=="Santa Clara" || c=="Mexico"){
		        // CallCountry(c);
		          c="Boulder";
		          var c1 = c;
		         var myc1 = mc+y;
		        //  alert(myc1);
		        if($("." + myc1).length!=0){
		        CallCountry(c);
		        $('html, body').animate({scrollTop: $('.'+myc1).offset().top},500); }
		        else
		        alert("Oops! Not Available..");
		        }
		        else
		        alert("Oops! Not Available..");


		
				} //end of above else if m && c..
				//.............................................................. Conti Codes Goes Here!
			 else if(m!=0 && conti!=0)
        	 {
        	 flagconti = true;
        	 flagy = true;
        	 //-------------------------................................-----------------------------New Method
        	 
        	 switch(conti){
        	 			case 'Colorado':
        	 			var setColToBol = "Boulder";
        	 			CallCountry(setColToBol);
        	 			var mycol = m+ y+setColToBol;
        	 			if($("." + mycol).length!=0){
        	 			CallCountry(setColToBol);
        	 			$('html, body').animate({scrollTop: $('.'+mycol).offset().top},500);
							}
							else
							alert("I M Colorado");
        	 			break;
        	 			default:
        	 			alert("Not Available!");;
        				 }

				}
				else if(m==0 && c!=0 && conti!=0){
				
						Check_Site_Country_Combination(m , y  ,c , conti);
				
				}
				//..............................................................
				else{    
		//completing rhe task---- 
					if($('.' + y).length!=0){ 
            				
    		   switch(y){	
					
				case '2015':
				//alert(y);
				$('.'+y).toggle(500, function(){
							 $('html, body').animate({
								scrollTop: $('.'+y).offset().top
				
							 },500);
				});
				$('.'+y).fadeIn("slow");
					break;
					
					
				case '2016':
			//	alert(y);
				$('.'+y).toggle(500, function(){
			//	event.preventDefault();
							 $('html, body').animate({
								scrollTop: $('.'+y).offset().top
				
							},500);
				});
				$('.'+y).show();
			//	h_fix();
				
					break;
					
					
					
					case '2017': 
					$('.'+y).toggle(500, function(event){
					event.preventDefault();
					$('html, body').animate({
				scrollTop: $('.'+y).offset().top
				
					},500);
					});
					 $('.'+y).show();
					break;
					
					default: $('.2015, .2016,.2017').fadeOut("slow");
					
						} // end switch..  
						}
						else
						alert("Oops Not Available..");
						
			
			} // end of else curly brace..
			
		} // end of main else if..
		
		else if (c!=0){ 
				
				var i=1;
				var delay=2500;
				 flagc=true;
		 //---------------------
				// if(m!=0 || y!=0)
        		// {
        				if(m!=0 && y==0 && conti==0)
        				{
        					$('.'+m).toggle(600, function(){
        					$('html, body').animate({scrollTop: $('#'+mc).offset().top},500);
        					});
        					$('.'+m).show();
        				//	goto start;
        				CallCountry(c);
        				$('.'+m).show();
        				//break;
						}
						else if(y!=0 && m==0 && conti==0){
						alert(4);	
						$('.'+yc).toggle(600, function(){
							$('html, body').animate({scrollTop: $('.'+yc).offset().top},500);
						});
						$('.'+yc).show();
						CallCountry(c);
						$('.'+yc).show();
						}
				//  }
						 else if(m!=0 && y!=0 && conti==0)
						 {
									 $('.'+y).toggle(600, function(){
		            									$('html, body').animate({scrollTop: $('.'+myc).offset().top},500);
		            											   });
		            				  $('.'+y).show();
						  }
						  // working on site and country combination
						else if(m==0 && y==0 && conti!=0)
						 {
								 			Check_Site_Country_Combination(m , y  ,c , conti);								 
						 }	  
									  
						//..........................................						  
						 else{
		//-----------------------
							$('.January, .Febuary, .July, .December, .hideMe,.2015, .2016,.2017').fadeIn("slow");
						    if(checkImageAvailability(c)==true){
        					//alert("Country Found");
        					$('#'+c).fadeIn("slow");
        				//	$('.'+nc).fadeOut("slow");
        					CallCountry(c);
        					}
        					else{
        					alert("Site Not Found");
        					//break;
							}

							//CallCountry(c);
			      			   } // end of else..
        } //end of main else if
    ///.....................................................New Country List Code Goes Here...    
        else if(conti!=0)
        {
        			 flagconti=true;
				 
		    			if(m!=0 && y==0)
        				{
        				
        							/*	$('.'+m).toggle(600, function(){
        								$('html, body').animate({scrollTop: $('#'+mconti).offset().top},500);
        								});
										CallCountry(conti);
										$('.'+m).show();*/
										alert(conti);

        				///////////////////////////////////  SWITCH STATEMENT GOES HERE. BE CAREFUL.....
        					switch(conti){
        					
        								case 'Austria':
        										var setConti  =  "Vienna"; 
        										$('.'+m).toggle(600, function(){
        										$('html, body').animate({scrollTop: $('#'+setConti).offset().top},500);
        										});
												CallCountry(setConti);
												$('.'+m).show();
										
										break;
										case 'Brazil':
        										var setConti  =  "Sau Paulo"; 
        										$('.'+m).toggle(600, function(){
        										$('html, body').animate({scrollTop: $('#'+mconti).offset().top},500);
        										});
												CallCountry(setConti);
												$('.'+m).show();
										
										break;

										default:
										 alert("Good to see here!");
        								}
        					
        				}
						else if(y!=0 && m==0){
						
						$('.'+y).toggle(600, function(){
							$('html, body').animate({scrollTop: $('.'+yc).offset().top},500);
						});
						$('.'+y).show();
						

					/*	switch(conti){
        					
        								case 'Colorado':
        								var setConti  =  "Boulder"; 
        								$('html, body').animate({scrollTop: $('.'+ysetConti).offset().top},500);
      									CallCountry(setConti);
										break;
										default:
										 alert("Good to see here!");
        						     } */

							
						}
				
				 else if(m!=0 && y!=0)
				 {
				 			if(conti=="Colorado")
				 			var c = "Boulder";
				 			var mycont = m + y + c;
		            		$('html, body').animate({scrollTop: $('.'+mycont).offset().top},500);
				  }
				  
				  else{
				  $('.January, .Febuary, .July, .December, .hideMe,.2015, .2016,.2017').fadeIn("slow");
					
			 	  if(checkImageAvailability(conti)==true || Get_All_Divs_Ids(conti)==true){
        					
        					 switch(conti){
        								case 'Austria':
        								var setConti  =  "Vienna"; 
        								CallCountry(setConti);
										break;
										case 'Brazil':
        							//	var setConti  =  "Sau Paulo"; 
        							//  CallCountry(setConti);
        							CallCountry(conti);
										break;

        								case 'Colorado':
        								var setConti  =  "Boulder"; 
        								CallCountry(setConti);
										break;
										case 'California':
									//	var setConti  =  "Folsom"; 
        							//	CallCountry(setConti);
        								$('.'+conti).show();
        								
										break;
										default:
										 alert("checking..!");
										location.reload();
										// $('.January, .Febuary, .July, .December, .hideMe,.2015, .2016,.2017').show("normal");
        					  		 }

        					}
        					else{
        					alert("Country Not Found");
        					location.reload();
        					//$('.January, .Febuary, .July, .December, .hideMe,.2015, .2016,.2017').fadeIn("slow");
        					//break;
							}
				 		/* switch(conti){
        								case 'Austria':
        								var setConti  =  "Vienna"; 
        								CallCountry(setConti);
										break;
										case 'Brazil':
        							//	var setConti  =  "Sau Paulo"; 
        							//  CallCountry(setConti);
        							CallCountry(conti);
										break;

        								case 'Colorado':
        								var setConti  =  "Boulder"; 
        								CallCountry(setConti);
										break;
										case 'California':
										var setConti  =  "Folsom"; 
        								CallCountry(setConti);
										break;
										default:
										 alert("checking..!");
										 $('.January, .Febuary, .July, .December, .hideMe,.2015, .2016,.2017').show("normal");
        					  		 } */
        					  		// alert("Good To See Again");
				    }
		 }
        
  
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
 //$('.January, .Febuary, .July, .December, .hideMe,.2015, .2016,.2017').fadeIn("slow");
 location.reload();
 /*var IDs = [];
 $("#contentDiv").find("div").each(function(){ IDs.push(this.className); });
				
 for(var i = 0; i< IDs.length-1; i++)
 {
 		$(IDs[i]).show();
 }*/
 
  alert('please select them!');
					
						  }
					  } 
            //--------------------------
            
 }
 

 function CallCountry(c)
 {
 			switch(c){
 			//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 			
 			case 'Vienna':
				//	case 'Colorado':
						var i=1;
					var j=1;
				//	var setconti = "Boulder";
					var showFlag=false;
						var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = c.concat(i.toString());
//$("#" + r).animate({ left: '-40' });
					 $('#'+r).animate({
					 
					 					//$("#" + r).animate({ left: '-500' });
					                     width: "98%",
					                     height:"95%",
   										 opacity: 1,
   										 marginLeft: "0.2in",
  										 fontSize: "4em",
    									 borderWidth: "12pt",
    									 
    							         },800);
    							         i++;
          										  }
          										 $("#"+r).css('zIndex', '10');  
          									}
          							//	$('.'+y).fadeIn("slow");
          								}
          								showFlag=false;
          							showImg();

									
									
										break;

 			
 			//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
					case 'Boulder':
				//	case 'Colorado':
						var i=1;
					var j=1;
				//	var setconti = "Boulder";
					var showFlag=false;
				//	$('.2016, .2015, .2017').fadeOut("slow");
					
						var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = c.concat(i.toString());

					 $('#'+r).animate({
					 
					                     width: "98%",
					                     height:"100%",
   										 opacity: 1,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "12pt",
    									
    									 
    							         },800);
    							         i++;
          										  }
          									$("#"+r).css('zIndex', '10'); 	  
          									}
          								$('.'+y).fadeIn("slow");
          								
          								}
          								showFlag=false;
          							showImg();
									/* if(c=="Boulder" ||  c=="Singapore" || c=="Austria" ||  c=="Little Falls"){
										alert("jkshjk");
									$('.500').fadeOut("slow");
									}*/
									
										break;

					case 'Brazil':
					case 'Sau Paulo':
									var i=1;
					var j=1;
					var showFlag=false;
				//	$("animateDiv").animate({ backgroundColor: "rgb( 20, 20, 20 )" });
					//document.getElementById("center").style.color="#00FF00";
				//	$('.2016, .2015, .2017').fadeOut("slow");
					var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = c.concat(i.toString());
					                   $('#'+r).animate({
					                     width: "98%",
					                     height:"95%",
   										 opacity: 1,
   										 marginLeft: "0.2in",
  										 fontSize: "3em",
    									 borderWidth: "12pt",
    									 
    									 
    							         },800); 
    							         i++;
          										  }
          									$("#"+r).css('zIndex', '10'); 	  
          									}
          						//		$('.' + y).fadeIn("slow");
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
					//		case 'California':
								
								var i=1;
					var j=1;
					var p = $('.image').position();
				//	alert(p);
				 //	var setConti = "Folsom";
		//		$('.2017, .2015, .2016').fadeOut("slow");
				//------------------------
				
				

   // Shows appropriate one.
   					//if(true)
   					// $(".image").hide();
   					 
  				//	 var imageId = $(this).data("imageId"); // Fetches the value of the data-imageId attribute.
   				//		$(".image[data-imageId="+imageId+"]").show();
					//	alert(imageId);
				//----------------------------
				// $('.overlay').fadeIn("slow");
			//	$("#" + r).animate({ left: '-300' });
					var showFlag=false;
					// $("#" + r).fadeToggle();
						var showImg= function(){
					//	$(".Folsom.jpg").show();
					  							  showFlag = true;
					  						      if(showFlag){
					  						      					                  						while(i<10){
					                  								//	alert(1);
					                  									var r = c.concat(i.toString());
					                  									
																		//	$("."+Folsom.jpg).show();
								      									  $('#'+r).animate(
								      									  {
								      									   top: p.top+'px',
           																   left: p.left+'px',
            								      						   width: "115%",
					                  									   height:"115%",
   																		   opacity: 1,
   										 								   marginLeft: "0.2in",
  										 								   fontSize: "2em",
    									 								   borderWidth: "6pt",
    									 								  // transition: "transform .7s ease",
    									 
    									 									},800).css({'border' : '1px solid #2C81B2', 'padding' : '3px'}); 
    							         								i++;
    							         							  }
          														//	 $("#"+r).css('zIndex', '10'); 	  
          													}
          													
          										//	$('.'+y).fadeIn("slow");
          											
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
   										 opacity: 1,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    									 
    							         },800); 
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
   										 opacity: 1,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    									 
    							         },800); 
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
					                     width: "108%",
					                     height:"115%",
   										 opacity: 1,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    									 
    							         },800); 
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
   										 opacity: 1,
   										 marginLeft: "0.1in",
  										 fontSize: "3em",
    									 borderWidth: "7pt",
    									 
    									 
    							         },800); 
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
 //.......................................DialCountry Code Goes Here!..
 /*   function DialCountry(conti,m,y){
 
 switch(conti){
					case 'Colarado':
					var setColToBol="Boulder";
					var myconti  = m+y+setColToBol;
					if($("." + myconti).length!=0){
						var i=1;
					var j=1;
					var showFlag=false;
					var myconti = m + y + setColToBol;
						var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = setColToBol.concat(i.toString());

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

									$('html, body').animate({scrollTop: $('.'+myconti).offset().top},500);
									}
									else
									alert("Oops! Not Available");
									
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
					                  var r = conti.concat(i.toString());
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
							
							case 'California': 
								var i=1;
					var j=1;
					var showFlag=false;
						var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = conti.concat(i.toString());

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
					                  var r = conti.concat(i.toString());

									 $('#'+r).animate({
					                     width: "90%",
					                     height:"125%",
   										 opacity: 0.4,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    									 
    							         },500); 
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
					                  var r = conti.concat(i.toString());

								 $('#'+r).animate({
					                     width: "90%",
					                     height:"105%",
   										 opacity: 0.4,
   										 marginLeft: "0.2in",
  										 fontSize: "2em",
    									 borderWidth: "6pt",
    									 
    									 
    							         },500); 
    							         i++;
    							         	  }
          										  
          									}
          								
          								}
          								showFlag=false;
          							showImg();
 					

					
					break;
					
					case "Canada": 
					var i=1;
					var j=1;
					var showFlag=false;
						var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = conti.concat(i.toString());

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
					
					case "Delaware": 
					var i=1;
					var j=1;
					var showFlag=false;
						var showImg= function(){
					    showFlag = true;
					          if(showFlag){
					                  while(i<10){
					                  var r = conti.concat(i.toString());

									  $('#'+r).animate({
					                     width: "90%",
					                     height:"105%",
   										 opacity: 0.4,
   										 marginLeft: "0.1in",
  										 fontSize: "3em",
    									 borderWidth: "7pt",
    									 
    									 
    							         },500); 
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

 
 
 }  */
 // ........................  Dial Code Upto here!..
 
 
  function refresh(){
       
   
       var i = 1;
   //  alert(arr[j]);
        while(i <10){
     				  
     				   var getId  = arr[j]+i;
     				   $('#' + getId).animate({
     		   			width:"124px",
     		   			height:"84px",
     		   			opacity:1,
     									     })  
     									     
     									     
     									     
        				i++;
      				}
      	 }
     
     function refMe()
      {
     var i =1;
     
      
     									     switch(contiArr[k]){
     									     case 'Austria':
        										var nameTo = "Vienna";
        										callMe(nameTo);
        									   break;

        										case 'Brazil':
        									//	var nameTo = "Boulder";
        										callMe(contiArr[k]);
        									   break;
        										case 'California':
        										var nameTo = "Folsom";
        											callMe(nameTo);
							
        										   default:
        							  // alert("Hey Don't Call Me Again You Fool.");
        							  					}
													 function callMe(nameTo){
																		while(i<10){
     									     							var getId  = nameTo+i;
     				 								   					$('#' + getId).animate({
     		   															width:"124px",
     		   															height:"84px",
     		   															opacity:1,
     									    												 }) 
     									    										 i++;
     									    										} 
     															//	i++;
               																  }
     
     
     }
     function refreshConti(){
       
   
       var i = 1;
     
      //  while(i <10){
      //  alert(contiArr[j]);
       var getCon = contiArr[k];
      // alert(getCon);
        				switch(getCon){
        						case 'Austria':
        								var nameTo = "Vienna";
        								callMeCon(nameTo);
        							   break;
        						case 'Brazil':
        						var nameTo = "Sau Paulo";
        								callMeCon(nameTo);

        							   default:
        							  // alert("Hey Don't Call Me Again You Fool.");
        							  }
        				var callMeCon = function(nameTo){
        				
        												while(i <10){
     				   												var getId  = nameTo+i;
     				   												$('#' + getId).animate({
     		   														width:"124px",
     		   														height:"84px",
     		   														opacity:1,
     																			   	      })
     										    					 }
        															i++;
        					
      													};
      	 						}
function checkImageAvailability(Simg){
 var count = document.querySelectorAll("img").length;
	//alert(count);
				/*	var toShow = Simg.target.img.image;
					alert(toShow);
						for (var i=0; i < count; i++) {
       					 if (i == toShow) $('.image'+i).show();
       					 else $('.image'+i).hide();
    					}  */

 					//var images = document.getElementByClass('m').getElementById("img');
 			    	//var images  = document.getElementsByTagName('img');
 			    	//var images  = document.querySelectorAll(" '#'+TabId img");
 			    	//var images  = document.getElementById('.getImg').getElementsByTagName('img');
 			  //  var imags  = document.getElementByClass("getImg").getElementsByTagName('img');
 			    var images  =	document.querySelectorAll('img');
 			   // var images  =	document.querySelectorAll("'.' + TabId + img");
					//alert(imags);
 			      //  alert(images);
 			      
 			      
 	  				var images_names = [];
 	  				var cname= [];
 	  				var temp;
 	  				var Sim = Simg + ".jpg";
   	   		for(var i = 1; i < count; i += 1)
   	   		 {
    		    var j=0;
    			temp = images[i].getAttribute('src').split('/');
   			    images_names[i] = temp[temp.length -1];     
   			    var t = images_names[i].split('.');
 				if(images_names[i]==Sim)
 				   {	
 	 				//   flagImage = true;
 	 				   $("."+t).show()
 				   	//	break;			   		 	
  				   }
  				  else{
  				 $("."+t).hide()
  				// flagImage = false;
  				 }
  
      	   	}
     // var Sim = Simg + ".jpg";
    
  /*  if(images_names[i]!=Sim)
    {	//	alert(8);
   // $(".January").hide();
        		$("."+ images_names[i]).fadeOut("slow", function(){
			   			alert("."+ images_names[i]);
			   			},500);
			   		alert("ok");
			   		alert("."+ images_names[i]);
    } */
      var  img_index = 1;
	   for(var i=1; i < count; i += 1)
	   {
	  	
		//	 alert(images_names[i]);
		  if(Sim==images_names[i]){
	 	   		flagImage = true;
	 	   	/*	var windowObjectReference;
	 	   		windowObjectReference = window.open(
   						 "http://wps.service.agilent.com:81/photo_Rep/images/Folsom.jpg",
   						 "DescriptiveWindowName",
   						 "resizable,scrollbars,status" 
 													 );  */
	 	//   		alert("Image found at location" + i); 
	 	   		for(var m=1; m < count; m += 1)
			   	{	
			   		var i_name= images_names[m];
			   		if(m!=i)
			   		{
						  $("."+ i_name).fadeOut("slow", function(){
			   			  //event.preventDefault();
			   			   alert("ok");
			   			   },500); 
							$("."+i_name).animate({
     		   															width:"124px",
     		   															height:"84px",
     		   															opacity:0,
     									    	 }) 

	   	   			}
	   						   				
	   			}  
 
	 		//	callNotSelectedImg(i);
	   		break;
	   		return flagImage;
	   	}else{
	   		
	   	flagImage = false;} 
	    }
	   
return flagImage;

}
function callNotSelectedImg(img){
			var images_names = [];
		 	var cname= [];
		 	var temp;
			var count = document.querySelectorAll("img").length;
			var images  =	document.querySelectorAll('img');
		/*	var toShow = img.target.dataset.image;
			for (var i=0; i < count; i++) {
       		 if (i == toShow) $('.image'+i).hide();
       			 else $('.image'+i).show();
    			} */
    			
			var t;
 			for(var i = 0; i < count; i += 1) {
 		       
 		        temp = images[i].getAttribute('src').split('/');
 		        images_names[i] = temp[temp.length -1];
 		      t  = images_names[i].split('.');
 		      $('.'+t).show();
       
	         }
			
		/*	for(var i=1; i < count; i += 1)
			   {	
			   var i_name= images_names[i];
			   if(i!=img){alert(i_name);
	   				$("#"+i_name).hide();
	   			}	*/
	   			
			  // }
	}
	
	function callValidConti(y ,conti ,m, c)
	{
		 // alert("i m in);
					switch(conti){
        	 			case 'Austria':
        	 			var setColToBol = "Vienna";
        	 			CallCountry(setColToBol);
        	 		//	var mycol = m+ y+setColToBol;
        	 		var my = m+y;
        	 			if($("#" + my).length!=0){
        	 									$('.'+m).toggle(500, function(){
        	 									    $('html, body').animate({scrollTop: $('#'+my).offset().top},500);
        	 																	});
        	 									$('.'+ m).show();
        	 									//checkImageAvailability(conti);
        	 									CallCountry(setColToBol);
												}
						else
							alert("Not Available!");
        	 			break;
        	 			
        	 			case 'California':
        	 							
        	 		//	var setColToBol = "Folsom";
        	 		//	CallCountry(setColToBol);
        	 		//	var mycol = m+ y+setColToBol;
        	 		var my = m+y;
        	 		var myc = m + y + c;
        	 			if($("#" + my).length!=0){
        	 			//CallCountry(setColToBol);
        	 			h_fix();
        	 								$('#'+my).toggle(500, function(){
        	 			//CallCountry(setColToBol);
        	 								$('html, body').animate({scrollTop: $('#'+my).offset().top},800);
        	 								});
        	 								$('#'+ my).show();
        	 							 	if(checkImageAvailability(conti)==true || Get_All_Divs_Ids(conti)==true){
        	 							 			if(c!=0 && conti!=0){
        	 							 			CallCountry(c);
        	 							 			break;
        	 							 			}
        	 							 			else
        	 							 			$('.'+conti).show();
        	 							 	}
        	 							 	else
        	 							 	alert("Not Availavle!");
        	 								//CallCountry(setColToBol);
							}
							else if(my==0){
											if(checkImageAvailability(conti)==true || Get_All_Divs_Ids(conti)==true)
						
												$('.'+conti).show();
												else
												alert("Not Available!");					//CallCountry(setColToBol);
							
							}
							else if(myc==0){
							if(checkImageAvailability(setColToBol)==true)
						
							CallCountry(setColToBol);
							
							}
							else if(m==0 && y!=0 && c!=0 && conti!=0){
							if(checkImageAvailability(conti)==true || Get_All_Divs_Ids(conti)==true)
								{
											   $('.'+conti).show();
												CallCountry(c);
												
												$('.'+y).toggle(500, function(){
        	 			
        	 									$('html, body').animate({scrollTop: $('.'+y).offset().top},500);
        	 									});
        	 									$('.'+ y).show();

								}
												else
												alert("Not Available!");

							}
							else if(m==0 && c==0){
							//if(checkImageAvailability(setColToBol)==true)
							if(checkImageAvailability(conti)==true || Get_All_Divs_Ids(conti)==true)
						
												$('.'+conti).show();
												else
												alert("Not Available!");
							//CallCountry(conti);
							//CallCountry(setColToBol);
							$('.'+y).toggle(500, function(){
        	 			//CallCountry(setColToBol);
        	 								$('html, body').animate({scrollTop: $('.'+y).offset().top},500);
        	 								});
        	 								$('.'+ y).show();

							}
							else if(y==0){
							if(checkImageAvailability(conti)==true || Get_All_Divs_Ids(conti)==true)
						
												$('.'+conti).show();
												else
												alert("Not Available!");

							CallCountry(c);
							$('.'+m).toggle(500, function(){
        	 			//CallCountry(setColToBol);
        	 								$('html, body').animate({scrollTop: $('.'+m).offset().top},500);
        	 								});
        	 								$('.'+ m).show();

							}

							else
							alert("Not Available!");
								break;
        	 			default:
        	 			alert("Not Available!");
        				 }

	
	
	
	}
	function Check_Site_Country_Combination(m , y  ,c , conti){
	switch(true){
        	 	
        	 				case ((conti=="California")):
        	 											switch(c){
        	 											
        	 														case 'Folsom':
        	 														case 'SantaClara':
        	 														case 'LaJolla':
        	 																	//	alert("Valid Combination !");
        	 																		callValidConti(y,conti,m ,c);
        	 																//		alert("caught u");
        	 																//		 $('html, body').animate({scrollTop: $('#'+my).offset().top},500);
        	 																//		 $('.'+ m ).show();
        	 														break;
        	 														default: alert("Not a valid combination");
        	 													//	$('img').show();
        	 													  callNotSelectedImg(conti);        	 														
        	 													//	$('.2015, .2016, .2017, .January, .December, .July, .image').show();
        	 														// refresh();
        	 											}
        	 											break;
        	 			   case ((conti=="Colorado")):
        	 			   								switch(c){
        	 			   											case 'Boulder':
        	 			   											case 'ColoradoSprings':
        	 			   											case 'Englewood':
        	 			   																alert("valid !");
        	 			   											break;
        	 			   											default: alert("Not a valid combination");
        	 			   								}
        	 			   								break;
        	 			   	default:
        	 			   	       alert("Select Valid Country !");
        	 			   	       callNotSelectedImg(conti);
        	 			   	     //  $('.2015, .2016, .2017, .January, .December, .July').show();
        	 	}
}
function Get_All_Divs_Ids(conti)
{

			//	var ids = $('#contentDiv').map(function(){
   				//	return this.id;
			//	}).get();
			//	alert(ids);
				var GetClassFlag  = false; 
				var IDs = [];
			//	$("#contentDiv").find("div").each(function(){ IDs.push(this.id); });
				//alert(IDs);
				
				///var classList = document.getElementById('contentDiv').className;
				$("#contentDiv").find("div").each(function(){ IDs.push(this.className); });
				
				for(var i = 0; i< IDs.length-1; i++)
				{
				 if(IDs[i] == conti){
					//$('img').show();
					//$("img").addClass("conti").show();
					if(conti=="California"){
					   	var cfArray=["Folsom" , "SantaClara" , "LaJolla"];
					   		 for(var i = 0 ; i< cfArray.length - 1 ; i++)
					   		 {
					    		$(function(){
									$(this).find("."+cfArray[i]).show();
					
								});

					   		 }
					 	}
				GetClassFlag = true;
						break;
		         	}
					else
					GetClassFlag = false;
				}
			return GetClassFlag;

}


function h_fix() {	
	
	var h1 = jQuery('#d1').height();
	var h2 = $('#tabLoc').height();
	//console.log(h1);
//	console.log(h2);
		if(h1>h2) {
		var diff = h1 - h2;
		alert(diff);
		jQuery('tr#r1').next('tr').css('margin-top', -diff);
	}
}

function h_adjust() {
	jQuery('body').css({
		'opacity' : 0,
		 '-webkit-transition' : 'all 0.1s ease',
		 '-moz-transition' : 'all 0.1s ease',
		 '-o-transition' : 'all 0.1s ease',
		 '-ms-transition' : 'all 0.1s ease', 
		 'transition' : 'all 0.1s ease'
	});
	/*  */
	setTimeout(function(){
	
		if(jQuery('#January2017').css('display') == 'block') {
			
			jQuery('#r1').next('tr').css('margin-top', '0px' );
			

		}
		
		jQuery('body').css({
				'opacity' : 1,
			/*	 '-webkit-transition' : 'all 0.3s ease',
				 '-moz-transition' : 'all 0.3s ease',
				 '-o-transition' : 'all 0.3s ease',
				 '-ms-transition' : 'all 0.3s ease', 
				 'transition' : 'all 0.3s ease' */
			});
			
		jQuery('.load-gif').css('display', 'none');

	}, 1000);

};	
	













