let glide = new Glide('.glide', {
    type: 'slider',
    autoplay: 0,
    perView: 4
});


const slider = {
    buttons: document.getElementsByClassName('control__button'),
    items: document.getElementsByClassName('glide__slide'),
    html: '',
    init: function() {
        for(let i=0;i<this.buttons.length;i++) {
            this.buttons[i].addEventListener('click', () => {

                for(let j=0;j<this.buttons.length;j++) {
                    this.buttons[j].classList.remove('control__button--active');
                }
                this.buttons[i].classList.add('control__button--active');


                this.changeCategory(this.buttons[i].dataset.name)
            });
        }

        for(let i=0;i<this.items.length;i++) {
            this.html += this.items[i].outerHTML;
        }
        
        glide.mount();
    },
    changeCategory: function(category) {
        setTimeout(() => glide.destroy(), 10); //error
        setTimeout(() => {
            this.items[0].parentNode.innerHTML = this.html
            this.items = document.getElementsByClassName('glide__slide');
    
            let newHtml = '';
            for(let i=0;i<this.items.length;i++) {
    
                if(this.items[i].dataset.category == category) {
                    newHtml += this.items[i].outerHTML;
                    // this.items[i].classList.remove('hide');
                } else {
                    // this.items[i].classList.add('hide');
                }
            }
            this.items[0].parentNode.innerHTML = newHtml;
            glide.mount();
            glide.go('={0}');
        }, 20);
    }
}
slider.init();
