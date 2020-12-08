init()

//Get statistics for GR
function init() {
    var url = "https://api.covid19api.com/summary";
    var data = ''
    var todayData = ''

    $.get(url, function (data) {
        console.log(data.Countries[65]);
        const region = data.Countries[65].Country;
        data = `
                <td>${data.Countries[65].TotalConfirmed}</td>
                <td>${data.Countries[65].TotalDeaths}</td>
                <td>${data.Countries[65].TotalRecovered}</td>
            `;

        $("#total-data").html(data);
        $("#region").html(`<h1>Country:${region} </h1>`);
    })

    $.get(url, function (todayData) {
        const currentDate = todayData.Countries[65].Date;
        todayData = `
                <td>${todayData.Countries[65].NewConfirmed}</td>
                <td>${todayData.Countries[65].NewDeaths}</td>
                <td>${todayData.Countries[65].NewRecovered}</td>
        `;

        $("#today-data").html(todayData);
        $(".date").html(currentDate);
    })
}

function updateData() {
    clearData();
    init()
}

function clearData() {
    $("#total-data").empty();
    // $("today-data").empty();
}
