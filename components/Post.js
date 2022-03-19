/* eslint-disable @next/next/no-img-element */
import { 
    StarIcon,
    HeartIcon,
    ShareIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    ChatIcon,
    PencilAltIcon,
 } from "@heroicons/react/outline"
function Post({id, username, userImg, img, caption}){
    return (
        <div className="bg-white my-7 border rounded-sm ">
        {/* header */}
            <div className="flex items-center p-5">
                <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-3" alt="" />
                <p className="flex-1 font-bold">{username}</p>
                <div className="flex space-x-4">
                <p className="bg-blue-500 hover:bg-blue-700 text-white 
                font-bold py-1 px-2 rounded-full">Follow</p>
                <DotsHorizontalIcon className="h-5 mt-2" />
                <ShareIcon className="h-5 mt-2"/>
                </div>
            </div>
        {/* img */}
        <div className="overflow-scroll overflow-x-hidden max-h-[1000px]  ">
            <img src={img} className="object-cover w-full" alt="" />
            <p className="p-5 truncate">
            <span className="font-bold mr-1">{username}</span>
            {caption}
            </p>
        </div>
        {/* buttons  */}
        <div className="flex justify-between px-4 pt-4 mb-5">
            <form className="flex items-center">
            <PencilAltIcon className="h-7"/>
            <input className="italic text-slate-400 block w-full text-sm text-slate-500
            mr-4 py-2 px-4 rounded-full border-0 text-sm font-semi-bold
            bg-violet-50 text-violet-700 hover:bg-violet-100" 
            placeholder="Any Comment..." type="text" name="search"/>
            <button className="font-semibold text-blue-400">Post</button>
            </form>
            <div className="flex space-x-4">
                <HeartIcon className="btn" />
                <StarIcon className="btn"/>
                <ChatIcon className="btn"/>
            </div>
        </div>
        
        {/* comments */}
        </div>
    )
}

export default Post