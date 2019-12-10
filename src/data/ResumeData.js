
function ResumeData(props) {
  const data = [
    {
      heading: "Education",
      info: {
        college: {
          school: "Stevens Institute of Technology",
          date: "Expected May 2023",
          location: "Hoboken, NJ",
          degree: "Bachelor of Science - Computer Science",
          gpa: "4.0",
        },
        highSchool: {
          school: "Stuyvesant High School",
          date: "09/2015 - 06/2019",
          location: "New York, NY",
          gpa: "4.0",
        },
        courseWork: {
          one: "Web Programming & Project Development",
          two: "Introduction to Computer Science",
          three: "Calculus for Functions of Two Variables",
          four: "Software Development",
          five: "Artificial Intelligence",
        }
      }
    },

    {
      heading: "Skills",
      info: {
        languages: ["Python", "JavaScript", "Java", "HTML5", "CSS3", "SQLite3"],
        software: ["Microsoft Office Suite", "Google Suite", "MongoDB"],
        os: ["Windows", "Linux", "Ubuntu"],
        frameworks: ["Flask", "React"],
      }
    },

    {
      heading: "Projects",
      info: {
        one: {
          title: "Project Tuesday",
          date: "01/2019",
          bullets: [""],
        },
        two: {
          title: "Groovy Movie",
          date: "12/2018",
          bullets: [""],
        }
      }
    },

    {
      heading: "Activities",
      info: {
        one: {
          title: "Stuy' Launch",
          date: "09/2017 - 05/2018",
          bullets: [""],
        },
        two: {
          title: "Ultimate Frisbee",
          date: "09/2016 - Present",
          bullets: [""],
        }
      }
    },

    {
      heading: "Volunteer Work",
      info: {
        one: {
          title: "Rubin Museum, New York, NY",
          date: "10/2016 - 01/2017",
          bullets: [""],
        }
      }
    },

    {
      heading: "Experience",
      info: {
        data: [""],
      }
    }
  ];

  return data;
}

export default ResumeData;
