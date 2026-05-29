import fela from "../assets/fela.jpeg";
import amos from "../assets/amos.jpeg";
import omoma from "../assets/omoma.jpeg";
import thasangi from "../assets/thasangi.jpeg";
import cindy from "../assets/cindy.jpeg";

function OfficeBearers() {
  const members = [
    {
      name: "H.Lalruatfela",
      position: "President",
      image: fela,
    },
    {
      name: "Amos PC Lalnuntluanga",
      position: "Vice President",
      image: amos,
    },
    {
      name: "Biakrinawma Pachuau",
      position: "Treasurer",
      image: omoma,
    },
    {
      name: "Lalthasangi",
      position: "Secretary",
      image: thasangi,
    },
    {
      name: "C.Zoremmawii",
      position: "Overseer",
      image: cindy,
    },
  ];

  return (
    <section id="office-bearers" className="sticky top-0 z-20 py-6 bg-[#9FB2AC] min-h-screen rounded-t-[40px] shadow-2xl pb-[100vh]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 
        style={{ fontFamily: "Humane", fontWeight: "bold" }}
        className="text-7xl text-center text-slate-800 mb-16">
          Office Bearers
        </h2>

        {/* Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-5 place-items-center">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full"
            >
              
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 object-cover rounded-full shadow-lg border-4 border-white"
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