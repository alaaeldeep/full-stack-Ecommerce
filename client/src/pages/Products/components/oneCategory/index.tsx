/* react staff */
import { useEffect } from "react";

/* router */
import { useParams } from "react-router";

/* react query */
import UseFetch from "../../../../hooks/Queries/useFetch";

/* components */
import ProductCard from "../productCard";
import CustomSkelton from "../../../../components/skelton";

/* styles */
import styles from "../../style.module.css";

/* types */
import { Product } from "../../model";

const OneCategory = () => {
    const { category } = useParams();

    const { isLoading, data } = UseFetch(`/Product?type=${category}`);
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }, [category]);

    if (isLoading) {
        return (
            <div className={styles.productsContainer}>
                <CustomSkelton />
                <CustomSkelton />
            </div>
        );
    }

    return (
        <div className={styles.productsContainer}>
            {data?.data.map((item: Product) => (
                <ProductCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    productType={item.productType}
                    pictureUrl={item.pictureUrl}
                />
            ))}
        </div>
    );
};

export default OneCategory;
