const initialProjects = [
            {
                name: "Android Projects Website",
                description: "A showcase of my Android projects, featuring live demos, source code, and detailed documentation. Explore innovative apps and solutions built with Kotlin, Jetpack Compose, and modern Android tools.",
                tech: ["Android", "Kotlin", "Jetpack Compose", "Web"],
                category: "web",
                link: "https://suryanshsrivastv.github.io/TAppStore/",
                image: "https://developer.android.com/static/images/logos/android.svg"
            },
            {
                name: "LAMEZZ - The Text-Based Social App",
                description: "Developed a social media app backend using Java and integrated Firebase for real-time data storage and retrieval. Implemented robust authentication and profile management with features for posts, like counts, and real-time updates.",
                tech: ["Java", "Firebase", "Authentication", "Real-time"],
                category: "mobile",
                link: "https://suryanshsrivastv.github.io/TAppStore/#Lamezzz",
                github: "https://github.com/Suryanshsrivastv/Lamezzz"
            },
            {
                name: "TAnalyzr - AI Powered Code Quality Analyzer",
                description: "Developed an AI-driven code quality assessment tool using Spring Boot for the backend. Implemented intelligent code analysis that provides actionable insights, uncovers bad practices, and highlights critical areas.",
                tech: ["Spring Boot", "AI", "Code Analysis", "Java", "React JS"],
                category: "ai",
                link: "https://suryanshsrivastv.github.io/Code-analyzer-frontend/",
                github: "https://github.com/Suryanshsrivastv/speedy-frontend"
            },
            {
                name: "TanGPT - Personal AI Chatbot App",
                description: "Designed a lightweight AI-powered chatbot app with Kotlin and Jetpack Compose. Integrated API-based message handling with intuitive color-coded UI for improved usability.",
                tech: ["Kotlin", "Jetpack Compose", "AI", "Android"],
                category: "mobile",
                link: "https://suryanshsrivastv.github.io/TAppStore/#Tangpt",
                github: "https://github.com/Suryanshsrivastv/speedy-frontend"
            },
            {
                name: "Speedy - Internet Speed Test",
                description: "Implemented real-time testing for download/upload speeds, jitter, and ping. Developed a scalable and reliable Spring Boot backend. Launched website and Android app serving over 100 users.",
                tech: ["Spring Boot", "Android", "Performance Testing", "Java","React JS"],
                category: "web",
                link: "https://suryanshsrivastv.github.io/speedy-frontend/",
                github: "https://github.com/Suryanshsrivastv/speedy-frontend"
            },
            {
                name: "TBanking API",
                description: "Developed a secure and efficient banking Backend API using Spring Boot as well as using Express.js. Implemented features such as account management, transaction processing,balance updates, featuring Rate Limiting, and JWT authentication for preventing unauthorized access.",
                tech: ["Spring Boot", "Express.js", "API Development", "Java", "Node.js","MongoDB", "Docker"],
                category: "web",
                link: "https://github.com/Suryanshsrivastv/Tbank-Banking-Application",
                github: "https://github.com/Suryanshsrivastv/Banking-Backend-API"
            },
             {
                name : "TResume",
                description: "An Interactive and user freindly interface to access the AI powered Resume Analyzr Built using Spring Boot and React JS. It provides a user-friendly interface for users to upload their resumes and receive detailed feedback on how to improve them along with scores and proper suggestions.",
                tech: ["Spring Boot", "React JS", "AI", "Java","JS"],
                category: "ai",
                link: "https://suryanshsrivastv.github.io/Resume-Analyzr-Frontend/",
                github: "https://github.com/Suryanshsrivastv/Resume-Analyzr-Frontend"
            },{
                name: "Other Projects",
                description: "Stay tuned and Refer to My GitHub profile for more projects",
                tech: [],
                category: "web",
                link: "#",
            }
        ];

        // Load projects from localStorage or use initial projects
        let projects = initialProjects;

        // Save projects to localStorage
        function saveProjects() {
            localStorage.setItem('portfolio-projects', JSON.stringify(projects));
        }

        // Create project card HTML
        function createProjectCard(project) {
            const techTags = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
            // Special styling for Android Projects Website
            const isFeatured = project.name === "Android Projects Website";
            return `
                <div class="project-card${isFeatured ? ' featured-project' : ''}" data-category="${project.category}">
                    <div class="project-image">
                        ${project.image ? `<img src="${project.image}" alt="${project.name} Preview" style="width:100%;height:200px;object-fit:cover;border-radius:12px;">` : getProjectIcon(project.category)}
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.name}${isFeatured ? ' <span class="external-link-icon">★</span>' : ''}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tech">
                            ${techTags}
                        </div>
                        <div class="project-links">
                            ${project.link && project.link !== '#' ? `<a href="${project.link}" target="_blank" class="project-link">Visit Website <span class="external-link-icon">↗</span></a>` : ''}
                            ${project.github ? `<a href="${project.github}" target="_blank" class="project-link">GitHub <span class="external-link-icon">↗</span></a>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Get project icon based on category
        function getProjectIcon(category) {
            const icons = {
                web: '🌐',
                mobile: '📱',
                ai: '🤖'
            };
            return icons[category] || '💻';
        }

        // Render projects
        function renderProjects(projectsToRender = projects) {
            const projectsGrid = document.getElementById('projects-grid');
            projectsGrid.innerHTML = projectsToRender.map(createProjectCard).join('');
        }

        // Filter projects
        function setupProjectFilters() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    const filter = button.getAttribute('data-filter');
                    
                    if (filter === 'all') {
                        renderProjects();
                    } else {
                        const filteredProjects = projects.filter(project => project.category === filter);
                        renderProjects(filteredProjects);
                    }
                });
            });
        }

        // Setup admin panel
        function setupAdminPanel() {
            const adminToggle = document.getElementById('admin-toggle');
            const adminPanel = document.getElementById('admin-panel');
            const projectForm = document.getElementById('project-form');

            adminToggle.addEventListener('click', () => {
                // Password protection
                const password = prompt('Enter admin password:');
                if (password !== 'admin123') {
                    alert('Access denied');
                    return;
                }
                
                adminPanel.classList.toggle('active');
                const isActive = adminPanel.classList.contains('active');
                adminToggle.textContent = isActive ? '×' : '•';
            });

            projectForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const formData = new FormData(projectForm);
                const newProject = {
                    name: document.getElementById('project-name').value,
                    description: document.getElementById('project-description').value,
                    tech: document.getElementById('project-tech').value.split(',').map(tech => tech.trim()),
                    category: document.getElementById('project-category').value,
                    link: document.getElementById('project-link').value || '#'
                };

                projects.unshift(newProject);
                saveProjects();
                renderProjects();
                projectForm.reset();
                adminPanel.classList.remove('active');
                adminToggle.textContent = '•';
                
                alert('Project added successfully!');
            });
        }

        // Smooth scrolling for navigation links
        function setupSmoothScrolling() {
            const navLinks = document.querySelectorAll('a[href^="#"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        const headerHeight = document.querySelector('header').offsetHeight;
                        const targetPosition = targetSection.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

        // Intersection Observer for section animations
        function setupIntersectionObserver() {
            const sections = document.querySelectorAll('section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            sections.forEach(section => {
                observer.observe(section);
            });
        }

        // Copy email to clipboard functionality
        function setupCopyEmail() {
            const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
            
            emailLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const email = link.textContent;
                    
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(email).then(() => {
                            // Show temporary feedback
                            const originalText = link.textContent;
                            link.textContent = 'Copied!';
                            setTimeout(() => {
                                link.textContent = originalText;
                            }, 2000);
                        });
                    }
                });
            });
        }

        // Header scroll effect
        function setupHeaderScrollEffect() {
            const header = document.querySelector('header');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(10, 10, 10, 0.95)';
                    header.style.backdropFilter = 'blur(20px)';
                } else {
                    header.style.background = 'rgba(10, 10, 10, 0.9)';
                    header.style.backdropFilter = 'blur(10px)';
                }
            });
        }

        // Typing animation for hero subtitle
        function setupTypingAnimation() {
            const subtitle = document.querySelector('.hero .subtitle');
            const text = 'Software Development Engineer';
            let index = 0;
            
            subtitle.textContent = '';
            
            function typeWriter() {
                if (index < text.length) {
                    subtitle.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, 100);
                }
            }
            
            // Start typing animation after a delay
            setTimeout(typeWriter, 1000);
        }

        // Particle background for hero section
        function createParticleBackground() {
            const hero = document.querySelector('.hero');
            const particlesContainer = document.createElement('div');
            particlesContainer.style.position = 'absolute';
            particlesContainer.style.top = '0';
            particlesContainer.style.left = '0';
            particlesContainer.style.width = '100%';
            particlesContainer.style.height = '100%';
            particlesContainer.style.overflow = 'hidden';
            particlesContainer.style.zIndex = '1';
            
            hero.appendChild(particlesContainer);
            
            // Create floating particles
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '2px';
                particle.style.height = '2px';
                particle.style.background = 'rgba(59, 130, 246, 0.5)';
                particle.style.borderRadius = '50%';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animation = `float ${5 + Math.random() * 10}s linear infinite`;
                particle.style.animationDelay = Math.random() * 5 + 's';
                
                particlesContainer.appendChild(particle);
            }
            
            // Add CSS animation for particles
            const style = document.createElement('style');
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            renderProjects();
            setupProjectFilters();
            setupAdminPanel();
            setupSmoothScrolling();
            setupIntersectionObserver();
            setupCopyEmail();
            setupHeaderScrollEffect();
            setupTypingAnimation();
            createParticleBackground();
            
            // Save initial projects if not already saved
            if (!localStorage.getItem('portfolio-projects')) {
                saveProjects();
            }

            // Resume download animation
            document.querySelectorAll('.resume-download').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    this.classList.add('downloading');
                    setTimeout(() => {
                        this.classList.remove('downloading');
                    }, 1200);
                });
            });

            // Backend warning dismiss
            const warning = document.getElementById('backend-warning');
            const closeWarning = document.getElementById('close-warning');
            if (warning && closeWarning) {
                closeWarning.addEventListener('click', () => {
                    warning.style.display = 'none';
                });
            }

            // Intercept "Visit Website" clicks in project cards
            document.body.addEventListener('click', function(e) {
                const link = e.target.closest('.project-link');
                if (link && link.textContent.includes('Visit Website')) {
                    e.preventDefault();
                    const url = link.getAttribute('href');
                    const modal = document.getElementById('backend-modal');
                    const closeBtn = document.getElementById('close-backend-modal');
                    const proceedBtn = document.getElementById('proceed-to-site');
                    modal.style.display = 'flex';

                    // Close modal
                    closeBtn.onclick = () => { modal.style.display = 'none'; };
                    // Proceed to site
                    proceedBtn.onclick = () => {
                        modal.style.display = 'none';
                        window.open(url, '_blank', 'noopener');
                    };
                }
            });
        });

        // Add some interactive elements
        document.addEventListener('mousemove', (e) => {
            const cursor = document.querySelector('.cursor');
            if (!cursor) {
                const newCursor = document.createElement('div');
                newCursor.className = 'cursor';
                newCursor.style.cssText = `
                    position: fixed;
                    width: 20px;
                    height: 20px;
                    background: radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    transition: transform 0.1s ease;
                `;
                document.body.appendChild(newCursor);
            }
            
            const cursorElement = document.querySelector('.cursor');
            cursorElement.style.left = e.clientX - 10 + 'px';
            cursorElement.style.top = e.clientY - 10 + 'px';
        });