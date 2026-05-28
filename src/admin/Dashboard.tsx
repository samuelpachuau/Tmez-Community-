import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const dashboardItems = [
    {
      title: "Hero Background",
      description: "Manage hero section background images.",
      path: "/dashboard/hero-background",
    },

    {
      title: "Office Bearers",
      description: "Add, edit, and remove office bearers.",
      path: "/dashboard/office-bearers",
    },

    {
      title: "About Us",
      description: "Manage English and Mizo descriptions.",
      path: "/dashboard/about-us",
    },

    {
      title: "Our Memories",
      description: "Upload and manage gallery images.",
      path: "/dashboard/memories",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Top Navbar */}
      <header className="bg-white shadow-sm border-b border-slate-200">

        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <img
              src="./src/assets/TmezLogoTransparent.png"
              className="w-14"
            />

            <div>

              <h1 className="text-3xl font-bold text-slate-800">
                TMEZ Admin
              </h1>

              <p className="text-slate-500">
                Community Management Dashboard
              </p>

            </div>

          </div>

        </div>

      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12">

        {/* Page Title */}
        <div className="mb-12">

          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Dashboard
          </h2>

          <p className="text-slate-500 text-lg">
            Manage your community website content.
          </p>

        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {dashboardItems.map((item, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100"
            >

              <div className="w-16 h-16 rounded-2xl bg-sky-100 text-sky-500 flex items-center justify-center text-2xl font-bold mb-6">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-500 leading-relaxed mb-8">
                {item.description}
              </p>

              <button
                onClick={() => navigate(item.path)}
                className="bg-sky-500 text-white px-6 py-3 rounded-xl hover:bg-sky-600 transition duration-300"
              >
                Manage
              </button>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Dashboard;