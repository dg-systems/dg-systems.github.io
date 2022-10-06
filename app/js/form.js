import $ from 'jquery';
import axios from 'axios';
import 'jquery-validation';
import './plugins/inputmask.js';

const $contactsForm = $('[data-form="contacts"]');
const $successForm = document.querySelector('.success-form');

$successForm.addEventListener('click', (e) => {
  if (e.target.closest('[data-success="close"]')) {
    const $fields = $contactsForm.find('input,textarea*');
    $fields.each(function () {
      $(this).val('');
    });

    $successForm.style.opacity = '0';
    setTimeout(() => {
      $successForm.style.zIndex = '-1';
    }, 300);
  }
});

const message = ($items) => `
  https://api.telegram.org/bot5469842101:AAFdCBpfS22tPuRJewJb1yvKsgkckecC1GY/sendMessage?chat_id=@dg_systems_messages_hashhidiaud&text=%2APhone%2A: ${$items[1].value}%0A%2AE-mail%2A: ${$items[2].value}%0A%2AName%2A: ${$items[0].value}%0A%0A%2AMessage%2A: ${$items[3].value}&parse_mode=Markdown
`;
const sendMessage = ($items) => axios.get(message($items));

$contactsForm.validate({
  errorClass: 'invalid-field',
  rules: {
    email: {
      required: true,
      email: true,
    },
    phone: {
      required: true,
      minlength: 12,
    },
    name: {
      required: true,
      minlength: 2,
    },
    message: {
      required: true,
      minlength: 4,
    },
  },
  messages: {
    email: {
      required: `<p class="input-error">Input E-mail</p>`,
      email: `<p class="input-error">Input Correct E-mail</p>`,
    },
    phone: {
      required: `<p class="input-error">Input Phone</p>`,
      minlength: $.validator.format(`<p class="input-error">min {0} symbols</p>`),
    },
    name: {
      required: `<p class="input-error">Input Name</p>`,
      minlength: $.validator.format(`<p class="input-error">min {0} symbols</p>`),
    },
    message: {
      required: `<p class="input-error">Input Message</p>`,
      minlength: $.validator.format(`<p class="input-error">min {0} symbols</p>`),
    },
  },

  submitHandler: function () {
    sendMessage(this.successList);

    $successForm.style.zIndex = '10';
    setTimeout(() => {
      $successForm.style.opacity = '1';
    }, 300);
  },
});

new Inputmask('+\\9\\95 (999) 999 999').mask('[data-input="phoneMask"]');
