import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <div className="backdrop-blur-sm bg-stone-100 z-50 top-0 left-0 right-0 h-20 border-b shadow-sm flex items-center justify-between">
      <div className="max-w-7xl mx-auto flex justify-center">
        <Link href="/">
          <Image
            src="/eco-pack-logo.png"
            alt="eco-pack-logo"
            width={160}
            height={100}
            sizes="(max-width: 320px) 280px,
            (max-width: 640px) 600px,
            1280px"
          />
        </Link>
      </div>
      <div className="container max-w-7xl mx-auto w-full flex justify-end space-x-20">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="contact">Contact</Link>
        <Link href="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
