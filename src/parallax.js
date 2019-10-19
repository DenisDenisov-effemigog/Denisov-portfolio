var parallax = ( function () {
    var bg = document.querySelector('.parallax__sky');
    var user = document.querySelector('.block');
    var mountain = document.querySelector('.mountain__img');
    var baloon = document.querySelector('.baloon__img');
    var secondMountain = document.querySelector('.second-mountain__img');
    var cloud = document.querySelector('.cloud__img');
    var man = document.querySelector('.man__img');

    return {
        move: function (block, windowScroll, strafeAmount){
            var strafe = windowScroll / -strafeAmount   + '%';

            var style = block.style;

            style.top = strafe;
            
            },

            init: function (wScroll) {
                this.move(bg, wScroll, 45);
        }
    }



}());


window.onscroll = function () {
    let y = window.pageYOffset;

    parallax.init(wScroll);
}

