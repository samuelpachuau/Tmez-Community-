function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
            About Us
          </h1>

          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Manage About Us section content.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md p-4 sm:p-6 md:p-10">
          
          {/* Two Columns on Desktop, One Column on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            
            {/* English */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
                English Content
              </h2>

              <textarea
                rows={12}
                placeholder="Write English About Us content..."
                className="w-full border border-slate-300 rounded-xl sm:rounded-2xl p-3 sm:p-5 outline-none focus:border-sky-500 resize-none"
              />
            </div>

            {/* Mizo */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
                Mizo Content
              </h2>

              <textarea
                rows={12}
                placeholder="Ziaktu chhunga Mizo content..."
                className="w-full border border-slate-300 rounded-xl sm:rounded-2xl p-3 sm:p-5 outline-none focus:border-sky-500 resize-none"
              />
            </div>

          </div>

          {/* Save Button */}
          <div className="mt-8">
            <button className="w-full md:w-auto bg-sky-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-sky-600 transition duration-300">
              Save Changes
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default AboutUs;