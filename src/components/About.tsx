function About() {
  const message = {
    mizo: `TMEZ hi kum 2000-a din Mizo zirlaite pawl, Tirunelveli-a zir mek
  te tan a ni. Kan pawl hi in lam hla taka awm chhunga inzawm tak
  leh chhungkua anga awm theihna atan siam a ni. Kan member-te hi
  ṭhianṭhatna, culture programme, event leh student support hmangin
  kan in ṭanpui tawn thin. TMEZ chuan inzawmna leh Mizo culture
  vawnnunna a ngaih pawimawh ber a ni. Kan member zawng zawng tan
  community nuam tak siam turin kan thawkho a ni.`,

    english: `TMEZ is a student community established in 2000 by students from
    Mizoram studying in Tirunelveli. Our community was formed to bring
    students together and create a sense of family away from home. We
    support one another through friendship, cultural activities,
    events, and student programs. TMEZ promotes unity, connection, and
    the preservation of Mizo culture among students. Together, we
    continue to build a strong and welcoming community for every
    member.`,
  };

  return (
    <section
      id="about"
      className="sticky top-0 z-10 py-20 bg-red-900 min-h-screen rounded-t-[40px] shadow-[0_-8px_40px_rgba(0,0,0,0.12)] pb-[100vh]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-start">
          <div className="text-left">
            <p className="text-lg leading-loose text-slate-600">
              {message.mizo}
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="text-lg leading-loose text-slate-600">
              {message.english}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;