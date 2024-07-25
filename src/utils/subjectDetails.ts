type SubjectResource = {
  name: string;
  pyq: { title: string; url: string }[];
  notes: { title: string; url: string }[];
  video: { title: string; url: string }[];
}

const subjectData: Record<string, Record<string, SubjectResource[]>> = {
  cse: {
    '1': [
      {
        name: "Mathematics IA",
        pyq: [
          { title: "2023 Question Paper", url: "/cse/1/math/pyq-2023" },
          { title: "2022 Question Paper", url: "/cse/1/math/pyq-2022" }
        ],
        notes: [
          { title: "Das Pal Book Vol IA", url: "https://t.me/c/1984190051/51" },
        ],
        video: [
          { title: "Full Maths", url: "https://www.youtube.com/watch?v=d2rfBp44s8E&list=PLn3Wz38keZOdNAJWL4WC9iYW5gnzfY3ey" },
        ]
      },
      {
        name: "Basic Electrical Engineering",
        pyq: [
          { title: "2024 Question Paper", url: "https://www.makaut.com/papers/btech-2-sem-basic-electrical-engineering-es-ee101-2024.pdf" },
          { title: "2022 Question Paper", url: "/cse/1/phy/pyq-2022" }
        ],
        notes: [
          { title: "BL Thereja", url: "https://t.me/c/1984190051/52" },
        ],
        video: [
          { title: "Full BEE", url: "https://www.youtube.com/watch?v=dZyKXdvzSz0&list=PLDN15nk5uLiCSOqr7-rUz6-GtdTAjlvul" }
        ]
      },
      {
        name:"Physics",
        pyq: [
          { title: "2023 Question Paper", url: "/cse/1/bee/pyq-2023" },
          { title: "2022 Question Paper", url: "/cse/1/bee/pyq-2022" }
        ],
        notes: [
          { title: "Basic Concepts", url: "/cse/1/bee/notes-basics" },
          { title: "Advanced Concepts", url: "/cse/1/bee/notes-advanced" }
        ],
        video: [
          { title: "Optics", url: "https://www.youtube.com/watch?v=vpJ2KQud-4o&list=PLQzUXa8lZVq_HKqpeG-UeZrFmDz1m0_SW" },
        ]
      },
      {
        name: "Chemistry",
        pyq: [
          { title: "2023 Question Paper", url: "/cse/1/chem/pyq-2023" },
          { title: "2022 Question Paper", url: "/cse/1/chem/pyq-2022" }
        ],
        notes: [
          { title: "Basic Concepts", url: "/cse/1/chem/notes-basics" },
          { title: "Advanced Concepts", url: "/cse/1/chem/notes-advanced" }
        ],
        video: [
          { title: "Course Introduction", url: "https://www.youtube.com/watch?v=I3GWzXRectE&t=110s" },
          { title: "Lecture 1", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" }
        ]
      },
      {
        name: "Maths IIA",
        pyq: [
          { title: "2023 Question Paper", url:"/cse/1/ed/pyq-2023" },
          { title: "2022 Question Paper", url: "/cse/1/ed/pyq-2022" }
        ],
        notes: [
          { title: "Basic Concepts", url: "/cse/1/ed/notes-basics" },
          { title: "Advanced Concepts", url: "/cse/1/ed/notes-advanced" }
        ],
        video: [
          { title: "Course Introduction", url: "https://www.youtube.com/watch?v=I3GWzXRectE&t=110s" },
          { title: "Lecture 1", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" }
        ]
      },
      {
        name: "Introduction to Programming",
        pyq: [
          { title: "2023 Question Paper", url: "/cse/1/intro-prog/pyq-2023" },
          { title: "2022 Question Paper", url: "/cse/1/intro-prog/pyq-2022" },
        ],
        notes: [
          { title: "Arrays", url: "https://www.sathyabama.ac.in/sites/default/files/course-material/2020-10/SCS1102-UNIT-III.pdf" },
          { title: "Advanced Concepts", url: "/cse/1/intro-prog/notes-advanced" }
        ],
        video: [
          { title: "Course Introduction", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" },
          { title: "Lecture 1", url: "https://www.youtube.com/watch?v=I3GWzXRectE&t=110s" }
        ]
      },

      // Add more subjects for CSE Year 1
    ],
    // Add more years for CSE
  },
  it:{"1":[{
    name: "Mathematics IA",
    pyq: [
      { title: "2023 Question Paper", url: "/cse/1/math/pyq-2023" },
      { title: "2022 Question Paper", url: "/cse/1/math/pyq-2022" }
    ],
    notes: [
      { title: "Basic Concepts", url: "/cse/1/math/notes-basics" },
      { title: "Advanced Concepts", url: "/cse/1/math/notes-advanced" }
    ],
    video: [
      { title: "Course Introduction", url: "https://www.youtube.com/watch?v=I3GWzXRectE&t=110s" },
      { title: "Lecture 1", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" }
    ]
  },
  {
    name: "Physics",
    pyq: [
      { title: "2023 Question Paper", url: "/cse/1/phy/pyq-2023" },
      { title: "2022 Question Paper", url: "/cse/1/phy/pyq-2022" }
    ],
    notes: [
      { title: "Basic Concepts", url: "/cse/1/phy/notes-basics" },
      { title: "Advanced Concepts", url: "/cse/1/phy/notes-advanced" }
    ],
    video: [
      { title: "Course Introduction", url: "https://www.youtube.com/watch?v=I3GWzXRectE&t=110s" },
      { title: "Lecture 1", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" }
    ]
  },
  {
    name:"Basic Electrical Engineering",
    pyq: [
      { title: "2023 Question Paper", url: "/cse/1/bee/pyq-2023" },
      { title: "2022 Question Paper", url: "/cse/1/bee/pyq-2022" }
    ],
    notes: [
      { title: "Basic Concepts", url: "/cse/1/bee/notes-basics" },
      { title: "Advanced Concepts", url: "/cse/1/bee/notes-advanced" }
    ],
    video: [
      { title: "Course Introduction", url: "https://www.youtube.com/watch?v=I3GWzXRectE&t=110s" },
      { title: "Lecture 1", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" }
    ]
  },
  {
    name: "Chemistry",
    pyq: [
      { title: "2023 Question Paper", url: "/cse/1/chem/pyq-2023" },
      { title: "2022 Question Paper", url: "/cse/1/chem/pyq-2022" }
    ],
    notes: [
      { title: "Basic Concepts", url: "/cse/1/chem/notes-basics" },
      { title: "Advanced Concepts", url: "/cse/1/chem/notes-advanced" }
    ],
    video: [
      { title: "Course Introduction", url: "https://www.youtube.com/watch?v=I3GWzXRectE&t=110s" },
      { title: "Lecture 1", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" }
    ]
  },
  {
    name: "Maths IIA",
    pyq: [
      { title: "2023 Question Paper", url: "/cse/1/ed/pyq-2023" },
      { title: "2022 Question Paper", url: "/cse/1/ed/pyq-2022" }
    ],
    notes: [
      { title: "Basic Concepts", url: "/cse/1/ed/notes-basics" },
      { title: "Advanced Concepts", url: "/cse/1/ed/notes-advanced" }
    ],
    video: [
      { title: "Course Introduction", url: "https://www.youtube.com/watch?v=I3GWzXRectE&t=110s" },
      { title: "Lecture 1", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" }
    ]
  },
  {
    name: "Introduction to Programming",
    pyq: [
      { title: "2023 Question Paper", url: "/cse/1/intro-prog/pyq-2023" },
      { title: "2022 Question Paper", url: "/cse/1/intro-prog/pyq-2022" },
    ],
    notes: [
      { title: "Basic Concepts", url: "/cse/1/intro-prog/notes-basics" },
      { title: "Advanced Concepts", url: "/cse/1/intro-prog/notes-advanced" }
    ],
    video: [
      { title: "Course Introduction", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" },
      { title: "Lecture 1", url: "https://www.youtube.com/watch?v=I3GWzXRectE&t=110s" }
    ]
  },
]
}
};

export function getSubjects(stream: string, year: string): SubjectResource[] {
  return subjectData[stream]?.[year] || [];
}