const btnSubmit = document.querySelector('.submit');
const btnAuthorize = document.querySelector('.authorize');
const files = document.querySelector('.files');
const email = document.querySelector('.email');
const text = document.querySelector('.text');
const textArea = document.querySelector('.text-area');
const modal = document.querySelector('.modal-alert')
const alertTitle = document.querySelector('.alert-title')
const alertParagraph = document.querySelector('.alert-paragraph')


//btnSubmit.addEventListener('click',function(event){
    //event.preventDefault();
//});



btnSubmit.addEventListener('click',function(){
   if(email.value < 10 || email.value > 40 || text.value < 10 || text.value > 40 || textArea.value > 500){
    alertTitle.innerHTML = 'Dados Incorretos!';
    alertParagraph.innerHTML = 'Verifique se as Informações estão corretas! se estiverem tente novamente.'

   }else{ alertTitle.innerHTML = 'Dados Enviados!';
alertParagraph.innerHTML = 'Suas informações foram enviadas com sucesso!'}
})