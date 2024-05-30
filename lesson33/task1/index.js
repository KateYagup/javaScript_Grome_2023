const daysAgo = num => {
    const now = new Date();
    return new Date(now.setDate(now.getDate() - num));
}

const getStats = (commitsData, days) => {
    const targetDate = daysAgo(days);
    const dayCommitsMap = commitsData
        .map(
            ({
                commit: {
                    author: { email, date, name },
                },
            }) => ({
                email,
                date,
                name,
            }),
        )
        .filter(({ date }) => new Date(date) - targetDate >= 0)
        .reduce((acc, { email, name }) => {
            const oldCount = acc[email] ? acc[email].count : 0;
            return {
                ...acc,
                [email]: { name, email, count: oldCount + 1 },
            };
        }, {});
    const authorsArray = Object.values(dayCommitsMap).sort((a, b) => b.count - a.count);
    const topCount = authorsArray[0].count;
    return authorsArray.filter(({ count }) => count === topCount);
};

export const getMostActiveDevs = ({ days, userId, repoId }) => {
    return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
        .then(response => response.json())
        .then(commitsData => getStats(commitData, days))
};