import { createStore } from 'vuex'
const dataURL= "https://uthmaansamsodien.github.io/jsonserverforportfolio/user.json"

// computed: {
//   testimonials() {
//       return this.$store.state.testimonials
//   }
// },
// mounted() {
//   this.$store.dispatch('fetchTestimonials')
// }
export default createStore({
state: {
skills: null,
education: null,
experience: null,
projects: null,
testimonials: null
},
getters: {
},
mutations: {
setSkills(state, skills) {
state.skills = skills
},
setEducation(state, education) {
state.education = education
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
let { skills } = await res.json();
context.commit('setSkills', skills);
}
catch (e) {
alert(e.message);
}
},
async fetchEducation(context) {
try {
let res = await fetch(dataURL);
let { education } = await res.json();
context.commit('setEducation', education);
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
let { testimonials } = await res.json();
context.commit('setTestimonials', testimonials);
}
catch (e) {
alert(e.message);
}
}
},
modules: {}
});







