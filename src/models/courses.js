const courses = {
    cursoA: {
        name: 'Curso A',
        description: 'Descrição do Curso A',
        link: 'link-do-curso-A'
    },
    cursoB: {
        name: 'Curso B',
        description: 'Descrição do Curso B',
        link: 'link-do-curso-B'
    },
    cursoC: {
        name: 'Curso C',
        description: 'Descrição do Curso C',
        link: 'link-do-curso-C'
    }
};

const getCourses = () => {
    return Object.values(courses).map(course => course.name).join(', ');
};

const getCourseDetails = (courseName) => {
    const course = courses[courseName];
    if (course) {
        return `${course.name}: ${course.description}. [Compre aqui](${course.link})`;
    }
    return null;
};

module.exports = { getCourses, getCourseDetails };
