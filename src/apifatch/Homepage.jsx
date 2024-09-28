import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav } from "./nav";
import { Link } from "react-router-dom";


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

  let showproduct = ()=>{

    axios.get(Api).then((resp) => {
      useproduct(...ProductData, resp.data.products);
      
    });
  }

  useEffect(() => {
    axios.get(CategoryApi).then((resp) => {
      usecategory(resp.data);
    });

    showproduct()
  
  }, []);



  return (
    <>
      <div className=" bg-[black] text-[white] border border-1 p-5">
        <Nav/>
        <div>
          <div className="border border-5 p-5 flex">
            <div className=" w-[25%] p-2 category ] text-center">
              <h1 className="text-[20px] font-bold ">Category</h1>
              <ul className="my-5 p-2 ">
                {CategoryData.map((v, i) => {
                  return (
                    <>
                      <li className="flex justify-between hover:bg-[white] hover:text-[black]  rounded-sm cursor-pointer p-2 text-[20px] my-2">
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
              <div className=" p-2 grid grid-cols-3 gap-2 mt-3 ">
                {ProductData.map((v, i) => {
                  console.log(v)
                  return (
                    <>
                      <div className="border  text-start p-2 border-1 ">
                        <img src={v.thumbnail} alt="" />
                        <div>
                            
                          <h5 className=" font-bold text-[20px]">{v.title}</h5>
                          <span className=" font-bold"> Price:{v.price}</span>
                          <p>
                            {v.description}
                          </p>
                          <button className="p-2 mt-1 cursor-pointer bg-[blue] " ><Link to={`/Productdata/${v.id}`}>Read More</Link></button>
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
