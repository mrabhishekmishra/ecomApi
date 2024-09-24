import axios from "axios";
import React, { useEffect, useState } from "react";

const Homepage = () => {
  let Api = "https://dummyjson.com/products?limit=190";
  let CategoryApi = "https://dummyjson.com/products/categories";

  const [CategoryData, usecategory] = useState([]);
  const [ProductData, useproduct] = useState([]);
  const [multyCategory, usermulty]= useState([])

  let check= (e)=>{

    usermulty(...multyCategory,e.target.name)
    console.log(multyCategory)
  }

  useEffect(() => {
    axios.get(CategoryApi).then((resp) => {
      usecategory(resp.data);
    });
    axios.get(Api).then((resp) => {
      useproduct(...ProductData, resp.data.products);
      //   console.log(ProductData)
    });
  }, []);

  return (
    <>
      <div className="container mx-auto border border-1 p-5">
        <div>
          <h1 className="text-center text-[25px]  font-bold text-[red]">
            Ecom-Api
          </h1>
          <div className="border border-5 p-5 flex">
            <div className=" w-[25%] p-2 category ] text-center">
              <h1 className="text-[20px] font-bold ">Category</h1>
              <ul className="my-5 p-2 border  border-1">
                {CategoryData.map((v, i) => {
                  return (
                    <>
                      <li className="flex justify-between border border-1 rounded-sm cursor-pointer p-1 text-[20px] my-2">
                        <span>{v.name}</span>
                        <input type="checkbox" onClick={check}  name={v.name}/>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className=" w-[80%] border border-1 text-center p-2 list">
              <h1 className="text-[25px] font-bold  ">Product</h1>
              <div className="border border-1 p-2 grid grid-cols-3 gap-2 mt-3 ">
                {ProductData.map((v, i) => {
                  return (
                    <>
                      <div className="border text-start p-2 border-1 ">
                        <img src={v.thumbnail} alt="" />
                        <div>
                            <span>Price:{v.price}</span>
                          <h5>{v.title}</h5>
                          <button className="cursor-pointer">Read More</button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
