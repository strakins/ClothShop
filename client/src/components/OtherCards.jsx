<div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
            <div className="relative hover:scale-110 transition ease-in-out">
                <img className="w-fit h-64" src={image[0]} alt="Product Image" />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                    SALE
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{name}</h3>
                {/* <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                    vel eros fermentum faucibus sit amet euismod lorem.</p> */}
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{currency} {price}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>