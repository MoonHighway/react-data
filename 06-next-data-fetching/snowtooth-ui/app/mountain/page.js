import Header from "../Header";

async function getData() {
  const res = await fetch(
    "https://snowtooth-api-rest.fly.dev"
  );
  return res.json();
}

async function LiftStatus() {
  const data = await getData();
  return (
    <table className="lifts">
      <thead>
        <tr>
          <th>Lift Name</th>
          <th>Current Status</th>
        </tr>
      </thead>
      <tbody>
        {data.data.allLifts.map((lift) => (
          <tr key={lift.id}>
            <td>{lift.name}</td>
            <td>{lift.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Page() {
  return (
    <main>
      <Header />
      <LiftStatus />
    </main>
  );
}
