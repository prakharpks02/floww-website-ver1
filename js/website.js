let display = document.querySelector(".verified")
let collapse = document.querySelector(".option-list-mob")
let openlinks = document.querySelector(".nav-toggle")
let close1 = document.querySelector(".fa-times")

// loader

let loader = document.querySelector(".loader")
let elements = document.getElementsByClassName("section");

for (i = 0; i < elements.length; i++) {
    elements[i].classList.add('hide');
}

setTimeout(loaderFunc, 2000);


function loaderFunc() {
    loader.classList.add("hide")
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.remove('hide');
    }
}

// end of loader

// Adding Navigation Button Actions

collapse.classList.add("hide");

openlinks.addEventListener("click", function () {
    collapse.classList.remove("hide")
})

close1.addEventListener('click', function () {
    close1.parentElement.parentElement.classList.add("hide");
})


// Page Details Variables

var vendor_contact_no_global = '';

const logo_url = document.querySelector(".logo")
const logo_url_footer = document.querySelector(".foot_img")
const cpy_name = document.querySelector(".name")
const cpy_name_footer = document.querySelector(".name_foot")
const cpy_fleet_image = document.querySelector(".scooter")
const cpy_detail_image = document.querySelector(".db_withbox_img")
const ctt_no = document.querySelector(".number_foot")
const start_rate = document.querySelector(".price")
const headline_1 = document.querySelector(".h1")
const headline_2 = document.querySelector(".h2")
const loc = document.querySelector(".location")
const rating = document.querySelector(".rating")
const btns_popular = document.querySelector(".btns")
const fd_yr = document.querySelector(".found_yr")
const fleet_sz = document.querySelector(".fl_size")
const service_container = document.querySelector(".container2_service")
const base_chrge = document.querySelector(".base_charge_per")
const per_km_chrge = document.querySelector(".per_km_charge_order")
const per_kg_chrge = document.querySelector(".per_kg_charge_order")
const base_chrge_rental = document.querySelector(".base_charge_rental")
const per_hr_chrge_rental = document.querySelector(".per_hr_charge_rental")
const per_km_chrge_rental = document.querySelector(".per_km_charge_rental")
const addr = document.querySelector(".address_foot")


const logo_url_mob = document.querySelector(".logo-mob")
const logo_url_footer_mob = document.querySelector(".foot_img_mob")
const cpy_name_mob = document.querySelector(".name-mob")
const cpy_name_footer_mob = document.querySelector(".name_foot_mob")
const cpy_fleet_image_mob = document.querySelector(".scooter_mob")
const cpy_detail_image_mob = document.querySelector(".db_withbox_img_mob")
const ctt_no_mob = document.querySelector(".number_foot_mob")
const start_rate_mob = document.querySelector(".cost_mob")
const btns_popular_mob = document.querySelector(".btns_mob")
const headline_1_mob = document.querySelector(".h1_mob")
const headline_2_mob = document.querySelector(".h2_mob")
const loc_mob = document.querySelector(".location_mob")
const rating_mob = document.querySelector(".rating_mob")
const fd_yr_mob = document.querySelector(".found_yr_mob")
const fleet_sz_mob = document.querySelector(".fl_size_mob")
const service_container_mob = document.querySelector(".container2_mob")
const base_chrge_mob = document.querySelector(".base_charge_per_mob")
const per_km_chrge_mob = document.querySelector(".per_km_charge_order_mob")
const per_kg_chrge_mob = document.querySelector(".per_kg_charge_order_mob")
const base_chrge_rental_mob = document.querySelector(".base_charge_rental_mob")
const per_hr_chrge_rental_mob = document.querySelector(".per_hr_charge_rental_mob")
const per_km_chrge_rental_mob = document.querySelector(".per_km_charge_rental_mob")



// --------------------------------------- Major Functions
function VendorNotFound() {
    document.getElementById('no-vendor-found-id').classList.remove('hide');
    document.getElementById('website-page-id').classList.add('hide');
}


function ContactMeButton() {
    if (vendor_contact_no_global == 'None') {
        window.open("https://backend.gofloww.co/login/", "_blank");
    } else {
        window.open('tel:' + vendor_contact_no_global);
    };
}

function OrderNowButton() {
    window.open('https://gofloww.co/search?vendor-id='+queryVendorId, '_blank');
}


function AssignVariables(testvariable) {

    document.documentElement.style.setProperty('--primary', testvariable.primary_color);
    document.documentElement.style.setProperty('--secondary', testvariable.secondary_color);
    document.documentElement.style.setProperty('--tertiary', testvariable.tertiary_color);

    if (testvariable.delivery_starting_from == 'N/A') {
        start_rate.innerHTML = 'Rental Only';
        start_rate_mob.innerHTML = 'Rental Only';
    } else {
        start_rate.innerHTML = '₹ ' + testvariable.delivery_starting_from;
        start_rate_mob.innerHTML = '₹ ' + testvariable.delivery_starting_from;
    }

    if(testvariable.base_charge_rental=='N/A'){
        testvariable.base_charge_rental = '-';
    }
    if(testvariable.per_hr_charge_rental=='N/A'){
        testvariable.per_hr_charge_rental = '-';
    }
    if(testvariable.per_km_charge_rental=='N/A'){
        testvariable.per_km_charge_rental = '-';
    }
    if(testvariable.base_charge_per_order=='N/A'){
        testvariable.base_charge_per_order = '-';
    }
    if(testvariable.per_kg_charge_order=='N/A'){
        testvariable.per_kg_charge_order = '-';
    }
    if(testvariable.per_kg_charge_order=='N/A'){
        testvariable.per_kg_charge_order = '-';
    }

    // desktop
    logo_url.src = testvariable.logo_url
    logo_url_footer.src = testvariable.logo_url
    cpy_name.innerHTML = testvariable.company_name
    cpy_name_footer.innerHTML = testvariable.company_name

    cpy_fleet_image.src = fleetImageVar[testvariable.fleet_type]
    cpy_detail_image.src = detailImageVar[testvariable.fleet_type]


    for (let j = 0; j < testvariable.popular_tags.length; j++) {
        let popular_temp = testvariable.popular_tags[j]
        let popular_temp2 = document.createElement("button")
        popular_temp2.classList.add('features');
        popular_temp2.innerHTML = tagNames[popular_temp];
        btns_popular.appendChild(popular_temp2);
    }

    headline_1.innerHTML = testvariable.headline_text_1
    headline_2.innerHTML = testvariable.headline_text_2

    loc.innerHTML = testvariable.location
    rating.innerHTML = testvariable.ratings
    fd_yr.innerHTML = testvariable.founded_year
    fleet_sz.innerHTML = testvariable.fleet_size

    for (let i = 0; i < testvariable.services.length; i++) {
        let serviceIndex = serviceTags.findIndex(x => x.id === `${testvariable.services[i]}`);
        let service_temp = document.createElement('div');
        service_temp.classList.add('service_1');
        service_temp.innerHTML =
            `
        <div class="icon_outline">
            <i class="fa fa-3x ${serviceTags[serviceIndex].iconClass} icon_1"></i>
        </div>
        <h2 class="service_title">${serviceTags[serviceIndex].name}</h2>
        <p class="description">${serviceTags[serviceIndex].description}</p>
        `;
        service_container.appendChild(service_temp);
    }

    base_chrge.innerHTML = testvariable.base_charge_per_order
    per_km_chrge.innerHTML = testvariable.per_kg_charge_order
    per_kg_chrge.innerHTML = testvariable.per_kg_charge_order
    base_chrge_rental.innerHTML = testvariable.base_charge_rental
    per_hr_chrge_rental.innerHTML = testvariable.per_hr_charge_rental
    per_km_chrge_rental.innerHTML = testvariable.per_km_charge_rental
    addr.innerHTML = testvariable.address


    // mobile
    logo_url_mob.src = testvariable.logo_url
    logo_url_footer_mob.src = testvariable.logo_url
    cpy_name_mob.innerHTML = testvariable.company_name
    cpy_name_footer_mob.innerHTML = testvariable.company_name

    cpy_fleet_image_mob.src = fleetImageVar[testvariable.fleet_type]
    cpy_detail_image_mob.src = detailImageVar[testvariable.fleet_type]

    for (let j = 0; j < testvariable.popular_tags.length; j++) {
        let popular_temp_mob = testvariable.popular_tags[j]
        let popular_temp2_mob = document.createElement("button")
        popular_temp2_mob.classList.add('features');
        popular_temp2_mob.innerHTML = tagNames[popular_temp_mob];
        btns_popular_mob.appendChild(popular_temp2_mob);
    }

    headline_1_mob.innerHTML = testvariable.headline_text_1
    headline_2_mob.innerHTML = testvariable.headline_text_2
    loc_mob.innerHTML = testvariable.location
    rating_mob.innerHTML = testvariable.ratings
    fd_yr_mob.innerHTML = testvariable.founded_year
    fleet_sz_mob.innerHTML = testvariable.fleet_size

    for (let i = 0; i < testvariable.services.length; i++) {
        let serviceIndex = serviceTags.findIndex(x => x.id === `${testvariable.services[i]}`);
        let service_temp_mob = document.createElement('div');
        service_temp_mob.classList.add('service_1_mob');
        service_temp_mob.innerHTML =
            `
        <div class="icon_outline_mob">
            <i class="fa fa-2x icon_1_mob ${serviceTags[serviceIndex].iconClass}"></i>
        </div>
        <h2 class="service_title_mob">${serviceTags[serviceIndex].name}</h2>
        <div class="para_mob">${serviceTags[serviceIndex].description}</div>
        `;
        service_container_mob.appendChild(service_temp_mob);
    }

    base_chrge_mob.innerHTML = testvariable.base_charge_per_order
    per_km_chrge_mob.innerHTML = testvariable.per_kg_charge_order
    per_kg_chrge_mob.innerHTML = testvariable.per_kg_charge_order
    base_chrge_rental_mob.innerHTML = testvariable.base_charge_rental
    per_hr_chrge_rental_mob.innerHTML = testvariable.per_hr_charge_rental
    per_km_chrge_rental_mob.innerHTML = testvariable.per_km_charge_rental


}



function CallApi() {
    if (queryVendorId == 'None') {
        VendorNotFound();
    } else {

        axios.get(globalApiUrl + '/api/v1/website/get-delivery-vendor-details/', {
                params: {
                    vendorId: queryVendorId,
                }
            })
            .then(function (response) {
                let responseData = JSON.parse(response.data);
                console.log(responseData);

                if (responseData.status == 'failure') {
                    VendorNotFound();
                } else {
                    vendor_contact_no_global = responseData.variable.contact_no;

                    if (vendor_contact_no_global == 'None') {
                        ctt_no.innerHTML = `<a href="https://backend.gofloww.co/login/" class="refer_foot" target="_blank">Login to Contact</a>`;
                        ctt_no_mob.innerHTML = `<a href="https://backend.gofloww.co/login/" class="refer_foot_mob_2" target="_blank">Login to Contact</a>`;
                    } else {
                        ctt_no.innerHTML = vendor_contact_no_global;
                        ctt_no_mob.innerHTML = vendor_contact_no_global;
                    }

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