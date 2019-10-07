
//Create add function
function add(){

	var  valueOfTextbox = form.textbox.value ,

	     lastNumber = valueOfTextbox.charAt( valueOfTextbox.length - 1);


	     if (lastNumber =='+' || lastNumber =='-' || lastNumber =='/' || lastNumber =='*') {

	           form.textbox.value = valueOfTextbox.substring(0, valueOfTextbox.length - 1);
	           form.textbox.value+= '+';
	     } else {

	     	form.textbox.value+= '+';
	     }	
}
//Create sub function
function sub(){

	var  valueOfTextbox = form.textbox.value ,

	     lastNumber = valueOfTextbox.charAt( valueOfTextbox.length - 1);


	     if (lastNumber =='+' || lastNumber =='-' || lastNumber =='/' || lastNumber =='*') {

	           form.textbox.value = valueOfTextbox.substring(0, valueOfTextbox.length - 1);
	           form.textbox.value+= '-';
	     } else {

	     	form.textbox.value+= '-';
	     }	
}
//Create divid function
function divid(){

	var  valueOfTextbox = form.textbox.value ,

	     lastNumber = valueOfTextbox.charAt( valueOfTextbox.length - 1);


	     if (lastNumber =='+' || lastNumber =='-' || lastNumber =='/' || lastNumber =='*') {

	           form.textbox.value = valueOfTextbox.substring(0, valueOfTextbox.length - 1);
	           form.textbox.value+= '/';
	     } else {

	     	form.textbox.value+= '/';
	     }	
}
//Create multip function
function multip(){

	var  valueOfTextbox = form.textbox.value ,

	     lastNumber = valueOfTextbox.charAt( valueOfTextbox.length - 1);


	     if (lastNumber =='+' || lastNumber =='-' || lastNumber =='/' || lastNumber =='*') {

	           form.textbox.value = valueOfTextbox.substring(0, valueOfTextbox.length - 1);
	           form.textbox.value+= '*';
	     } else {

	     	form.textbox.value+= '*';
	     }	
}