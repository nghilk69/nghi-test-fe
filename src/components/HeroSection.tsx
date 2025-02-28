// src/components/HeroSection.tsx

const HeroSection: React.FC<any> = ({ data }) => {
    return (
        <div className="relative w-full bg-gray-100">
            <video
                className="w-full object-cover h-full"
                autoPlay
                muted
                loop>
                <source src="/assets/hero.mp4" type="video/mp4" />
            </video>
            <div className="nav-hero">
                <div className="container-hero flex">
                    <div className="nav-item">
                        <div className="w-full flex justify-center">
                        <img
                            src="/assets/moutain.svg"
                            alt="logo"
                            className="w-12 h-12 mx-auto mt-10"/>
                        <h4>{ data[0] }</h4>
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="w-full flex justify-center overflow-hidden">
                        <img
                            src="/assets/Fishing-DPvHEzQZ.svg"
                            alt="logo"
                            className="w-12 h-12 mx-auto mt-10"/>
                        <h4>{ data[1] }</h4>
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="w-full flex justify-center">
                        <img
                            src="/assets/aim-2.svg"
                            alt="logo"
                            className="w-12 h-12 mx-auto mt-10"/>
                        <h4>{ data[2] }</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">*/}
            {/*    <h1 className="text-white text-4xl sm:text-6xl font-bold drop-shadow-md">*/}
            {/*        Explorez avec CookMaster*/}
            {/*    </h1>*/}
            {/*</div>*/}
        </div>
    );
};

export default HeroSection;
