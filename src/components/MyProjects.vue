<template>
    <section class="projects">
      <h1 class="heading">My Projects</h1>
      <hr class="separator" />
      <table>
        <thead>
          <tr>
            <th>Programming Languages</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(entry, index) in languages" :key="index">
            <!-- Main row -->
            <tr>
              <td>{{ entry.language }} ({{ entry.projects.length }})</td>
              <td>
                <button @click="toggle(index)" class="toggle-btn">
                  {{ expanded === index ? '▲' : '▼' }}
                </button>
              </td>
            </tr>
  
            <!-- Expandable row (only one cell across full width) -->
            <tr v-if="expanded === index">
              <td colspan="2" class="details-row">
                <ul class="project-list">
                  <li v-for="(project, i) in entry.projects" :key="i">
                    <a :href="project.url" class="project.link">{{ project.name }}</a>
                  </li>
                </ul>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
</template>
  
<script>
  export default {
    data() {
      return {
        languages: [
            {
                language: 'Java',
                projects: [
                    { name: 'Flutter-IntelliJ Plugin', url: 'https://github.com/flutter/flutter-intellij/pull/8220'},
                    { name: 'Employee management(CLI)', url: 'https://github.com/JAPNITSINGH/SpringAssignment' },
                    { name: 'Employee management(MVN)', url: 'https://github.com/JAPNITSINGH/MavenAssgnment' },
                    { name: 'Real-time Steaming pipeline', url: 'https://github.com/JAPNITSINGH/kafka_Second' },
                    { name: 'Academics management system(Hibernate)', url: 'https://github.com/JAPNITSINGH/MavenAssgnment' },
                    { name: 'Online Store Inventory management (SOAP)', url: 'https://github.com/JAPNITSINGH/SOAP_TEST' },
                    { name: 'Servelets', url: 'https://github.com/JAPNITSINGH/SpringSession' },
                    { name: 'Resturent Service APIs(REST)', url: 'https://github.com/JAPNITSINGH/REST' },
                    { name: 'Sleeping barber', url: 'https://github.com/JAPNITSINGH/Sleeping_Barber_Problem'},
                    { name: 'Serialization', url: 'https://github.com/JAPNITSINGH/Java_XMLParser_Serialization'},
                    { name: 'Messaging App CLI', url: 'https://github.com/JAPNITSINGH/JavaChatApp' },
                    { name: 'PROFESSIONAL EXPERIENCE: Kiuwan', url: 'https://www.linkedin.com/in/japnit-singh-ahluwalia/' },
                    { name: 'PROFESSIONAL EXPERIENCE: Froala-Editor', url: 'https://www.linkedin.com/in/japnit-singh-ahluwalia/' },
                    { name: 'PROFESSIONAL EXPERIENCE: XRAY-Enterprise', url: 'https://www.linkedin.com/in/japnit-singh-ahluwalia/' },
                    { name: 'PROFESSIONAL EXPERIENCE: Aqua Data Studio', url: 'https://www.linkedin.com/in/japnit-singh-ahluwalia/' },
                    
                ]
            },
            {
                language: 'TypeScript',
                projects: [
                    { name: 'Microsoft\'s Angular CLI', url: 'https://github.com/angular/angular-cli/pull/28100' },
                    { name: 'InfraCost', url: 'https://github.com/infracost/vscode-infracost/pull/220' },
                    { name: 'Employee Management System', url: 'https://github.com/JAPNITSINGH/AngularSpring' },
                    { name: 'Custom List(UI)', url: 'https://github.com/JAPNITSINGH/Angualr' },
                    { name: 'Custom app-bar(UI)', url: 'https://github.com/JAPNITSINGH/React' },
                    { name: 'Custom app-bar(UI)', url: 'https://github.com/JAPNITSINGH/React' },
                    { name: 'PROFESSIONAL EXPERIENCE: Fly4Credit', url: 'https://www.linkedin.com/in/japnit-singh-ahluwalia/' },
                    { name: 'PROFESSIONAL EXPERIENCE: Froala-Editor', url: 'https://www.linkedin.com/in/japnit-singh-ahluwalia/' }
                ]
            },
            {
                language: 'C++',
                projects: [
                    { name: 'Parallel CVP', url: 'https://github.com/JAPNITSINGH/Parallell-CVP' },
                    { name: 'PROFESSIONAL EXPERIENCE: LANSA IDE', url: 'https://www.linkedin.com/in/japnit-singh-ahluwalia/' },
                    { name: 'PROFESSIONAL EXPERIENCE: DBPowerStudio', url: 'https://www.linkedin.com/in/japnit-singh-ahluwalia/' },
                    { name: 'PROFESSIONAL EXPERIENCE: WhereScape-RED', url: 'https://www.linkedin.com/in/japnit-singh-ahluwalia/' },

                ]
            },
            {
                language: 'JavaScript',
                projects: [
                    { name: 'News App', url: 'https://github.com/JAPNITSINGH/ReactNative' },
                    { name: 'PROFESSIONAL EXPERIENCE: XRAY-Enterprise', url: 'https://www.linkedin.com/in/japnit-singh-ahluwalia/' },

                ]
            },
            {
                language: 'PHP',
                projects: [
                    { name: 'Clinic Management System', url: 'https://github.com/JAPNITSINGH/ClinicManagement-PHP' },

                ]
            },
            {
                language: 'Rust',
                projects: [
                    { name: 'Version Control System', url: 'https://github.com/JAPNITSINGH/SHIELD' },

                ]
            },
            {
                language: 'R',
                projects: [
                    { name: 'TV Series Analysis', url: 'https://github.com/JAPNITSINGH/TV-Shows-Analysis' },

                ]
            },
            {
                language: 'Python',
                projects: [
                    { name: 'Sentiment Analysis', url: 'https://github.com/JAPNITSINGH/Sentiment-Analysis' },

                ]
            },
            {
                language: 'Node.js',
                projects: [
                { name: 'PROFESSIONAL EXPERIENCE: Froala Editor', url: 'https://www.linkedin.com/in/japnit-singh-ahluwalia/' },

                ]
            },
            {
                language: 'Ruby',
                projects: [
                { name: 'PROFESSIONAL EXPERIENCE: Assembla', url: 'https://www.linkedin.com/in/japnit-singh-ahluwalia/' },

                ]
            },
            {
                language: 'Vue.js',
                projects: [
                { name: 'My Portfolio', url: 'https://github.com/JAPNITSINGH/my-portfolio' },
                ]
            }
        ],
        expanded: null // Store the index of the expanded row (only one open at a time)
      };
    },
    methods: {
      toggle(index) {
        this.expanded = this.expanded === index ? null : index;
      }
    }
  };
</script>

<style scoped>
    .projects {
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
  