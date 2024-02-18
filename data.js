document.addEventListener("DOMContentLoaded", function() {
    var dataBody = document.getElementById("data-body");
    var registrationData = JSON.parse(localStorage.getItem("registrationData")) || [];

    registrationData.forEach(function(data) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.fname}</td>
            <td>${data.lname}</td>
            <td>${data.gender}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            <td>${data.department}</td>
        `;
        dataBody.appendChild(row);
    });
});