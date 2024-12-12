import React from "react";
import Link from "next/link";
import SingleProduct from "../Single_Product/page";

const CartSidebar: React.FC = () => {
  return (
    <div>
    <div className="w-72 bg-white shadow-lg fixed top-0 right-0 h-full p-4">
      <h2 className="text-lg font-semibold border-b pb-2 mb-4">Shopping Cart</h2>
      
      
      <div className="flex items-center mb-4">
        <img
          src="c5.png"
          alt="Asgaard sofa"
          className="w-12 h-12 rounded"
        />
        <div className="ml-3">
          <p className="text-sm font-medium">Asgaard sofa</p>
          <p className="text-xs text-gray-500">Price: 250.000.00</p>
        </div>
      </div>

      
      <div className="flex items-center mb-4">
        <img
          src="rt6.png"
          alt="Luxurios Bed"
          className="w-12 h-12 rounded"
        />
        <div className="ml-3">
          <p className="text-sm font-medium">Luxurious Bed</p>
          <p className="text-xs text-gray-500">Price: 250.000.00</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <p className="text-sm font-semibold">Total: 500.000.00</p>
        <Link href="Check_Out"><button className="w-full mt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Checkout
        </button></Link>
      </div>
      
    </div>
    <div>
        <SingleProduct/>
      </div>
      </div>
  );
};

export default CartSidebar;
