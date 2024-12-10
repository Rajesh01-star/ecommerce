import React from "react";

export default function ConcertTable() {
  const concerts = [
    { date: "JUL 16", place: "DETROIT, MI", musicName: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL 19", place: "TORONTO, ON", musicName: "BUDWEISER STAGE" },
    { date: "JUL 22", place: "BRISTOW, VA", musicName: "JIGGY LUBE LIVE" },
    { date: "JUL 29", place: "PHOENIX, AZ", musicName: "AK-CHIN PAVILION" },
    { date: "AUG 2", place: "LAS VEGAS, NV", musicName: "T-MOBILE ARENA" },
    { date: "AUG 7", place: "CONCORD, CA", musicName: "CONCORD PAVILION" },
  ];

  return (
    <section className="p-8 bg-gray-100 mb-40">
      <h2 className="text-2xl font-bold text-center mb-6">tours</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white shadow-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Place</th>
              <th className="py-3 px-4 text-left">Music Name</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {concerts.map((concert, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{concert.date}</td>
                <td className="py-3 px-4">{concert.place}</td>
                <td className="py-3 px-4">{concert.musicName}</td>
                <td className="py-3 px-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                    Buy Tickets
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
