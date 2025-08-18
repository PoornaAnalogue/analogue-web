function Guarantees() {
  const guarantees = [
    {
      text: "Non-Disclosure Agreement (NDA) that will ensure privacy",
      bg: "bg-blue-100",
      textColor: "text-[#2C5A88]",
    },
    {
      text: "Budget-friendly design and development",
      bg: "bg-purple-100",
      textColor: "text-[#26175C]",
    },
    {
      text: "Support from a proven team of experts",
      bg: "bg-[#FFF3E3]",
      textColor: "text-[#5E3B0B]",
    },
    {
      text: "Quick development of the mobile application based on your need",
      bg: "bg-green-100",
      textColor: "text-[#276014]",
    },
    {
      text: "Development of a user-friendly and interactive app",
      bg: "bg-[#FFE3FA]",
      textColor: "text-[#2C5A88]",
    },
    {
      text: "Fault-free execution, even during concurrent operation by different users",
      bg: "bg-[#FFE3E3]",
      textColor: "text-[#570F0F]",
    },
    { text: "Swift response", bg: "bg-[#FBFFE3]", textColor: "text-[#5F6E0B]" },
    {
      text: "Custom-tailored applications suiting your needs",
      bg: "bg-[#E3FFF5]",
      textColor: "text-[#106849]",
    },
  ];

  const row1 = guarantees.slice(0, 3);
  const row2 = guarantees.slice(3, 6);
  const row3 = guarantees.slice(6, 8);

  const renderRow = (items) => (
    <div className="mt-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`${item.bg} ${item.textColor} 
            p-3 xs:p-4 md:p-5 
            rounded-xl border border-[#B7B7B7] shadow-lg 
            text-xs xs:text-sm sm:text-base md:text-lg 
            font-medium flex items-center justify-center text-center`}
          style={{ fontFamily: "Urbanist" }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );


  
  return (
    <section className="px-4 xs:px-6 lg:px-20 py-10 sm:py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}

        <h1
          className="
    xs:text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl
    font-medium text-[#0D6EFD] leading-snug
    text-center lg:text-left
    whitespace-normal lg:whitespace-nowrap
    overflow-hidden
  "
        >
          Analogue IT Solutions – Best Mobile App Development Application
          Services in Hyderabad
        </h1>

        {/* Paragraph */}
        <p
          className="
            mt-4 text-xs xs:text-sm sm:text-base md:text-lg 
            text-[#7B7E86] leading-relaxed font-medium
            text-justify sm:text-left
          "
          style={{ fontFamily: "Urbanist" }}
        >
          Analogue has achieved the name and fame of being the best mobile app
          development company in Hyderabad, by organising and formulating a
          client-centric process. Our teams will collaborate, brainstorm, and
          get the leading strategies for planning and creating a mobile
          application.
          <br />
          We are dedicated to crafting mobile applications that are engaging,
          intuitive, well-structured, innovative, and distinctive. Our goal is
          to capture the essence and ambiance of the respective business through
          a blend of essential design patterns and sophisticated style elements.
          Being the premier mobile app development company in Hyderabad, India.
        </p>

        {/* Section Subheading */}
        <p
          className="
            mt-6 mb-8 font-semibold 
            text-sm xs:text-base sm:text-lg md:text-xl
            text-center text-blue-600
          "
        >
          Analogue guarantees the following:
        </p>

        {/* First 2 rows */}
        {renderRow(row1)}
        {renderRow(row2)}

        {/* Third row - centered 2 items */}
        <div className="flex justify-center mt-4">
          <div className="grid grid-cols-2 xs:grid-cols-2 gap-4 max-w-3xl w-full">
            {row3.map((item, idx) => (
              <div
                key={idx}
                className={`${item.bg} ${item.textColor} 
                  p-3 xs:p-4 md:p-5 
                  rounded-xl border border-[#B7B7B7] shadow-lg 
                  text-xs xs:text-sm sm:text-base md:text-lg 
                  font-medium flex items-center justify-center text-center`}
                style={{ fontFamily: "Urbanist" }}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guarantees;
