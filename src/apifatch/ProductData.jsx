import React, { useEffect, useState } from "react";
import { Nav } from "./nav";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductData() {
  let urldata = useParams();  // url me koi data hai to use krne ke liye param ka use krte hai

  const [singleproductdata, useproductdata] = useState({});

  let id = urldata.id;


  let api = `https://dummyjson.com/products/${id}`;

  useEffect(() => {
    axios.get(api).then((resp) => {
      useproductdata(resp.data);
      
    });
  });

  
  return (
    <>
      <Nav />
      <div>
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 p-1">
                  <img
                    className="w-full h-full object-cover"
                    src={singleproductdata.thumbnail}
                  />
                </div>
                <div className="flex -mx-2 mb-4">
                  <div className="w-1/2 px-2">
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      Add to Cart
                    </button>
                  </div>
                  <div className="w-1/2 px-2">
                    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {singleproductdata.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Brand:-
                 {singleproductdata.brand}
                </p>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                    {singleproductdata.price}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Availability : 
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                       In Stock
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Rating : {singleproductdata.rating}
                  </span>
                
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Product Description:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {singleproductdata.description}
                  </p>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                   Return Policy
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {singleproductdata.returnPolicy}
                  </p>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                  Warranty : 
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
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
