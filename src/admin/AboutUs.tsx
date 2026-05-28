function AboutUs() {

  return (

    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">

        <div className="max-w-5xl mx-auto px-8 py-6">

          <h1 className="text-4xl font-bold text-slate-800">
            About Us
          </h1>

          <p className="text-slate-500 mt-2">
            Manage About Us section content.
          </p>

        </div>

      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-8 py-12">

        <div className="bg-white rounded-3xl shadow-md p-10 space-y-10">

          {/* English */}
          <div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              English Content
            </h2>

            <textarea
              rows={8}
              placeholder="Write English About Us content..."
              className="w-full border border-slate-300 rounded-2xl p-5 outline-none focus:border-sky-500 resize-none"
            />

          </div>

          {/* Mizo */}
          <div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Mizo Content
            </h2>

            <textarea
              rows={8}
              placeholder="Ziaktu chhunga Mizo content..."
              className="w-full border border-slate-300 rounded-2xl p-5 outline-none focus:border-sky-500 resize-none"
            />

          </div>

          {/* Save Button */}
          <button className="bg-sky-500 text-white px-8 py-4 rounded-2xl hover:bg-sky-600 transition duration-300">
            Save Changes
          </button>

        </div>

      </main>

    </div>

  );
}

export default AboutUs;