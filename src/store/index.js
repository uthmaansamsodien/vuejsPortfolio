import { createStore } from 'vuex'
const dataURL= "https://uthmaansamsodien.github.io/jsonserverforportfolio/data.json"

export default createStore({
state: {
Skills: null,
Education: null,
experience: null,
projects: null,
testimonials: null
},
getters: {
},
mutations: {
setSkills(state, Skills) {
state.Skills = Skills
},
setEducation(state, Education) {
state.Education = Education
},
setExperience(state, experience) {
state.experience = experience
},
setProjects(state, projects) {
state.projects = projects
},
setTestimonials(state, testimonials) {
state.testimonials = testimonials
}
},
actions: {
async fetchSkills(context) {
try {
let res = await fetch(dataURL);
let { Skills } = await res.json();
console.log(Skills)
context.commit('setSkills', Skills);
}
catch (e) {
alert(e.message);
}
},
async fetchEducation(context) {
try {
let res = await fetch(dataURL);
let { Education } = await res.json();
console.log(Education)
context.commit('setEducation', Education);
}
catch (e) {
alert(e.message);
}
},
async fetchExperience(context) {
try {
let res = await fetch(dataURL);
let { experience } = await res.json();
context.commit('setExperience', experience);
}
catch (e) {
alert(e.message);
}
},
async fetchProjects(context) {
try {
let res = await fetch(dataURL);
let { projects } = await res.json();
context.commit('setProjects', projects);
}
catch (e) {
alert(e.message);
}
},
async fetchTestimonials(context) {
try {
let res = await fetch(dataURL);
let { Testimonials } = await res.json();
context.commit('setTestimonials', Testimonials);
}
catch (e) {
alert(e.message);
}
}
},
modules: {}
});







