//########################################################################################################
//## VALIDAR
//########################################################################################################
function validarForm (form){
    if (form.checkValidity()) {
        if(confirm("IMPORTANTE\n Por favor, verifique se nosso e-mail foi para o SPAM ou lixo eletrônico do seu e-mail e classifique-o como remetente confiável para receber mais informações em sua caixa de entrada.")==true)
        { form.submit(); }
    }
};

function aviso()
{
    var formTop = $('#formTop').get(0);
    var formContato = $('#formContato').get(0);

    if (formTop) {
        validarForm(formTop);
    }

    if (formMid) {
        validarForm(formMid);
    }

    if (formContato) {
        validarForm(formContato);
    }    
};
//########################################################################################################

//########################################################################################################
//## VALIDAR
//########################################################################################################
$(function()
{
    $("input[type=tel]").focusout(function(){
        var phone, element;
        element = $(this);
        element.unmask();
        /* removo tudo que não for numeros (\D) */
        phone = element.val().replace(/\D/g, '');
        if(phone.length > 10) {
            element.mask("(99) 99999-999?9");
        } else {
            element.mask("(99) 9999-9999?9");
        }
    }).trigger('focusout');
});
//########################################################################################################

//########################################################################################################
//###### FUNÇÃO TIRAR ESPAÇO
//########################################################################################################
String.prototype.trim = function()
{
	return this.replace(/^\s*/, "").replace(/\s*$/, "");
}
