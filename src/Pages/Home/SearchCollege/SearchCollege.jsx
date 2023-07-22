import { useState } from "react";

const SearchCollege = () => {
    const [isFocused, setFocus] = useState(false);
    return (
        <section className="h-[calc(100vh-64px)] bg-bgHome bg-cover">
            <article className="h-full w-full bg-gray-800 bg-opacity-50">
                {/* Div for search box */}
                <div className="flex justify-center items-center relative pt-10">
                    <input type="text"
                        onFocus={() => { setFocus(!isFocused) }}
                        onBlur={() => { setFocus(!isFocused) }}
                        placeholder="College Name"
                        className={`py-3 px-5 w-[60%] md:w-[40%] lg:w-[25%] border-0 bg-secondary text-gray-600 focus:outline-0 rounded-l-md duration-300 text-xs sm:text-base
                        relative ${isFocused ? 'left-0' : 'left-8'} `}
                    />
                    <button
                        className={`rounded-r-md px-6 py-3 border-0 bg-primary text-secondary 
                        relative  ${isFocused ? 'left-0 ' : '-left-12  sm:-left-14'} duration-300 text-xs sm:text-base`}
                    >Search</button>
                </div>
                <div>
                    
                </div>
            </article>
        </section>
    );
};

export default SearchCollege;