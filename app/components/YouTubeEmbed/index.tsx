import Head from "next/head";

export default function YouTubeEmbed({ videoId, className = '' }: { videoId: string, className?: string }) {
    return (
        <>
            <Head>
                <meta httpEquiv="Content-Security-Policy" content="frame-src 'self' https://www.youtube.com;" />
            </Head>
            <div className={`relative w-full aspect-video ${className}`}>
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    );
}