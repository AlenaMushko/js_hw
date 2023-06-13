 const runHTML = async (foo) => {
    try {
    await foo();
    } catch (error) {
        console.log("Error in getUsersList:", error);
    }
};

 export default runHTML;