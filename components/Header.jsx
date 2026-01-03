'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Fish } from 'lucide-react';
import { navigation } from '@/lib/data';
import clsx from 'clsx';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [focusedDropdownIndex, setFocusedDropdownIndex] = useState(-1);
  const router = useRouter();
  
  const menuRef = useRef(null);
  const dropdownRefs = useRef({});
  const menuItemRefs = useRef([]);
  const dropdownItemRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setFocusedDropdownIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Global escape key handler
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        if (activeDropdown) {
          setActiveDropdown(null);
          setFocusedDropdownIndex(-1);
          // Return focus to the parent menu item
          const menuIndex = navigation.findIndex(item => item.name === activeDropdown);
          if (menuIndex !== -1 && menuItemRefs.current[menuIndex]) {
            menuItemRefs.current[menuIndex].focus();
          }
        } else if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [activeDropdown, mobileMenuOpen]);

  // Handle main menu keyboard navigation
  const handleMenuKeyDown = useCallback((event, item, index) => {
    const menuItems = navigation;
    
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        const nextIndex = (index + 1) % menuItems.length;
        menuItemRefs.current[nextIndex]?.focus();
        setActiveDropdown(null);
        setFocusedDropdownIndex(-1);
        break;
        
      case 'ArrowLeft':
        event.preventDefault();
        const prevIndex = (index - 1 + menuItems.length) % menuItems.length;
        menuItemRefs.current[prevIndex]?.focus();
        setActiveDropdown(null);
        setFocusedDropdownIndex(-1);
        break;
        
      case 'ArrowDown':
        event.preventDefault();
        if (item.children) {
          setActiveDropdown(item.name);
          setFocusedDropdownIndex(0);
          // Focus first dropdown item after state update
          setTimeout(() => {
            dropdownItemRefs.current[item.name]?.[0]?.focus();
          }, 50);
        }
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        if (item.children) {
          setActiveDropdown(item.name);
          const lastIndex = item.children.length - 1;
          setFocusedDropdownIndex(lastIndex);
          setTimeout(() => {
            dropdownItemRefs.current[item.name]?.[lastIndex]?.focus();
          }, 50);
        }
        break;
        
      case 'Enter':
      case ' ':
        if (item.children) {
          event.preventDefault();
          if (activeDropdown === item.name) {
            setActiveDropdown(null);
            setFocusedDropdownIndex(-1);
          } else {
            setActiveDropdown(item.name);
            setFocusedDropdownIndex(0);
            setTimeout(() => {
              dropdownItemRefs.current[item.name]?.[0]?.focus();
            }, 50);
          }
        }
        // Let link navigation happen naturally for items without children
        break;
        
      case 'Tab':
        // Close dropdown on tab out
        setActiveDropdown(null);
        setFocusedDropdownIndex(-1);
        break;
    }
  }, [activeDropdown]);

  // Handle dropdown item keyboard navigation
  const handleDropdownKeyDown = useCallback((event, parentItem, childIndex) => {
    const children = parentItem.children;
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (childIndex + 1) % children.length;
        setFocusedDropdownIndex(nextIndex);
        dropdownItemRefs.current[parentItem.name]?.[nextIndex]?.focus();
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = (childIndex - 1 + children.length) % children.length;
        setFocusedDropdownIndex(prevIndex);
        dropdownItemRefs.current[parentItem.name]?.[prevIndex]?.focus();
        break;
        
      case 'ArrowRight':
        event.preventDefault();
        setActiveDropdown(null);
        setFocusedDropdownIndex(-1);
        const parentIndex = navigation.findIndex(n => n.name === parentItem.name);
        const nextMenuIndex = (parentIndex + 1) % navigation.length;
        menuItemRefs.current[nextMenuIndex]?.focus();
        break;
        
      case 'ArrowLeft':
        event.preventDefault();
        setActiveDropdown(null);
        setFocusedDropdownIndex(-1);
        const parentIdx = navigation.findIndex(n => n.name === parentItem.name);
        const prevMenuIndex = (parentIdx - 1 + navigation.length) % navigation.length;
        menuItemRefs.current[prevMenuIndex]?.focus();
        break;
        
      case 'Home':
        event.preventDefault();
        setFocusedDropdownIndex(0);
        dropdownItemRefs.current[parentItem.name]?.[0]?.focus();
        break;
        
      case 'PageUp':
        event.preventDefault();
        setFocusedDropdownIndex(0);
        dropdownItemRefs.current[parentItem.name]?.[0]?.focus();
        break;
        
      case 'End':
        event.preventDefault();
        const lastIndex = children.length - 1;
        setFocusedDropdownIndex(lastIndex);
        dropdownItemRefs.current[parentItem.name]?.[lastIndex]?.focus();
        break;
        
      case 'PageDown':
        event.preventDefault();
        const endIndex = children.length - 1;
        setFocusedDropdownIndex(endIndex);
        dropdownItemRefs.current[parentItem.name]?.[endIndex]?.focus();
        break;
        
      case 'Tab':
        setActiveDropdown(null);
        setFocusedDropdownIndex(-1);
        break;
    }
  }, []);

  // Mobile menu keyboard navigation
  const handleMobileMenuKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      setMobileMenuOpen(false);
    }
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-river-950/5 py-2'
          : mobileMenuOpen
            ? 'bg-river-900 py-4'
            : 'bg-transparent py-4'
      )}
    >
      <nav className="container-custom" ref={menuRef} aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Leeds DASA - Home" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-river-500 focus-visible:ring-offset-2 rounded-xl">
            <div className={clsx(
              'flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300',
              isScrolled 
                ? 'bg-river-700' 
                : 'bg-white/20 backdrop-blur-sm'
            )}>
              <Fish aria-hidden="true" className={clsx(
                'w-7 h-7 transition-colors duration-300',
                isScrolled ? 'text-white' : 'text-white'
              )} />
            </div>
            <div className="hidden sm:block">
              <span className={clsx(
                'font-display text-xl font-bold tracking-tight transition-colors duration-300',
                isScrolled ? 'text-river-900' : 'text-white'
              )}>
                Leeds DASA
              </span>
              <span className={clsx(
                'block text-xs font-medium transition-colors duration-300',
                isScrolled ? 'text-river-500' : 'text-white/80'
              )}>
                Est. 1891
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" role="menubar" aria-label="Main menu">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setFocusedDropdownIndex(-1);
                }}
                ref={el => dropdownRefs.current[item.name] = el}
              >
                {item.children ? (
                  <button
                    ref={el => menuItemRefs.current[index] = el}
                    onClick={() => {
                      if (activeDropdown === item.name) {
                        setActiveDropdown(null);
                      } else {
                        setActiveDropdown(item.name);
                        setFocusedDropdownIndex(0);
                      }
                    }}
                    onKeyDown={(e) => handleMenuKeyDown(e, item, index)}
                    className={clsx(
                      'flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-river-500 focus-visible:ring-offset-2',
                      isScrolled
                        ? 'text-river-700 hover:text-river-900 hover:bg-river-100'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="menu"
                    role="menuitem"
                  >
                    {item.name}
                    <ChevronDown className={clsx(
                      'w-4 h-4 transition-transform duration-300',
                      activeDropdown === item.name && 'rotate-180'
                    )} aria-hidden="true" />
                  </button>
                ) : (
                  <Link
                    ref={el => menuItemRefs.current[index] = el}
                    href={item.href}
                    onKeyDown={(e) => handleMenuKeyDown(e, item, index)}
                    className={clsx(
                      'flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-river-500 focus-visible:ring-offset-2',
                      isScrolled
                        ? 'text-river-700 hover:text-river-900 hover:bg-river-100'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                    role="menuitem"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-56"
                      role="menu"
                      aria-label={`${item.name} submenu`}
                    >
                      <div className="bg-white rounded-xl shadow-xl shadow-river-950/10 overflow-hidden border border-river-100">
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={child.name}
                            ref={el => {
                              if (!dropdownItemRefs.current[item.name]) {
                                dropdownItemRefs.current[item.name] = [];
                              }
                              dropdownItemRefs.current[item.name][childIndex] = el;
                            }}
                            href={child.href}
                            onClick={() => {
                              setActiveDropdown(null);
                              setFocusedDropdownIndex(-1);
                            }}
                            onKeyDown={(e) => handleDropdownKeyDown(e, item, childIndex)}
                            className={clsx(
                              'block px-4 py-3 text-river-700 hover:text-river-900 hover:bg-river-50 transition-colors font-medium',
                              'focus:outline-none focus-visible:bg-river-100 focus-visible:text-river-900',
                              focusedDropdownIndex === childIndex && 'bg-river-50'
                            )}
                            role="menuitem"
                            tabIndex={activeDropdown === item.name ? 0 : -1}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/membership" className="hidden md:inline-flex btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-river-500 focus-visible:ring-offset-2">
              Join Now
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              onKeyDown={handleMobileMenuKeyDown}
              className={clsx(
                'lg:hidden p-2 rounded-lg transition-colors',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-river-500 focus-visible:ring-offset-2',
                isScrolled
                  ? 'text-river-700 hover:bg-river-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
              role="menu"
              aria-label="Mobile menu"
            >
              <div className="pt-4 pb-6 space-y-2">
                {navigation.map((item, index) => (
                  <MobileMenuItem 
                    key={item.name} 
                    item={item} 
                    isScrolled={isScrolled}
                    onClose={() => setMobileMenuOpen(false)}
                  />
                ))}
                <div className="pt-4">
                  <Link
                    href="/membership"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-primary w-full justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-river-500 focus-visible:ring-offset-2"
                    role="menuitem"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

// Mobile menu item component with keyboard support
function MobileMenuItem({ item, isScrolled, onClose }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childRefs = useRef([]);

  const handleKeyDown = (event) => {
    if (item.children) {
      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          setIsExpanded(!isExpanded);
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (!isExpanded) {
            setIsExpanded(true);
          }
          setTimeout(() => {
            childRefs.current[0]?.focus();
          }, 50);
          break;
      }
    }
  };

  const handleChildKeyDown = (event, index) => {
    const children = item.children;
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = Math.min(index + 1, children.length - 1);
        childRefs.current[nextIndex]?.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (index === 0) {
          setIsExpanded(false);
        } else {
          childRefs.current[index - 1]?.focus();
        }
        break;
      case 'Escape':
        event.preventDefault();
        setIsExpanded(false);
        break;
    }
  };

  return (
    <div role="none">
      {item.children ? (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          onKeyDown={handleKeyDown}
          className={clsx(
            'w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-river-500 focus-visible:ring-inset',
            isScrolled
              ? 'text-river-700 hover:bg-river-100'
              : 'text-white hover:bg-white/10'
          )}
          aria-expanded={isExpanded}
          aria-haspopup="menu"
          role="menuitem"
        >
          {item.name}
          <ChevronDown className={clsx(
            'w-4 h-4 transition-transform duration-200',
            isExpanded && 'rotate-180'
          )} aria-hidden="true" />
        </button>
      ) : (
        <Link
          href={item.href}
          onClick={onClose}
          onKeyDown={handleKeyDown}
          className={clsx(
            'block px-4 py-3 rounded-lg font-medium transition-colors',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-river-500 focus-visible:ring-inset',
            isScrolled
              ? 'text-river-700 hover:bg-river-100'
              : 'text-white hover:bg-white/10'
          )}
          role="menuitem"
        >
          {item.name}
        </Link>
      )}
      
      <AnimatePresence>
        {item.children && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-4 mt-1 space-y-1 overflow-hidden"
            role="menu"
            aria-label={`${item.name} submenu`}
          >
            {item.children.map((child, childIndex) => (
              <Link
                key={child.name}
                ref={el => childRefs.current[childIndex] = el}
                href={child.href}
                onClick={onClose}
                onKeyDown={(e) => handleChildKeyDown(e, childIndex)}
                className={clsx(
                  'block px-4 py-2 rounded-lg text-sm transition-colors',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-river-500 focus-visible:ring-inset',
                  isScrolled
                    ? 'text-river-600 hover:bg-river-100'
                    : 'text-white/80 hover:bg-white/10'
                )}
                role="menuitem"
                tabIndex={0}
              >
                {child.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

