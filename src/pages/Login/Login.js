import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('./main');
  };

  return (
    <main className="login">
      <div className="borderBox">
        <h1 className="logo">Westagram</h1>
        <form className="login_form">
          <input
            type="text"
            className="loginId loginInput"
            name="userId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            type="password"
            className="loginPw loginInput"
            name="userPw"
            placeholder="비밀번호"
          />
          <input
            type="button"
            className="loginBtn"
            value="로그인"
            onClick={goToMain}
          />
        </form>
        <a href="/" className="findPw">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </main>
  );
};

export default Login;
