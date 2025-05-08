<template>
    <section class="projects">
      <h1 class="heading">Professional Experience</h1>
      <hr class="separator" />
      <div class="timeline">
        <div v-for="(job, index) in jobs" :key="index" class="timeline-item">
            <div class="circle"></div>
            <div class="content">
                <div class="job-header">
                    <img :src="job.icon" alt="Company Icon" class="job-icon" />
                    <h3>{{ job.title }}</h3>
                </div>
                <p class="company">{{ job.company }}</p>
                <p class="date">{{ job.dates }}</p>
                <p class="description" v-if="job.description">{{ job.description }}</p>
            </div>
        </div>
      </div>
    </section>
</template>
  
<script>
export default {
    name: 'ProfessionalExperience',
    props: {
        msg: String
    },
    data() {
        return {
                jobs: [
                    {
                        title: "Master's Student",
                        company: "UNIVERSITY OF ROCHESTER",
                        dates: "Aug 2023 – Dec 2024 · 1 yr 5 mos",
                        icon: require('@/assets/UofR.png'),
                        description: "In Rochester, I deepened my technical expertise through challenging coursework \
                        and hands-on projects in systems, machine learning, and cloud computing. Beyond academics, I enjoyed \
                        the city’s quiet charm, collaborative campus life, and opportunities for growth through research and networking."
                    },
                    {
                        title: "Senior Software Developer",
                        company: "ACCOLITE",
                        dates: "Jan 2021 – Aug 2023 · 2 yrs 8 mos",
                        icon: require('@/assets/accolite.png'),
                        description: "Led multiple backend and cloud-focused projects, including CI/CD integrations,\
                        Redshift development, and cloud infrastructure for high-traffic applications. Managed cross-functional \
                        teams to deliver scalable, secure, and performance-optimized solutions across diverse platforms."
                    },
                    {
                        title: "Junior Software Developer",
                        company: "ACCOLITE",
                        dates: "Sep 2020 – Dec 2020 · 4 mos",
                        icon: require('@/assets/accolite.png'),
                        description: "Contributed to the development of offline web capabilities and enhanced database \
                        tools using Java, C++, and Ruby on Rails. Improved usability and reliability through automation, \
                        migration tools, and testing frameworks."
                    },
                    {
                        title: "Intern",
                        company: "ACCOLITE",
                        dates: "Jan 2020 – Aug 2020 · 8 mos",
                        icon: require('@/assets/accolite.png'),
                        description: "Developed routing and debugging features in IDEs, resolved critical application issues, \
                        and contributed to cost estimation tools using modern stacks like TypeScript and AWS. Helped boost product \
                        performance and usability during early career stages."
                    },
                    {
                        title: "Intern",
                        company: "ORBCOMM",
                        dates: "May 2019 – Jul 2019 · 3 mos",
                        icon: require('@/assets/orbcomm.png'),
                        description: "Developed automation scripts in Bash and Batch to streamline software installation \
                        on hardware devices used for machine-to-machine communication. Enhanced developer productivity by \
                        simplifying deployment processes and added a custom context menu feature for seamless software installation \
                        on connected tracking hardware. This work contributed to the efficiency and reliability of ORBCOMM’s mobile \
                        asset monitoring solutions."
                    },
                    {
                        title: "Bachelor's Student",
                        company: "MANIPAL UNIVERSITY",
                        dates: "Aug 2016 – Aug 2020 · 4 yrs",
                        icon: require('@/assets/MIT.png'),
                        description: "My time in Manipal was both academically enriching and personally transformative. I gained a solid \
                        foundation in computer science while immersing myself in a vibrant campus culture that encouraged innovation, \
                        self-learning, and close-knit community bonding."
                    }
                ]
            };
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
        margin: 0px 0 0;
        text-align: left;
    }
    
    p {
        text-align: left;
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

    .timeline {
        border-left: 3px solid #6b7280;
        margin-left: 20px;
        padding-left: 20px;
        position: relative;
    }

    .timeline-item {
        margin-bottom: 2rem;
        position: relative;
    }

    .circle {
        width: 12px;
        height: 12px;
        background-color: #6b7280;
        border-radius: 50%;
        position: absolute;
        left: -26px;
        top: 6px;
    }

    .company {
        color: #9ca3af;
        font-weight: 500;
        margin: 2px 0;
    }

    .date {
        color: #d1d5db;
        font-size: 0.9rem;
    }

    .job-header {
        display: flex;
        align-items: center; /* ensures vertical centering */
        gap: 10px;
    }

    .job-icon {
        width: 40px;
        height: 40px;
        object-fit: contain;
        border-radius: 4px;
        margin-top: 2px; /* nudges icon slightly down to align with text baseline */
    }   
</style>
  