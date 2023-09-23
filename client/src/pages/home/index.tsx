/* router */
import { useNavigate } from "react-router";

/*  query Client*/
import UseFetch from "../../hooks/Queries/useFetch";

/* components */
import CustomSkelton from "../../components/skelton";
import HomeSwiper from "../../components/swiper/homeSwiper";
import Category from "./components/category";
import ProductCard from "../Products/components/productCard";

/* styles */
import styles from "./home.module.css";

/* types */
import { Product } from "../Products/model";

const HomePage = () => {
    const { isLoading, data } = UseFetch("/Product");
    const trendingProducts = data?.data.slice(0, 3);
    const newProducts = data?.data.slice(4, 7);

    const navigate = useNavigate();

    return (
        <div>
            <HomeSwiper />
            <div>
                <p className={styles.headTitle}>
                    Discover Our <span>Products</span>
                </p>

                <div className={styles.categoryContainer} id="categories">
                    <Category title="electronics" number="1" />
                    <Category title="men's clothing" number="2" />
                    <Category title="jewelry" number="3" />
                    <Category title="women's clothing" number="4" />
                </div>
                <p className={styles.headTitle}>
                    <span style={{ color: "#ef4444" }}>TRENDING </span> NOW 🔥
                </p>

                <div className={styles.categoryContainer} id="categories">
                    {isLoading ? (
                        <CustomSkelton />
                    ) : (
                        trendingProducts?.map((trendProduct: Product) => (
                            <ProductCard
                                key={trendProduct.id}
                                {...trendProduct}
                            />
                        ))
                    )}
                </div>
                <p className={styles.headTitle}>
                    <span>NEW ARRIVAL </span>
                </p>
                <div className={styles.categoryContainer} id="categories">
                    {isLoading ? (
                        <CustomSkelton />
                    ) : (
                        newProducts?.map((trendProduct: Product) => (
                            <ProductCard
                                key={trendProduct.id}
                                {...trendProduct}
                            />
                        ))
                    )}
                </div>
                <p
                    className={styles.headTitle}
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/Products")}
                >
                    DISCOVER MORE ➡️
                </p>
            </div>
        </div>
    );
};

export default HomePage;
