 


$('document').ready(function () {
	 $('#button1').click(function() {
		 $('#table1').toggle();
	});
});

/* I wanted to save the number of stars each comment received and if the number of stars was high,the translation in the table 
would have changed; however, I never managed to store the number of stars clicked*/

$('document').ready(function(){

	   $(".basic").jRating({
         step:true,
         length : 10, // nb of stars
         onSuccess : function(){
           alert('Success : your rate has been saved :)');


       
         }
       });
 
});
