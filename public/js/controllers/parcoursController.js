function parcoursController() {

  function getElement(id){
    return angular.element(document.querySelector(id));
  }

  this.unlock=(value)=>{
    getElement('#padlock'+value).removeClass('lock icon');
    getElement('#resume'+value).removeClass('hide');
    getElement('#padlock'+value).addClass('unlock icon');

    // angular.element(document.querySelector('#padlock'+value)).removeClass('lock icon');
    // angular.element(document.querySelector('#resume'+value)).removeClass('hide');
    // angular.element(document.querySelector('#padlock'+value)).addClass('unlock icon');
  };
  this.lock=(value)=>{
    getElement('#padlock'+value).removeClass('unlock icon');
    getElement('#padlock'+value).addClass('lock icon');
    getElement('#resume'+value).addClass('hide');

    // angular.element(document.querySelector('#padlock'+value)).removeClass('unlock icon');
    // angular.element(document.querySelector('#padlock'+value)).addClass('lock icon');
    // angular.element(document.querySelector('#resume'+value)).addClass('hide');
  };

  this.crayon = 'edit icon';
  this.actif=()=>{
    this.crayon='write icon';
  };
  this.repos=()=>{
    this.crayon='edit icon';
  };
}
