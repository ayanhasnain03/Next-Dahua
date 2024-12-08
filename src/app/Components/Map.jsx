// Map.jsx
'use client';
import React from 'react';

const Map = () => (
  <div className="h-[300px]">
    <iframe
      title="Our Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0891220222865!2d55.3022397!3d25.2747485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d3cf255f47f%3A0x6ef34ca2e3b58e6e!2sNaif%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1679900000000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

export default Map;