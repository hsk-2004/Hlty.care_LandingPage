"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Search } from "lucide-react";

interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export default function CustomDropdown({
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  className = ""
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [dropdownPosition, setDropdownPosition] = useState<'bottom' | 'top'>('bottom');
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = useCallback((option: string) => {
    onChange(option);
    setIsOpen(false);
    setSearchTerm("");
    setSelectedIndex(-1);
  }, [onChange]);

  // Calculate dropdown position
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const dropdownHeight = 300;
      const viewportPadding = 20;
      
      // Check if there's enough space below with padding
      const hasSpaceBelow = spaceBelow >= (dropdownHeight + viewportPadding);
      // Check if there's enough space above with padding
      const hasSpaceAbove = spaceAbove >= (dropdownHeight + viewportPadding);
      
      const position = (!hasSpaceBelow && hasSpaceAbove) ? 'top' : 'bottom';
      setDropdownPosition(position);
      
      // Use absolute positioning relative to the container
      const maxHeight = Math.min(300, window.innerHeight - 40);
      
      setDropdownStyle({
        position: 'absolute',
        left: '0px',
        top: position === 'top' ? 'auto' : '100%',
        bottom: position === 'top' ? '100%' : 'auto',
        width: '100%',
        maxHeight: `${maxHeight}px`,
        zIndex: 9999,
        marginTop: position === 'top' ? '-4px' : '4px'
      });
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm("");
        setSelectedIndex(-1);
      }
    };

    const handleResize = () => {
      if (isOpen) {
        // Recalculate position on window resize
        const rect = dropdownRef.current?.getBoundingClientRect();
        if (rect) {
          const spaceBelow = window.innerHeight - rect.bottom;
          const spaceAbove = rect.top;
          const dropdownHeight = 300;
          const viewportPadding = 20;
          
          const hasSpaceBelow = spaceBelow >= (dropdownHeight + viewportPadding);
          const hasSpaceAbove = spaceAbove >= (dropdownHeight + viewportPadding);
          
          const position = (!hasSpaceBelow && hasSpaceAbove) ? 'top' : 'bottom';
          setDropdownPosition(position);
          
          const maxHeight = Math.min(300, window.innerHeight - 40);
          
          setDropdownStyle({
            position: 'absolute',
            left: '0px',
            top: position === 'top' ? 'auto' : '100%',
            bottom: position === 'top' ? '100%' : 'auto',
            width: '100%',
            maxHeight: `${maxHeight}px`,
            zIndex: 9999,
            marginTop: position === 'top' ? '-4px' : '4px'
          });
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
          break;
        case 'Enter':
          event.preventDefault();
          if (selectedIndex >= 0 && filteredOptions[selectedIndex]) {
            handleSelect(filteredOptions[selectedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setSearchTerm("");
          setSelectedIndex(-1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredOptions, handleSelect]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Scroll selected option into view
  useEffect(() => {
    if (selectedIndex >= 0 && optionRefs.current[selectedIndex]) {
      optionRefs.current[selectedIndex]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      });
    }
  }, [selectedIndex]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedIndex(-1);
  };

  const handleOpen = () => {
    if (!disabled) {
      setIsOpen(true);
      setSearchTerm("");
      setSelectedIndex(-1);
    }
  };

  const selectedOption = options.find(option => option === value);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Dropdown Button */}
      <motion.button
        type="button"
        onClick={handleOpen}
        disabled={disabled}
        className={`w-full pl-3 pr-12 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-teal focus:border-transparent transition-colors text-primary text-left ${
          error ? "border-red-500" : "border-gray-300"
        } ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white hover:border-bright-teal"}`}
        whileHover={!disabled ? { scale: 1.01 } : {}}
        whileTap={!disabled ? { scale: 0.99 } : {}}
      >
        <span className={value ? "text-primary" : "text-gray-500"}>
          {selectedOption ? selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1) : placeholder}
        </span>
        
        {/* Custom Chevron */}
        <motion.div
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} className="text-gray-500" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              opacity: 0, 
              y: dropdownPosition === 'top' ? 10 : -10, 
              scale: 0.95 
            }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1 
            }}
            exit={{ 
              opacity: 0, 
              y: dropdownPosition === 'top' ? 10 : -10, 
              scale: 0.95 
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            style={dropdownStyle}
          >
            {/* Search Input */}
            <div className="p-3 border-b border-gray-200">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-teal focus:border-transparent text-primary"
                />
              </div>
            </div>

            {/* Options List */}
            <div className="py-1 max-h-60 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <motion.button
                    key={option}
                    ref={el => { optionRefs.current[index] = el; }}
                    type="button"
                    onClick={() => handleSelect(option)}
                    className={`w-full px-3 py-2 text-left hover:bg-bright-teal hover:text-white transition-colors flex items-center justify-between ${
                      value === option ? "bg-bright-teal text-white" : 
                      selectedIndex === index ? "bg-gray-100" : "text-primary"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.02 }}
                    whileHover={{ x: 4 }}
                  >
                    <span className="font-medium">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </span>
                    {value === option && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Check size={16} className="text-white" />
                      </motion.div>
                    )}
                  </motion.button>
                ))
              ) : (
                <div className="px-3 py-2 text-gray-500 text-sm text-center">
                  No options found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-xs mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
