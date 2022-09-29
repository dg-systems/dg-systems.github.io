import $ from 'jquery';
import 'magnific-popup';

$('.open-popup').magnificPopup({
  type: 'inline',
  removalDelay: 500,
  midClick: true,
  callbacks: {
    beforeOpen: function () {
      this.st.mainClass = this.st.el.attr('data-effect');
    },
  },
});

$('[data-popup="close"]').on('click', (e) => {
  e.preventDefault();

  $('.open-popup').magnificPopup('close');
  $('.open-popup-thanks').magnificPopup('close');
});
