<template>
    <section class="summary">
      <h1 class="heading">Personal Summary</h1>
      <hr class="separator" />
      <h2 v-html="msg"></h2>
    </section>
</template>
  
<script>
export default {
  name: 'ShortIntro',
  props: {
    msg: String
  }
}
</script>

<style scoped>
    .summary {
        padding: 2rem;
        color: white;
    }

    table {
        width: 75%;
        border-collapse: collapse;
        margin-top: 1rem;
        margin: 0 auto;
    }

    th, td {
        border: 1px solid #555;
        padding: 0.75rem;
        text-align: left;
    }

    th {
        background-color: #1f2937; /* dark gray */
        color: #4ade80;
    }

    td {
        background-color: #2d2d2d;
    }

    h3 {
        margin: 40px 0 0;
    }

    h1 {
        color: #4ade80; /* green-400 */
        margin-bottom: 1rem;
        text-align: left;
    }
     h2 {
        margin-bottom: 1rem;
        text-align: left;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 0.5rem;
        display: block;
    }

    a {
        color: #80e8ff;
    }

    .separator {
        border: none;
        height: 2px;
        background: linear-gradient(to right, #4ade80, transparent);;
        margin-bottom: 3rem;
    }

    .project-link {
    color: #93c5fd;
    text-decoration: underline;
    display: inline-block; /* or block if you want it to stretch full width */
    }

    .toggle-btn {
        background-color: #374151;   /* dark gray */
        color: #93c5fd;              /* soft blue */
        padding: 6px 12px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: background-color 0.3s ease;
    }

    .toggle-btn:hover {
        background-color: #4b5563;   /* slightly lighter on hover */
    }
</style>
  