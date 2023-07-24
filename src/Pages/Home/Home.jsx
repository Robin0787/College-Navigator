import PopularColleges from "./PopularColleges/PopularColleges";
import Reviews from "./Reviews/Reviews";
import SearchCollege from "./SearchCollege/SearchCollege";


const Home = () => {
    return (
        <section>
            <SearchCollege />
            <PopularColleges />
            <Reviews />
        </section>
    );
};

export default Home;
