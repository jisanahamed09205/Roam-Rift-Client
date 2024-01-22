
const OverView = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PtWeqZsuzpE?si=AVe8AF2zzjr9gKXu" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className="text-xl font-semibold text-center mt-3">Our London Tour Package</p>
            </div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WhQapHmaYYE?si=1I3h2EU879kkVNhO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className="text-xl font-semibold text-center mt-3">Our Vietnam Tour Package</p>
            </div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cdgLDZSeYUw?si=VmmIqjt4xu5Whsl-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className="text-xl font-semibold text-center mt-3">Our Taiwan Tour Package</p>
            </div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LCqK7wZd2Pk?si=ssVE5q4yCPMWk7ZP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className="text-xl font-semibold text-center mt-3">Our Bali, Indonesia Tour Package</p>
            </div>
        </div>
    );
};

export default OverView;