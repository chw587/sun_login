document.addEventListener('DOMContentLoaded', () => {
    const idInput = document.querySelector('#user_id');
    const pwInput = document.getElementById('user_pw');
    const pwWrap = document.getElementById('pwWrap');
    const loginBtn = document.querySelector('.login_btn');

    function syncActive(el, classTarget) {
        const on = el.value.trim().length > 0;
        classTarget.classList.toggle('active', on);
    }

    function checkForm() {
        if (idInput.value.trim() && pwInput.value.trim()) {
            loginBtn.disabled = false;
            loginBtn.classList.add('active');
        } else {
            loginBtn.disabled = true;
            loginBtn.classList.remove('active');
        }
    }

    idInput.addEventListener('input', () => {
        syncActive(idInput, idInput);
        checkForm();
    });

    pwInput.addEventListener('input', () => {
        syncActive(pwInput, pwWrap);
        checkForm();
    });

    syncActive(idInput, idInput);
    syncActive(pwInput, pwWrap);
    checkForm();

    togglePw.addEventListener('click', () => {
        pwInput.type = pwInput.type === 'password' ? 'text' : 'password';
    });
})


//비밀번호 확인
$(function () {
  const Correct_pw = "1234";

  $(".arl_text .wrong, .arl_text .right").hide();

  $("#user_pw").on("input", function () {
    const v = $(this).val();

    if (!v) {
      $(".arl_text .wrong, .arl_text .right").hide();
      return;
    }

    if (v === Correct_pw) {
      $(".arl_text .wrong").hide();
      $(".arl_text .right").show();
    } else {
      $(".arl_text .right").hide();
      $(".arl_text .wrong").show();
    }
  });
});
