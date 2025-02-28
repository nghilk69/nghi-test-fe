import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Card = ({ item }) => {
    return (
        <div className="bg-white overflow-hidden h-full flex flex-col">
            <img
                src={item.image}
                alt="Offre"
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-start text-center min-h-[180px]">
                <h4 className="card-title text-left">{item?.title}</h4>
                <h2 className="card-tagline text-left">{item?.tagline}</h2>
                <p className="card-description text-left">{ item?.description }</p>
            </div>
        </div>
    );
};

const CardComponent = ({data}) => {
    const cardData = [{
        title: data.cases[0]?.category,
        tagline: data.cases[0]?.tagline,
        description: data.cases[0]?.description,
        image: "/assets/image.svg",
    },
        {
            title: data.cases[1]?.category,
            tagline: data.cases[1]?.tagline,
            description: data.cases[1]?.description,
            image: "/assets/image (1).svg",
        },
        {
            title: data.cases[2]?.category,
            tagline: data.cases[2]?.tagline,
            description: data.cases[2]?.description,
            image: "/assets/image (2).svg",
        },
        {
            title: data.cases[3]?.category,
            tagline: data.cases[3]?.tagline,
            description: data.cases[3]?.description,
            image: "/assets/image (3).svg",
        }]
    return (
        <div className="max-w-5xl mx-auto p-6 bg-white">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-red-500">{data?.title}</h2>
                <span className="btn-see flex cursor-pointer">{data?.more_info} <img src="/assets/ArrowRightCard.svg"/></span>
            </div>

            <Swiper spaceBetween={20} slidesPerView={3} className="mySwiper">
                {cardData.map((item, index) => (
                    <SwiperSlide key={index} className="p-4 h-auto">
                        <Card item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardComponent;
