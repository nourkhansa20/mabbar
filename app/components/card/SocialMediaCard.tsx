import Image from 'next/image';

interface SocialMediaCardProps {
    iconSize?: number; 
    containerClassName?: string; 
    iconClassName?: string; 
}

const SocialMediaCard = ({ iconSize = 40, containerClassName, iconClassName }: SocialMediaCardProps) => {
    return (
        <div className={`flex gap-9 ${containerClassName}`}>
            <Image src="/logo/spotify-logo.png" alt="spotify" width={iconSize} height={iconSize} className={iconClassName} />
            <Image src="/logo/googlepodcasts-logo.png" alt="google_podcast" width={iconSize} height={iconSize} className={iconClassName} />
            <Image src="/logo/applepodcast-logo.png" alt="apple_podcast" width={iconSize} height={iconSize} className={iconClassName} />
            <Image src="/logo/anghami-logo.png" alt="anghami" width={iconSize} height={iconSize} className={iconClassName} />
            <Image src="/logo/youtube-logo.png" alt="youtube" width={iconSize} height={iconSize} className={iconClassName} />
        </div>
    );
};

export default SocialMediaCard;