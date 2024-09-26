import Error from "next/error";

const Custom500 = () => {
    return <Error statusCode={500} />;
};

export default Custom500;
