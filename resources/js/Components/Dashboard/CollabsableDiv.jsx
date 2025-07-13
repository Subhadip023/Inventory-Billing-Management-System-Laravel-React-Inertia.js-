import { useState } from 'react';

function CollapsibleDiv({ title = "Section", children , isActive=false }) {
  const [isOpen, setIsOpen] = useState(isActive);

  return (
    <div className={`w-full  text-2xl ${isOpen ?"bg-dark ":''} hover:bg-dark duration-200 `}>
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-light  duration-200"
      >
        <p className={`${isOpen?'text-accent':''} hover:text-accent`}> {title}</p>
        

        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
            } ${isOpen?'text-accent':''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <div className="p-4  text-light text-lg">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CollapsibleDiv;
