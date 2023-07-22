import PopularColleges from "./PopularColleges/PopularColleges";
import SearchCollege from "./SearchCollege/SearchCollege";


const Home = () => {
    return (
        <section>
            <SearchCollege />
            <PopularColleges />
        </section>
    );
};

export default Home;