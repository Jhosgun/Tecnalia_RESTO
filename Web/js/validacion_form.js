$(document).ready(function(){
	$("#form_contact").validate({
		rules:{
			name:{
				required:true,
				minlength: 2,
			},
			surname:{
				required:true,
				minlength: 2,
			},
			email:{
				email: true,
				required: true,
			},
			mssg:{
				required: true,
				minlength: 2,
			}
		},
		errorPlacement: function(error,element){
			//error.appendTo(element.attr("placeholder","Digite su nombre"));
			if(element.is("#name")){
				error.appendTo(element.attr("placeholder","Porfavor, ingrese su nombre"));

			}else if(element.is("#surname")){
				error.appendTo(element.attr("placeholder","Porfavor, ingrese su apellido"));

			}else if(element.is("#email")){
				error.appendTo(element.attr("placeholder","Porfavor, ingrese su email"));

			}else if(element.is("#mssg")){
				error.appendTo(element.attr("placeholder","Porfavor, escriba su mensaje"));
			}
		}
	})


})