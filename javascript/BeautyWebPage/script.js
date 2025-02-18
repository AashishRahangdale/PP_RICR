let URL = "https://makeup-api.herokuapp.com/api/v1/products.json";

async function getData() {
    let response = await fetch(URL);
    let data = await response.json();

    const row = document.getElementById("items");
   

    data.forEach((element, index) => {
        console.log(element)
      
            let item = document.createElement("div");
            item.classList.add("col-md-4", "col-sm-6", "col-12", "mb-4"); 

            item.innerHTML = `
                <div class="card shadow border-0 p-3">
                    <img src="${element.api_featured_image}" alt="image" class="card-img-top  w-75 mx-auto">
                    <div class="card-body text-center">
                        <h6 class="fw-bold">${element.brand}</h6>
                        <p class="fw-bold">${element.name}</p>
                        <p class="fw-bold text-success">$${element.price}</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                            Buy Now
                        </button>
                    </div>
                </div>
            
        `;
        
            row.appendChild(item);
        
    });
}

getData();
