/* MUI */
import Skeleton from "@mui/material/Skeleton";

const CustomSkelton = () => {
    return (
        <>
            <Skeleton
                animation="wave"
                variant="rectangular"
                width={300}
                height={420}
            />
            <Skeleton
                animation="wave"
                variant="rectangular"
                width={300}
                height={420}
            />
            <Skeleton
                animation="wave"
                variant="rectangular"
                width={300}
                height={420}
            />
        </>
    );
};

export default CustomSkelton;
