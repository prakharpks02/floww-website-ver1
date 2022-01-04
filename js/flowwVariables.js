const tagNames = {
    // Service Tags
    'same_day': 'Same Day Delivery',
    'otp': 'OTP Verification',
    'cold_chain': 'Cold Chain',
    'intercity': 'Intercity',
    '30min': '30 Min Delivery',
    'track': 'Order Tracking',
    'sanitize': 'Sanitized Fleet',
    'bulk_del': 'Bulk Delivery',
    'courier': 'Courier',
    'cod': 'Cash on Delivery',

    // Vehicle Type
    'bike': 'Bike (2 wheeler)',
    'tempo': 'Tempo (3/4 wheeler)',

    // Badges
    '100y_old': '100 Years Old',

    // Locations
    'mumbai': 'Mumbai',
    'bangalore': 'Bangalore',
    'patna': 'Patna',
    'delhi': 'Delhi',
    'pune': 'Pune',

    // Product Tags
    'product0': 'Delhi',
    'product1': 'Delhi',
    'product2': 'Delhi',
    'product3': 'Delhi',
    'product4': 'Delhi',
    'product5': 'Delhi',
    'product6': 'Delhi',
    'product7': 'Delhi',
    'product8': 'Delhi',
    'product9': 'Delhi',
    'product10': 'Delhi',

    // Rental Plans
    'plan0': '1 hr and 50 km',
    'plan1': 'TBD',
    'plan2': 'TBD',

    // Task Statuses
    'requested': 'Task is requested',
    'working': 'Accepted, and in progress',
    'completed': 'Completed the task',

    // Order Statuses
    'requested': 'Order is requested',
    'enroute': 'Accepted, and in progress',
    'completed': 'Completed the order',
}

const vendorCities = [{
    'name': 'Mumbai',
    'id': 'mumbai',
}, {
    'name': 'Bangalore',
    'id': 'bangalore',
}, {
    'name': 'Patna',
    'id': 'patna',
}, {
    'name': 'Delhi',
    'id': 'delhi',
}, {
    'name': 'Pune',
    'id': 'pune',
}]

const vendorTags = [{
    'name': 'Same Day Delivery',
    'id': 'same_day',
}, {
    'name': 'OTP Verification',
    'id': 'otp',
}, {
    'name': 'Cold Chain',
    'id': 'cold_chain',
}, {
    'name': 'Intercity',
    'id': 'intercity',
}, {
    'name': '30 Min Delivery',
    'id': '30min',
}, {
    'name': 'Tracking',
    'id': 'track',
}, {
    'name': 'Sanitized Fleet',
    'id': 'sanitize',
}, {
    'name': 'Bulk Delivery',
    'id': 'bulk_del',
}, {
    'name': 'Courier',
    'id': 'courier',
}, {
    'name': 'Cash on Delivery',
    'id': 'cod',
}]

const rentalPlans = [{
    'name': '1 hr and 50 km',
    'id': 'plan0',
}, {
    'name': 'TBD',
    'id': 'plan1',
}, {
    'name': 'TBD',
    'id': 'plan2',
}]


const taskStatus = [{
    'name': 'Task is requested',
    'id': 'requested',
}, {
    'name': 'Accepted, and in progress',
    'id': 'working',
}, {
    'name': 'Completed the task',
    'id': 'completed',
}]


const orderStatus = [{
    'name': 'Order is requested',
    'id': 'requested',
}, {
    'name': 'Accepted, and in progress',
    'id': 'enroute',
}, {
    'name': 'Completed the order',
    'id': 'completed',
}]

const globalApiUrl = "https://backend.gofloww.co"

const apiUrlList = [{
    'url': 'http://localhost:8000/api-token-auth/',
    'type': 'AUTH (POST)',
    'parameterNames': [{
            "name": "username",
            "type": "string"
        },
        {
            "name": "password",
            "type": "string"
        },
    ],
}, {
    'url': 'http://localhost:8000/api/v1/get-cost-estimate/',
    'type': 'POST',
    'parameterNames': [{
            "name": "vendorCode",
            "type": "string"
        },
        {
            "name": "orderType",
            "type": "string"
        },
        {
            "name": "orderList",
            "type": "list"
        },
        {
            "name": "rentalPlan",
            "type": "string"
        },
    ],
}, {
    'url': 'http://localhost:8000/api/v1/request-deliveries/',
    'type': 'POST',
    'parameterNames': [{
            "name": "vendorCode",
            "type": "string"
        },
        {
            "name": "productDescription",
            "type": "string"
        },
        {
            "name": "companyName",
            "type": "string"
        },
        {
            "name": "deliveryTimestamp",
            "type": "integer"
        },
        {
            "name": "orderType",
            "type": "string"
        },
        {
            "name": "orderList",
            "type": "list"
        },
        {
            "name": "rentalPlan",
            "type": "string"
        },
        {
            "name": "serviceList",
            "type": "list"
        },
    ],
}, {
    'url': 'http://localhost:8000/api/v1/get-task-details/',
    'type': 'GET',
    'parameterNames': [{
        "name": "taskId",
        "type": "string"
    }],
}, {
    'url': 'http://localhost:8000/api/v1/get-order-details/',
    'type': 'GET',
    'parameterNames': [{
        "name": "orderId",
        "type": "string"
    }],
}, {
    'url': 'http://localhost:8000/api/v1/edit-order-instruction/',
    'type': 'POST',
    'parameterNames': [{
        "name": "orderId",
        "type": "string"
    }, {
        "name": "instruction",
        "type": "string"
    }],
}, {
    'url': 'http://localhost:8000/api/v1/cancel-orders/',
    'type': 'POST',
    'parameterNames': [{
        "name": "orderList",
        "type": "list"
    }],
}, {
    'url': 'http://localhost:8000/api/v1/track-order/',
    'type': 'GET',
    'parameterNames': [{
        "name": "orderId",
        "type": "string"
    }],
}];