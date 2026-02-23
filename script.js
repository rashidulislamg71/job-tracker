const jobs = [
  {
    id: 1,
    company: "Brain Station 23",
    position: "Frontend Developer",
    location: "Dhaka",
    type: "Full Time",
    salary: "85,000 BDT",
    description:
      "Join our dynamic team to build high-performance, interactive web interfaces using React.js and modern JavaScript. You will collaborate with designers to translate wireframes into high-quality code and ensure the technical feasibility of UI/UX designs.",
    status: "all",
  },
  {
    id: 2,
    company: "Pathao",
    position: "Backend Developer",
    location: "Remote",
    type: "Full Time",
    salary: "95,000 BDT",
    description:
      "Responsible for managing the interchange of data between the server and the users. Focus on developing scalable microservices, optimizing database queries, and integrating third-party APIs to support our logistics and ride-sharing ecosystem.",
    status: "all",
  },
  {
    id: 3,
    company: "TigerIT",
    position: "UI Designer",
    location: "Chattogram",
    type: "Contract",
    salary: "75,000 BDT",
    description:
      "Create visually stunning and user-friendly designs for large-scale government and international biometric projects. You will be responsible for creating design systems, high-fidelity prototypes, and ensuring a seamless user experience across all digital platforms.",
    status: "all",
  },
  {
    id: 4,
    company: "bKash",
    position: "Full Stack Developer",
    location: "Dhaka",
    type: "Full Time",
    salary: "120,000 BDT",
    description:
      "Work on both frontend and backend systems for one of the largest MFS platforms in the world. You will develop robust features for financial transactions, maintain system security, and contribute to the entire software development lifecycle from concept to deployment.",
    status: "all",
  },
  {
    id: 5,
    company: "Selise",
    position: "DevOps Engineer",
    location: "Remote",
    type: "Full Time",
    salary: "105,000 BDT",
    description:
      "Design and implement CI/CD pipelines to automate software delivery. You will manage cloud infrastructure on AWS/Azure, monitor system performance, and work closely with developers to ensure high availability and scalability of our enterprise software solutions.",
    status: "all",
  },
  {
    id: 6,
    company: "Chaldal",
    position: "Mobile Developer",
    location: "Dhaka",
    type: "Part Time",
    salary: "65,000 BDT",
    description:
      "Develop and maintain cross-platform mobile applications for our e-commerce platform. You will focus on building smooth animations, real-time tracking features, and optimizing app performance for low-end Android and iOS devices in the local market.",
    status: "all",
  },
  {
    id: 7,
    company: "Enosis Solutions",
    position: "QA Engineer",
    location: "Remote",
    type: "Full Time",
    salary: "70,000 BDT",
    description:
      "Ensure the quality and reliability of complex software products through manual and automated testing. You will write test cases, perform regression testing, and identify bugs to ensure our products meet international standards before delivery to global clients.",
    status: "all",
  },
  {
    id: 8,
    company: "ShopUp",
    position: "Product Manager",
    location: "Dhaka",
    type: "Full Time",
    salary: "130,000 BDT",
    description:
      "Lead the product strategy and roadmap for our B2B commerce platform. You will gather user requirements, analyze market trends, and work with engineering and marketing teams to launch features that empower small businesses across Bangladesh.",
    status: "all",
  },
];

const jobContainer = document.getElementById("jobContainer");
const totalJobCount = document.getElementById("totalJobCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");

let currentTab = "all";

// Update Dashboard Count
function updateCounts() {
  totalJobCount.textContent = jobs.length;
  interviewCount.textContent = jobs.filter(
    (job) => job.status === "interview",
  ).length;
  rejectedCount.textContent = jobs.filter(
    (job) => job.status === "rejected",
  ).length;
}

// Render Jobs
function renderJobs() {
  jobContainer.innerHTML = "";

  const filtered = jobs.filter((job) =>
    currentTab === "all" ? true : job.status === currentTab,
  );

  // Tab Header Text
  tabCount.textContent =
    filtered.length +
    ` ${currentTab === "all" ? "Jobs" : currentTab.charAt(0).toUpperCase() + currentTab.slice(1) + " of " + jobs.length + " Jobs"}`;

  // Empty State Logic
  if (filtered.length === 0) {
    jobContainer.innerHTML = `
      <div class="empty-state">
        <img src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" style="width:100px;">
        <h3>No jobs Available</h3>
        <p>No applications found in this section.</p>
      </div>
    `;
    return;
  }

  // Render Job Cards
  filtered.forEach((job) => {
    const card = document.createElement("div");
    card.classList.add("job-card");

    // Badge logic
    const badge =
      job.status !== "all"
        ? `<div class="status-badge ${job.status === "interview" ? "badge-interview" : "badge-rejected"}">
          ${job.status.toUpperCase()}
        </div>`
        : `<div class="status-badge badge-not-applied">NOT APPLIED</div>`;

    // Button Disable Logic
    const isInterview = job.status === "interview";
    const isRejected = job.status === "rejected";

    card.innerHTML = `
          <div class="card-header">
            <div class="header-content">
              <h2 class="company-name">${job.company}</h2>
              <p class="job-title">${job.position}</p>
            </div>
            <button class="delete-btn" aria-label="Delete">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </button>
          </div>

          <div class="metadata">
            <span>${job.location}</span>
            <span class="separator"></span>
            <span>${job.type}</span>
            <span class="separator"></span>
            <span>${job.salary}</span>
          </div>
          ${badge}
          <p class="description">${job.description}</p>
            
          <div class="card-footer">
  <button class="btn btn-interview" ${isInterview ? "disabled" : ""}>INTERVIEW</button>
  <button class="btn btn-rejected" ${isRejected ? "disabled" : ""}>REJECTED</button>
</div>
    `;

    // Elements selection inside card
    const interviewBtn = card.querySelector(".btn-interview");
    const rejectedBtn = card.querySelector(".btn-rejected");
    const deleteBtn = card.querySelector(".delete-btn");

    // Click Events
    interviewBtn.onclick = () => {
      if (job.status !== "interview") {
        job.status = "interview";
        updateCounts();
        renderJobs();
      }
    };

    rejectedBtn.onclick = () => {
      if (job.status !== "rejected") {
        job.status = "rejected";
        updateCounts();
        renderJobs();
      }
    };

    deleteBtn.onclick = () => {
      const index = jobs.findIndex((j) => j.id === job.id);
      if (index !== -1) {
        jobs.splice(index, 1);
        updateCounts();
        renderJobs();
      }
    };

    jobContainer.appendChild(card);
  });
}

// Tabs Switching Logic
document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentTab = btn.dataset.tab;
    renderJobs();
  });
});

// Initial Calls
updateCounts();
renderJobs();
