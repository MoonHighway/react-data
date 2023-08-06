"use client";

import Image from "next/image";

export default function HotelBlock({
  id,
  name,
  capacity,
  skiIn,
  pool,
  spa
}) {
  const imageLoader = ({ src }) => {
    return `./hotels/${src}.jpeg`;
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600">{capacity}</p>
      <Image
        loader={imageLoader}
        src={id}
        alt={`${name}`}
        width={300}
        height={300}
        className="mt-4"
      />
      <ul>
        <li>Ski/In: {skiIn ? "yes" : "no"}</li>
        <li>Pool: {pool ? "yes" : "no"}</li>
        <li>Spa: {spa ? "yes" : "no"}</li>
      </ul>
    </div>
  );
}
