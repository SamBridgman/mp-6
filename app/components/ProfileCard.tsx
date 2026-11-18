import type { GoogleUser } from "@/lib/google";

export default function ProfileCard({ user }: { user: GoogleUser }) {
    return (
        <div className="bg-white rounded-2xl shadow p-8 text-center space-y-3">
            <img
                src={user.picture}
                alt={user.name}
                className="w-24 h-24 rounded-full mx-auto"
            />
            <h1 className="text-xl font-semibold">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
        </div>
    );
}