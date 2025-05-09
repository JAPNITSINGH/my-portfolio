<template>
  <NavBar></NavBar>
  <img alt="My logo" src="./assets/logo-3.png" style="margin: 40px;">
  <ShortIntro data-aos="slide-up" msg='Hey, I am <span style="color: #41b883;">Japnit Singh Ahluwalia</span>. Here, you can check out what I have been working on.'/>
  <ShortIntro data-aos="slide-up" msg="I try my best to create things with ❤️"/>
  <PersonalSummary data-aos="slide-up" id="about" msg='Software Engineer with 4+ years of experience, specializing in 
  <span style="color: #41b883;">backend development, cloud computing, DevOps etc</span>. 
  Recently completed a <span style="color: #41b883;">Master’s in Computer Science</span> 
  to deepen my technical expertise. I enjoy building 
  <span style="color: #41b883;">scalable systems</span> that solve real-world problems in 
  <span style="color: #41b883;">collaborative environments</span>. My experience includes 
  leading cross-functional teams, designing complex systems, and deploying 
  <span style="color: #41b883;">cloud-native solutions on AWS</span>. I’ve worked 
  extensively with <span style="color: #41b883;">Java, Spring Boot, and CI/CD tools </span>
  to optimize performance and reliability. I’m passionate about clean code, automation, and 
  continuous improvement. I thrive in fast-paced settings where I can contribute to impactful, 
  <span style="color: #41b883;">mission-driven products</span>.'></PersonalSummary>
  <SkillSet data-aos="slide-up" id="skills"></SkillSet>
  <ProfessionalExperience data-aos="slide-up" id="experience"></ProfessionalExperience>
  <MyProjects data-aos="slide-up" id="projects"></MyProjects>
  <ContactMe data-aos="slide-up" id="contact"></ContactMe>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ShortIntro from './components/ShortIntro.vue'
import MyProjects from './components/MyProjects.vue'
import PersonalSummary from './components/PersonalSummary.vue'
import ProfessionalExperience from './components/ProfessionalExperience.vue'
import SkillSet from './components/SkillSet.vue'
import ContactMe from './components/ContactMe.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ShortIntro,
    MyProjects,
    PersonalSummary,
    ProfessionalExperience,
    SkillSet,
    ContactMe
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ffffff;
  background-color: black;
  /* background-image: url('https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg'); */
  background-size: cover;
  background-position: center;
  height: 100%;
  min-height: 100vh; /* full viewport height */
}

#body {
  margin: 0px;
}
</style>
