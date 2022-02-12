var vendorListConst = [{
    'name': 'JS Transport asjfkjnsdkfjnbskjdfnkjsdnfgjknskj',
    'startPrice': 'N/A',
    'rating': '4.1',
    'contactNo': '+91 9999955555',
    'vendorCode': 'VEN10000',
    'year': '1941',
    'location': 'Juhu, Mumbai, sdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbfsdbfmnjsdbf',
    'size': '30-50',
    'fleetType': 'riders',
    'services': ['otp', 'cold_chain', 'same_day', 'intercity'],
    'badges': ['100y_old'],
}, {
    'name': 'JS Transport',
    'startPrice': '57',
    'rating': '4.1',
    'contactNo': '+91 9999955555',
    'vendorCode': 'VEN10000',
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
    'vendorCode': 'VEN10000',
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
    'vendorCode': 'VEN10000',
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
    'vendorCode': 'VEN10000',
    'year': '1941',
    'location': 'Juhu, Mumbai',
    'size': '30-50',
    'fleetType': 'riders',
    'services': ['otp', 'cold_chain', 'same_day', 'intercity'],
    'badges': ['100y_old'],
}];

// --------------------------------------- Fixed Functions For Page responsivness

function CopyButton(element) {
    if(app1.userAuth) {
        navigator.clipboard.writeText(element.children[1].innerHTML);
        element.children[0].innerHTML = "Copied";
    } else {
        window.alert('Please Login to Get Vendor Code');
    }
    
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

function ToggleViewList(element) {
    document.getElementById('mobile-per-order-list-container').classList.toggle('hide');
    if (element.innerHTML == "View List") {
        element.innerHTML = "Close List";
    } else {
        element.innerHTML = "View List";
    }
}




// ------------------------------------------------------------ Vue Starts


Vue.component('vendor-card-component', {
    props: {
        'vendordata': Object,
        'tagnames': Object,
        'userauth': Boolean,
    },
    // delimiters: ['[[', ']]'],
    template: `
            <div class="card-container-outside box">


                <div class="desktop-view-toggle card-container has-text-centered">
                    <div class="card-main-container columns is-vcentered">
                        <div class="column is-4">
                            <div class="card-element-container">
                                <span class="text-width-limiter">{{vendordata.name}}</span>
                            </div>
                            <div class="card-element-container starting-from-box">
                                <span class="tag is-warning" v-if="vendordata.startPrice!='N/A'">starting ₹{{vendordata.startPrice}}</span>
                                <span class="tag is-warning" v-if="vendordata.startPrice =='N/A'"> Only Rental</span>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card-element-container rating-container">
                                <span><i class="fa fa-star"></i> {{vendordata.rating}}/5</span>
                            </div>
                            <div class="card-element-container vendor-number-container">
                                <a :href="'tel:'+vendordata.contactNo" v-if="userauth">{{vendordata.contactNo}}</a>
                                <a href="https://backend.gofloww.co/login/" target="_blank" v-if="!userauth">Login to Contact</a>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card-element-container">
                                <div class="copy-button-tooltip">
                                    <a onclick="CopyButton(this)"
                                        onmouseout="CleanCopyButton(this)" class="vendor-code-container">
                                        <span class="copy-button-tooltiptext">Click to Copy</span>Get Vendor Code
                                        <span style="display: none;">{{vendordata.vendorCode}}</span>
                                    </a>
                                </div>
                            </div>
                            <div class="card-element-container vendor-number-container">
                                <a href="https://gofloww.co/api-doc" target="_blank"><span>API Docs</span></a>
                            </div>
                        </div>

                        <div class="column has-text-right is-4">
                            <div class="card-element-container">
                                <a onclick="window.alert('Coming Soon')" class="website-link-button"><span>Open Website</span></a>
                            </div>
                            <div class="card-element-container">
                                <a class="website-link-button" @click="$emit('request-delivery')"><span>Request Delivery</span></a>
                            </div>
                        </div>
                    </div>

                    <div class="card-second-container">

                        <div class="card-view-more-container">
                            <a class="card-view-more-button" onclick="ToggleCardView(this)"><span>View More</span></a>
                        </div>

                        <div class="card-expand-container columns is-multiline is-gapless">

                            <div class="column is-full columns">
                                <div class="column">
                                    <span>Founded in {{vendordata.year}}</span>
                                </div>
                                <div class="column is-5">
                                    <span class="text-width-limiter">{{vendordata.location}}</span>
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

                <div class="mobile-view-toggle card-container">
                    <div class="card-main-container">
                        <p><span class="vendor-name-container text-width-limiter">{{vendordata.name}}</span>    <span class="rating-container"><i class="fa fa-star"></i> {{vendordata.rating}}/5</span></p>
                        
                        <p class="starting-from-box">
                            <span class="tag is-warning" v-if="vendordata.startPrice!='N/A'">starting ₹{{vendordata.startPrice}}</span>
                            <span class="tag is-warning" v-if="vendordata.startPrice =='N/A'"> Only Rental</span>
                        </p>

                        <br>

                        <div class="columns is-mobile is-gapless" style="margin-bottom: 7px;">
                            <div class="column is-5">
                                <a onclick="window.alert('Coming Soon')" class="website-link-button"><span>Open Website</span></a>
                            </div>
                            <div class="column is-7">
                                <a class="website-link-button" @click="$emit('request-delivery')"><span>Request Delivery</span></a>
                            </div>
                        </div>

                        <div class="columns is-mobile is-gapless" style="margin-bottom: 5px;">
                            <div class="column">
                                <div class="copy-button-tooltip">
                                    <a onclick="CopyButton(this)" onmouseout="CleanCopyButton(this)"
                                        class="vendor-code-container">
                                        <span class="copy-button-tooltiptext">Click to Copy</span>Get Vendor Code
                                        <span style="display: none;">{{vendordata.vendorCode}}</span>
                                    </a>
                                </div>
                            </div>
                            <div class="column vendor-number-container">
                                <a href="https://gofloww.co/api-doc" target="_blank"><span>API Docs</span></a>
                            </div>
                        </div>

                        <p class="vendor-number-container">
                            <a :href="'tel:'+vendordata.contactNo" v-if="userauth">{{vendordata.contactNo}}</a>
                            <a href="https://backend.gofloww.co/login/" target="_blank" v-if="!userauth">Login to Contact</a>
                        </p>

                    </div>

                    <div class="card-second-container">

                        <div class="card-view-more-container">
                            <a class="card-view-more-button" onclick="ToggleCardView(this)">
                                <span>View More</span></a>
                        </div>

                        <div class="card-expand-container columns is-multiline is-gapless">

                            <div class="column is-full columns is-mobile">
                                <div class="column">
                                    <span>{{vendordata.year}}</span>
                                </div>
                                <div class="column is-5">
                                    <span class="text-width-limiter">{{vendordata.location}}</span>
                                </div>
                                <div class="column">
                                    <span>{{vendordata.size}} {{tagnames[vendordata.fleetType]}}</span>
                                </div>
                            </div>
                            <div class="column is-full columns is-gapless has-text-left"
                                style="margin-bottom: 5px;">
                                <div class="column is-2">
                                    <span>Services :</span>
                                </div>
                                <div class="column">
                                    <ul class="services-list-container">
                                        <li v-for="service in vendordata.services" class="tag is-small">
                                            {{tagnames[service]}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="column is-full columns is-gapless has-text-left"
                                style="margin-bottom: 5px;">
                                <div class="column is-2">
                                    <span>Badges :</span>
                                </div>
                                <div class="column">
                                    <ul class="services-list-container">
                                        <li v-for="service in vendordata.badges" class="tag is-small">
                                            {{tagnames[service]}}</li>
                                    </ul>
                                </div>
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
        'filterTags': filterTags,
        'serviceTags': serviceTags,
        'rentalPlans': rentalPlans,
        'productTags': productTags,

        'vendorList': [],
        'location': 'mumbai',
        'tagSelected': 'empty',

        'userAuth': false,
        'userContactNo': '',

        'contentOverlay': false,
        'searchLoading': false,
        'formType': '',

        'phoneForm': {
            'code': '',
            'number': '',
            'otp': '',
        },
        'emailForm': {
            'email': '',
            'companyName':'',
            'error': 'none'
        },
        'orderForm': {
            'vendorCode': '',
            'vendorName': 'JS Transport',
            'companyName': '',
            'productType': '',
            'deliveryDate': '',
            'orderType': 'perOrder',
            'orderList': [],
            'rentalPlan': 'plan0',
            'serviceList': [],
        },
        'pickupCheckbox': false,
        'orderTempElement': {
            'pickup': '',
            'pickupPincode': '',
            'pickupNo': '',
            'drop': '',
            'dropPincode': '',
            'dropNo': '',
            'weight': '',
            'instruction': '',
        },
        'selectedVendorService': [],
        'orderFormMobile': {
            'formStatus': 'advance',
            'error1': false,
            'error2': false,
        },
    },
    methods: {
        GetVendorList: function () {
            this.searchLoading = true

            axios.get(globalApiUrl + '/api/v1/search/get-3pl-list/', {
                    params: {
                        location: this.location, // Sending empty if no location selected 
                        tagSelected: this.tagSelected, // Sending empty if no tag selected
                    }
                })
                .then(function (response) {
                    let responseData = JSON.parse(response.data);
                    console.log(responseData);

                    app1.vendorList = responseData.data;

                    app1.searchLoading = false;


                    return responseData.data.length;
                })
                .then(lengthvar => {
                    if (lengthvar != 0) {
                        document.getElementsByClassName('copy-button-tooltiptext')[0].classList.add('copy-button-tooltiptext-bottom');
                    }
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
        LogoutButton: function () {
            document.cookie = 'floww-token' + '=;expires=' + new Date(1970, 0, 1).toUTCString() + '; path=/; domain=.gofloww.co;'
            window.location.reload();
        },
        GetApiKey: function () {
            axios.post(globalApiUrl + '/api/v1/auth/send-api-key/')
                .then(function (response) {
                    let responseData = JSON.parse(response.data);
                    console.log(responseData);

                    if (responseData.status == 'success') {

                        if (responseData.emailStatus) {
                            window.alert('API Key Sent on your email');
                        } else {
                            window.alert('Email Could Not be sent, Please copy your API key from here \n' + responseData.apiKey);
                        }

                    } else {
                        app1.emailForm.email = '';
                        app1.emailForm.companyName = '';
                        app1.emailForm.error = 'none';
                        app1.formType = 'email';
                        app1.contentOverlay = true;
                    }

                })
                .catch(function (error) {
                    console.error(error);
                    if (error.response) {
                        if (error.response.status === 403) {
                            window.open("https://backend.gofloww.co/login/", '_blank');
                        } else {
                            window.alert('Server Error, Please Try Again!');
                        }
                    } else {
                        window.alert('Server Error, please try again later');
                    }

                });
        },
        SubmitEmail: function () {

            if(this.emailForm.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && this.emailForm.companyName != '') {

                axios.post(globalApiUrl + '/api/v1/auth/submit-user-email/', {
                        email: this.emailForm.email,
                        companyName: this.emailForm.companyName,
                    })
                    .then(function (response) {
                        let responseData = JSON.parse(response.data);
                        console.log(responseData.status);

                        if (responseData.status == 'success') {
                            app1.GetApiKey();
                            app1.emailForm.error = 'none';
                            app1.CloseOverlay();
                        } else {
                            app1.emailForm.error = responseData.message;
                        };
                    })
                    .catch(function (error) {
                        app1.emailForm.error = 'Server error, please try again later or send email to info@gofloww.co';
                        window.alert('Server Error, Please Try Again!');
                    });

            } else {
                this.emailForm.error='Please fill all the fields correctly';
            }
            
        },
        RequestDelivery: function (vendorcode, vendorname) {
            this.orderForm = {
                'vendorCode': '',
                'vendorName': '',
                'companyName': '',
                'productType': '',
                'deliveryDate': '',
                'orderType': 'perOrder',
                'orderList': [],
                'rentalPlan': 'plan0',
                'serviceList': [],
            };
            this.orderFormMobile = {
                'formStatus': 'base',
                'error1': false,
                'error2': false,
            };
            this.orderForm.vendorCode = vendorcode;
            this.orderForm.vendorName = vendorname;
            this.formType = 'order';
            this.contentOverlay = true;

        },
        ChangeDeliveryDate: function (event) {
            this.orderForm.deliveryDate = Math.round(new Date(event.currentTarget.value).getTime() / 1000);
            console.log(this.orderForm.deliveryDate);
        },
        OrderFormMobileNext: function () {
            if (this.orderForm.companyName == '' || this.orderForm.productType == '' || this.orderForm.deliveryDate == '') {
                this.orderFormMobile.error1 = true;
            } else {
                this.orderFormMobile.formStatus = 'advance';
            };
        },
        AddOrder: function () {

            if (this.orderTempElement.pickup == '' || this.orderTempElement.pickupNo == '' || this.orderTempElement.drop == '' || this.orderTempElement.dropNo == '' || this.orderTempElement.weight == '') {
                window.alert('All fields except Instruction, are mandatory.')
            } else {
                let orderTempElementVar = JSON.parse(JSON.stringify(this.orderTempElement));
                this.orderForm.orderList.push(orderTempElementVar);

                if (!this.pickupCheckbox) {
                    this.orderTempElement.pickup = '';
                    this.orderTempElement.pickupPincode = '';
                    this.orderTempElement.pickupNo = '';
                }
                this.orderTempElement.drop = '';
                this.orderTempElement.dropPincode = '';
                this.orderTempElement.dropNo = '';
                this.orderTempElement.weight = '';
                this.orderTempElement.instruction = '';
            }


        },
        SubmitOrderForm: function () {
            if (this.orderForm.productType == '') {
                this.orderForm.productType = 'product0';
            }

            if (this.orderForm.companyName == '' || this.orderForm.deliveryDate == '') {
                window.alert("Please Add your company name and select delivery date");
            } else if (this.userAuth) {
                this.LoginFunction();
            } else {

                if (this.orderForm.orderType == 'perOrder' && this.orderForm.orderList.length == 0) {
                    window.alert("Please add atleast 1 order, or choose rental.");
                } else {
                    axios.post(globalApiUrl + '/api/v1/search/request-deliveries/', {
                            vendorCode: this.orderForm.vendorCode,
                            productDescription: this.orderForm.productType,
                            companyName: this.orderForm.companyName,
                            deliveryDate: this.orderForm.deliveryDate,
                            orderType: this.orderForm.orderType,
                            rentalPlan: this.orderForm.rentalPlan,
                            orderList: this.orderForm.orderList,
                            serviceList: this.orderForm.serviceList,
                        })
                        .then(function (response) {
                            let responseData = JSON.parse(response.data);
                            console.log(responseData.status);

                            if (responseData.status == 'success') {
                                window.alert(responseData.message);
                                app1.CloseOverlay();
                            } else {
                                window.alert(responseData.message);
                            };
                        })
                        .catch(function (error) {
                            if (error.response.status === 403) {
                                app1.LoginFunction();
                            } else {
                                window.alert('Server Error, Please Try Again!');
                            }
                        });
                }

            }

        },
        GetCostEstimate: function () {
            axios.post(globalApiUrl + '/api/v1/search/get-cost-estimate/', {
                    vendorCode: this.orderForm.vendorCode,
                    orderType: this.orderForm.orderType,
                    rentalPlan: this.orderForm.rentalPlan,
                    orderList: this.orderForm.orderList,
                })
                .then(function (response) {
                    let responseData = JSON.parse(response.data);
                    console.log(responseData);

                    if (responseData.status == 'success') {
                        window.alert('The Cost is - ₹ ' + responseData.message);
                    } else {
                        window.alert(responseData.message);
                    };
                })
                .catch(function (error) {
                    window.alert('Server Error, Please Try Again!');
                });
        },
        AddServiceTag: function (formtype) {
            let serviceVal = '';
            if (formtype == 'mobile') {
                serviceVal = document.getElementById('request-service-tag-mobile').value;
            } else {
                serviceVal = document.getElementById('request-service-tag-desktop').value;
            }

            console.log(serviceVal);
            this.orderForm.serviceList.push(serviceVal);

            let selectedServiceList = ''
            for (i = 0; i < this.orderForm.serviceList.length; i++) {
                selectedServiceList = selectedServiceList + this.orderForm.serviceList[i] + ' | ';
            }
            window.alert('Selected Service Codes are - ' + selectedServiceList);
        },
        LoginFunction: function () {
            window.open("https://backend.gofloww.co/login/", '_blank');
            window.alert('Please refresh this page after login.');
        },
    },
    async mounted() {
        await this.GetVendorList();

        axios.get(globalApiUrl + '/api/v1/auth/check-user-token-auth/')
            .then(function (response) {
                let responseData = JSON.parse(response.data);
                console.log(responseData);
                app1.userAuth = responseData.authVal;
                app1.userContactNo = responseData.contactNo;

                document.getElementById("page-load-overlay").classList.add("hide");
            })
            .catch(function (error) {
                console.log(error);
                app1.userAuth = false;
                window.alert('Auth check failed. Please login again');
                document.getElementById("page-load-overlay").classList.add("hide");
            });
    },
})