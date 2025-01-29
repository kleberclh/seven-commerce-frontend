import React from "react";

export default function Input({ className, type = "text", placeholder, onChange, value }) {
  return (
    <input
      className="w-full px-4 py-2 mt-1 mb-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required
    >
        
    </input>
    
  );
}
