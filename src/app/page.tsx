export default function Home() {
  const users = [
    {
      name: "You",
      status: "Paid",
      avatarSeed: "you",
      avatarBg: "b6e3f4",
      iconColor: "text-green-600",
      textColor: "font-medium",
    },
    {
      name: "Olabode",
      status: "Paid",
      avatarSeed: "olabode",
      avatarBg: "c7a2ff",
      iconColor: "text-green-600",
      textColor: "font-medium",
    },
    {
      name: "Lukmon",
      status: "Paid",
      avatarSeed: "lukmon",
      avatarBg: "ffd93d",
      iconColor: "text-green-600",
      textColor: "font-medium",
    },
    {
      name: "Hope",
      status: "Unpaid",
      avatarSeed: "hope",
      avatarBg: "ffb3ba",
      iconColor: "text-orange-600",
      textColor: "font-medium",
    },
    {
      name: "Dara",
      status: "Unpaid",
      avatarSeed: "dara",
      avatarBg: "ffdfba",
      iconColor: "text-orange-600",
      textColor: "font-medium",
    },
  ];

  return (
    <div className="bg-[#e6e7eb] h-screen flex items-center justify-center">
      <div className="max-w-7xl h-[72vh] bg-[#f8f9fd] p-6 rounded-2xl mx-auto">
        <div className="receipt-outlet-container">
          <div className="receipt-slot"></div>
        </div>
        <div className="mx-6 bg-white mt-[-75px] z-10 shadow-2xl rounded-sm p-2 receipt-shape receipt-emerging">
          <div className="dispersed-shadow z-20 shadow-2xl h-[20px] bg-black"></div>
          <div className="text-center font-mono leading-3">
            <p>------------------------------</p>
            <p className="text-sm">Trip Invoice - Japan Sumer 2025</p>
            <p>------------------------------</p>
          </div>
          <div className="text-sm leading-2 mt-3">
            <div className="bg-white p-2 rounded-sm flex justify-between">
              <p className="text-gray-500">Total</p>
              <p className="font-medium text-black">$30,000</p>
            </div>
            <div className="bg-white p-2 rounded-sm flex justify-between">
              <p className="text-gray-500">Per Person</p>
              <p className="font-medium text-black">$6,000</p>
            </div>
          </div>

          <div className="mt-4 space-y-2 mx-2">
            {users.map((user, index) => (
              <div
                key={user.name}
                className={`flex items-center justify-between py-2 ${
                  index < users.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatarSeed}&backgroundColor=${user.avatarBg}`}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-xs font-medium text-gray-800">
                    {user.name}
                  </span>
                </div>
                <div className="flex items-center border border-gray-200 space-x-1 px-2 py-1 rounded-md">
                  {user.status === "Paid" ? (
                    <svg
                      className={`w-4 h-4 ${user.iconColor}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className={`w-4 h-4 ${user.iconColor}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <span className={`text-xs ${user.textColor}`}>
                    {user.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-white py-2 px-3 rounded-lg border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-medium text-gray-800">
                Payment Status
              </h3>
              <span className="text-md font-bold text-black">UNPAID</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="bg-white p-1 shadow-sm rounded-full">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="w-full h-1.5 bg-black"></div>
              
              <div className="bg-white p-1 shadow-sm rounded-full">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full h-1.5 bg-black"></div>

              <div className="bg-white p-1 shadow-sm rounded-full">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full h-1.5 bg-black"></div>

              <div className="bg-white p-1 shadow-sm rounded-full">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>

              <div className="w-full h-1.5 bg-gray-100"></div>
              <div className="bg-white p-1 shadow-sm rounded-full">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-2 mt-3">
            <button className="flex-1 bg-gray-800 cursor-pointer text-white py-2 px-3 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-700 transition-colors">
              Send Reminder
            </button>
            <button className="flex-1 bg-white border border-gray-300 text-gray-700 cursor-pointer py-2 px-3 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors">
              Download Invoice
            </button>
          </div>
          </div>
      </div>
    </div>
  );
}
