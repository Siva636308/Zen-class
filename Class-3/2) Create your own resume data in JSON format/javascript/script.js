let resume = {
    name: "sivanathan",
    Gender: "Male",
    email: "sivanathanv1999@gmail.com",
    education_qualification: [{
        _10th: {
            school_name: "vbmms",
            percentage: 75,
            passout: 2015,
        },
        _12th: {
            school_name: "vbmms",
            group: "computer science",
            percentage: 73,
            passout: 2017,
        },
        college: {
            college_name: "DGCT",
            degree: "BE",
            dept: "mechanical",
            percentage: 75,
            passout: 2021,
        },
    }],

    skill_set: {
        Programming_Languages: "Basics of python",
        Markup_Languages: ["HTML", "CSS ", "JavaScript"],
    },
    Area_of_interst: ["Full stack developer", "Frontend developer", "Backend developer"],

    PROJECT: "Fabrication and testing of composite material using elephant grass rice husk powder with tamarind seed powder",



};



let A = JSON.stringify(resume);

console.log(A);

