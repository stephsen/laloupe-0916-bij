function presoneController() {
    angular.element(document.querySelector('#b0')).addClass('active');
    this.show = false;
    this.includerPres1 = '1';
    this.active = 0;
    this.slides = [{
        image: 'test',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '2',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '3',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '4',
        title: 'Exercices: Légendage',
        icon: './assets/icon/exe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '5',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '6',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '7',
        title: 'Exercices: Recadrage',
        icon: './assets/icon/exe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '8',
        title: 'International',
        icon: './assets/icon/globe_blue.png',
        color: 'bleu'
    }, {
        image: '9',
        title: 'Exercices: Putaclic',
        icon: './assets/icon/exe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '10',
        title: 'Exercices: Putaclic',
        icon: './assets/icon/exe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '11',
        title: 'Culture',
        icon: './assets/icon/new_green.png',
        color: 'vert'
    }, {
        image: '12',
        title: 'Vidéo',
        icon: './assets/icon/video_turquoise.png',
        color: 'turquoise'
    }, {
        image: '13',
        title: 'Technologie',
        icon: './assets/icon/conv_orange.png',
        color: 'orang'
    }, {
        image: '14',
        title: 'France',
        icon: './assets/icon/conv_violet.png',
        color: 'violet'
    }, {
        image: '15',
        title: 'International',
        icon: './assets/icon/globe_blue.png',
        color: 'bleu',
    }, {
        image: '16',
        title: 'Conclusion',
        icon: './assets/icon/end_turquoise.png',
        color: 'turquoise'
    }];
    this.index = 0;
    this.position = 0;
    this.preview = () => {
        if (this.index > 0) {
            this.value = this.index + 3;
            if (angular.element(document.querySelector('#b' + this.value))[0].className == "active") {
                this.active = this.value;
                // console.log(this.active);
                angular.element(document.querySelector('#b' + this.value)).removeClass('active');
            }
            this.position = this.position - 25;
            this.moveStyle = "margin-left: -" + this.position + "vw;";
            this.index--;
        }
    };
    this.next = () => {
        if (this.index < this.slides.length - 4) {
            if (this.index + 4 == this.active) {
                angular.element(document.querySelector('#b' + this.active)).addClass('active');
            }
            this.position = this.position + 25;
            this.moveStyle = "margin-left: -" + this.position + "vw;";
            this.index++;
        }
    };
    this.select = (index) => {
      if (angular.element(document.querySelector('#b' + index))[0].className != "active" && this.active == index) {
        angular.element(document.querySelector('#b' + index)).addClass('active');
      } else {
        angular.element(document.querySelector('#b' + index)).addClass('active');
        angular.element(document.querySelector('#b' + this.active)).removeClass('active');
        this.active = index;
      }
      this.active = index;
      this.includerPres1 =  index+1;
    };

    this.biggerTrueAnswer = () => {
      if (angular.element(document.querySelector('#true_answer')).className != 'bigger') {
        angular.element(document.querySelector('#true_answer')).addClass('bigger');
        angular.element(document.querySelector('#false_answer')).removeClass('bigger');
      }
      else {
        angular.element(document.querySelector('#true_answer')).removeClass('bigger');
      }
};

      this.biggerFalseAnswer = () => {
      if (angular.element(document.querySelector('#false_answer')).className != 'bigger') {
        angular.element(document.querySelector('#false_answer')).addClass('bigger');
        angular.element(document.querySelector('#true_answer')).removeClass('bigger');
      }
      else {
        angular.element(document.querySelector('#false_answer')).removeClass('bigger');
      }
    };
}
