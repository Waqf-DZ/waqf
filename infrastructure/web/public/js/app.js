/* eslint-disable */
// Service Worker PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}

// Toggle SideBar
$('.sidebar-toggle').click(function (e) {
  e.preventDefault()
  $('#wrapper').toggleClass('toggled').toggleClass('overflow-hidden')
  $('.nav-btn i').toggleClass('fa-bars-staggered').toggleClass('fa-xmark')
})

// Toggle Password
$('.toggle-password').click(function () {
  $(this).children().toggleClass('fa-eye fa-eye-slash')
  let input = $(this).prev()
  input.attr('type', input.attr('type') === 'password' ? 'text' : 'password')
})

$('#dropdownMenuAccount').on('show.bs.dropdown', function () {
  $('.modal-backdrop .show .fade').show()
})

// Enable tooltips everywhere
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Form Validation
;(function () {
  'use strict'
  window.addEventListener(
    'load',
    function () {
      var forms = document.getElementsByClassName('needs-validation')
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          'submit',
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          },
          false
        )
      })
    },
    false
  )
})()

// Clipboard
$(function () {
  clipboard = new ClipboardJS('.btn')
})

// Location
$(document).ready(function () {
  var Selected = 0
  $.getJSON('/w_json/dz_cities.json', function (data) {
    var html = ''
    var len = data.length
    for (var i = 0; i < len; i++) {
      html += `<option value="${data[i].ar_name}">${data[i].w_code} - ${data[i].ar_name}</option>`
    }
    $('#cityValidat').append(html)
  })
  $('#cityValidat').change((e) => {
    $.getJSON('/w_json/dz_com.json', function (data) {
      var html = ''
      $('#municValidat').append('')
      const DATA = data.filter((itm) => itm.cw_id == e.target.selectedIndex)
      var len = DATA.length
      for (var i = 0; i < len; i++) {
        html += `<option value="${DATA[i].com_name}">${DATA[i].com_name}</option>`
      }
      $('#municValidat').append(html)
    })
  })
})

// Scroll To Top
$("a[href='#top']").click(function () {
  $('html, body').animate({ scrollTop: 0 })
  return false
})
$(document).scroll(function () {
  var y = $(this).scrollTop()
  if (y > 500) {
    $('#scrollTop').addClass('op-4').removeClass('op-0')
  } else {
    $('#scrollTop').addClass('op-0').removeClass('op-4')
  }
})

// Swiper Js Initialize
var swiper = new Swiper('.donatSwips', {
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
})
