import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GallerySection = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-out',
            delay: 150,
        });
    }, [])

    return (

        <div data-aos="fade-up" className='container mx-auto my-12'>
            <div className='flex flex-col justify-center items-center mb-6'>
                <h2 className="text-2xl lg:text-4xl font-bold mb-4">Toy Car Gallery</h2>
                <p className="text-gray-600 lg:max-w-2xl text-center">
                    Welcome to our Toy Car Gallery section! Here, you'll find a collection of amazing toy cars from different eras, ranging from classic vintage models to futuristic concept cars. Browse through our gallery and immerse yourself in the world of miniature automotive wonders.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                    <img className="h-40 lg:h-64 max-w-full rounded-lg" src="https://img.freepik.com/free-vector/children-repairing-car-together_1308-77962.jpg?w=1380&t=st=1684644231~exp=1684644831~hmac=83517cd1e391536669fa84d8b75598927c74fe562044610caab310aa5d9170b1" alt="" />
                </div>
                <div>
                    <img className="h-40 lg:h-64 max-w-full rounded-lg" src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131060.jpg?w=1380&t=st=1684644247~exp=1684644847~hmac=f193d2a14db88bdb535427e0b251ba4470120d33579bd4d314ab4119b2c5591f" alt="" />
                </div>
                <div>
                    <img className="h-40 lg:h-64 max-w-full rounded-lg" src="https://img.freepik.com/free-photo/full-shot-cute-kid-sitting-floor_23-2149307056.jpg?w=1380&t=st=1684644252~exp=1684644852~hmac=736ea06dc7f607c8fbdfe85c691521bd4c865bcc0f3c2745745300a614e11347" alt="" />
                </div>
                <div>
                    <img className="h-40 lg:h-64 max-w-full rounded-lg" src="https://img.freepik.com/free-vector/doodle-kid-playing-cartoon-character-isolated_1308-65745.jpg?w=1380&t=st=1684644258~exp=1684644858~hmac=3452524f0d452dc5413eca5f66a688624b75f9e4e5c7b08fd8802461751bb941" alt="" />
                </div>
                <div>
                    <img className="h-40 lg:h-64 max-w-full rounded-lg" src="https://img.freepik.com/free-photo/baby-doing-his-first-steps_23-2149235223.jpg?w=1380&t=st=1684644265~exp=1684644865~hmac=7fbcc313d10b2be915f6338c4c1e7a8d2fd486cfe6a7a603fdd4b94eb32b489c" alt="" />
                </div>
                <div>
                    <img className="h-40 lg:h-64 max-w-full rounded-lg" src="https://img.freepik.com/free-vector/scene-with-many-toys-shelf-muslim-boy-reading-book_1308-39155.jpg?w=900&t=st=1684644301~exp=1684644901~hmac=d95cc9142a066ae4b9600423551cc907622d55b85143093eab8f6130de7c33ab" alt="" />
                </div>
                <div>
                    <img className="h-40 lg:h-64 max-w-full rounded-lg" src="https://img.freepik.com/free-photo/close-up-child-playing-her-room_23-2149208189.jpg?w=1380&t=st=1684644311~exp=1684644911~hmac=755b8e26e0e888a91e2c4bd68272ee06ad8439b42052ad79bb4513082b25b39a" alt="" />
                </div>
                <div>
                    <img className="h-40 lg:h-64 max-w-full rounded-lg" src="https://img.freepik.com/free-photo/little-boy-wearing-blue-helmet-sitting-playing-with-construction-equipment-toy-white_1150-15588.jpg?w=1380&t=st=1684644330~exp=1684644930~hmac=a60b9b40d6f2440b025d89c80d65454a147e46d13310d6bb0a47c634fe58a2de" alt="" />
                </div>
                <div>
                    <img className="h-40 lg:h-64 max-w-full rounded-lg" src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?w=1380&t=st=1684644203~exp=1684644803~hmac=863bb0befc2727b7d6f1a64fd3f20a06811f7437a9413ff7ebe6c827c9733492" alt="" />
                </div>
                <div>
                    <img className="h-40 lg:h-64 max-w-full rounded-lg" src="https://img.freepik.com/free-photo/boy-girl-home-playing-with-toys_23-2148630634.jpg?w=1380&t=st=1684644689~exp=1684645289~hmac=3a97356c5bd31702aedd6673a607ce358632ee4f6a461a6df1780ba7cb0c914f" alt="" />
                </div>
                <div>
                    <img className="h-40 lg:h-64 max-w-full rounded-lg" src="https://img.freepik.com/free-photo/full-shot-boy-playing-home_23-2150286171.jpg?w=1380&t=st=1684644703~exp=1684645303~hmac=3f50a8683d326f2d384fdb416c20b65ac75c252b0c84dc7b83ac77935890e19e" alt="" />
                </div>
                <div>
                    <img className="h-40 lg:h-64 max-w-full rounded-lg" src="https://img.freepik.com/free-photo/cute-playing-girl_1098-17159.jpg?w=1380&t=st=1684644716~exp=1684645316~hmac=a607fbfbc53e856d6c3b4b9541f6af8386b1fd85bc34c3b6080214c18674d97e" alt="" />
                </div>
            </div>
        </div>

    );
};

export default GallerySection;