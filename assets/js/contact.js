function Validator(option) {
  var formElement = document.querySelector(option.form);
  // Trường hợp submit khi chưa điền thông tin hoặc thông tin sai
  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();
      var hasErorr = false ;
      option.rules.forEach(function (rule) {  
        var inputElement = formElement.querySelector(rule.selector);
        var errorElement = inputElement.parentElement.querySelector(".form-message");

        if (inputElement) {
          var errorMessage = rule.test(inputElement.value);

          if (errorMessage) {
            hasErorr = true ;
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("message");  
            inputElement.parentElement.classList.add("invalid");
          } else {
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove("message");
            inputElement.parentElement.classList.remove("invalid");
          }
        }
      });
      if(!hasErorr){
        formElement.reset();
      }
    };

    option.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);
      var errorElement = inputElement.parentElement.querySelector(".form-message");

      if (inputElement) {
        // Trường hợp blur ra khỏi ô input
        inputElement.onblur = function () {
          var errorMessage = rule.test(inputElement.value);
          if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("message");
            inputElement.parentElement.classList.add("invalid");
          } else {
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove("message");
            inputElement.parentElement.classList.remove("invalid");
          }
        };

        // Trường hợp focus vào ô input
        inputElement.oninput = function () {
          errorElement.innerHTML = "";
        };
      }
    });
  }
}

Validator.isRequire = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : " *Vui lòng nhập trường này";
    },
  };
};
Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "*Vui lòng nhập Email ";
    },
  };
};
Validator.isPhone = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var sdt = value.replace(/[^0-9]/g, ""); // Sửa tên biến và cập nhật regex
      return /^\d{10}$/.test(sdt)
        ? undefined
        : "*Vui lòng nhập lại số điện thoại";
    },
  };
};
Validator.minLength = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var length = value.length;
      return length >= 2 && length <= 30
        ? undefined
        : "*Đây không phải là địa chỉ";
    },
  };
};
Validator.isUserName = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      // Kiểm tra xem tên không chứa chữ số và kí tự đặc biệt
      if (/\d/.test(value)) {
        return "*Vui lòng không nhập chữ số trong tên";
      } else if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        return "*Vui lòng không nhập kí tự đặc biệt trong tên";
      } else if (value.length > 30) {
        return "*Tên không được quá 30 ký tự";
      } else if (value.length < 3) {

        return "*Tên Không hợp lệ ";

      } else {
        return undefined; // Không có lỗi
      }
    },
  };
};
Validator.isFeedBack = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var length = value.length;
      return length > 0 && length <= 30
        ? undefined
        : "*Nội dung không thể để trống";
    },
  };
};
