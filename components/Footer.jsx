import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto fixed bottom-0 w-full ">
      <div className="container mx-auto text-center">
        <p className="mb-4">Follow us on</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400"><Facebook /></a>
          <a href="#" className="hover:text-gray-400"><Instagram /></a>
          <a href="#" className="hover:text-gray-400"><Twitter /></a>
        </div>
        <p className="mt-4">&copy; 2023 The Generics. All rights reserved.</p>
      </div>
    </footer>
  );
}
