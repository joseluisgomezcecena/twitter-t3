import {Button} from "~/components/Button";
import {useSession} from "next-auth/react";
import {ProfileImage} from "~/components/ProfileImage";
import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";

function updateTextAreaSize(textarea?: HTMLTextAreaElement)
{
    if(textarea == null) return;
    textarea.style.height = "0px";
    textarea.style.height = textarea.scrollHeight + "px";
}

export function NewTweetForm()
{
    const session = useSession();
    if (session.status !== "authenticated") return null;

    return <Form />;
}

function Form()
{
    const session = useSession();
    const [inputValue, setInputValue] = useState("")
    const textareaRef = useRef<HTMLTextAreaElement>();

    const inputRef = useCallback((textarea: HTMLTextAreaElement) => {
        updateTextAreaSize(textarea);
        textareaRef.current = textarea;
    }, []);

    useLayoutEffect(() => {
        updateTextAreaSize(textareaRef.current);
    }, [inputValue]);

    if (session.status !== "authenticated") return;

    const profile_image = session.data?.user?.image;

    return (
        <div className="new-tweet-form">
            <form className="flex flex-col gap-2 border-b px-4 py-2" action="">
                <div className="flex items-center gap-4">
                    <ProfileImage src={profile_image} />
                    <textarea
                        ref={inputRef}
                        style={{height:0}}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
                        placeholder="What's happening?"></textarea>
                </div>
                <div className="actions">
                    <Button className="self-end">Tweet</Button>
                </div>
            </form>
        </div>
    );
}


