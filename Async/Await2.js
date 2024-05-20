const fetchDataWithError = async () => {
    try {
        const data = await new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error("Something went wrong!"));
            }, 2000);
        });
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

fetchDataWithError();