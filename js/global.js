(function ($) {
    'use strict';

    /*[ Wizard Config ]
        ===========================================================*/
    
    try {
        var $validator = $("#js-wizard-form").validate({
            rules: {
                username: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 3
                },
                password: {
                    required: true,
                    minlength: 8
                },
                re_password: {
                    required: true,
                    minlength: 8,
                    equalTo: '#password'
                }
            },
            messages: {
                username: {
                    required: "Enter un nom d'utilisateur",
                },
    
                email: {
                    required: "Enter votre email",
    
                },
                password: {
                    required: "Entrer un mot de passe",
                    minlength: "Le mot de passe doit contenir plus de 8 caractères"
                },
                re_password: {
                    required: "Veuillez confirmer votre mot de passe",
                    minlength: "Le mot de passe doit contenir plus de 8 caractères",
                    equalTo: "Le mot de passe doit correspondre"
                }
            }
        });
    
        $("#js-wizard-form").bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn--next',
            'onNext': function(tab, navigation, index) {
                var $valid = $("#js-wizard-form").valid();
                if(!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            'onTabClick': function (tab, navigation, index) {
                var $valid = $("#js-wizard-form").valid();
                if(!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            }
    
        });
    
    }
    catch (e) {
        console.log(e)
    }

})(jQuery);