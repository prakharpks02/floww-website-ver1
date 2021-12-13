const tagNames = {
    'same_day': 'Same Day Delivery',
    'otp': 'OTP Verification',
    'cold_chain': 'Cold Chain',
    'intercity': 'Intercity',
    'riders': 'Riders',
    'trucks': 'Trucks',
    '100y_old': '100 Years Old',
    'mumbai': 'Mumbai',
    'bangalore': 'Bangalore',
    'patna': 'Patna',
    'delhi': 'Delhi',
    'weight0': '0 - 1 Kg',
    'weight1': '1 - 5 Kg',
    'weight2': '6 - 10 Kg',
    'weight3': '11 - 15 Kg',
    'weight4': '16 - 20 Kg',
    'weight5': '21+ Kg',
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
    'id': '30_min',
}, {
    'name': 'Tracking',
    'id': 'tracking',
}, {
    'name': 'Sanitized Fleet',
    'id': 'san_fleet',
}, {
    'name': 'Bulk Delivery',
    'id': 'bulk_del',
}, {
    'name': 'Courier',
    'id': 'courier',
}]

const weightRanges = [{
    'name': '0 - 1 Kg',
    'id': 'weight0',
}, {
    'name': '1 - 5 Kg',
    'id': 'weight1',
}, {
    'name': '6 - 10 Kg',
    'id': 'weight2',
}, {
    'name': '11 - 15 Kg',
    'id': 'weight3',
}, {
    'name': '16 - 20 Kg',
    'id': 'weight4',
}, {
    'name': '21+ Kg',
    'id': 'weight5',
}]

const rentalPlans = [{
    'name': 'For 1 hr',
    'id': 'plan1',
}, {
    'name': 'For 4 hr',
    'id': 'plan2',
}, {
    'name': 'For 8 hr',
    'id': 'plan3',
}]


const orderStatus = [{
    'name': 'When order is requested',
    'id': 'requested',
}, {
    'name': 'Accepted, and in progress (not working now)',
    'id': 'enroute',
}, {
    'name': 'Completed the order',
    'id': 'completed',
}]

const globalApiUrl = "https://backend.gofloww.co"