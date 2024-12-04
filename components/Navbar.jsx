import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-8">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/store" className="hover:text-gray-400">Store</Link>
        </div>
        <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
          <ShoppingCart />
          <span>Cart</span>
        </button>
      </div>
    </nav>
  );
}
