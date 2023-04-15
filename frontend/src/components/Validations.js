import React from 'react'
import $ from 'jquery'

const Validations = () => {

    var otpInput = document.getElementById('otp_input')
    var Name = document.getElementById('name')
    var Email = document.getElementById('email1')
    var Mobile = document.getElementById('mobile')
    var Digit1 = document.getElementById('digit-1')
    var Digit2 = document.getElementById('digit-2')
    var Digit3 = document.getElementById('digit-3')
    var Digit4 = document.getElementById('digit-4')
    var Digit5 = document.getElementById('digit-5')
    var Digit6 = document.getElementById('digit-6')

    // Email Validation
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/
        );
    };


    const validate = () => {
        const result = $(Email);
        const email = $(Email).val();
        result.text('');
        if (validateEmail(email)) {
            //   $result.text(email + ' is valid :)');
            result.css('border', '1px solid black');
        } else {
            //   $result.text(email + ' is not valid :(');
            result.css('border', '1px solid red');
        }
        return false;
    }
    $(Email).on('input', validate);



    // Name Validation
    const nameValidate = () => {
        var hasNumber = /[\d,\-/\\{}<>()[\]!@#$%^&_+=*|:;"'`~?]/;
        const result = $(Name);
        const name = $(Name).val();
        if (hasNumber.test(name) || name.length === 0) {
            result.css('border', '1px solid red');
        } else {
            result.css('border', '1px solid black');
        }
    }
    $(Name).on('input', nameValidate);

    // Contact Validation
    const numberValidation = () => {
        var number = /\D/;
        const result = $(Mobile);
        const contact = $(Mobile).val();
        if (number.test(contact) || contact.length !== 10) {
            result.css('border', '1px solid red');
        } else {
            result.css('border', '1px solid black');
        }
    }
    $(Mobile).on('input', numberValidation);

    //OTP VALIDTAION
    $('.digit-group').find('input').each(function () {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function (e) {
            var parent = $($(this).parent());

            if (e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));

                if (prev.length) {
                    $(prev).select();
                }
            } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));

                if (next.length) {
                    $(next).select();
                } else {
                    if (parent.data('autosubmit')) {
                        parent.submit();
                    }
                }
            }
        });
    });


    // Otp Validation
    const number_one_Validation = () => {
        var number = /\D/;
        const result = $(Digit1);
        const digit1 = $(Digit1).val();

        if (number.test(digit1)) {
            result.css('border', '1px solid red');
        } else {
            result.css('border', '1px solid black');
        }
    }
    $(Digit1).on('input', number_one_Validation);

    const number_two_Validation = () => {
        var number = /\D/;
        const result1 = $(Digit2);
        const digit1 = $(Digit2).val();
        if (number.test(digit1)) {
            result1.css('border', '1px solid red');
        } else {
            result1.css('border', '1px solid black');
        }
    }
    $(Digit2).on('input', number_two_Validation);

    const number_three_Validation = () => {
        var number = /\D/;
        const result1 = $(Digit3);
        const digit1 = $(Digit3).val();
        if (number.test(digit1)) {
            result1.css('border', '1px solid red');
        } else {
            result1.css('border', '1px solid black');
        }
    }
    $(Digit3).on('input', number_three_Validation);

    const number_four_Validation = () => {
        var number = /\D/;
        const result1 = $(Digit4);
        const digit1 = $(Digit4).val();
        if (number.test(digit1)) {
            result1.css('border', '1px solid red');
        } else {
            result1.css('border', '1px solid black');
        }
    }
    $(Digit4).on('input', number_four_Validation);
    const number_five_Validation = () => {
        var number = /\D/;
        const result1 = $(Digit5);
        const digit1 = $(Digit5).val();
        if (number.test(digit1)) {
            result1.css('border', '1px solid red');
        } else {
            result1.css('border', '1px solid black');
        }
    }
    $(Digit5).on('input', number_five_Validation);

    const number_six_Validation = () => {
        var number = /\D/;
        const result1 = $(Digit6);
        const digit1 = $(Digit6).val();
        if (number.test(digit1)) {
            result1.css('border', '1px solid red');
        } else {
            result1.css('border', '1px solid black');
        }
    }
    $(Digit6).on('input', number_six_Validation);

    return (
        <></>
    )

}

export default Validations