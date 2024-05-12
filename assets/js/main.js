
// Draggable
// $(function () {
//     $(".draggablePins").draggable();
//     $("#droppable").droppable({
//         drop: function (event, ui) {
//             $(this)
//                 .addClass("ui-state-highlight")
//                 .find("droppableArea")
//                 .html("Dropped!");
//         }
//     });
// });

$(function () {
    $(".draggablePins").draggable({
        containment: "#draggableArea",
        // When the user starts dragging, make sure the z-index for this
        // helper is higher than all other draggables.
        start: function (e, ui) {
            $(".ui-draggable").not(ui.helper.css("z-index", "1"))
                .css("z-index", "0");
        }
    });
    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight");
        }
    });

});

jQuery("#archieve-slider").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    dots: false,
    nav: false,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 4
        }
    }
});

function organize() {
    document.getElementById("pinSelectedBtns").style.display = "flex";
    document.getElementById("pinSelectedBtns").style.opacity = "1";
}
