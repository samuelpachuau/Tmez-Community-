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
    <section
      id="office-bearers"
      className="sticky top-0 z-20 bg-[#9FB2AC] min-h-screen rounded-t-[40px] shadow-2xl pb-[100vh]"
    >
      <div className="max-w-7xl mx-auto px-6 pt-8 md:pt-4">

        {/* Heading */}
      <h2
  style={{ fontFamily: "Humane", fontWeight: "bold" }}
  className="text-4xl sm:text-5xl md:text-7xl text-center text-slate-800 mb-10 sm:mb-14"
>
          Office Bearers
        </h2>

        {/* Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 place-items-center">

          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full max-w-[210px] sm:max-w-[220px]"
            >

              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-full shadow-lg border-4 border-white"
              />

    <h3 className="mt-4 text-base sm:text-lg md:text-xl font-semibold text-slate-800 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
  {member.name}
</h3>

              {/* Position */}
              <p className="mt-1 text-sm sm:text-base md:text-base text-slate-500">
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