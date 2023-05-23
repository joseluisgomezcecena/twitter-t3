import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";


function SideNav()
{
    const session = useSession();
    const user = session?.data?.user;


    return (
        <div className="min-h-screen w-64 bg-gray-800">
            <div className="flex items-center justify-center mt-10">
                <div className="flex items-center">
                    <span className="text-white text-2xl mx-2 font-semibold">tRPC</span>
                </div>
            </div>
            <nav className="mt-10 sticky top-0">

                <Link href="/" className="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100">
                    <span className="mx-3">Home</span>
                </Link>


                {user != null && (
                    <Link href={`/profiles/${user.id}`} className="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100">
                        <span className="mx-3">Profile</span>
                    </Link>
                )}


                {user != null && (
                    <button onClick={() => void signOut()} className="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100">
                        <span className="mx-3">Logout</span>
                    </button>            
                )}

                {user == null && (
                    <button onClick={() => void signIn()} className="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100">
                        <span className="mx-3">Login</span>
                    </button>
                )}


            </nav>
        </div>
    );
}

export default SideNav;