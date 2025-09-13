// Mock data
const projects = [
    { hash: '#004', time: 'Sep 2025 ', title: 'V-Chain : My Portfolio Website', desc: 'Developed a portfolio website themed as a Blockchain Explorer, showcasing skills and projects with an interactive and modern UI', tools: ['HTML', 'CSS', 'JavaScript'], links: { code: '#', demo: '#' } },

    { hash: '#003', time: 'Sep 2025 ', title: 'UniversalAdapter : open-source java library', desc: 'Developed an open-source Java library that unifies multiple AWT/Swing adapter classes into a single abstract adapter, simplifying GUI event handling and reducing boilerplate code. Published on GitHub with documentation, example usage, and MIT license for community use.', tools: ['Java', 'Jar manifest', 'AWT/Swing'], links: { code: '#', demo: '#' } },

    { hash: '#002', time: 'Apr 2025', title: 'Filora : Secure file sharing and storage system', desc: ' A decentralized web application for secure file sharing and storage with encryption, authentication, and permission control. Built using IPFS for decentralized storage and Firebase for user and metadata management.', tools: ['HTML5', 'CSS3', 'Javascript', 'Firebase', 'IPFS'], links: { code: '#', demo: '#' } },

    { hash: '#001', time: 'Mar 2024', title: 'Vitalnex : Student daily needs Application', desc: ' Android application helping students find rental rooms, mess services, and nearby hospitals.Designed to streamline everyday student requirements.', tools: ['Java', 'XML', 'Firebase', 'Android Development'], links: { code: '#', demo: '#' } }
];

const txList = document.getElementById('txList');
projects.forEach((p, idx) => {
    const row = document.createElement('div'); row.className = 'tx-row';
    row.innerHTML = `<div>
        <div class='tx-hash'>${p.hash}</div>
        <div class='tx-meta' style='margin-top:6px'>${p.title}</div>
      </div>
      <div class='tx-meta'>${p.time}</div>
      <div class='tx-actions'>
        <div class='tx-meta' style='display:flex;flex-direction:column;align-items:flex-end'>
          <div style='font-family:var(--mono);font-size:13px;color:var(--muted)'>Vaibhav → Solution</div>
          <div style='margin-top:6px'><button class='btn' data-idx='${idx}'>Details</button></div>
        </div>
      </div>`;
    const details = document.createElement('div'); details.className = 'details'; details.innerHTML = `<div style='display:flex;justify-content:space-between;align-items:start'><div>
        <div style='font-weight:700;margin-bottom:6px'>${p.title}</div>
        <div style='color:var(--muted);font-size:14px'>${p.desc}</div>
        <div class='links' style='margin-top:8px'><a href='${p.links.code}'>Code</a><a href='${p.links.demo}'>Demo</a></div>
      </div><div style='text-align:right;color:var(--muted);font-family:var(--mono)'><div>Tools</div><div style='margin-top:6px'>${p.tools.join(', ')}</div></div></div>`;
    txList.appendChild(row); txList.appendChild(details);
});

// Details toggle
document.getElementById('txList').addEventListener('click', e => {
    if (e.target.matches('button.btn')) {
        const idx = e.target.dataset.idx; const details = e.target.closest('.tx-row').nextElementSibling;
        details.classList.toggle('open');
    }
});

// Timeline (education blocks)
const edu = [
    { year: 2021, degree: 'High School', inst: ' C. S. KOTHARI HIGH SCHOOL, NANDURA' },
    { year: 2024, degree: "Diploma in Computer Engineering", inst: 'GOVERNMENT POLYTECHNIC, KHAMGAON' },
    { year: 2027, degree: 'B.E. in Computer Engineering', inst: ' DR. D. Y. PATIL INSTITUTE OF TECHNOLOGY, PIMPRI' }
];
const timeline = document.getElementById('timeline');

edu.forEach((b, i) => {
    const el = document.createElement('div'); el.className = 'block'; el.innerHTML = `<div style='font-family:var(--mono);font-size:13px'>Block ${i + 1}</div><div style='font-weight:700;margin-top:6px'>${b.year}</div><div style='color:var(--muted);font-size:13px;margin-top:6px'>${b.degree}</div>`;
    el.addEventListener('click', () => {
        document.getElementById('blockDetails').innerHTML = `<strong>${b.degree}</strong> — ${b.inst} <div style='color:var(--muted);margin-top:6px'>Year: ${b.year}</div>`;
    });
    timeline.appendChild(el);
    // mine animation on scroll (simple delay)
    setTimeout(() => el.classList.add('mined'), 150 * i);
});


// Filter projects
function filterProjects() {
    const query = document.getElementById('searchProjects').value.toLowerCase();
    const rows = document.querySelectorAll('.tx-row');
    rows.forEach(r => {
        const title = r.querySelector('.tx-meta').textContent.toLowerCase();
        r.style.display = title.includes(query) ? '' : 'none';
    });
}

// Skills with levels
const skills = [
    { category: "Programming Languages", items: [{ name: "Java", level: "advanced" }, { name: "C/C++", level: "intermediate" }, { name: "JavaScript", level: "intermediate" }, { name: "Typescript", level: "basic" }, { name: "Python", level: "basic" }, { name: "Solidity", level: "basic" }] },
    { category: "Frontend Development", items: [{ name: "HTML5", level: "intermediate" }, { name: "CSS3", level: "intermediate" }, { name: "Bootstrap", level: "intermediate" }, { name: "React", level: "basic" }, { name: "Tailwind", level: "basic" }, { name: "Materialize", level: "basic" }] },
    { category: "Backend Development", items: [{ name: "Nodejs", level: "basic" }, { name: "Springboot", level: "basic" }, { name: "Express", level: "basic" }] },
    { category: "Mobile App Development", items: [{ name: "Android(Java)", level: "intermediate" }, { name: "Reactnative", level: "basic" }] },
    { category: "Database", items: [{ name: "MySQL", level: "intermediate" }, { name: "MongoDB", level: "basic" }, { name: "PostgraceSQL", level: "basic" }, { name: "Oracle", level: "basic" }, { name: "CockroachDB", level: "basic" }] },
    { category: "Backend as a Service (BaaS)", items: [{ name: "Firebase", level: "intermediate" }] },
    { category: "Tools & Platforms", items: [{ name: "Linux", level: "intermediate" }, { name: "Git/GitHub", level: "intermediate" }, { name: "VS Code", level: "intermediate" }] }
];

const skillsContainer = document.getElementById('skillsContainer');
skills.forEach(s => {
    const section = document.createElement('div');
    section.innerHTML = `
        <hr style="border:none;height:1px;background:rgba(255,255,255,0.03);margin:12px 0">
        <h4 style="margin:6px 0;color:var(--muted)">${s.category}</h4>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          ${s.items.map(i => `<span class="skill-chip ${i.level}">${i.name}</span>`).join('')}
        </div>`;
    skillsContainer.appendChild(section);
});


//Download Resume 
document.getElementById('sendBtn').addEventListener('click', () => {
    // Path to your resume file
    const resumeUrl = 'Vaibhav_Bodade_Resume.pdf';
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vaibhav_Bodade_Resume.pdf'; // file name when saved
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// small enhancement: prefer desktop layout hint
if (window.innerWidth > 900) { console.log('For full explorer vibes use desktop width > 1200px'); }