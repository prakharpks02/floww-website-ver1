// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
	apiKey: "AIzaSyB6qa2LChBsDEghHpont13yPM04lJn4XSU",
	authDomain: "djangoauthtest-001.firebaseapp.com",
	projectId: "djangoauthtest-001",
	storageBucket: "djangoauthtest-001.appspot.com",
	messagingSenderId: "134728719367",
	appId: "1:134728719367:web:ca01f900f39ae3d6c9dea2",
	measurementId: "G-RBB5BL72D2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var authConfirmResult = undefined;


// --------------------------------------------- Firebase Code End

function CountryCodeChange(codeval) {
	console.log(codeval);
	document.getElementById("countryselecteditem").value = codeval;
	document.getElementById("countryselecteditem").text = codeval;
	document.getElementById("phone-country-code-id").selectedIndex = "0";
};

var app1 = new Vue({
	el: '#login-page-id',
	data: {
		'phoneForm': {
			'code': '',
			'number': '',
			'otp': '',
		},
		'countryCode': countryCode,
		'loginForm': {
			'status': 'number',
		},
	},
	methods: {
		SubmitNumber: function () {
			// console.log('Button Clicked');
			// var eventObj = document.createEvent('Events').initEvent('click',true,false);
			// document.getElementById('get-otp-button').dispatchEvent(eventObj);
			// document.getElementById('get-otp-button').click();
		},
		PhoneSignin: function () {
			const phoneNumber = String(this.phoneForm.code) + String(this.phoneForm.number);
			firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaElement)
				.then((confirmationResult) => {
					console.log('Otp sent');
					authConfirmResult = confirmationResult;
					app1.loginForm.status = 'otp';
				}).catch((error) => {
					console.log(error);
					window.alert('Server Error, Please Try again Later');
				});
		},
		SubmitOtp: function () {
			authConfirmResult.confirm(this.phoneForm.otp).then((result) => {

				console.log('Verified');
				const user = result.user;
				user.getIdToken().then((idToken) => {

					axios.post(globalApiUrl + '/api/v1/auth/firebase-login/', {
							tokenId: idToken,
							customVal: String(this.phoneForm.code) + String(this.phoneForm.number),
						})
						.then(function (response) {
							let responseData = JSON.parse(response.data);
							console.log(responseData.status);
							if (responseData.status == 'failure') {
								app1.formData.status = 'failure';
							} else if (responseData.status == 'success') {
								console.log('success');
							} else if (responseData.status =='created'){
								console.log('created');
							};
						})
						.catch(function (error) {
							app1.formData.status = 'failure';
							window.alert('Server Error, Please Try Again!');
						});

				});
			}).catch((error) => {
				console.log(error);
				window.alert('Server Error, Please Try again Later');
			});
		},
	}
});


// Initialize Recaptcha
const recaptchaElement = new firebase.auth.RecaptchaVerifier(document.getElementById('get-otp-button'), {
	'size': 'invisible',
	'callback': (response) => {
		console.log('Recaptcha Fired');
		app1.PhoneSignin();
	}
});

recaptchaElement.render();