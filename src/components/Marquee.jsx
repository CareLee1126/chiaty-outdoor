import React from 'react';

const items = [
  'OEM / ODM Available',
  'MOQ From 200 PCS',
  'Metal & Aluminum Frames',
  '200+ Product Models',
  'Direct Factory Export',
  '7+ Years Manufacturing',
  'Custom Logo & Fabric',
  '24H Inquiry Response',
];

export default function Marquee() {
  const row = (
    <span>
      {items.map((t) => (
        <span key={t}>{t} •</span>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
