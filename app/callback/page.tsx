import { fetchUser, type GoogleUser } from "@/lib/google";
import ProfileCard from "../components/ProfileCard";
import {redirect} from "next/navigation";

type Props = {
    searchParams: Promise<{ code?: string; error?: string }>;
};

export default async function CallbackPage({ searchParams }: Props) {
    const { code, error } = await searchParams;

    let user: GoogleUser | null = null;
    if (!error && code ) {
        try {
            user = await fetchUser(code);
        } catch {
            redirect('/')
        }
    }


    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
            {user ? (
                <ProfileCard user={user} />
            ) : (
                <div className="text-center space-y-4">
                    <p className="text-red-600">Sign-in failed or expired.</p>
                </div>
            )}
        </main>
    );
}