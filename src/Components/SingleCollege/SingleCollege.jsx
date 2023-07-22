
const SingleCollege = ({ college }) => {
    console.log(college);
    return (
        <article className="flex justify-between px-10 py-3 border">
            <div className="w-1/3">
                <img src={college?.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="w-2/3">
                <h2 className="text-2xl my-5">{college?.name}</h2>
            </div>
        </article>
    );
};

export default SingleCollege;