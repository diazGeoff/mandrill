$( function ( ) {
	var generateEmail = function generateEmail ( from , to , subject , message ) {		
		return {
				type: 'POST',
				url: 'https://mandrillapp.com/api/1.0/messages/send.json',
				data: {
					key: 'xjEl0HBJZFdoaSg3scS1ew',
					message: {
						from_email: from.email,
						from_name: from.name,
						to: to,
						auto_text: 'true',
						subject: subject,
						text: message,
						attachments: [
							{
								"type": "image/jpeg",
								"name": "bulalo",
								"content": attachment
							}
						]
					}
				},
				success: function ( response ) {
					console.log( response );
					alert( "Email Has Been Sent !!!" );
				},
				error: function ( response ) {
					alert( "Email Sending Failed !!!" );
				}
			}
	};

	var manyTo = function manyTo ( emails ) {
		emails = emails.map( function ( each ) {
			return {
				"email": each,
				"to": "Some One",
				"type": "to"
			}
		} );

		return emails;
	};

	$("#submit").click( function ( ) {
		var from = {
			"email": "diazgeoff93@gmail.com",
			"name": "Geoff Diaz"
		};	

		var emails = $("#email").val();

		var emailRegex = emails.match(/([\w+ | \.]+@[\w+ | \.]+);/g).map( function ( each ) {
			return each.substring( 0 , each.length - 1 );
		} );			

		var emailData = generateEmail( from , manyTo( emailRegex ) , $("#subject").val() , $("#message").val() );

		$.ajax( emailData );
	} );
} );