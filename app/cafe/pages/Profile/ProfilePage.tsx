"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store";

export const ProfilePage = () => {
  const users = useSelector(
    (state: RootState) => state.userDetails.userDetails,
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-950 mb-12">
        Profile
      </h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-950 text-white flex items-center justify-center text-xl font-semibold">
                {user.firstName?.charAt(0)}
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 capitalize">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-sm text-gray-500">{user.gmail}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 my-6" />
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800">{user.gmail}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Mobile</p>
                <p className="font-medium text-gray-800">{user.mobile}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
