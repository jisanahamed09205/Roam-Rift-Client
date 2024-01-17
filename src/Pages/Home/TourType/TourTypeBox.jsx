import { useNavigate, useSearchParams } from "react-router-dom";

const TourTypeBox = ({ label, icon: Icon }) => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    const handleClick = () => {
        // Use the URLSearchParams methods directly
        params.set('tourtype', label);

        const url = `/?${params.toString()}`;
        console.log('URL:', url);

        // Navigate to the new URL
        navigate(url);
    };

    // Provide ChatGPT
    const tourtype = params.get('tourtype');

    return (
        <div onClick={handleClick} className="flex flex-col items-center justify-center gap-5 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer">
            <Icon size={40} />
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default TourTypeBox;
// import { useNavigate, useSearchParams } from "react-router-dom";
// import qs from 'query-string'

// const TourTypeBox = ({label,icon:Icon}) => {
//     const {params,setParams} =useSearchParams()
//     const navigate = useNavigate()
//     const handleClick= () =>{
//         let currentQuery = {};
//         if(params){
//             currentQuery = qs.parse(params.toString());

//             const updatedQuery = {...currentQuery,tourtype:label}

//             const url = qs.stringifyUrl({
//                 url:'/',
//                 query: updatedQuery
//             });
//             console.log('URL:',url);

//             navigate(url);

//             through chatGPT
//             setParams(updatedQuery);

//             navigate(url).then(() => {
//                 Update the URL using setParams after navigation
//                 setParams(updatedQuery);
//             });

//         }
//     }
//     provide ChatGPT
//     const tourtype = params && params.get('tourtype');


//     params.get('tourtype')
//     return (
//         <div onClick={handleClick} className="flex flex-col items-center justify-center gap-5 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer">
//             <Icon size={40}/>
//             <div className="text-sm font-medium">{label}</div>
//         </div>
//     );
// };

// export default TourTypeBox;