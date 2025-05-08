<template>
    <section class="contact-section">
        <h2>Contact Me</h2>
        <hr class="separator" />
        <ul class="contact-list">
            <li>
                <a href="https://www.instagram.com/japnit_singh_ahluwalia/" target="_blank" rel="noopener noreferrer">
                Instagram
                </a>
            </li>
            <li>
                <a href="mailto:truejswalia@gmail.com">
                Email: truejswalia@gmail.com
                </a>
            </li>
            <li>
                <span>Phone: +1 585-530-0728</span>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/japnit-singh-ahluwalia/" target="_blank" rel="noopener noreferrer">
                LinkedIn
                </a>
            </li>
            </ul>
    </section>
</template>
  
<script>
    export default {
        name: 'ContactMe'
    }
</script>
  
<style scoped>
    .contact-section {
        padding: 3rem 2rem;
        color: white;
        background-color: #1f2937;
        text-align: left;
    }

    h2 {
        color: #4ade80;
        margin-bottom: 1rem;
    }

    .separator {
        border: none;
        height: 2px;
        background: linear-gradient(to right, #4ade80, transparent);
        margin-bottom: 2rem;
    }

    .contact-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .contact-list li {
        margin: 1rem 0;
        font-size: 1.1rem;
    }

    .contact-list a {
        color: #93c5fd;
        text-decoration: underline;
    }

    .contact-list span {
        color: #d1d5db;
    }
</style>
