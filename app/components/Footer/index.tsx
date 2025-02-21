import SpotifyLogo from "@/public/svg/SpotifyLogo"
import SocialMediaCard from "../card/SocialMediaCard"
import GooglePodcastLogo from "@/public/svg/GooglePodcastLogo"
import AppleMusicLogo from "@/public/svg/AppleMusicLogo"
import AnghamiLogo from "@/public/svg/AnghamiLogo"
import YoutubeLogo from "@/public/svg/YoutubeLogo"
import InstagramLogo from "@/public/svg/InstagramLogo"

const Footer = () => {
    return (
        <div className="h-fit bg-black mt-10 flex flex-col lg:flex-row justify-between p-5">
            <div className="">
                <img src="/MaabarLogo.png" alt="logo" className="w-[100px] h-[50px]" />
                <p className="lg:w-[50ex] text-white break-words">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla at, fugiat delectus maxime asperiores voluptate natus </p>
                <div className="flex gap-3 mt-3">
                    <InstagramLogo className='fill-white w-[4ex]'/>
                    <SpotifyLogo className='fill-white w-[4ex]'/>
                    <GooglePodcastLogo className=' w-[5ex]'/>
                    <AppleMusicLogo className='fill-white w-[4ex]'/>
                    <AnghamiLogo className='fill-white w-[4ex]'/>
                    <YoutubeLogo className='fill-white w-[4ex]'/>
                </div>
            </div>
            <div className="font-bold mt-6 text-white flex text-xl w-full justify-around  gap-10 mr-20">
                <ul className="hidden lg:flex flex-col gap-6">
                    <li>Season 1</li>
                    <li>Season 2</li>
                    <li>Season 3</li>
                </ul>
                <ul className="hidden lg:flex flex-col gap-6 ">
                    <li>Project</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>News</li>
                </ul>
                <div className="flex flex-col gap-6 w-full lg:w-fit">
                    <ul className="flex flex-col gap-1">
                        <li className="text-secondary">Support Maabar</li>
                        <li> Patreon</li>
                    </ul>

                    <ul className="flex flex-col gap-1">
                        <li className="text-secondary">Contact Us</li>
                        <li>email@email.com</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer