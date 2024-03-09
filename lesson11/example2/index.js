// Сортировка телефонной книги по именам

const sortContacts = (contacts, isAscent = true) => {
    if (!Array.isArray(contacts)) return null;
    const result = contacts
        .sort((a, b) => {
            if (isAscent) {
                return a.name.localeCompare(b.name);
            }
            if (!isAscent) {
                return b.name.localeCompare(a.name);
            }
        });
    return result;
};


const phoneNumbers = [
    { name: 'Tom', phoneNumber: '777-77-77' },
    { name: 'Ann', phoneNumber: '777-77-77' },
    { name: 'Igor', phoneNumber: '777-77-77' },
    { name: 'Alex', phoneNumber: '777-77-77' },
];

console.log(sortContacts(phoneNumbers));