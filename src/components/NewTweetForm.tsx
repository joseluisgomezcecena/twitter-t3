import {Button} from "~/components/Button";
import {useSession} from "next-auth/react";
import {ProfileImage} from "~/components/ProfileImage";
export function NewTweetForm()
{
    const session = useSession();

    if (session.status !== "authenticated") return;

    const profile_image = session.data?.user?.image;

        return (
        <div className="new-tweet-form">
            <form className="flex flex-col gap-2 border-b px-4 py-2" action="">
                <div className="flex items-center gap-4">
                    <ProfileImage src={profile_image} />
                    <textarea className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none" placeholder="What's happening?"></textarea>
                </div>
                <div className="actions">
                    <Button className="self-end">Tweet</Button>
                </div>
            </form>
        </div>
    );
}
