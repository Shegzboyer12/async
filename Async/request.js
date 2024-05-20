const fetchUser = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`User ${id} data`);
        }, 1000);
    });
};

const fetchAllUsers = async (userIds) => {
    const promises = userIds.map(id => fetchUser(id));
    const users = await Promise.all(promises);
    console.log(users);
};

fetchAllUsers([1, 2, 3, 4, 5]);