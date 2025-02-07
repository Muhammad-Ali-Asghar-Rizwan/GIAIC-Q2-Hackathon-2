"use client";
import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdOutlineShoppingCart } from "react-icons/md";
import { Menu as LucideMenu } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { SignedIn, SignInButton, UserButton } from "@clerk/clerk-react";
import Image from "next/image";
import { sanityFetch } from "../../sanity/lib/fetch";
import { allproducts } from "../../sanity/lib/queries";
import NavbarTop from "./NavbarTop";
import { RootState } from "../../app/redux/Store";
import { SignedOut } from "@clerk/nextjs";

// Define Product type
interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  tags: string[];
}


function Navbar() {

    const item = useSelector((state: RootState) => state.cart);


  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = await sanityFetch({ query: allproducts });
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);

    if (value) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(value)
      );
      setSearchResults(filteredProducts);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  const closeSearchResults = () => {
    setShowSearchResults(false);
    setSearchQuery("");
  };

  return (
    <div>
      <NavbarTop />
      <header className="max-w-7xl mx-auto body-font relative z-20">
        <div className="flex items-center justify-between h-20 mx-5 lg:mx-8">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <LucideMenu className="mt-2" />
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle>MENU</SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-10 mt-14">
                  <li><Link href="/" className="hover:underline">Shop</Link></li>
                  <li><Link href="/Selling" className="hover:underline">On Sale</Link></li>
                  <li><Link href="/Arrival" className="hover:underline">New Arrival</Link></li>
                  <li><Link href="/category" className="hover:underline">Brands</Link></li>
                  <li className="ml-32">
                  <SignedOut >
              <SignInButton />
            </SignedOut>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>

          <h1 className="text-[28px] lg:text-[35px] font-extrabold">Shop.Co</h1>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 text-lg">
            <Link href="/" className="hover:underline flex items-center gap-1">
              Shop
              <DropdownMenu>
                <DropdownMenuTrigger><MdKeyboardArrowDown /></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="bg-black border-white mt-3 px-2 rounded-lg text-white">
                    <Link href="/category" className="hover:underline">Category</Link>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem>Billing</DropdownMenuItem> */}
                </DropdownMenuContent>
              </DropdownMenu>
            </Link>
            <Link href="/Selling" className="hover:underline">On Sale</Link>
            <Link href="/Arrival" className="hover:underline">New Arrival</Link>
            <Link href="/category" className="hover:underline">Brands</Link>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </nav>


          {/* Search and Cart */}
          <div className="flex items-center relative">
            <IoSearchOutline className="hidden md:block w-6 h-6 text-gray-600 absolute left-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for products..."
              className="hidden md:block w-72 lg:w-96 h-10 rounded-full pl-10 pr-4 bg-gray-100 border border-gray-300 focus:ring-gray-400"
            />
          
              <div className="flex gap-1 ml-4 items-center justify-center">
                 <div className='flex items-center justify-center'>
                   <Link href="/Cart">
                   <MdOutlineShoppingCart className="w-[32.13px] h-[30.25px] mt-5" />
                   <p className='bg-red-500 rounded-full h-5 w-5 text-white flex items-center justify-center relative  bottom-10 left-4'>
                   {item.length}
                     </p>
                 </Link>
               </div>
               <SignedIn>
                   <UserButton />
               </SignedIn>
             </div>
          </div>
        </div>
      </header>

      {/* Search Results */}
      {showSearchResults && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-30 flex items-start justify-center mt-8">
          <div className="bg-white w-[90%] md:w-[70%] lg:w-[50%] max-h-[70%] mt-20 rounded-lg shadow-lg overflow-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold">Search Results</h2>
              <button onClick={closeSearchResults} className="text-gray-500 hover:text-gray-700">Close</button>
            </div>
            <ul className="p-4">
              {searchResults.length > 0 ? (
                searchResults.map((product) => (
                  <li key={product._id} className="flex items-center gap-4 py-2 border-b">
                    <Image src={product.imageUrl} alt={product.name} width={100} height={100} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <Link href={`/product/${product._id}`} className="text-blue-500 hover:underline font-medium">
                        {product.name}
                      </Link>
                      <p className="text-gray-600">${product.price}</p>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-gray-500 text-center">No results found.</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
