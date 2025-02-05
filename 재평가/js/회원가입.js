let uId = document.querySelector('#user-id');
let uPw = document.querySelector('#user-pw1');
let uPwc = document.querySelector('#user-pw2');

uId.onchange = checkLength;
uPw.onchange = checkPw;
uPwc.onchange = comparePw;

function checkLength(){
    if(uId.value.length < 4 || uId.value.length > 15){
        alert('아이디는 4~15자리 사이로 입력해주세요.');
        uId.select();
    }
}

function checkPw(){
    if(uPw.value.length < 8){
        alert('비밀번호는 8자리 이상으로 입력해주세요.');
        uPw.value = '';
        uPw.focus();
    }
}

function comparePw(){
    if(uPw.value !== ""){
        if(uPw.value != uPwc.value){
            alert('비밀번호가 일치하지 않습니다.');
            uPwc.value = '';
            uPwc.focus();
        }
    }
}