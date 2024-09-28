import React, { useEffect, useState } from "react";
import { Nav } from "./nav";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductData() {
  let urldata = useParams();

  const [singleproductdata, useproductdata] = useState({});

  let id = urldata.id;

  console.log(id);

  let api = `https://dummyjson.com/products/${id}`;

  useEffect(() => {
    axios.get(api).then((resp) => {
      useproductdata(resp.data);
      console.log(singleproductdata);
    });
  });

  console.log(singleproductdata);
  return (
    <>
      <Nav />
      <div>
        <div class="bg-gray-100 dark:bg-gray-800 py-8">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
              <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    class="w-full h-full object-cover"
                    src={singleproductdata.thumbnail}
                  />
                </div>
                <div class="flex -mx-2 mb-4">
                  <div class="w-1/2 px-2">
                    <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      Add to Cart
                    </button>
                  </div>
                  <div class="w-1/2 px-2">
                    <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
              <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {singleproductdata.title}
                </h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">Brand:-
                 {singleproductdata.brand}
                </p>
                <div class="flex mb-4">
                  <div class="mr-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">
                    {singleproductdata.price}
                    </span>
                  </div>
                  <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">
                      Availability : 
                    </span>
                    <span class="text-gray-600 dark:text-gray-300">
                       In Stock
                    </span>
                  </div>
                </div>
                
                <div class="mb-4">
                  <span class="font-bold text-gray-700 dark:text-gray-300">
                    Rating : {singleproductdata.rating}
                  </span>
                
                </div>
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300">
                    Product Description:
                  </span>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {singleproductdata.description}
                  </p>
                </div>
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300">
                   Return Policy
                  </span>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {singleproductdata.returnPolicy}
                  </p>
                </div>
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300">
                  Warranty : 
                  </span>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {singleproductdata.warrantyInformation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductData;
