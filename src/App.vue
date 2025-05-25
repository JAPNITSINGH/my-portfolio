<template>
  <NavBar></NavBar>
  <img alt="My logo" src="./assets/logo-3.png" style="margin: 40px;">
  <ShortIntro data-aos="slide-right" msg='Hey, I am <span style="color: #41b883;">Japnit Singh Ahluwalia</span>. Here, you can check out what I have been working on.'/>
  <ShortIntro data-aos="slide-left" msg="I try my best to create things with ❤️"/>
  <PersonalSummary data-aos="slide-right" id="about" msg='I am a <span style="color: #41b883;">Software Engineer</span> 
    with over <span style="color: #41b883;">4 years of experience</span>, primarily focused on 
    <span style="color: #41b883;">backend development</span>, <span style="color: #41b883;">cloud computing</span>, 
    and <span style="color: #41b883;">DevOps</span>. I recently completed a 
    <span style="color: #41b883;">Master’s in Computer Science</span> to further strengthen my 
    <span style="color: #41b883;">technical foundation</span>. I enjoy building <span style="color: #41b883;">scalable</span>, 
    <span style="color: #41b883;">reliable systems</span> 
    that address <span style="color: #41b883;">real-world challenges</span>, and I thrive in 
    <span style="color: #41b883;">collaborative</span>, <span style="color: #41b883;">fast-paced environments</span>.
    Throughout my career, I have led <span style="color: #41b883;">cross-functional teams</span>, 
    designed and implemented <span style="color: #41b883;">complex architectures</span>, 
    and deployed <span style="color: #41b883;">cloud-native solutions</span> on 
    <span style="color: #41b883;">AWS</span>. My core expertise includes 
    <span style="color: #41b883;">Java</span>, <span style="color: #41b883;">Spring Boot</span>, 
    and <span style="color: #41b883;">CI/CD pipelines</span>, with a strong emphasis on 
    <span style="color: #41b883;">automation</span>, <span style="color: #41b883;">clean code</span>, 
    and <span style="color: #41b883;">continuous improvement</span>. I am passionate about delivering 
    <span style="color: #41b883;">high-quality software</span> and contributing to products that make a 
    <span style="color: #41b883;">meaningful impact</span>.'></PersonalSummary>
  <SkillSet data-aos="slide-left" id="skills"></SkillSet>
  <ProfessionalExperience data-aos="slide-right" id="experience"></ProfessionalExperience>
  <MyProjects data-aos="slide-right" id="projects"></MyProjects>
  <ContactMe data-aos="slide-left" id="contact"></ContactMe>
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
