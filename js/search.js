var vendorListConst = [{
    'name': 'JS Transport',
    'startPrice': '57',
    'rating': '4.1',
    'contactNo': '+91 9999955555',
    'vendorKey': 'VEN10000',
    'year': '1941',
    'location': 'Juhu, Mumbai',
    'size': '30-50',
    'fleetType': 'riders',
    'services': ['otp', 'cold_chain', 'same_day', 'intercity'],
    'badges': ['100y_old'],
}, {
    'name': 'JS Transport',
    'startPrice': '57',
    'rating': '4.1',
    'contactNo': '+91 9999955555',
    'vendorKey': 'VEN10000',
    'year': '1941',
    'location': 'Juhu, Mumbai',
    'size': '30-50',
    'fleetType': 'riders',
    'services': ['otp', 'cold_chain', 'same_day', 'intercity'],
    'badges': ['100y_old'],
}, {
    'name': 'JS Transport',
    'startPrice': '57',
    'rating': '4.1',
    'contactNo': '+91 9999955555',
    'vendorKey': 'VEN10000',
    'year': '1941',
    'location': 'Juhu, Mumbai',
    'size': '30-50',
    'fleetType': 'riders',
    'services': ['otp', 'cold_chain', 'same_day', 'intercity'],
    'badges': ['100y_old'],
}, {
    'name': 'JS Transport',
    'startPrice': '57',
    'rating': '4.1',
    'contactNo': '+91 9999955555',
    'vendorKey': 'VEN10000',
    'year': '1941',
    'location': 'Juhu, Mumbai',
    'size': '30-50',
    'fleetType': 'riders',
    'services': ['otp', 'cold_chain', 'same_day', 'intercity'],
    'badges': ['100y_old'],
}, {
    'name': 'JS Transport',
    'startPrice': '57',
    'rating': '4.1',
    'contactNo': '+91 9999955555',
    'vendorKey': 'VEN10000',
    'year': '1941',
    'location': 'Juhu, Mumbai',
    'size': '30-50',
    'fleetType': 'riders',
    'services': ['otp', 'cold_chain', 'same_day', 'intercity'],
    'badges': ['100y_old'],
}];



const googleOptions = {
    componentRestrictions: {
        country: 'in'
    },
    fields: ["address_components", "formatted_address"],
};

// --------------------------------------------- Firebase Code Start
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


// --------------------------------------- Fixed Functions For Page responsivness

function CopyButton(element) {
    navigator.clipboard.writeText(element.children[1].innerHTML);
    element.children[0].innerHTML = "Copied";
}

function CleanCopyButton(element) {
    element.children[0].innerHTML = "Click to Copy";
}

function ToggleCardView(element) {
    element.parentElement.parentElement.classList.toggle("card-expanded-container");

    if (element.children[0].innerHTML == "View More") {
        element.children[0].innerHTML = "View Less";
    } else {
        element.children[0].innerHTML = "View More";
    }
}




// ------------------------------------------------------------ Vue Starts


Vue.component('vendor-card-component', {
    props: {
        'vendordata': Object,
        'tagnames': Object,
    },
    // delimiters: ['[[', ']]'],
    template: `
            <div class="card-container box has-text-centered">
                <div class="card-main-container columns is-vcentered">
                    <div class="column">
                        <div class="card-element-container">
                            <span>{{vendordata.name}}</span>
                        </div>
                        <div class="card-element-container starting-from-box">
                            <span class="tag is-warning">starting ₹{{vendordata.startPrice}}</span>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card-element-container rating-container">
                            <span><i class="fa fa-star"></i> {{vendordata.rating}}/5</span>
                        </div>
                        <div class="card-element-container vendor-number-container">
                            <a :href="'tel:'+vendordata.contactNo"><u>{{vendordata.contactNo}}</u></a>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card-element-container">
                            <div class="copy-button-tooltip">
                                <button onclick="CopyButton(this)"
                                    onmouseout="CleanCopyButton(this)" class="button is-warning is-small">
                                    <span class="copy-button-tooltiptext">Click to Copy</span>Get Vendor Key
                                    <span style="display: none;">{{vendordata.vendorKey}}</span>
                                </button>
                            </div>
                        </div>
                        <div class="card-element-container vendor-number-container">
                            <a href="#"><span><u>API Docs</u></span></a>
                        </div>
                    </div>

                    <div class="column has-text-right is-4">
                        <div class="card-element-container">
                            <a href="#" class="website-link-button"><span>Open WEBSITE</span></a>
                        </div>
                        <div class="card-element-container">
                            <a class="website-link-button" @click="$emit('request-delivery')"><span>Request DELIVERY</span></a>
                        </div>
                    </div>
                </div>

                <div class="card-second-container">

                    <div class="card-view-more-container">
                        <button class="button is-small is-rounded is-link" onclick="ToggleCardView(this)"><span>View More</span></button>
                    </div>

                    <div class="card-expand-container columns is-multiline is-gapless">

                        <div class="column is-full columns">
                            <div class="column">
                                <span>Founded in {{vendordata.year}}</span>
                            </div>
                            <div class="column">
                                <span>{{vendordata.location}}</span>
                            </div>
                            <div class="column">
                                <span>{{vendordata.size}} {{tagnames[vendordata.fleetType]}}</span>
                            </div>
                        </div>
                        <div class="column is-full columns has-text-left">
                            <div class="column is-2">
                                <span>Services :</span>
                            </div>
                            <div class="column">
                                <ul class="services-list-container">
                                    <li v-for="service in vendordata.services" class="tag is-small">{{tagnames[service]}}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="column is-full columns has-text-left">
                            <div class="column is-2">
                                <span>Badges :</span>
                            </div>
                            <div class="column">
                                <ul class="services-list-container">
                                    <li v-for="badge in vendordata.badges" class="tag is-small">{{tagnames[badge]}}</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
			`,
})



var app1 = new Vue({
    el: '#search-page-id',
    // delimiters: ['[[', ']]'],
    data: {

        'countryCode': countryCode,
        'tagNames': tagNames,
        'vendorCities': vendorCities,
        'vendorTags': vendorTags,

        'vendorList': vendorListConst,
        'location': 'mumbai',
        'tagSelected': 'empty',

        'userAuth': false,
        'userContactNo': '+91 9919919191',

        'contentOverlay': true,
        'searchLoading': false,
        'formType': 'order',

        'phoneForm': {
            'code': '',
            'number': '',
            'otp': '',
        },
        'loginForm': {
            'status': 'number',
        },
        'emailForm': {
            'email': '',
            'error': 'none'
        },
        'orderForm': {
            'formStatus': 'base',
            'vendorKey': '',
            'vendorName': 'JS Transport',
            'companyName': '',
            'productType': '',
            'deliveryDate': '',
            'orderType': 'perOrder',
            'orderList': [],
            'rentDetail': {
                'time': '',
                'contactNo': ''
            }
        },
    },
    methods: {
        GetVendorList: function () {
            this.searchLoading = true

            axios.get(globalApiUrl + '/api/order-details/', {
                    params: {
                        location: this.location, // Sending empty if no location selected 
                        tagSelected: this.tagSelected, // Sending empty if no tag selected
                    }
                })
                .then(function (response) {
                    let responseData = JSON.parse(response.data);
                    console.log(responseData);

                    app1.vendorList = responseData;

                    app1.searchLoading = false;
                })
                .catch(function (error) {
                    app1.searchLoading = false;
                    console.log(error);
                    window.alert('Server Error, Please Try Again!');
                });
        },
        RemoveTag: function () {
            this.tagSelected = 'empty';
            this.GetVendorList();
        },
        RemoveLocation: function () {
            this.location = 'empty';
            this.GetVendorList();
        },
        CloseOverlay: function () {
            this.contentOverlay = false;
            this.formType = '';

        },
        LoginButton: function () {
            this.phoneForm = {
                'code': '',
                'number': '',
                'otp': '',
            };
            this.loginForm.status = 'number';

            this.formType = 'login';
            this.contentOverlay = true;

            // Initialize Recaptcha

            setTimeout(function () {
                const recaptchaElement = new firebase.auth.RecaptchaVerifier(document.getElementById('get-otp-button'), {
                    'size': 'invisible',
                    'callback': (response) => {
                        console.log('Recaptcha Fired');
                        app1.PhoneSignin();
                    }
                });

                recaptchaElement.render();
                console.log(document.getElementById('get-otp-button'));
            }, 1000)
        },
        LogoutButton: function () {

        },
        GetApiKey: function () {
            axios.post(globalApiUrl + '/api/send-api-key/')
                .then(function (response) {
                    let responseData = JSON.parse(response.data);
                    console.log(responseData);

                    if (responseData.status == 'success') {
                        window.alert('API Sent on your email');
                    } else {
                        this.emailForm.email = '';
                        this.emailForm.error = 'none';
                        this.formType = 'email';
                        this.contentOverlay = true;
                    }

                })
                .catch(function (error) {
                    if (error.response.status === 403) {
                        this.LoginButton();
                        window.alert('Not Authorized! Please login to access.')
                    } else {
                        window.alert('Server Error, Please Try Again!');
                    }
                    console.error(error);
                });
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

                    axios.post(globalApiUrl + '/api/firebase-login/', {
                            tokenId: idToken,
                            customVal: String(this.phoneForm.code) + String(this.phoneForm.number),
                        })
                        .then(function (response) {
                            let responseData = JSON.parse(response.data);
                            console.log(responseData.status);

                            if (responseData.status == 'success') {
                                app1.userAuth = true;
                            } else {
                                app1.userAuth = false;
                                window.alert('Server error, please try again later or send email to info@gofloww.co')
                            }
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
        SubmitEmail: function () {
            axios.post(globalApiUrl + '/api/submit-email-ecommerce/', {
                    email: this.emailForm.email,
                })
                .then(function (response) {
                    let responseData = JSON.parse(response.data);
                    console.log(responseData.status);

                    if (responseData.status == 'success') {
                        app1.GetApiKey();
                        app1.emailForm.error = 'none';
                    } else {
                        app1.emailForm.error = responseData.message;
                    };
                })
                .catch(function (error) {
                    app1.emailForm.error = 'Server error, please try again later or send email to info@gofloww.co';
                    window.alert('Server Error, Please Try Again!');
                });
        },
        RequestDelivery: function (vendorkey, vendorname) {
            this.orderForm = {
                'vendorKey': '',
                'vendorName': '',
                'companyName': '',
                'productType': '',
                'deliveryDate': '',
                'orderType': 'perOrder',
                'orderList': [],
                'rentDetail': {
                    'time': '',
                    'contactNo': ''
                }
            };
            this.orderForm.vendorKey = vendorkey;
            this.orderForm.vendorName = vendorname;
            this.formType = 'order';
            this.contentOverlay = true;
        },
        ChangeDeliveryDate: function(event) {
            this.orderForm.deliveryDate = Math.round(new Date(event.currentTarget.value).getTime()/1000);
        },
        OrderFormNext: function () {

        },
        // DeleteOrder: function (orderid) {
        // 	console.log(orderid);
        // 	axios.post(globalApiUrl + '/api/delete-order-draft/', {
        // 			order_id: orderid,
        // 			draft_id: globalDraftId,
        // 		})
        // 		.then(function (response) {
        // 			let responseData = JSON.parse(response.data);
        // 			console.log(responseData);
        // 			let index = app1.orderList.findIndex(function (order) {
        // 				return order.orderId == orderid
        // 			});
        // 			app1.orderList.splice(index, 1);
        // 			try {
        // 				let index = app1.errorList.findIndex(function (order) {
        // 					return order.orderId == orderid
        // 				});
        // 				app1.errorList.splice(index, 1);
        // 			} catch {
        // 				// No Catch
        // 			}
        // 			try {
        // 				let index = app1.correctList.findIndex(function (order) {
        // 					return order.orderId == orderid
        // 				});
        // 				app1.correctList.splice(index, 1);
        // 			} catch {
        // 				// No Catch
        // 			}
        // 			try {
        // 				let index = app1.warningList.findIndex(function (order) {
        // 					return order.orderId == orderid
        // 				});
        // 				app1.warningList.splice(index, 1);
        // 			} catch {
        // 				// No Catch
        // 			}
        // 		})
        // 		.catch(function (error) {
        // 			console.error(error);
        // 			window.alert('Server Error, Please Try Again!');
        // 		});

        // },

        // PickupGoogleAuto: function () {
        // 	let pickupInputField = document.getElementById("pickup-address-field");
        // 	const autocomplete = new google.maps.places.Autocomplete(pickupInputField, googleOptions);

        // 	autocomplete.addListener("place_changed", () => {
        // 		const place = autocomplete.getPlace();
        // 		console.log(place);

        // 		for (var i = 0; i < place.address_components.length; i++) {
        // 			if (place.address_components[i].types[0] == 'postal_code') {
        // 				app1.formData.pickPincode = place.address_components[i].long_name;
        // 			}
        // 		}
        // 		app1.formData.pickAddress = document.getElementById("pickup-address-field").value;
        // 	})
        // },
        // DeliveryGoogleAuto: function () {
        // 	let deliveryInputField = document.getElementById("delivery-address-field");
        // 	const autocomplete = new google.maps.places.Autocomplete(deliveryInputField, googleOptions);

        // 	autocomplete.addListener("place_changed", () => {
        // 		const place = autocomplete.getPlace();
        // 		console.log(place);

        // 		for (var i = 0; i < place.address_components.length; i++) {
        // 			if (place.address_components[i].types[0] == 'postal_code') {
        // 				app1.formData.delPincode = place.address_components[i].long_name;
        // 			}
        // 		}
        // 		app1.formData.delAddress = document.getElementById("delivery-address-field").value;
        // 	})
        // },
    },
    mounted() {
        document.getElementsByClassName('copy-button-tooltiptext')[0].classList.add('copy-button-tooltiptext-bottom');

        //this.GetVendorList();

        // axios.get(globalApiUrl + '/api/check-user-session-auth/')
        //     .then(function (response) {
        //         let responseData = JSON.parse(response.data);
        //         console.log(responseData);
        //         app1.userAuth = responseData.authVal;

        //         document.getElementById("page-load-overlay").classList.add("hide");
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //         window.alert('Server Error, Please Try Again!');
        //         document.getElementById("page-load-overlay").classList.add("hide");
        //     });
        document.getElementById("page-load-overlay").classList.add("hide");
    },
})