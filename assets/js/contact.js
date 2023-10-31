function Validator(option)
{
    var formElenment = document.querySelector(option.form);
    if(formElenment)
    {
        option.rules.forEach(function(rule){
            var inputElement = formElenment.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.form-message');
            if(inputElement)
            {
                inputElement.onblur = function()
                {
                    var errorMessage =  rule.test(inputElement.value);
                    if(errorMessage)
                    {
                        errorElement.innerText = errorMessage;
                    }
                    else
                    {
                        errorElement.innerText ='';
                    }
                }
            }
        })
    }
}
Validator.isRequire = function(selector) {
    return {
        selector : selector,
        test : function (value) {
            return value.trim() ? undefined : 'vui long nhap truong nay !!';
        }
    };
}
Validator.isEmail = function(selector) {
    return {
        selector : selector ,
        test : function() {

        }
    };

}