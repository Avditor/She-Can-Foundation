// "use client"

// import { useSession } from "next-auth/react"
// import { redirect } from "next/navigation"
// import { useState } from "react"

// export default function Dashboard() {
//   const { data: session, status } = useSession()
//   const [view, setView] = useState<"current" | "all">("current")

//   if (status === "loading") return <p>Loading...</p>
//   if (status === "unauthenticated") redirect("/login")

//   // Dummy users list
//   const allUsers = [
//     { name: "Avni Kanishk", email: "avni@example.com" },
//     { name: "Mayank Thapliyal", email: "mayank@example.com" },
//     { name: "Jane Doe", email: "jane@example.com" },
//     { name: "John Smith", email: "john@example.com" },
//   ]

//   return (
//     <div className="flex min-h-screen bg-[#f0f4ff]">
//       {/* Left Sidebar */}
//       <div className="w-full max-w-xs bg-white border-r border-gray-200 p-6 flex flex-col gap-4 shadow-md">
//         <h1 className="text-2xl font-bold text-[#1e4dfd] mb-4 text-center">Dashboard</h1>
//         <button
//           className={`px-4 py-2 rounded-lg text-left ${view === "current" ? "bg-[#1e4dfd] text-white" : "bg-gray-100 text-gray-800"}`}
//           onClick={() => setView("current")}
//         >
//           👤 Current User
//         </button>
//         <button
//           className={`px-4 py-2 rounded-lg text-left ${view === "all" ? "bg-[#1e4dfd] text-white" : "bg-gray-100 text-gray-800"}`}
//           onClick={() => setView("all")}
//         >
//           👥 All Users
//         </button>
//       </div>

//       {/* Right Panel */}
//       <div className="flex-1 p-10">
//         {view === "current" ? (
//           <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl mx-auto">
//             <h2 className="text-xl font-semibold text-[#1e4dfd] mb-4">Current User</h2>
//             <p className="text-gray-700 mb-2">👤 <strong>Name:</strong> {session?.user?.name || "N/A"}</p>
//             <p className="text-gray-700">📧 <strong>Email:</strong> {session?.user?.email}</p>
//           </div>
//         ) : (
//           <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto overflow-auto">
//             <h2 className="text-xl font-semibold text-[#1e4dfd] mb-4">All Users</h2>
//             <table className="min-w-full table-auto border border-gray-300">
//               <thead className="bg-[#eaf0ff]">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Name</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Email</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {allUsers.map((user, index) => (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 border-b text-gray-800">{user.name}</td>
//                     <td className="px-6 py-4 border-b text-gray-600">{user.email}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [view, setView] = useState<"current" | "all">("current");
  const [users, setUsers] = useState<User[]>([]);

  

  useEffect(() => {
    if (view === "all") {
      fetch("/api/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error("Failed to load users", err));
    }
  }, [view]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") redirect("/login");

  return (
    <div className="flex min-h-screen bg-[#f0f4ff]">
      {/* Sidebar */}
      <div className="w-full max-w-xs bg-white border-r border-gray-200 p-6 flex flex-col gap-4 shadow-md">
        <h1 className="text-2xl font-bold text-[#1e4dfd] mb-4 text-center">Dashboard</h1>
        <button
          className={`px-4 py-2 rounded-lg text-left ${
            view === "current" ? "bg-[#1e4dfd] text-white" : "bg-gray-100 text-gray-800"
          }`}
          onClick={() => setView("current")}
        >
          👤 Current User
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-left ${
            view === "all" ? "bg-[#1e4dfd] text-white" : "bg-gray-100 text-gray-800"
          }`}
          onClick={() => setView("all")}
        >
          👥 All Users
        </button>
      </div>

      {/* Main Panel */}
      <div className="flex-1 p-10">
        {view === "current" ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl mx-auto">
            <h2 className="text-xl font-semibold text-[#1e4dfd] mb-4">Current User</h2>
            <p className="text-gray-700 mb-2">
              👤 <strong>Name:</strong> {session?.user?.name || "N/A"}
            </p>
            <p className="text-gray-700">
              📧 <strong>Email:</strong> {session?.user?.email || "N/A"}
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto overflow-auto">
            <h2 className="text-xl font-semibold text-[#1e4dfd] mb-4">All Users</h2>
            <table className="min-w-full table-auto border border-gray-300">
              <thead className="bg-[#eaf0ff]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b text-gray-800">{user.name}</td>
                    <td className="px-6 py-4 border-b text-gray-600">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
