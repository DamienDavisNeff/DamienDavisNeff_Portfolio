const thumbnailImages = [
    "/images/Thumbnails/Chapter 1/Ransom.jpg",
    "/images/Thumbnails/Chapter 1/Did It Again.jpg",
    "/images/Thumbnails/Chapter 1/Silence SMG.jpg",
    "/images/Thumbnails/Chapter 2/Righteous Alt.jpg",
    "/images/Thumbnails/Chapter 4/Chapter 4 Duos 1.jpg",
    "/images/Thumbnails/Chapter 4/Chapter 4 FNCS 2.jpg",
    "/images/Thumbnails/Grand Theft Auto/Unstoppable.webp",
];
const bannerImages = [
    "/images/Banners/Fade/Twitter.jpg",
    "/images/Banners/Spiro/Twitter.jpg",
    "/images/Banners/TMoose/Twitter.jpg",
    "/images/Banners/YaGami/Twitter.webp",
]
PickRandomImage(thumbnailImages,document.getElementsByClassName("preview-images-item-picker"));
PickRandomImage(bannerImages,document.getElementsByClassName("preview-images-item-picker-banner"));