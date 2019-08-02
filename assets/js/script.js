// Carousel
$(document).ready(function () {
    $('.center').slick({
        centerMode: true, //pour avoir l'image ciblée au milieu
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]
    });
});

//Faire une description pour les projets 

//Cibler les images des projets
let $imgCssZG = $('#cssZG'),
    $imgPotato = $('#potato'),
    $imgDuerena = $('#duerena'),
    $imgRpgMaker = $('#rpgM')
    ;

//Cibler la div vide qui accueillera la description
let $description = $('#descriptionProjet');


