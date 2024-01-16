
const TourTypeBox = ({label,icon:Icon}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 border-b-2 hover:text-neutral-800 transition cursor-pointer">
            <Icon size={40}/>
            <div className="text-sm font-medium px-6">{label}</div>
        </div>
    );
};

export default TourTypeBox;