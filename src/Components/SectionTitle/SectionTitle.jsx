
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center my-8">
            <p className="font-Playpen mb-3">---{subHeading}---</p>
            <h3 className="font-Fell text-2xl font-bold">{heading}</h3>
        </div>
    );
};

export default SectionTitle;