// ------------------------------------------------------JS Functions

function getCookie(name) {
    let cookieValue = null;

    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();

            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

                break;
            }
        }
    }

    return cookieValue;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


// ------------------------------------------------------Vue Starts from Here
var app1 = new Vue({
    el: '#search-page-id',
    // delimiters: ['[[', ']]'],
    data: {
        tokenInput: '',
        apiUrlList: apiUrlList,
        selectedApi: {
            'url': '',
            'type': '',
            'parameterNames': [],
        },
        formInput: [],
        statusCode: '',
        headerInfo: '',
        responseBody: '',
    },
    methods: {
        SetToken: function () {
            let authTokenStr = "Token " + this.tokenInput;
            axios.defaults.headers.common['Authorization'] = authTokenStr;

            setCookie('token', this.tokenInput, 14);

            console.log("Authorization: " + authTokenStr);
            window.alert("Your Token is Set");

            this.tokenInput = '';
        },
        SubmitForm: function () {

            if (this.selectedApi.type == 'POST') {
                // ------------------------------------ POST API CODE
                let formData = {}
                for (i = 0; i < this.selectedApi.parameterNames.length; i++) {

                    if (this.selectedApi.parameterNames[i].type == "list") {
                        formData[this.selectedApi.parameterNames[i].name] = JSON.parse(this.formInput[i]);
                    } else if (this.selectedApi.parameterNames[i].type == "integer") {
                        formData[this.selectedApi.parameterNames[i].name] = parseInt(this.formInput[i]);
                    } else {
                        formData[this.selectedApi.parameterNames[i].name] = this.formInput[i];
                    }
                };
                console.log(formData);

                axios.post(this.selectedApi.url, formData)
                    .then(function (response) {
                        let responseData = JSON.parse(response.data);
                        console.log(responseData);

                        app1.ShowServerResponse(responseData, response.status, response.headers);

                    })
                    .catch(function (error) {
                        console.error(error);
                        if (error.response) {
                            app1.ShowServerResponse(error.response.data, error.response.status, error.response.headers);
                        } else if (error.request) {
                            app1.ShowServerResponse(error.request, '-', 'No response from server');
                        } else {
                            app1.ShowServerResponse(error.message, '-', 'Could not fire the API');
                        };
                        window.alert('Server error, mostly 500..... See console log.');
                    });



            } else if (this.selectedApi.type == 'GET') {
                // ------------------------------------ GET API CODE
                let formData = {}
                for (i = 0; i < this.selectedApi.parameterNames.length; i++) {

                    if (this.selectedApi.parameterNames[i].type == "list") {
                        formData[this.selectedApi.parameterNames[i].name] = JSON.parse(this.formInput[i]);
                    } else if (this.selectedApi.parameterNames[i].type == "integer") {
                        formData[this.selectedApi.parameterNames[i].name] = parseInt(this.formInput[i]);
                    } else {
                        formData[this.selectedApi.parameterNames[i].name] = this.formInput[i];
                    }

                };

                axios.get(this.selectedApi.url, {
                        params: formData
                    })
                    .then(function (response) {
                        let responseData = JSON.parse(response.data);
                        console.log(responseData);

                        app1.ShowServerResponse(responseData, response.status, response.headers);

                    })
                    .catch(function (error) {
                        console.error(error);
                        if (error.response) {
                            app1.ShowServerResponse(error.response.data, error.response.status, error.response.headers);
                        } else if (error.request) {
                            app1.ShowServerResponse(error.request, '-', 'No response from server');
                        } else {
                            app1.ShowServerResponse(error.message, '-', 'Could not fire the API');
                        };
                        window.alert('Server error, mostly 500..... See console log.');
                    });

            } else {
                // ------------------------------------ AUTH POST API CODE
                let formData = {}
                for (i = 0; i < this.selectedApi.parameterNames.length; i++) {

                    if (this.selectedApi.parameterNames[i].type == "list") {
                        formData[this.selectedApi.parameterNames[i].name] = JSON.parse(this.formInput[i]);
                    } else if (this.selectedApi.parameterNames[i].type == "integer") {
                        formData[this.selectedApi.parameterNames[i].name] = parseInt(this.formInput[i]);
                    } else {
                        formData[this.selectedApi.parameterNames[i].name] = this.formInput[i];
                    }

                };

                axios.post(this.selectedApi.url, formData)
                    .then(function (response) {
                        let responseData = response.data;
                        console.log(responseData);

                        let authTokenStr = "Token " + responseData.token;
                        axios.defaults.headers.common['Authorization'] = authTokenStr;

                        setCookie('token', responseData.token, 14);

                        console.log("Authorization: " + authTokenStr);
                        window.alert("Your Token is Set");

                        app1.ShowServerResponse(responseData, response.status, response.headers);

                    })
                    .catch(function (error) {
                        console.error(error);
                        if (error.response) {
                            app1.ShowServerResponse(error.response.data, error.response.status, error.response.headers);
                        } else if (error.request) {
                            app1.ShowServerResponse(error.request, '-', 'No response from server');
                        } else {
                            app1.ShowServerResponse(error.message, '-', 'Could not fire the API');
                        };
                        window.alert('Server error, mostly 500..... See console log.');
                    });
            }
        },
        ShowServerResponse: function (response, statuscode, header) {
            this.statusCode = statuscode;
            this.responseBody = JSON.stringify(response, undefined, 2);
            this.headerInfo = JSON.stringify(header, undefined, 2);
        },
        ViewForm: function (elementdict) {
            this.formInput = [];

            this.selectedApi.url = elementdict.url;
            this.selectedApi.type = elementdict.type;
            this.selectedApi.parameterNames = elementdict.parameterNames;
        },
    },
    mounted() {

        let tokenVal = getCookie('token');
        if (tokenVal) {
            let authTokenStr = "Token " + tokenVal;
            axios.defaults.headers.common['Authorization'] = authTokenStr;
            window.alert('Token applied from browser Cookie. Reapply, if you doubt it to be correct.');
        }

        axios.defaults.headers.common = {
            "Content-Type": "application/json"
        }


        document.getElementById("page-load-overlay").classList.add("hide");
    },
})