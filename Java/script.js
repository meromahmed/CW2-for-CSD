const trainers = [
    {
        name: "John Carter",
        desc: "Expert in strength training and bodybuilding.",
        rating: 4,
        image: "images/trainer1.jpg"
    },
    {
        name: "Emily Johnson",
        desc: "Certified yoga and flexibility coach.",
        rating: 5,
        image: "images/trainer2.jpg"
    },
    {
        name: "Michael Smith",
        desc: "HIIT and fat‑loss specialist.",
        rating: 4,
        image: "images/trainer3.jpg"
    },
    {
        name: "Sophia Williams",
        desc: "Nutrition and wellness coach.",
        rating: 5,
        image: "images/trainer4.jpg"
    }
];

const trainerList = document.getElementById("trainerList");

trainers.forEach(trainer => {
    const stars = "★".repeat(trainer.rating) + "☆".repeat(5 - trainer.rating);

    trainerList.innerHTML += `
        <div class="trainer-card">
            <img src="${trainer.image}" alt="${trainer.name}">
            <h3>${trainer.name}</h3>
            <p>${trainer.desc}</p>
            <div class="rating">${stars}</div>
        </div>
    `;
});
