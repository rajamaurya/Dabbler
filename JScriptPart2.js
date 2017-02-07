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
  var images  = document.getElementsByTagName('img');
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
          }*/
    //console.log(images_names);
    console.log(cname);
     //var monthclass = document.getElementByName("2017");
  window.getSearchedChoice(m,y,c);
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
   function getSearchedChoice(m,y,c){
          //  alert(m+c+y);
          var myc = m +y+ c;
          var choice=null;
          if(m)
 			choice = m;
 			else if(y)
 			choice = y;
 			else
 			choice =c

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
			switch(c){
					
					case 'Brazil': $('html, body').animate({
				scrollTop: $('#'+c).offset().top
				
					},1000); 
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
            //--------------------------
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
													case 'Singapore':
													                  $('html, body').animate({
																      scrollTop: $('.'+myc).offset().top
															          },1000);
												  }
							          }
default: alert('please select them!');
					
						  }
            //--------------------------
 }
