const fetchUserData = async (userId) => {
    // Simulate an asynchronous fetch operation
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data for user ${userId}`);
        }, 1000);
    });
};

const fetchAllUserData = async (userIds) => {
    for (const userId of userIds) {
        const data = await fetchUserData(userId);
        console.log(data);
    }
};

const userIds = [1, 2, 3, 4, 5];
