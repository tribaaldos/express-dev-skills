const skills = [
    {id: 123456, skill: 'HTML', techstack: 'FrontEnd'},
    {id: 134535, skill: 'JS', techstack: 'FrontEnd'},
    {id: 145631, skill: 'NODE.JS', techstack: 'BackEnd'},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}


function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.techstack = 'for later'
    skills.push(skill)
    return skill
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id); 
}