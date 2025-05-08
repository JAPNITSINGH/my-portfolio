<!-- src/components/NavBar.vue -->
<template>
    <header class="navbar">
        <a class="nav-home" href="#">Home</a>
        <nav class="nav-links">
            <a href="#about" class="anchor">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
</template>
  
<script>
  export default {
    name: 'NavBar'
  }
</script>
  
<style scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #1f2937;
        padding: 1rem 2rem;
        position: sticky;
        top: 0;
        z-index: 1000;
    }

    .nav-home {
        color: #4ade80;
        font-weight: bold;
        text-decoration: none;
        font-size: 1.2rem;
    }

    .nav-links a {
        color: #93d5ab;
        text-decoration: none;
        margin-left: 1.5rem;
        transition: color 0.3s ease;
    }

    .nav-links a:hover {
        color: #4ade80;  
    }

</style>
  