const fetchParallel = async (urls) => {
    const fetchData = async (url) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Data from ${url}`);
            }, Math.random() * 2000);
        });
    };

    const promises = urls.map(url => fetchData(url));
    const results = await Promise.all(promises);
    console.log(results);
};

fetchParallel(["url1", "url2", "url3", "url4"]);