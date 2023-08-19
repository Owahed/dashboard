import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import { Button } from ".";

const Cart = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(cartData[0].price);
  const { currentColor } = useStateContext();
  const handelCountMinus = () => {
    if (count <= 0) {
      setCount(0);
      setPrice(0);
    } else {
      setCount(count - 1);
      setPrice(price - 250);
    }
  };
  const handelCountPlus = () => {
    setCount(count + 1);
    setPrice(price + 250);
  };
  console.log(price);
  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
        </div>
        {/* {cartData?.map((item, index) => ( */}
        <div>
          <div>
            <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
              <img
                className="rounded-lg h-80 w-24"
                src={cartData[0].image}
                alt=""
              />
              <div>
                <p className="font-semibold ">{cartData[0].name}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                  {cartData[0].category}
                </p>
                <div className="flex gap-4 mt-2 items-center">
                  <p className="font-semibold text-lg">${price}</p>
                  <div className="flex items-center border-1 border-r-0 border-color rounded">
                    <p
                      onClick={handelCountMinus}
                      className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 "
                    >
                      <AiOutlineMinus />
                    </p>
                    <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                      {count}
                    </p>
                    <p
                      onClick={handelCountPlus}
                      className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"
                    >
                      <AiOutlinePlus />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ))} */}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">${price}</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">${price}</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
