// components/WhatsAppButton.js

import Link from 'next/link';
import React from 'react';
import { RiWhatsappFill } from "react-icons/ri";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/+918469838559"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className='text-[24px] text-[#25D366]'><RiWhatsappFill/></span>
    </Link>
  );
};

export default WhatsAppButton;
