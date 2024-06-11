
export const parseUser = jsonString => {
    try {
        // const jsonString = '{"name":"Tom"';
        const userData = JSON.parse(jsonString);
        return userData;
        // console.log(userData);
    } catch (err) {
        if (err instanceof SyntaxError) {
            return null;
            // console.error(err.name);
        } else {
            return null;
        }
    };
};

// https://avatars3.githubusercontent.com/u10001
// parseUser();