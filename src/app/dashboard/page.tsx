"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") redirect("/login");

  return (
    <div className="flex min-h-screen bg-[#f0f4ff]">
      {/* Sidebar */}
      <div className="w-full max-w-xs bg-white border-r border-gray-200 p-6 flex flex-col gap-4 shadow-md">
        <h1 className="text-2xl font-bold text-[#1e4dfd] mb-4 text-center">
          Dashboard
        </h1>
        <button className="px-4 py-2 rounded-lg text-left bg-[#1e4dfd] text-white">
          👤 Current User
        </button>
      </div>

      {/* Main Panel */}
      <div className="flex-1 p-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl mx-auto space-y-6">
          {/* Current User Info */}
          <div>
            <h2 className="text-xl font-semibold text-[#1e4dfd] mb-4">
              Current User
            </h2>
            <p className="text-gray-700 mb-2">
              👤 <strong>Name:</strong> {session?.user?.name || "N/A"}
            </p>
            <p className="text-gray-700 mb-2">
              📧 <strong>Email:</strong> {session?.user?.email || "N/A"}
            </p>
            <p className="text-gray-700 mb-2">
              🔑 <strong>Referral Code:</strong>{" "}
              {session?.user?.name
                ? session.user.name.replace(/\s+/g, "").toLowerCase() + "2025"
                : "username2025"}
            </p>
            <p className="text-gray-700">
              💰 <strong>Total Donations Raised:</strong> ₹50,000
            </p>
          </div>

          {/* Rewards Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#1e4dfd] mb-3">
              🎁 Rewards / Unlockables
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Exclusive donor badge</li>
              <li>Early access to foundation events</li>
              <li>Feature in monthly donor spotlight</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
