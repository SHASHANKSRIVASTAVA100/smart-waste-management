const complaintForm = document.getElementById("complaintForm");

complaintForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const title = document.getElementById("complaintTitle").value;
    const location = document.getElementById("complaintLocation").value;
    const description = document.getElementById("complaintDescription").value;

    // Generate Complaint ID
    const complaintId =
        "WM" + Math.floor(100000 + Math.random() * 900000);

    alert(
        "Complaint submitted successfully!\n\n" +
        "Complaint ID: " + complaintId
    );

    complaintForm.reset();
});