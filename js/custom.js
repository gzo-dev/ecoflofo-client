
$(document).ready(function () {
    $(".submit-search-pc").click(function () {
        if ($("#qr_search").val() != "")
            $('#searchformtab').submit(); return false;
    });
});
$(document).ready(function () {
    $(".search-icon").click(function () {
        $(".search-pc").stop().slideToggle("fast");
        return false;
    });
});

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


// Select all video elements
// var videos = document.querySelectorAll('video');

// // Loop through all videos
// for (var i = 0; i < videos.length; i++) {
//     // Add event listener for when the video starts playing
//     videos[i].addEventListener('play', function () {
//         // Mute the video
//         this.muted = true;
//     });

//     // Add event listener for when the mouse hovers over the video
//     videos[i].addEventListener('mouseover', function () {
//         // Unmute the video
//         this.muted = false;
//     });

//     // Add event listener for when the mouse stops hovering over the video
//     videos[i].addEventListener('mouseout', function () {
//         // Mute the video again
//         this.muted = true;
//     });
// }

// Xóa animation
function removeAttributes() {
    if (window.innerWidth <= 576) {
        var elements = document.querySelectorAll('[data-aos]');
        elements.forEach(function (element) {
            element.removeAttribute('data-aos');
            element.removeAttribute('data-aos-duration');
        });
    }
}

window.addEventListener('resize', removeAttributes);
window.addEventListener('DOMContentLoaded', removeAttributes);