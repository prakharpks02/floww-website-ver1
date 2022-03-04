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

const cpy_name = document.querySelector(".name")
const ctt_no = document.querySelector(".number_foot")
const start_rate = document.querySelector(".price")
const headline_1 = document.querySelector(".h1")
const headline_2 = document.querySelector(".h2")
const loc = document.querySelector(".location")
const rating = document.querySelector(".rating")
const btns_popular = document.querySelector(".btns")
const fd_yr = document.querySelector(".found_yr")
const fleet_sz = document.querySelector(".fl_size")
const service_container = document.querySelector(".container2")
const base_chrge = document.querySelector(".base_charge_per")
const per_km_chrge = document.querySelector(".per_km_charge_order")
const per_kg_chrge = document.querySelector(".per_kg_charge_order")
const base_chrge_rental = document.querySelector(".base_charge_rental")
const per_hr_chrge_rental = document.querySelector(".per_hr_charge_rental")
const per_km_chrge_rental = document.querySelector(".per_km_charge_rental")
const addr = document.querySelector(".address_foot")


const cpy_name_mob = document.querySelector(".name-mob")
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



function AssignVariables(testvariable) {

    document.documentElement.style.setProperty('--primary', testvariable.primary_color);
    document.documentElement.style.setProperty('--secondary', testvariable.secondary_color);
    document.documentElement.style.setProperty('--tertiary', testvariable.tertiary_color);

    // desktop
    cpy_name.innerHTML = testvariable.company_name
    ctt_no.innerHTML = testvariable.contact_no
    start_rate.innerHTML = testvariable.delivery_starting_from
    for (let j = 0; j < testvariable.popular_tags.length; j++) {
        //let popular_temp = testvariable.popular_tags[i]
        let popular_temp2 = document.createElement(button)
        popular_temp2.innerHTML =
            `
        <button type="button" class="features">${tagNames.popular_temp}</button>          
        `
        btns_popular.appendChild(popular_temp2)
    }

    headline_1.innerHTML = testvariable.headline_text_1
    headline_2.innerHTML = testvariable.headline_text_2

    loc.innerHTML = testvariable.location
    rating.innerHTML = testvariable.ratings
    fd_yr.innerHTML = testvariable.founded_year
    fleet_sz.innerHTML = testvariable.fleet_size

    for (let i = 0; i < testvariable.services.length; i++) {
        console.log(testvariable.services[i]);
        console.log(serviceTags.findIndex(x => x.id === `${testvariable.services[i]}`))
        let service_temp = document.createElement('div')
        service_temp.innerHTML =
            `
        <div class="icon_outline">
            <i class="fa fa-3x ${serviceTags.iconClass} icon_1"></i>
        </div>
        <h2 class="service_title">${serviceTags.name}</h2>
        <p class="description">${serviceTags.description}</p>
        `
        service_container.appendChild(service_temp)
    }

    base_chrge.innerHTML = testvariable.base_charge_per_order
    per_km_chrge.innerHTML = testvariable.per_kg_charge_order
    per_kg_chrge.innerHTML = testvariable.per_kg_charge_order
    base_chrge_rental.innerHTML = testvariable.base_charge_rental
    per_hr_chrge_rental.innerHTML = testvariable.per_hr_charge_rental
    per_km_chrge_rental.innerHTML = testvariable.per_km_charge_rental
    addr.innerHTML = testvariable.address


    // mobile
    cpy_name_mob.innerHTML = testvariable.company_name
    ctt_no_mob.innerHTML = testvariable.contact_no
    start_rate_mob.innerHTML = testvariable.delivery_starting_from

    for (let j = 0; j < testvariable.popular_tags.length; j++) {
        //let popular_temp_mob = testvariable.popular_tags[i]
        let popular_temp2_mob = document.createElement(button)
        popular_temp2_mob.innerHTML =
            `
        <button type="button" class="features">${tagNames.popular_temp}</button>          
        `
        btns_popular_mob.appendChild(popular_temp2_mob)
    }

    headline_1_mob.innerHTML = testvariable.headline_text_1
    headline_2_mob.innerHTML = testvariable.headline_text_2
    loc_mob.innerHTML = testvariable.location
    rating_mob.innerHTML = testvariable.ratings
    fd_yr_mob.innerHTML = testvariable.founded_year
    fleet_sz_mob.innerHTML = testvariable.fleet_size

    for (let i = 0; i < testvariable.services.length; i++) {
        console.log(testvariable.services[i]);
        console.log(serviceTags.findIndex(x => x.id === `${testvariable.services[i]}`))
        let service_temp_mob = document.createElement('div')
        service_temp_mob.innerHTML =
            `
        <div class="icon_outline_mob">
            <i class="fa fa-2x icon_1_mob ${serviceTags.iconClass}"></i>s
        </div>
        <h2 class="service_title_mob">${serviceTags.name}</h2>
        <div class="para_mob">${serviceTags.description}</div>
        `
        service_container_mob.appendChild(service_temp_mob)
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

        axios.get('http://127.0.0.1:8000/api/v1/website/get-delivery-vendor-details/', {//globalApiUrl + 
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