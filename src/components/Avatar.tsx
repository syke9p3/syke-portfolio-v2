import Fancybox from "./Fancybox";

const Avatar = ({ src }: { src: string }) => {
    return (
        <Fancybox
            options={{
                Carousel: {
                    infinite: false,
                },
                Thumbs: {
                    type: "classic",
                },
            }}
        >
            <a href={src}
                className="aspect-square w-24 h-24"
                data-fancybox="gallery">
                <img
                    src={src}
                    alt=""
                    className="object-cover w-24 h-24 rounded-md border-white" />
            </a>
        </Fancybox>
    );
}

export default Avatar;