import { useState } from "react";

const Main = () => {
    const [selectedGlasses, setSelectedGlasses] = useState({
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    });

    const arrGlasses = [
        {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./glassesImage/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
        },
        {
            id: 2,
            price: 50,
            name: "GUCCI G8759H",
            url: "./glassesImage/v2.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
        },
        {
            id: 3,
            price: 30,
            name: "DIOR D6700HQ",
            url: "./glassesImage/v3.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
        },
        {
            id: 4,
            price: 70,
            name: "DIOR D6005U",
            url: "./glassesImage/v4.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
        },
        {
            id: 5,
            price: 40,
            name: "PRADA P8750",
            url: "./glassesImage/v5.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
        },
        {
            id: 6,
            price: 60,
            name: "PRADA P9700",
            url: "./glassesImage/v6.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
        },
        {
            id: 7,
            price: 80,
            name: "FENDI F8750",
            url: "./glassesImage/v7.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
        },
        {
            id: 8,
            price: 100,
            name: "FENDI F8500",
            url: "./glassesImage/v8.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
        },
        {
            id: 9,
            price: 60,
            name: "FENDI F4300",
            url: "./glassesImage/v9.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
        },
    ];

    return (
        <div
            className="mx-auto mb-8 p-4"
            style={{
                backgroundImage: 'url("/glassesImage/background.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh'
            }}
        >
            <div className="flex justify-center items-center mt-11 mb-8">
                <div className="relative flex flex-col justify-center items-center">
                    <img className="rounded-lg shadow-lg" width={300} src="./glassesImage/model.jpg" alt="Model" />
                    <img className="absolute top-23" width={150} src={selectedGlasses.url} alt="Glasses"/>
                    <div className="absolute bottom-0 bg-gray-500 bg-opacity-75 p-4 rounded-lg w-full text-center">
                        <h3 className="text-white font-bold text-lg">
                            {selectedGlasses.name}
                        </h3>
                        <h6 className="text-yellow-300 font-bold text-md">
                            {selectedGlasses.price}$
                        </h6>
                        <p className="text-white text-sm mt-2">
                            {selectedGlasses.desc}
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white mt-28 p-6 rounded-lg shadow-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {arrGlasses.map((item, index) => (
                    <button
                        onClick={() => setSelectedGlasses(item)}
                        key={index}
                        className="flex justify-center items-center p-4 rounded-lg border-2 hover:border-pink-600 shadow-xl transform transition-transform hover:scale-105"
                    >
                        <img
                            className="rounded-md"
                            width={100}
                            src={item.url}
                            alt={item.name}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Main;
