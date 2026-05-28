function OfficeBearers() {
  const members = [
    {
      name: "H.Lalruatfela",
      position: "President",
      image: "./src/assets/fela.jpeg",
    },
    {
      name: "Amos PC Lalnuntluanga",
      position: "Vice President",
      image: "./src/assets/amos.jpeg",
    },
    {
      name: "Biakrinawma Pachuau",
      position: "Treasurer",
      image: "./src/assets/omoma.jpeg",
    },
    {
      name: "Lalthasangi",
      position: "Secretary",
      image: "./src/assets/thasangi.jpeg",
    },
    {
      name: "C.Zoremmawii",
      position: "Overseer",
      image: "./src/assets/cindy.jpeg",
    },
  ];

  return (
    <section id="office-bearers" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          Office Bearers
        </h2>

        {/* Members Grid */}
        <div className="flex flex-wrap justify-center gap-y-16 gap-x-10">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full max-w-xs"
            >
              
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-44 h-44 object-cover rounded-full shadow-lg border-4 border-white"
              />

              {/* Name */}
              <h3 className="mt-6 text-2xl font-semibold text-slate-800">
                {member.name}
              </h3>

              {/* Position */}
              <p className="mt-2 text-lg text-slate-500">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfficeBearers;