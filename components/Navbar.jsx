'use client'
import { useContext, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import CartContext from '@/context/CartContext';
import Cart from './Cart';

export default function Navbar() {
  const crtCntxt = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function toggleCart() {
    setIsCartOpen((prev) => !prev);
  }

  return (
    <nav className="bg-gray-800 text-white py-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/About" className="hover:text-gray-400">About</Link>
          <Link href="/store" className="hover:text-gray-400">Store</Link>
        </div>

        {/* Cart Button */}
        <button
          onClick={toggleCart}
          className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
        >
          <ShoppingCart />
          <span>Cart</span>
          <span>{crtCntxt.items.length}</span>
        </button>
      </div>

      {/* Cart Component */}
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
    </nav>
  );
}
