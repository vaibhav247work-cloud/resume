export const resumeData = {
  name: "Vaibhav Sham Kapadne",
  email: "Vaibhavkapadne010@gmail.com",
  phone: "+91 8007203328, +91 8999962973",
  linkedin: "www.linkedin.com/in/vaibhavkapadne",
  summary: "Backend Java Developer with 3.6+ years of experience building scalable, secure, and high-performance backend systems using Java, Spring Boot, and Microservices. Skilled in RESTful API design, JWT/OAuth2 authentication, multi-tenant architecture, and data processing with multithreading. Committed to writing clean, optimized code and delivering reliable enterprise solutions.",
  experience: [
    {
      role: "SOFTWARE DEVELOPER",
      company: "WovVTech",
      period: "DEC 2021 – PRESENT",
      highlights: [
        "Proficient in Java, Spring Boot, Spring Security, and Microservices architecture for enterprise grade backend services.",
        "Built secure authentication layers using JWT, OAuth2, and SSO integration (Google, IOS).",
        "Strong in RESTful API design and integration, with experience in handling both JSON and XML data formats.",
        "Expert in building multi-tenant applications, ensuring data isolation, custom configurations, and secure tenant-level access.",
        "Implemented robust system security mechanisms including SQL injection protection, rate limiting, IP blocking, and DDoS defense.",
        "Developed OCR-based automation tools for auto-filling invoice/billing data, improving operational efficiency.",
        "Designed multi-threaded data ingestion pipelines, achieving efficient processing of large-scale raw data.",
        "Built intelligent file processing systems for parsing .doc, .xlsx, .xml, .txt files using Apache POI and OpenCSV.",
        "Created and maintained log and audit architectures using the ELK stack for monitoring and traceability.",
        "Experience with Redis, and CDN services for secure storage, fast delivery, and caching strategies.",
        "Passionate about performance optimization, clean code practices, and maintainable software architecture."
      ],
      highlightGroups: [
        {
          category: "Core Development",
          items: [
            "Proficient in Java, Spring Boot, Spring Security, and Microservices architecture for enterprise grade backend services.",
            "Strong in RESTful API design and integration, with experience in handling both JSON and XML data formats.",
            "Expert in building multi-tenant applications, ensuring data isolation, custom configurations, and secure tenant-level access.",
            "Passionate about performance optimization, clean code practices, and maintainable software architecture."
          ]
        },
        {
          category: "Security & Auth",
          items: [
            "Built secure authentication layers using JWT, OAuth2, and SSO integration (Google, IOS).",
            "Implemented robust system security mechanisms including SQL injection protection, rate limiting, IP blocking, and DDoS defense."
          ]
        },
        {
          category: "Data Processing",
          items: [
            "Developed OCR-based automation tools for auto-filling invoice/billing data, improving operational efficiency.",
            "Designed multi-threaded data ingestion pipelines, achieving efficient processing of large-scale raw data.",
            "Built intelligent file processing systems for parsing .doc, .xlsx, .xml, .txt files using Apache POI and OpenCSV."
          ]
        },
        {
          category: "DevOps & Infrastructure",
          items: [
            "Created and maintained log and audit architectures using the ELK stack for monitoring and traceability.",
            "Experience with Redis, and CDN services for secure storage, fast delivery, and caching strategies."
          ]
        }
      ]
    }
  ],
  projects: [
    {
      name: "OKEN",
      techStack: "Java, Spring Boot, Spring Security, Microservices, REST APIs, OAuth2, JWT, MySQL, Redis, Elasticsearch, Apache Kafka, Multi-Tenant Architecture",
      role: "Backend Java Developer",
      contributions: [
        "Developed a secure authentication and authorization layer using JWT and OAuth2, including third-party SSO integration (Google, Microsoft).",
        "Implemented system-level security protocols: SQL injection prevention, IP rate limiting, DDoS protection, and automated IP blocking.",
        "Created scalable logging architecture using ELK stack for auditing and monitoring user activities.",
        "Integrated external APIs to convert raw input (JSON/XML) into structured formats using Jackson and custom parsers.",
        "Performed code refactoring and optimization, reducing memory usage and improving service response time by 30%.",
        "Built OCR-based bill scanning and autofill feature to extract invoice data using Tesseract OCR.",
        "Engineered coupon unlock logic and applied validation rules on backend for dynamic feature management.",
        "Designed and implemented multi-tenant support in Spring Boot for onboarding multiple clients securely.",
        "Modularized application into Spring Boot microservices for authentication, logging, coupon management, and billing workflows."
      ]
    },
    {
      name: "CDN",
      techStack: "Java, Spring Boot, REST APIs, AWS S3, Rate Limiting",
      role: "Backend Java Developer",
      contributions: [
        "Developed a secure file upload/download system with token-based access control and rate-limiting mechanism using Bucket4j.",
        "Implemented dynamic path handling and secure file deletion functionality ensuring integrity and traceability.",
        "Ensured scalable file storage using AWS S3 and custom metadata mapping logic."
      ]
    },
    {
      name: "Wovmail Automation System",
      techStack: "Java, Spring Boot, Microsoft Graph API, JavaMail, Multi-Tenant",
      role: "Backend Java Developer",
      contributions: [
        "Automated the extraction of attachments from Outlook emails based on subject patterns using Microsoft Graph API.",
        "Parsed and processed files for multi-tenant environments, uploading them to specific client spaces with metadata tagging."
      ]
    },
    {
      name: "API Integration Platform",
      techStack: "Java, Spring Boot, REST APIs, XML/JSON Parsing, Apache POI, OpenCSV, Scheduler",
      role: "Backend Java Developer",
      contributions: [
        "Integrated with multiple client-side APIs to fetch and parse data in XML/JSON formats.",
        "Created dynamic parsers for documents (.doc, .xml, .xlsx, .txt), extracting relevant data and uploading to the backend server.",
        "Scheduled batch jobs for periodic data sync using Spring Scheduler and Quartz."
      ]
    },
    {
      name: "WovVRA (Raw Analysis)",
      techStack: "Java, Spring Boot, Multi-threading, JDBC, MySQL",
      role: "Backend Java Developer",
      contributions: [
        "Designed and implemented a data processing pipeline to clean, de-duplicate, and map records to DB schema.",
        "Leveraged multi-threading and concurrent processing to insert high-volume data efficiently into relational databases.",
        "Applied data validation and transformation logic for consistent ingestion."
      ]
    }
  ],
  skills: {
    "Languages": ["Java", "SQL"],
    "Frameworks": ["Spring Boot", "Spring Security", "Spring Data JPA"],
    "Architecture": ["Microservices", "RESTful APIs", "Multi-Tenant Architecture"],
    "Security": ["OAuth2", "JWT", "IP Blocking", "Rate Limiting", "XSS/SQLi Protection"],
    "Data Processing": ["Apache POI", "OpenCSV", "OCR (Tesseract)", "JSON/XML Parsing"],
    "Dev Tools": ["Git", "Maven", "Postman"],
    "Databases": ["MySQL", "MongoDB", "Redis"],
    "Cloud & Storage": ["CDN Integration", "AWS S3"],
    "Others": ["Multi-threading", "ELK Stack", "Scheduler", "API Integration", "Apache Kafka", "Elasticsearch"]
  },
  education: {
    degree: "BACHELOR OF ENGINEERING",
    period: "JUNE 2019",
    university: "MUMBAI UNIVERSITY"
  }
};
