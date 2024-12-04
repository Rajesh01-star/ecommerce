import { useState } from 'react';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

export default function Cart({ isOpen, toggleCart }) {
  return (
    <>
      {isOpen && (
        <div className="absolute right-4 top-16 bg-white text-black shadow-lg rounded-lg w-80 z-10">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Cart Items</h3>
              <button onClick={toggleCart} className="text-gray-500 hover:text-black">
                ✖
              </button>
            </div>
            {cartElements.length > 0 ? (
              <ul className="space-y-4">
                {cartElements.map((item, index) => (
                  <li key={index} className="flex items-center justify-between border-b pb-2">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1 mx-4">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-600">
                        ${item.price} x {item.quantity}
                      </p>
                    </div>
                    <button className="text-red-500 text-sm font-medium hover:underline">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
