const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
    const passedStudents = allStudentsList
        .filter(name => studentsForRetake.indexOf(name) === -1)
        .map(name => 'Good job, ' + name);
    return passedStudents;
}





// examples
const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest1 = ['John', 'Mike'];
getMessagesForBestStudents(allStudTest1, retakeStudTest1); // ===> ['Good job, Den', 'Good job, Ann']

const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
getMessagesForBestStudents(allStudTest2, retakeStudTest2); // ===> []
