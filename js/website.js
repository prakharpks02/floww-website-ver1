function VendorNotFound() {
    document.getElementById('no-vendor-found-id').classList.remove('hide');
    document.getElementById('website-page-id').classList.add('hide');
}

function AssignVariables(vardict) {
    console.log(vardict);
}


function CallApi() {
    if (queryVendorId == 'None') {
        VendorNotFound();
    } else {

        axios.get(globalApiUrl + '/api/v1/website/get-delivery-vendor-details/', {
            params: {
                vendorId: this.location, // Sending empty if no location selected 
            }
        })
            .then(function (response) {
                let responseData = JSON.parse(response.data);
                console.log(responseData);

                if (responseData.status == 'failure') {
                    VendorNotFound();
                } else {
                    AssignVariables(responseData.variable);
                }
            })
            .catch(function (error) {
                console.log(error);
                VendorNotFound();
                window.alert('Server Error, Please Try Again!');
            });
    }
}

window.onload = CallApi();