var parallax = ( function () {
    var bg = document.querySelector('.parallax__layer_1');
    var user = document.querySelector('.merge__block');
    var mountain = document.querySelector('.parallax__img_2');
    var baloon = document.querySelector('.parallax__img_3');
    var secondMountain = document.querySelector('.parallax__img_4');
    var cloud = document.querySelector('.parallax__img_5');
    var man = document.querySelector('.parallax__img_6');

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount   + '%';
            var transformString = 'translate3d(0, ' + strafe + ', 0)'

            var style = block.style;
            
            style.transform = transformString;
            style.webkitTransform = transformString;
            
            },

            init: function (wScroll) {
                this.move(bg, wScroll, 45);
                this.move(mountain, wScroll, 40);
                this.move(baloon, wScroll, 40);
                this.move(secondMountain, wScroll, 30);
                this.move(man, wScroll, 25);
                this.move(cloud, wScroll, 20);
                this.move(user, wScroll, 5);
        }
    }



}());


window.onscroll = function () {
    let wScroll = window.pageYOffset;
    
    parallax.init(wScroll);
}

