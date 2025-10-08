import React from 'react';
import { Link } from 'react-router-dom';

export default function Support() {
  return (
    <div className='max-w-3xl mx-auto p-6'>
      <header className='flex justify-between items-center mb-6'>
        <h1 className='text-xl font-bold'>Support Center</h1>
        <Link to='/policy' className='px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-400 text-white font-semibold'>Back to Policy</Link>
      </header>

      <div className='bg-[#0b1220] p-6 rounded-2xl shadow-xl'>
        <h2 className='text-lg font-semibold mb-3'>Need Help?</h2>
        <p className='text-gray-300 text-sm mb-4'>Please describe your issue below. Our support team will contact you at:</p>
        <p className='text-cyan-400 font-semibold mb-6'>wendyjones.221984@gmail.com</p>

        <form className='space-y-4'>
          <textarea className='w-full p-3 rounded-lg bg-[#0f1724] border border-gray-700 text-white' rows='5' placeholder='Describe your issue...'></textarea>
          <button type='submit' className='px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-400 text-white font-semibold w-full'>Submit</button>
        </form>
      </div>
    </div>
  );
}
