document.getElementById("akan-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;

    if (!birthdate || !gender) {
        alert("Please enter both birthdate and gender.");
        return;
    }

    const date = new Date(birthdate);
    const dayOfWeek = getDayOfWeek(date);
    const akanName = getAkanName(dayOfWeek, gender);

    document.getElementById("result").textContent = `Your Akan name is ${akanName}`;
});

function getDayOfWeek(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // January is 0
    const year = date.getFullYear();
    const century = Math.floor(year / 100);
    const yearDigits = year % 100;

    const dayOfWeek = (Math.floor((century / 4) - 2 * century - 1) + Math.floor((5 * yearDigits / 4)) + Math.floor((26 * (month + 1) / 10)) + day) % 7;

    // Adjust dayOfWeek to be between 0 and 6
    return (dayOfWeek + 7) % 7;
}

function getAkanName(dayOfWeek, gender) {
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (gender === "male") {
        return maleNames[dayOfWeek];
    } else if (gender === "female") {
        return femaleNames[dayOfWeek];
    } else {
        return "";
    }
}