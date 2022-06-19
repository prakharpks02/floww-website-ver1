// --------------------------------------- Major Functions

function VendorNotFound() {
    document.getElementById('no-vendor-found-id').classList.remove('hide');
    document.getElementById('search-page-id').classList.add('hide');
}

// ------------------------------------------------------------ Vue Starts


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

        'searchLoading': false,

        'orderForm': {
            'contactNo': '',
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
            'formStatus': 'base',
            'error1': false,
            'error2': false,
        },
    },
    methods: {
        ChangeDeliveryDate: function (event) {
            this.orderForm.deliveryDate = Math.round(new Date(event.currentTarget.value).getTime() / 1000);
            console.log(this.orderForm.deliveryDate);
        },
        OrderFormMobileNext: function () {
            if (this.orderForm.companyName == '' || this.orderForm.productType == '' || this.orderForm.deliveryDate == '' || this.orderForm.contactNo == '') {
                this.orderFormMobile.error1 = true;
            } else {
                this.orderFormMobile.formStatus = 'advance';
            };
        },
        RequestDelivery: function (vendorcode, vendorname) {
            this.orderForm.vendorCode = vendorcode;
            this.orderForm.vendorName = vendorname;
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

            if (this.orderForm.companyName == '' || this.orderForm.deliveryDate == '' || this.orderForm.contactNo == '') {
                window.alert("Please Add your Company name, Contact No. and select delivery date");
            } else {

                if (this.orderForm.orderType == 'perOrder' && this.orderForm.orderList.length == 0) {
                    window.alert("Please add atleast 1 order, or choose rental.");
                } else {
                    axios.post(globalApiUrl + '/api/v1/search/request-deliveries-guest/', {
                            contactNo: this.orderForm.contactNo,
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
                            } else {
                                window.alert(responseData.message);
                            };
                        })
                        .catch(function (error) {
                            window.alert('Server Error, Please Try Again!');
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
        CheckQueryParam: function () {
            vendorFormValueReturn = GetQueryParams('vendor-id');

            if (vendorFormValueReturn != 'None') {

                axios.get(globalApiUrl + '/api/v1/search/get-vendor-code/', {
                        params: {
                            vendorId: vendorFormValueReturn,
                        }
                    })
                    .then(function (response) {
                        let responseData = JSON.parse(response.data);
                        console.log(responseData);

                        if(Object.keys(responseData).length == 0) {
                            VendorNotFound();
                        } else {
                            app1.RequestDelivery(responseData.vendorCode, responseData.vendorName);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        VendorNotFound();
                    });
            } else {
                VendorNotFound();
            }
        }
    },
    async mounted() {

        //await this.CheckQueryParam();

        axios.get(globalApiUrl + '/api/v1/auth/check-user-token-auth/')
            .then(function (response) {
                let responseData = JSON.parse(response.data);
                console.log(responseData);
                if(responseData.authVal) {
                    app1.orderForm.ContactNo = responseData.contactNo;
                } else {
                    app1.orderForm.ContactNo = '';
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
})