// Add your API endpoint here
var API_ENDPOINT = "https://8l0wrxvpv1.execute-api.ap-south-1.amazonaws.com/prod";

// Save student data using AJAX POST
document.getElementById("savestudent").onclick = function () {
    var inputData = {
        "studentid": $('#studentid').val(),
        "name": $('#name').val(),
        "class": $('#class').val(),
        "age": $('#age').val()
    };

    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("studentSaved").innerHTML = "Student Data Saved!";
        },
        error: function () {
            alert("Error saving student data.");
        }
    });
};

// Get student data using AJAX GET
document.getElementById("getstudents").onclick = function () {
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            console.log("Students:", response);
            alert("Student data retrieved successfully!");
        },
        error: function () {
            alert("Error retrieving student data.");
        }
    });
};
