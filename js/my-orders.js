var orderList = [{
    'orderId': 'ORD0000005',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'taskId': 'TAS000008',
    'deliveryVendor': 'JS Transport',
    'status': 'delivered',
}, {
    'orderId': 'ORD0000003',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'taskId': 'TAS000001',
    'deliveryVendor': 'JS Transport',
    'status': 'delivered',
}, {
    'orderId': 'ORD0000001',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'taskId': 'TAS000001',
    'deliveryVendor': 'JS Transport',
    'status': 'requested',
}, {
    'orderId': 'ORD0000001',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'taskId': 'TAS000001',
    'deliveryVendor': 'JS Transport',
    'status': 'requested',
}, {
    'orderId': 'ORD0000001',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'taskId': 'TAS000001',
    'deliveryVendor': 'JS Transport',
    'status': 'requested',
}, {
    'orderId': 'ORD0000001',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'taskId': 'TAS000001',
    'deliveryVendor': 'JS Transport',
    'status': 'delivered',
}, {
    'orderId': 'ORD0000001',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'taskId': 'TAS000001',
    'deliveryVendor': 'JS Transport',
    'status': 'delivered',
}, ];

Vue.component('order-row-component', {
    props: {
        'orderdata': Object,
    },
    delimiters: ['[[', ']]'],
    template: `
				<tr>
					<td><span class="tag" :class="{'is-success':orderdata.status=='delivered','is-warning':orderdata.status=='requested','is-danger':orderdata.status=='cancelled',}">[[orderdata.status]]</span></td>
					<td>[[orderdata.dropAddress]]</td>
					<td>[[orderdata.dropContact]]</td>
					<td>[[orderdata.taskId]]</td>
					<td>[[orderdata.deliveryVendor]]</td>
                    <td><button class="button is-primary is-light" @click="$emit('details-button')">View</button></td>
				</tr>
			`,
})


var app1 = new Vue({
    el: '#main-page-id',
    delimiters: ['[[', ']]'],
    data: {
        'orderList': [],
        'orderDetail': '',
    },
    methods: {
        ViewOrder: function (orderid, taskid) {
            console.log(orderid);

            axios.get(globalApiUrl + '/api/v1/search/get-order-details/', {
                    params: {
                        orderId: orderid,
                        taskId: taskid,
                    }
                })
                .then(function (response) {
                    let responseData = JSON.parse(response.data);
                    console.log(responseData);
                    app1.orderDetail = responseData;
                    let placedOnDate = new Date(parseInt(responseData.placedOn + '000')).toLocaleDateString();
                    console.log(placedOnDate);
                    app1.orderDetail.placedOn = placedOnDate;
                })
                .catch(function (error) {
                    console.log(error);
                    window.alert('Server Error, please try again later.');
                });
        },
        DownloadBill: function (taskid) {
            console.log(taskid);
            window.alert("Coming Soon");
        },
    },
    mounted() {
        axios.get(globalApiUrl + '/api/v1/search/get-order-list/')
            .then(function (response) {
                let responseData = JSON.parse(response.data);
                console.log(responseData);
                app1.orderList = responseData;
            })
            .catch(function (error) {
                console.log(error);
                if (error.response) {
                    if (error.response.status === 403 || error.response.status === 401) {
                        window.open("https://backend.gofloww.co/login/", '_blank');
                    } else {
                        window.alert('Server Error, Please Try Again!');
                    }
                } else {
                    window.alert('Server Error, please try again later');
                }
            });
    },
})