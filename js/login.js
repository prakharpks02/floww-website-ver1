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
		'loginStatus': true,
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
			document.getElementById("page-load-overlay").classList.remove("hide");

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
							console.log(responseData);
							if (responseData.status == 'failure') {
								app1.ShowSuccess(false, null);
							} else if (responseData.status == 'success') {
								console.log('success');
								app1.ShowSuccess(true, responseData.sessionId);
							} else if (responseData.status == 'created') {
								console.log('created');
								app1.ShowSuccess(true, responseData.sessionId);
							};
							document.getElementById("page-load-overlay").classList.add("hide");
						})
						.catch(function (error) {
							window.alert('Server Error, Please Try Again!');
							app1.ShowSuccess(false, null);
							document.getElementById("page-load-overlay").classList.add("hide");
						});

				});
			}).catch((error) => {
				console.log(error);
				window.alert('Server Error, Please Try again Later');
				document.getElementById("page-load-overlay").classList.add("hide");
			});
		},
		ShowSuccess: function (successstatus, sessionidval) {
			document.getElementById("login-form-container").classList.add("hide");
			document.getElementById("success-container").classList.remove("hide");
			this.loginStatus = successstatus;

			if(successstatus){
				this.SetCookieValue('sessionid', sessionidval, 14);
			// 	setTimeout(function() {
			// 		window.close();
			// 	}, 3000)
			}
		},
		SetCookieValue: function (cName, cValue, expDays) {
			let date = new Date();
			date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
			const expires = "expires=" + date.toUTCString();
			document.cookie = cName + "=" + cValue + "; " + expires + "; path=/; domain=.gofloww.co;";
		},
	},
	mounted() {
		document.getElementById("page-load-overlay").classList.add("hide");
		//this.ShowSuccess(true);
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