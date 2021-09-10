$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

function finalCost() {
    var roomType = document.getElementById("room_type").value;
    var roomNum = document.getElementById("room_number").value;
    var personNum = document.getElementById("person_number").value;
    var childNum = document.getElementById("child_number").value;
    var resFacilities = document.getElementById("res_facilities").value;

    var total = 200 * ((parseInt(roomType) * 1) + ((roomNum) * 1) + ((personNum) * 1) + ((childNum) * 1) + ((resFacilities) * 1))

    document.getElementById("result").innerHTML = total;
}