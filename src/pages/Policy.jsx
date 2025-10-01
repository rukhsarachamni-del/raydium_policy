import React from 'react';
import { Link } from 'react-router-dom';
import AccordionItem from '../components/AccordionItem';

export default function Policy() {
  return (
    <div className='max-w-6xl mx-auto p-6'>
      <header className='flex justify-between items-center mb-6'>
        <div className='flex items-center gap-3'>
          {/* <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center shadow-lg'>
            <svg width='28' height='28' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12 2L19 8.5V15.5L12 22L5 15.5V8.5L12 2Z' fill='white' opacity='0.98'/>
              <path d='M12 6V18' stroke='rgba(255,255,255,0.2)' strokeWidth='1' strokeLinecap='round'/>
            </svg>
          </div> */}
          <div>
            <h1 className='text-lg font-bold'>Raydium Wallet — Privacy Policy</h1>
            <p className='text-gray-400 text-sm'>This policy explains how Raydium Wallet collects, stores and protects data related to the cryptocurrency wallet service.</p>
          </div>
        </div>
        <Link to='/support' className='px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-400 text-white font-semibold'>
          Support
        </Link>
      </header>

      <div className='bg-[#0b1220] p-6 rounded-2xl shadow-xl mb-6'>
        <div className='flex justify-between items-center mb-4'>
          <div>
            {/* <span className='inline-flex px-3 py-1 rounded-full bg-white/5 text-cyan-400 text-xs font-semibold'>Technology: Public Blockchain</span> */}
            <div className='text-gray-400 text-xs mt-2'>Last updated: <strong>26/09/2025</strong></div>
          </div>
          <div className='text-right text-gray-400 text-xs'>
            <div>Policy version</div>
            <div className='font-bold'>1.0.0</div>
          </div>
        </div>
        <p className='text-gray-400 text-sm'>
          Please read this privacy policy carefully before using the service. Below are the main categories of information Raydium Wallet collects, how we use it, and the security measures we employ.
        </p>
      </div>

      <div className='bg-[#0b1220] p-6 rounded-2xl shadow-xl'>
        <h2 className='text-lg font-semibold mb-3'>Information We Collect</h2>
        <div className='divide-y divide-white/5'>
          <AccordionItem title='1. Basic personal information' openByDefault>
            Raydium Wallet collects basic user information such as <strong>name, phone number, and email address</strong> for the purpose of creating and managing a Raydium Wallet account, authentication, and support.
          </AccordionItem>

          <AccordionItem title='2. Device information'>
            We collect and store device information to help diagnose problems and improve user experience. This may include the device operating system, IP address, browser type, and session information.
          </AccordionItem>

          <AccordionItem title='3. Transaction information stored on a public ledger'>
            In addition, Raydium Wallet collects information about user transactions within the app and records that information on a <strong>public ledger</strong>. Transaction data may include the date and time of the transaction, the amount transferred, and the wallet addresses of the sender and receiver. Because this data is stored on a public blockchain, transaction-related wallet addresses may be visible to the public.
          </AccordionItem>

          <AccordionItem title='4. We do not sell user data'>
            Raydium Wallet takes user privacy seriously and does not sell user data to third parties. We only share user data when required by law or legitimate legal process (for example, court orders or law enforcement requests).
          </AccordionItem>

          <AccordionItem title='5. Security measures'>
            We apply appropriate security measures to protect user data, including encryption in transit and at rest, regular security updates, and system audits. However, due to the immutable and public nature of blockchains, transaction data tied to wallet addresses cannot be completely removed from the public ledger.
          </AccordionItem>

          <AccordionItem title='6. Read and understand'>
            It is important to read and understand the privacy policy before using any app or service. Be aware of the data being collected and how it is used. By using Raydium Wallet, you acknowledge and accept the terms described in this policy.
          </AccordionItem>
        </div>
      </div>

      <div className='bg-[#0b1220] p-6 rounded-2xl shadow-xl mt-6'>
        <h2 className='text-lg font-semibold mb-3'>Contact & Your Rights</h2>
        <p className='text-gray-400 text-sm mb-3'>
          If you have questions about this policy, or wish to request access, correction or deletion of your personal data (to the extent permitted by law), please contact Raydium Wallet support at: <strong>tutumi45456768@gmail.com</strong>.
        </p>
        <p className='text-gray-400 text-sm'>
          Note: because blockchain records are distributed and public, certain transaction-related data tied to wallet addresses may not be deletable. We will assist where possible within legal and technical constraints.
        </p>
      </div>

      <footer className='mt-6 text-center text-gray-400 text-sm'>
        &copy; <strong>Raydium Wallet</strong> — All rights reserved. If you need a customized version or translations, let us know.
      </footer>
    </div>
  );
}
