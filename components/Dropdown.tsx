"use client";

import { useState } from "react";
import Image from "next/image";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // Fixed: removed 'initialState:'
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            <Image
              src="/assets/icons/hamburger.svg"
              alt="hamburger"
              width={14}
              height={14}
            />
            filter
          </figure>
          <Image
            src="/assets/icons/arrow-down.svg"
            alt="arrow down"
            width={20}
            height={20}
          />
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown">
            {['most recent', 'oldest'].map((option) => (
              <li key={option} className="list-item"> {option}</li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
