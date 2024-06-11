
export const parseUser = jsonString => {
    try {
        // const jsonString = '{"name":"Tom"';
        const userData = JSON.parse(jsonString);
        console.log(userData);
    } catch (err) {
        if (err instanceof SyntaxError) {
            console.error(err.name);
        } else {
            throw err;
        }
    }
};
// parseUser();