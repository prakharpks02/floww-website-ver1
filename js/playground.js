const APIURLLIST = [{
    'url': 'http://locahost:8000/api/v1/get-cost-estimate/',
    'type': 'POST',
    'parameterNames': ['vendorCode', 'productDescription', 'companyName', 'deliveryTimestamp', 'orderType', 'orderList', 'rentalPlan', 'serviceList'],
}, {
    'url': 'http://locahost:8000/api/v1/get-task-details/',
    'type': 'GET',
    'parameterNames': ['taskId'],
}, {
    'url': 'http://locahost:8000/api/v1/get-cost-estimate/',
    'type': 'POST',
    'parameterNames': ['vendorCode', 'productDescription', 'companyName', 'deliveryTimestamp', 'orderType', 'orderList', 'rentalPlan', 'serviceList'],
}, {
    'url': 'http://locahost:8000/api/v1/get-cost-estimate/',
    'type': 'POST',
    'parameterNames': ['vendorCode', 'productDescription', 'companyName', 'deliveryTimestamp', 'orderType', 'orderList', 'rentalPlan', 'serviceList'],
}];


var app1 = new Vue({
    el: '#search-page-id',
    // delimiters: ['[[', ']]'],
    data: {
        apiUrlList: APIURLLIST,
        formInput: [],
        statusCode: '',
        headerInfo: '',
        responseBody: '',
    },
    methods: {
        SubmitForm: function (elementdict) {

            if (elementdict.type == 'POST') {
                let formData = {}
                for (i = 0; i < elementdict.parameterNames.length; i++) {
                    formData[elementdict.parameterNames[i]] = this.formInput[i];
                };

                axios.post(elementdict.url, formData)
                    .then(function (response) {
                        let responseData = JSON.parse(response.data);
                        console.log(responseData);

                        app1.ShowServerResponse(responseData, response.status, response.header);

                    })
                    .catch(function (error) {
                        console.error(error);
                        if(error.response){
                            app1.ShowServerResponse(error, error.response.status, error.response.header);
                        } else {
                            app1.ShowServerResponse('No response from server', '-', '-');
                        };
                        window.alert('Server error, mostly 500..... See console log.');
                    });
            } else if( elementdict.type == 'GET') {
                let formData = {}
                for (i = 0; i < elementdict.parameterNames.length; i++) {
                    formData[elementdict.parameterNames[i]] = this.formInput[i];
                };

                axios.get(elementdict.url, {params:formData})
                    .then(function (response) {
                        let responseData = JSON.parse(response.data);
                        console.log(responseData);

                        app1.ShowServerResponse(responseData, response.status, response.header);

                    })
                    .catch(function (error) {
                        console.error(error);
                        if(error.response){
                            app1.ShowServerResponse(error, error.response.status, error.response.header);
                        } else {
                            let headervar = {'header1':'21423','header':'214324'};
                            app1.ShowServerResponse('No response from server', '-', headervar);
                        };
                        window.alert('Server error, mostly 500..... See console log.');
                    });
            };

            window.alert('URL Name  -  ' + elementdict.url);
        },
        ShowServerResponse: function (response, statuscode, header) {
            this.statusCode = statuscode;
            this.responseBody = JSON.stringify(response, undefined, 2);
            this.headerInfo = JSON.stringify(header, undefined, 2);
        },
        ViewForm: function (element) {
            let apiListArray = document.getElementsByClassName('api-form-container');
            for (i = 0; i < apiListArray.length; i++) {
                apiListArray[i].classList.add('hide');
            }
            element.currentTarget.nextElementSibling.classList.remove('hide');
            this.formInput = [];
        },
    },
    mounted() {
        document.getElementById("page-load-overlay").classList.add("hide");
    },
})