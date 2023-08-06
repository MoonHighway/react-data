import Header from "../Header";
import HotelBlock from "./HotelBlock";

async function getData() {
  const res = await fetch(
    "https://snowtooth-hotel-api.fly.dev"
  );
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <Header />
      <div className="grid grid-cols-3 gap-4">
        {data.map((hotel) => (
          <HotelBlock
            key={hotel.id}
            id={hotel.id}
            name={hotel.name}
            capacity={hotel.capacity}
            skiIn={hotel.skiIn}
            pool={hotel.pool}
            spa={hotel.spa}
          />
        ))}
      </div>
    </main>
  );
}
