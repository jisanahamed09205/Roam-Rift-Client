
const OverView = () => {
    return (
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div>
                        <iframe className='w-full h-[300px] rounded-lg' src="https://www.youtube.com/embed/PtWeqZsuzpE?si=AVe8AF2zzjr9gKXu" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <p className="text-xl font-semibold text-center mt-3">Our London Tour Package</p>
                    </div>
                </div>
                <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div>
                        <iframe className='w-full h-[300px] rounded-lg'  src="https://www.youtube.com/embed/WhQapHmaYYE?si=1I3h2EU879kkVNhO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <p className="text-xl font-semibold text-center mt-3">Our Vietnam Tour Package</p>
                    </div>
                </div>
                <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div>
                        <iframe className='w-full h-[300px] rounded-lg'  src="https://www.youtube.com/embed/cdgLDZSeYUw?si=VmmIqjt4xu5Whsl-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <p className="text-xl font-semibold text-center mt-3">Our Taiwan Tour Package</p>
                    </div>
                </div>
                <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div>
                        <iframe className='w-full h-[300px] rounded-lg' src="https://www.youtube.com/embed/LCqK7wZd2Pk?si=ssVE5q4yCPMWk7ZP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <p className="text-xl font-semibold text-center mt-3">Our Bali, Indonesia Tour Package</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverView;