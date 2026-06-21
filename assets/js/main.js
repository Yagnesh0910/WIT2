const header = document.querySelector("#siteHeader");
const navList = document.querySelector("#navList");
const menuToggle = document.querySelector("#menuToggle");
const megaMenu = document.querySelector("#megaMenu");
const heroTitle = document.querySelector("#heroTitle");
const announcementToggle = document.querySelector("#announcementToggle");
const announcementSidebar = document.querySelector("#announcementSidebar");
const announcementClose = document.querySelector("#announcementClose");
const announcementBackdrop = document.querySelector("#announcementBackdrop");

const departmentPages = {
  cse: "pages/departments/cse.html",
  it: "pages/departments/it.html",
  me: "pages/departments/me.html",
  ce: "pages/departments/ce.html",
  entc: "pages/departments/entc.html",
  ecs: "pages/departments/ecs.html",
  aiml: "pages/departments/aiml.html",
  ge: "pages/departments/ge.html"
};

// Dynamically calculate the relative path to the root directory
let rootPrefix = "";
const pathname = window.location.pathname;
if (pathname.includes("/pages/")) {
  const pagesIndex = pathname.indexOf("/pages/");
  const afterPages = pathname.substring(pagesIndex + 7);
  const depth = (afterPages.match(/\//g) || []).length;
  rootPrefix = "../" + "../".repeat(depth);
}

const branchTitles = {
  cse: "Computer Science & Engineering",
  it: "Information Technology",
  me: "Mechanical Engineering",
  ce: "Civil Engineering",
  entc: "Electronics & Telecommunication",
  ecs: "Electronics & Computer Engineering",
  aiml: "Artificial Intelligence & Machine Learning",
  ge: "General Engineering"
};

const departmentSectionGroups = [
  ["Department Links", [
    ["HOD Desk", "#hod-desk"],
    ["About Department", "#about-department"],
    ["Vision & Mission", "#vision-mission"],
    ["CO · PO · PSO · PEO", "#co-po-pso"],
    ["Faculty", "#faculty"],
    ["Infrastructure", "#infrastructure"],
    ["Syllabus", "#syllabus"],
    ["Achievements", "#achievements"]
  ]]
];

const examinationGroup = [
  "Examination", [
    ["WIT Exam rule book", "assets/documents/academics/examination/WIT-Exam-Rule-Book-18-5-26-for-web-site.pdf"],
    ["Discontinuation of carry on scheme", "assets/documents/academics/examination/Carry-on-Schem-Notice.pdf"],
    ["Implementation of Re-examination", "assets/documents/academics/examination/Condut-of-Reexamination-Notice.pdf"],
    ["2025-26(May-2026)", "pages/academics/timetable.html?session=2025-26(May-2026)"],
    ["2025-26(Nov-2025)", "pages/academics/timetable.html?session=2025-26(Nov-2025)"],
    ["2024-25(May-2025)", "pages/academics/timetable.html?session=2024-25(May-2025)"],
    ["2024-25(Nov-2024)", "pages/academics/timetable.html?session=2024-25(Nov-2024)"],
    ["2023-24", "pages/academics/timetable.html?session=2023-24"]
  ]
];

const elearningGroup = [
  "E-Learning", [
    ["NPTEL WIT LOCAL CHAPTER", "https://nptel.ac.in/localchapter/statistics/863"],
    ["Professional Learning Community (Video PEER Review Form)", "https://docs.google.com/forms/d/e/1FAIpQLSeSjlrlk41gIwH8m2YsW3gv5FrLXVd_K8bOmutfRWsVGXsBHA/viewform"],
    ["LMS", "pages/academics/lms.html"]
  ]
];

const accreditationGroup = [
  "Accreditation", [
    ["IQAC", "pages/accreditation/iqac.html"],
    ["NAAC", "pages/accreditation/naac.html"],
    ["NBA", "pages/accreditation/nba.html"],
    ["NIRF", "pages/accreditation/nirf.html"],
    ["ARIIA", "pages/accreditation/ariia.html"]
  ]
];

const bestpracticesGroup = [
  "Best Practices", [
    ["FACULTY E COURSE BOOK", "assets/documents/academics/best_practices/Faculty-e-Course-Book.pdf"],
    ["PLC", "assets/documents/academics/best_practices/PLC.pdf"],
    ["STUDENT ADMISSION PROCESS", "assets/documents/academics/best_practices/Student-Admission-Process.pdf"],
    ["INNOVATIONS IN TEACHING LEARNING", "assets/documents/academics/best_practices/Innovations-in-Teaching-Learning.pdf"],
    ["INCULCATING LIFE LONG LEARNING", "assets/documents/academics/best_practices/Inculcating-Life-Long-Learning.pdf"]
  ]
];

const innovationIprGroup = [
  "Innovation Entrepreneurship and IPR", [
    ["Committee for Implementation of Innovation and Start Up Policy", "assets/documents/academics/innovation_entrepreneurship_and_ipr/Innovation-and-startup-policy-implementation-team.pdf"],
    ["NISP Guiding Framework by AICTE", "assets/documents/academics/innovation_entrepreneurship_and_ipr/NISP-2019-Guiding-Framework-By-AICTE.pdf"],
    ["WIT Innovation and Start Up Policy 2021", "assets/documents/academics/innovation_entrepreneurship_and_ipr/WIT-Innovation-Startup-Policy.pdf"]
  ]
];

const menus = {
  about: {
    label: "About",
    headline: "Institute identity, governance, values, reports, and public information.",
    groups: [
      ["Institute", [
        ["Institute Information", "assets/documents/about_institute/Institute-Information.pdf"],
        ["Management", "pages/about/management.html"],
        ["Vision & Mission", "pages/about/vision-mission.html"],
        ["Goals & Quality", "pages/about/goals-quality.html"],
        ["Core Values", "pages/about/core-values.html"],
        ["Governing Body", "pages/about/governing-body.html"],
        ["Policies", "pages/about/policies.html"]
      ]],
      ["Leadership & Reports", [
        ["Secretary Desk", "pages/about/secretary-desk.html"],
        ["Principal Desk", "pages/about/principal-desk.html"],
        ["Organization Chart", "assets/documents/about_institute/Organization-Structure-of-WIT.pdf"],
        ["Institute Development Plan", "assets/documents/about_institute/Institute Development Plan.pdf"],
        ["Annual Reports", "pages/about/annual-reports.html"],
        ["Mandatory Disclosure", "assets/documents/about_institute/Mandatory-Disclosure_May-2025.pdf"],
        ["RTI", "assets/documents/about_institute/RTI.pdf"]
      ]]
    ]
  },
  academics: {
    label: "Academics",
    headline: "Departments, programmes, academic resources, accreditation, and innovation.",
    groups: [
      ["Academic Links", [
        ["Departments", "#academics-departments"],
        ["Academic Calendar", "pages/academics/academic-calendar.html"],
        ["Examination", "#academics-examination"],
        ["E-Learning", "#academics-elearning"],
        "Programmes Offered",
        ["Accreditation", "#academics-accreditation"],
        ["Best Practices", "#academics-bestpractices"],
        ["Innovation Entrepreneurship and IPR", "#academics-innovation-ipr"]
      ]],
      ["Departments", [
        ["Computer Science & Engineering", "cse"],
        ["Information Technology", "it"],
        ["Mechanical Engineering", "me"],
        ["Civil Engineering", "ce"],
        ["Electronics & Telecommunication", "entc"],
        ["Artificial Intelligence & Machine Learning", "aiml"],
        ["Electronics & Computer Engineering", "ecs"],
        ["General Engineering", "ge"]
      ]]
    ]
  },
  admissions: {
    label: "Admissions",
    headline: "Admission routes, eligibility, scholarships, hostel, fees, and course codes.",
    groups: [
      ["Admission Process", [
        ["First Year Admission", "pages/admissions/first-year.html"],
        ["Direct Second Year Admission", "pages/admissions/dsy.html"],
        ["M.Tech Admission", "pages/admissions/mtech.html"],
        ["SY to Final Year Admission", "assets/documents/admissions/SY-to-Final-Year-Admission-Notice-2024-25.pdf"],
        ["Eligibility & Admission Process", "https://cetcell.mahacet.org/CET_landing_page_2023/"],
        ["Scholarships", "pages/admissions/scholarships.html"]
      ]],
      ["Fees & Support", [
        ["Hostel", "pages/admissions/hostel.html"],
        ["Fee Structure", "pages/admissions/fee-structure.html"],
        ["Fee Proposal", "pages/admissions/fee-proposal.html"],
        ["WIT Option Form Filling Course Codes", "assets/documents/admissions/wit_option_form_course_codes.jpg"],
        ["Fee Payment Guidelines", "assets/documents/admissions/guideline_onlinefeepayment_sbcollect.pdf"]
      ]]
    ]
  },
  research: {
    label: "Research",
    headline: "Research, innovation, quality assurance, rankings, approvals, and proceedings.",
    groups: [
      ["Research Ecosystem", [
        ["Research Overview", "pages/research.html"], 
        ["Innovation Entrepreneurship and IPR", "pages/innovation-ipr.html"], 
        ["IQAC", "pages/accreditation/iqac.html"], 
        ["NAAC", "pages/accreditation/naac.html"], 
        ["NBA", "pages/accreditation/nba.html"]
      ]],
      ["Approvals & Rankings", [
        ["NIRF", "pages/accreditation/nirf.html"], 
        ["ARIIA", "pages/accreditation/ariia.html"], 
        ["AICTE Approvals", "assets/documents/AICTE-Approval-Letters.pdf"], 
        "Conference Proceedings"
      ]]
    ]
  },
  campus: {
    label: "Campus Life",
    headline: "Events, clubs, placements, alumni, WITchar, e-store, and career opportunities.",
    groups: [
      ["Life at WIT", [["Events", "pages/gallery.html"], ["Training & Placements", "pages/placement.html"], "Alumni", "WITchar 2k26", ["WIT E-Store", "https://www.printvenue.com/collections/cs-wit"], ["Career", "pages/career.html"]]],
      ["Clubs", [
        ["Art Club", "pages/art-club.html"],
        ["Google Developers Group", "https://gdg.community.dev/gdg-on-campus-walchand-institute-of-technology-solapur-india/"],
        ["LOL Coding Club", "https://lolclubwit.web.app/"]
      ]]
    ]
  },
  examination: {
    label: "Examination",
    headline: "Exam rules, re-examination rules, carry-on scheme, and exam sections.",
    groups: [
      ["Exam Cell", [
        ["Exam Rule Book", "assets/documents/academics/examination/WIT-Exam-Rule-Book-18-5-26-for-web-site.pdf"],
        ["Re-Examination Rules", "assets/documents/academics/examination/Condut-of-Reexamination-Notice.pdf"],
        ["Carry On Scheme", "assets/documents/academics/examination/Carry-on-Schem-Notice.pdf"],
        "Academic Year Exam Sections"
      ]]
    ]
  },
  contact: {
    label: "Contact",
    headline: "Contact, grievance, tenders, important links, and scholarship schemes.",
    groups: [
      ["Connect", [["Contact Us", "pages/contact.html"], ["Online Grievance", "https://docs.google.com/forms/d/e/1FAIpQLSea-zVWwqoxxh4sZrd67AK0Umcwk68JSsDWXnsUkXjeUVPPEQ/viewform"], ["Tenders", "pages/tenders.html"], "Important Links", ["AICTE Scholarship Schemes", "https://www.aicte.gov.in/schemes/students-development-schemes"]]]
    ]
  }
};

const pageDepartment = document.body.dataset.department || "";
if (pageDepartment && branchTitles[pageDepartment]) {
  menus.department = {
    label: branchTitles[pageDepartment],
    headline: `${branchTitles[pageDepartment]} department quick links.`,
    groups: departmentSectionGroups
  };
}

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 28);
}

function createMenuLinks(items) {
  return items.map((item) => {
    let label;
    let href = "#";

    if (Array.isArray(item)) {
      label = item[0];
      const link = item[1] ?? "#";

      if (link.startsWith("#")) {
        href = link;
      } else if (departmentPages[link]) {
        href = rootPrefix + departmentPages[link];
      } else {
        if (!link.startsWith("http") && !link.startsWith("https") && !link.startsWith("mailto:") && !link.startsWith("/")) {
          href = rootPrefix + link;
        } else {
          href = link;
        }
      }
    } else {
      label = item;
    }

    const targetAttr = href.endsWith(".pdf") || href.startsWith("http") || href.startsWith("https") ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${href}"${targetAttr}>${label}</a>`;
  }).join("");
}

function renderMegaMenu(key) {
  const menu = menus[key];
  if (!menu) return;

  const groups = menu.groups.map(([title, items]) => `
    <div class="mega-group">
      <h4>${title}</h4>
      ${createMenuLinks(items)}
    </div>
  `).join("");

  megaMenu.innerHTML = `<div class="mega-inner"><div class="mega-groups">${groups}</div></div>`;

  // Highlight the default subtab for academics
  if (key === "academics") {
    const defaultSubtab = megaMenu.querySelector('a[href="#academics-departments"]');
    if (defaultSubtab) {
      defaultSubtab.classList.add("subtab-active");
    }
  }
}

function openMegaMenu(key, trigger) {
  if (window.matchMedia("(max-width: 1160px)").matches) return;
  renderMegaMenu(key);
  document.querySelectorAll(".menu-trigger").forEach((button) => button.classList.remove("active"));
  trigger.classList.add("active");
  megaMenu.classList.add("open");
  megaMenu.setAttribute("aria-hidden", "false");
}

function closeMegaMenu() {
  document.querySelectorAll(".menu-trigger").forEach((button) => button.classList.remove("active"));
  megaMenu.classList.remove("open");
  megaMenu.setAttribute("aria-hidden", "true");
}

function buildMobilePanels() {
  document.querySelectorAll(".menu-trigger").forEach((trigger) => {
    const menu = menus[trigger.dataset.menu];
    if (!menu) return;
    const panel = document.createElement("div");
    panel.className = "mobile-panel";

    if (trigger.dataset.menu === "academics") {
      // Create specific layout for Academics on mobile
      const academicLinks = menu.groups[0][1].filter(item => {
        const label = Array.isArray(item) ? item[0] : item;
        return label !== "Departments" && label !== "Examination" && label !== "E-Learning" && label !== "Accreditation" && label !== "Best Practices" && label !== "Innovation Entrepreneurship and IPR";
      });

      // Add Academic Links
      panel.insertAdjacentHTML("beforeend", createMenuLinks(academicLinks));

      // Add Departments toggle and its sub-panel
      panel.insertAdjacentHTML("beforeend", `<a href="#mobile-academics-departments" class="mobile-subtab-trigger">Departments</a>`);
      panel.insertAdjacentHTML("beforeend", `
        <div id="mobile-academics-departments" class="mobile-sub-panel" style="display: none;">
          ${createMenuLinks(menu.groups[1][1])}
        </div>
      `);

      // Add Examination toggle and its sub-panel
      panel.insertAdjacentHTML("beforeend", `<a href="#mobile-academics-examination" class="mobile-subtab-trigger">Examination</a>`);
      panel.insertAdjacentHTML("beforeend", `
        <div id="mobile-academics-examination" class="mobile-sub-panel" style="display: none;">
          ${createMenuLinks(examinationGroup[1])}
        </div>
      `);

      // Add E-Learning toggle and its sub-panel
      panel.insertAdjacentHTML("beforeend", `<a href="#mobile-academics-elearning" class="mobile-subtab-trigger">E-Learning</a>`);
      panel.insertAdjacentHTML("beforeend", `
        <div id="mobile-academics-elearning" class="mobile-sub-panel" style="display: none;">
          ${createMenuLinks(elearningGroup[1])}
        </div>
      `);

      // Add Accreditation toggle and its sub-panel
      panel.insertAdjacentHTML("beforeend", `<a href="#mobile-academics-accreditation" class="mobile-subtab-trigger">Accreditation</a>`);
      panel.insertAdjacentHTML("beforeend", `
        <div id="mobile-academics-accreditation" class="mobile-sub-panel" style="display: none;">
          ${createMenuLinks(accreditationGroup[1])}
        </div>
      `);

      // Add Best Practices toggle and its sub-panel
      panel.insertAdjacentHTML("beforeend", `<a href="#mobile-academics-bestpractices" class="mobile-subtab-trigger">Best Practices</a>`);
      panel.insertAdjacentHTML("beforeend", `
        <div id="mobile-academics-bestpractices" class="mobile-sub-panel" style="display: none;">
          ${createMenuLinks(bestpracticesGroup[1])}
        </div>
      `);

      // Add Innovation Entrepreneurship and IPR toggle and its sub-panel
      panel.insertAdjacentHTML("beforeend", `<a href="#mobile-academics-innovation-ipr" class="mobile-subtab-trigger">Innovation Entrepreneurship and IPR</a>`);
      panel.insertAdjacentHTML("beforeend", `
        <div id="mobile-academics-innovation-ipr" class="mobile-sub-panel" style="display: none;">
          ${createMenuLinks(innovationIprGroup[1])}
        </div>
      `);
    } else {
      menu.groups.forEach(([, items]) => {
        panel.insertAdjacentHTML("beforeend", createMenuLinks(items));
      });
    }

    trigger.closest("li").appendChild(panel);
  });
}

function toggleMobileNav() {
  const isOpen = navList.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
}

function setupAnnouncements() {
  if (!announcementToggle || !announcementSidebar || !announcementClose || !announcementBackdrop) return;

  function openAnnouncements() {
    announcementSidebar.classList.add("open");
    announcementSidebar.setAttribute("aria-hidden", "false");
    announcementToggle.setAttribute("aria-expanded", "true");
    announcementBackdrop.hidden = false;
    announcementClose.focus();
  }

  function closeAnnouncements() {
    announcementSidebar.classList.remove("open");
    announcementSidebar.setAttribute("aria-hidden", "true");
    announcementToggle.setAttribute("aria-expanded", "false");
    announcementBackdrop.hidden = true;
  }

  announcementToggle.addEventListener("click", () => {
    if (announcementSidebar.classList.contains("open")) {
      closeAnnouncements();
    } else {
      openAnnouncements();
    }
  });

  announcementClose.addEventListener("click", closeAnnouncements);
  announcementBackdrop.addEventListener("click", closeAnnouncements);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAnnouncements();
  });
}

function typeHeroTitle() {
  const kicker = "S. A. P. D. Jain Pathashala's";
  const title = "Walchand Institute of Technology, Solapur";
  const subtitle = "An Autonomous Institute";
  const caret = '<span class="caret" aria-hidden="true"></span>';
  
  const kickerEl = document.querySelector("#heroKicker");
  const titleEl = document.querySelector("#heroTitle");
  const subtitleEl = document.querySelector("#heroSubtitle");

  if (!kickerEl || !titleEl || !subtitleEl) return;
  
  // Display kicker
  kickerEl.textContent = kicker;
  
  // Type out main title
  let index = 0;
  function typeTitle() {
    titleEl.innerHTML = `${title.slice(0, index)}${caret}`;
    index += 1;

    if (index <= title.length) {
      window.setTimeout(typeTitle, 34);
    } else {
      window.setTimeout(() => {
        titleEl.textContent = title;
        typeSubtitle();
      }, 300);
    }
  }

  // Type out subtitle
  let subIndex = 0;
  function typeSubtitle() {
    subtitleEl.innerHTML = `${subtitle.slice(0, subIndex)}${caret}`;
    subIndex += 1;

    if (subIndex <= subtitle.length) {
      window.setTimeout(typeSubtitle, 34);
    } else {
      window.setTimeout(() => {
        subtitleEl.textContent = subtitle;
        const accreditationsEl = document.querySelector(".hero-accreditations");
        if (accreditationsEl) {
          accreditationsEl.classList.add("revealed");
        }
      }, 300);
    }
  }

  typeTitle();
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  items.forEach((item) => observer.observe(item));
}

function duplicateMarqueeItems(track) {
  if (!track || track.dataset.loopReady === "true") return;

  const items = [...track.children];
  items.forEach((item) => {
    track.appendChild(item.cloneNode(true));
  });

  track.dataset.loopReady = "true";
}

function initHomeMarquees() {
  const announcementTrack = document.querySelector(".announcement-track");
  if (announcementTrack) {
    duplicateMarqueeItems(announcementTrack);
  }

  document.querySelectorAll(".marquee-track").forEach(duplicateMarqueeItems);

  const newsTrack = document.querySelector(".news-ticker-track");
  if (newsTrack && newsTrack.dataset.loopReady !== "true") {
    const items = [...newsTrack.querySelectorAll(".news-item")];
    const uniqueItems = items.slice(0, 10);

    newsTrack.innerHTML = "";
    uniqueItems.forEach((item) => newsTrack.appendChild(item));
    uniqueItems.forEach((item) => newsTrack.appendChild(item.cloneNode(true)));
    newsTrack.dataset.loopReady = "true";
  }
}

document.querySelectorAll(".menu-trigger").forEach((trigger) => {
  trigger.addEventListener("mouseenter", () => openMegaMenu(trigger.dataset.menu, trigger));
  trigger.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 1160px)").matches) {
      const panel = trigger.closest("li").querySelector(".mobile-panel");
      panel.classList.toggle("open");
      trigger.classList.toggle("active", panel.classList.contains("open"));
      return;
    }

    if (megaMenu.classList.contains("open") && trigger.classList.contains("active")) {
      closeMegaMenu();
    } else {
      openMegaMenu(trigger.dataset.menu, trigger);
    }
  });
});

function switchAcademicsSubtab(href, link) {
  if (link.classList.contains("subtab-active")) return;

  // Toggle active styling on left links
  const parentList = link.closest(".mega-group");
  if (parentList) {
    parentList.querySelectorAll("a").forEach(a => a.classList.remove("subtab-active"));
    link.classList.add("subtab-active");
  }

  // Update right column content
  const megaGroups = document.querySelector(".mega-groups");
  if (megaGroups) {
    const rightGroup = megaGroups.children[1];
    if (rightGroup) {
      if (href === "#academics-departments") {
        rightGroup.innerHTML = `
          <h4>Departments</h4>
          ${createMenuLinks(menus.academics.groups[1][1])}
        `;
      } else if (href === "#academics-examination") {
        rightGroup.innerHTML = `
          <h4>Examination</h4>
          ${createMenuLinks(examinationGroup[1])}
        `;
      } else if (href === "#academics-elearning") {
        rightGroup.innerHTML = `
          <h4>E-Learning</h4>
          ${createMenuLinks(elearningGroup[1])}
        `;
      } else if (href === "#academics-accreditation") {
        rightGroup.innerHTML = `
          <h4>Accreditation</h4>
          ${createMenuLinks(accreditationGroup[1])}
        `;
      } else if (href === "#academics-bestpractices") {
        rightGroup.innerHTML = `
          <h4>Best Practices</h4>
          ${createMenuLinks(bestpracticesGroup[1])}
        `;
      } else if (href === "#academics-innovation-ipr") {
        rightGroup.innerHTML = `
          <h4>Innovation Entrepreneurship and IPR</h4>
          ${createMenuLinks(innovationIprGroup[1])}
        `;
      }
    }
  }
}

// Hover support for desktop Academics mega menu subtabs
document.addEventListener("mouseover", (event) => {
  if (window.matchMedia("(max-width: 1160px)").matches) return;

  const link = event.target.closest("a");
  if (link) {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#academics-")) {
      switchAcademicsSubtab(href, link);
    }
  }
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("a");

  if (link) {
    const href = link.getAttribute("href");

    // 1. Desktop subtabs toggle in Academics
    if (href && href.startsWith("#academics-")) {
      event.preventDefault();
      switchAcademicsSubtab(href, link);
      return;
    }

    // 2. Mobile subtabs toggle in Academics
    if (link.classList.contains("mobile-subtab-trigger")) {
      event.preventDefault();
      const targetId = href;
      const targetPanel = document.querySelector(targetId);
      if (targetPanel) {
        const isVisible = targetPanel.style.display !== "none";
        targetPanel.style.display = isVisible ? "none" : "grid";
        link.classList.toggle("subtab-active", !isVisible);
      }
      return;
    }

    // Standard megamenu and navigation close logic
    if (event.target.closest(".mega-menu")) {
      closeMegaMenu();
    }
    if (event.target.closest(".mobile-panel") && navList.classList.contains("open")) {
      toggleMobileNav();
    }
  }

  if (!event.target.closest(".site-header")) {
    closeMegaMenu();
  }
});

const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    alert("Thank you for subscribing.");
  });
}

if (menuToggle) {
  menuToggle.addEventListener("click", toggleMobileNav);
}
megaMenu.addEventListener("mouseleave", closeMegaMenu);
megaMenu.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (link) {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) return;
    closeMegaMenu();
  }
});
header.addEventListener("mouseleave", closeMegaMenu);
window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (!window.matchMedia("(max-width: 1160px)").matches) {
    navList.classList.remove("open");
    menuToggle.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
});

const yearEl = document.querySelector("#year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
setupAnnouncements();
buildMobilePanels();
updateHeader();
let heroAnimationStarted = false;
function startHeroAnimation() {
  if (heroAnimationStarted) return;
  heroAnimationStarted = true;
  typeHeroTitle();
}

setupRevealAnimations();
initHomeMarquees();

function setupFirstVisitPopup() {
  const modal = document.querySelector("#firstVisitModal");
  const closeBtn = document.querySelector("#firstVisitClose");

  if (!modal || !closeBtn) {
    startHeroAnimation();
    return;
  }

  window.addEventListener("load", () => {
    modal.hidden = false;
    document.body.classList.add("modal-open");
  });

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    startHeroAnimation();
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
}

setupFirstVisitPopup();

// Slideshow Controller
function initSlideshow() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".slideshow-btn.prev");
  const nextBtn = document.querySelector(".slideshow-btn.next");
  
  let currentSlide = 0;
  let autoplayTimer = null;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (dots[i]) dots[i].classList.remove("active");

      const img = slide.querySelector("img");
      if (img) {
        img.style.animation = "none";
        void img.offsetWidth;
        img.style.animation = "";
      }
    });

    slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    resetAutoplay();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    resetAutoplay();
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  function startAutoplay() {
    autoplayTimer = setInterval(nextSlide, 4000);
  }

  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideIndex = parseInt(e.target.dataset.slide);
      showSlide(slideIndex);
      resetAutoplay();
    });
  });

  showSlide(0);
  startAutoplay();
}

if (document.querySelector(".slideshow-container")) {
  initSlideshow();
}
