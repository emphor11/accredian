const clients = [
  { name: "Reliance", sub: "Industries Limited", color: "text-[#333333]" },
  { name: "HCL", sub: "", color: "text-[#2f70bd]" },
  { name: "IBM", sub: "", color: "text-[#3876c8]" },
  { name: "CRIF", sub: "Together to the next level", color: "text-[#174b89]" },
  { name: "ADP", sub: "", color: "text-[#c0392b]" },
  { name: "BAYER", sub: "", color: "text-[#15314f]" }
];

export function Clients() {
  return (
    <section id="clients" className="bg-white py-20">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-950">
            Our Proven <span className="text-blue">Partnerships</span>
          </h2>
          <p className="mt-5 text-2xl font-bold text-gray-600">
            Successful Collaborations With the <span className="text-blue">Industry&apos;s Best</span>
          </p>
        </div>
        <div className="mt-24 grid grid-cols-2 items-center gap-12 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div key={client.name} className="text-center">
              <div className={`text-4xl font-black tracking-tight ${client.color}`}>{client.name}</div>
              {client.sub ? <div className="mt-1 text-sm font-semibold text-gray-600">{client.sub}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
