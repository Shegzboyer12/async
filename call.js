const fetchData = async () => {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetched data");
        }, 2000);
    });
    console.log(data);
};

fetchData();