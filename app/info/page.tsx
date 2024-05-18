export default function Info() {
    return (
        <div>
            <div className="w-max-[1000px] h-[688px] mt-2 mx-1 bg-gray-400 rounded-2xl"> 
                <h1 className="absolute mt-7 ml-10 text-7xl"> Information for exhibition prize </h1>
                <a href="/" className="absolute button right-5 top-5 bg-gray-400 text-2xl rounded-5xl"> back </a>
                <div className="absolute line mt-28 ml-10"></div>

              <div className="flex flex-row">
                <div className="border-solid border-6 w-[400px]">
                    <div className="absolute mt-40 ml-10">
                        <img src="tul_info.svg" className="w-[300px]"/>
                        <div className="mt-6 ml-5 space-y-3"> 
                            <div className="text-3xl">Tul -rate 0%- </div>
                            <div className="text-3xl">Water element</div>
                        </div>
                    </div>
                </div>

                <div className="border-solid border-6">
                    <div className="absolute mt-40 ml-10">
                        <img src="chan_info.svg" className="w-[300px]"/>
                        <div className="mt-6 ml-5 space-y-3"> 
                            <div className="text-3xl">Chan -rate 0%- </div>
                            <div className="text-3xl">Wind Element</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col ml-96">
                    <div className="absolute mt-40 ml-10 flex flex-row">
                        <img src="machimalegend_piece.svg" className="w-[200px]"/>
                        <div className="mt-6 ml-5 space-y-3"> 
                            <div className="text-3xl">piece of special item</div>
                            <div className="text-3xl">-rate 10%-</div>
                        </div>
                    </div>

                    <div className="absolute mt-40 ml-10 flex flex-row tag-mid-down">
                        <img src="machimarare_piece.svg" className="w-[200px]"/>
                        <div className="mt-6 ml-5 space-y-3"> 
                            <div className="text-3xl">piece of story</div>
                            <div className="text-3xl">-rate 20%-</div>
                        </div>
                    </div>

                    <div className="absolute mt-40 ml-10 flex flex-row tag-mid-downmak">
                        <img src="machimasalt_piece.png" className="w-[200px]"/>
                        <div className="mt-6 ml-5 space-y-3"> 
                            <div className="text-3xl">piece of snack</div>
                            <div className="text-3xl">-rate 70%-</div>
                        </div>
                    </div>
                </div>
              </div>
            </div>       
        </div>
    );
}