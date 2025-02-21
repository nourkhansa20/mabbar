import YouTubeEmbed from "../YouTubeEmbed"
import SocialMediaCard from "./SocialMediaCard"

const PodcastCard = ({ videoId, title, desc }: { videoId?: string, title?: string, desc?: string }) => {
    return (
        <div className=" flex flex-col gap-3 p-3 border border-black lg:w-[55ex] w-[43ex] ">
            <YouTubeEmbed videoId="Jq09wcYC4_E" className="h-[35ex]" />
            <h3 className="font-bold text-xl">S1 Special  EP09 | Inside Job - Season Final</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, saepe. Recusandae aperiam voluptatem nulla placeat, excepturi repudiandae minus dicta hic suscipit nesciunt voluptates architecto sapiente temporibus molestias corporis nihil? Repellat.</p>
            <hr />
            <div className="flex justify-between">
                <span className="font-thin lg:text-xl">Listen Now </span>
                <SocialMediaCard iconSize={28} containerClassName={'gap-[2ex]'} />
            </div>
        </div>
    )
}

export default PodcastCard