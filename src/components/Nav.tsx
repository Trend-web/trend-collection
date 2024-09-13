'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FaShoppingCart, FaUser, FaPlus, FaMinus } from 'react-icons/fa';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';


const Nav = () => {
    
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartRef = useRef(null);
    const { items, addToCart, removeFromCart } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userRef = useRef(null);

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

    const getTotalItems = () => {
        return items && Array.isArray(items) ? items.reduce((total, item) => total + item.quantity, 0) : 0;
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cartRef.current && !(cartRef.current as Node).contains(event.target as Node) && 
                !((event.target as Element).closest('.cart-icon'))) {
                setIsCartOpen(false);
            }
            if (userRef.current && !(userRef.current as Node).contains(event.target as Node) && 
                !((event.target as Element).closest('.user-icon'))) {
                setIsUserMenuOpen(false);
            }
        };

        const handleClick = (event: MouseEvent) => {
            if (cartRef.current && (cartRef.current as Node).contains(event.target as Node)) {
                event.stopPropagation();
            }
            if (userRef.current && (userRef.current as Node).contains(event.target as Node)) {
                event.stopPropagation();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <header className="bg-darkBiege fixed top-0 left-0 right-0 z-50">
            <div className={`flex justify-between items-center ${isScrolled ? 'px-5 py-3' : 'p-5'} text-fonnt`}>
                <Link href='/'>
                    <p className="text-2xl font-bold">Trend Collections</p>
                </Link>
                <div className="flex justify-center items-center gap-5 text-fonnt text-xl">
                    <Link href='/contact' className='font-bold'>Contact Us</Link>
                    <div className="relative" ref={cartRef}>
                        <FaShoppingCart onClick={toggleCart} className="cursor-pointer cart-icon" />
                        {getTotalItems() > 0 && (
                            <span className="absolute -top-2 -right-2 bg-lightBiege text-fonnt w-5 h-5 flex items-center justify-center text-xs">
                                {getTotalItems()}
                            </span>
                        )}
                        {isCartOpen && (
                            <div className="absolute right-0 mt-2 w-64 bg-categories text-fonnt   z-10">
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">Your Cart</h3>
                                    {!items || items.length === 0 ? (
                                        <p>Your cart is empty</p>
                                    ) : (
                                        <ul>
                                            {items.map((item) => (
                                                <li key={item.id} className="flex justify-between items-center text-fonnt mb-2">
                                                    <span>{item.name}</span>
                                                    <div className="flex items-center">
                                                        <button onClick={() => removeFromCart(item.id)} className="text-fonnt mr-2">
                                                            <FaMinus size={12} />
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button onClick={() => addToCart(item)} className="text-fonnt ml-2">
                                                            <FaPlus size={12} />
                                                        </button>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative" ref={userRef}>
                        <FaUser onClick={toggleUserMenu} className="cursor-pointer user-icon" />
                        {isUserMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-categories text-fonnt z-10">
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">User Menu</h3>
                                    <ul>
                                        <li className="mb-2"><Link href="/signin">Sign In</Link></li>
                                        <li className="mb-2"><Link href="/profile">Profile</Link></li>
                                        <li><Link href="/admin">Admin</Link></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Nav;