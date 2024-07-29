// components/WhatsAppButton.js

import Link from 'next/link';
import React from 'react';
import { RiWhatsappFill } from "react-icons/ri";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/+918469838559?text=Hello%20I%20am%20intersted%20in%20your%20sevices"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className='text-[36px] text-[#25D366]'><RiWhatsappFill/></span>
    </Link>
  );
};

export default WhatsAppButton;
