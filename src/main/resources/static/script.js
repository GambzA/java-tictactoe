
$(".cell").on("click", function() {
    var icons = ['X', 'O'];
    var switcher = parseInt(localStorage.getItem('switcher')) || 0;

    if(switcher % 2 == 0){
        // should show icon O
        console.log('O');
        var img = $('<img>', {
            src: icons[1]+".png", // Replace with your image URL
            alt: icons[1],
          }).addClass('responsive-img');
    } else {
        // should show icon X
        console.log('X');
        var img = $('<img>', {
            src: icons[0]+".png", // Replace with your image URL
            alt: icons[0],
          }).addClass('responsive-img');
    }

    $(this).addClass('disabled');
    $(this).html(img);

    switcher++;
    localStorage.setItem('switcher', switcher); // Save value to LocalStorage
})