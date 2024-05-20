const fetchStepOne = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step one complete");
        }, 1000);
    });
};

const fetchStepTwo = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step two complete");
        }, 1000);
    });
};

const executeSteps = async () => {
    const stepOne = await fetchStepOne();
    console.log(stepOne);
    const stepTwo = await fetchStepTwo();
    console.log(stepTwo);
};

executeSteps();