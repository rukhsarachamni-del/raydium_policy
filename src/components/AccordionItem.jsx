import React, { useState } from 'react';

export default function AccordionItem({ title, children, openByDefault }) {
  const [open, setOpen] = useState(openByDefault || false);

  return (
    <div className='border-t border-white/10'>
      <button
        onClick={() => setOpen(!open)}
        className='w-full text-left px-4 py-3 flex justify-between items-center font-semibold'
      >
        {title}
        <span>{open ? '-' : '+'}</span>
      </button>
      {open && <div className='px-4 pb-4 text-sm text-gray-400'>{children}</div>}
    </div>
  );
}
