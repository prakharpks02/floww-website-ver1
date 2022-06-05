var orderList = [{
    'orderId': 'ORD0000005',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'pickAddress': 'Andheri East, Mumbai',
    'pickContact': '9910530300',
    'weight': '20',
    'instruction': 'Leave near watchman',
    'status': 'delivered',
}, {
    'orderId': 'ORD0000005',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'pickAddress': 'Andheri East, Mumbai',
    'pickContact': '9910530300',
    'weight': '20',
    'instruction': 'Leave near watchman',
    'status': 'delivered',
}, {
    'orderId': 'ORD0000005',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'pickAddress': 'Andheri East, Mumbai',
    'pickContact': '9910530300',
    'weight': '20',
    'instruction': 'Leave near watchman',
    'status': 'delivered',
}, {
    'orderId': 'ORD0000005',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'pickAddress': 'Andheri East, Mumbai',
    'pickContact': '9910530300',
    'weight': '20',
    'instruction': 'Leave near watchman',
    'status': 'delivered',
}, {
    'orderId': 'ORD0000005',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'pickAddress': 'Andheri East, Mumbai',
    'pickContact': '9910530300',
    'weight': '20',
    'instruction': 'Leave near watchman',
    'status': 'delivered',
}, {
    'orderId': 'ORD0000005',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'pickAddress': 'Andheri East, Mumbai',
    'pickContact': '9910530300',
    'weight': '20',
    'instruction': 'Leave near watchman',
    'status': 'delivered',
}, {
    'orderId': 'ORD0000005',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'pickAddress': 'Andheri East, Mumbai',
    'pickContact': '9910530300',
    'weight': '20',
    'instruction': 'Leave near watchman',
    'status': 'delivered',
}, {
    'orderId': 'ORD0000005',
    'dropAddress': 'Andheri East, Mumbai',
    'dropContact': '9910530300',
    'pickAddress': 'Andheri East, Mumbai',
    'pickContact': '9910530300',
    'weight': '20',
    'instruction': 'Leave near watchman',
    'status': 'delivered',
},
];

Vue.component('order-row-component', {
    props: {
        'orderdata': Object,
    },
    delimiters: ['[[', ']]'],
    template: `
				<div class="order-list-item box columns is-mobile is-vcentered">
					<div class="column">
                        <p class="help">[[orderdata.orderId]]</p>
                        <p class="">[[orderdata.pickupContactNo]]</p>
                    </div>
                    <div class="column has-text-right">
                        <span class="tag">[[orderdata.status]]</span>
                        <button class="button is-small"  @click="$emit('view-order')">View Order</button>
                    </div>
				</div>
			`,
})


var app1 = new Vue({
    el: '#main-page-id',
    data: {
        'orderList': orderList,
        'orderDetail': {},
        'viewOrderStatus': false,
        'currentIndex': 0,
    },
    methods: {
        ViewOrder: function (orderid, indexno) {
            console.log(orderid);
            this.orderDetail = this.orderList[indexno];
            this.viewOrderStatus = true;
            this.currentIndex = indexno;
        },
        DownloadBill: function (taskid) {
            console.log(taskid);
            window.open("https://backend.gofloww.co/api/v1/documents/receipt/" + taskid, '_blank');
        },
        OrderDelivered: function (orderid) {
            console.log(orderid);
            axios.post(globalApiUrl + '/api/v1/search/update-order-status/', {
                orderId: orderid,
                status: 'delivered',
            })
                .then(function (response) {
                    let responseData = JSON.parse(response.data);
                    console.log(responseData);
                    app1.orderDetail.status = "delivered";
                    app1.orderList[app1.currentIndex].status = "delivered";
                })
                .catch(function (error) {
                    console.log(error);
                    window.alert('Server Error, Please Try Again!');
                });
        },
    },
    mounted() {
        axios.get(globalApiUrl + '/api/v1/3pl-form/get-delivery-vendor-order-list/', {
            params: {
                vendorId: queryVendorId,
            }
        })
            .then(function (response) {
                let responseData = JSON.parse(response.data);
                console.log(responseData);
                app1.orderList = responseData;
            })
            .catch(function (error) {
                console.log(error);
                window.alert('Server Error, please try again later');
            });
    },
})