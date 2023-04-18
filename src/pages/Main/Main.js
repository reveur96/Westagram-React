import React from "react";
import './Main.css'
const Main = () => {
  return (
    <React.Fragment>
      <nav className="nav">
        <div className="logo_group">
          <img src="/images/001-instagram.png" alt="westagram 로고 이미지" />
          <h1 className="logo">westagram</h1>
        </div>  
        <input type="text" className="search" name="search" placeholder="검색" />
        <div className="nav_right">
          <div className="exploreIcon"> </div>
          <div className="heartIcon"></div>
          <div className="profileIcon"></div>
        </div>
      </nav>
      <main className="Main_main">
        <div className="feeds">
          <article>
            <header>
              <div>
                <img src="/images/profile_img.jpg" alt="프로필 사진" />
                <p>krystalk170</p>
              </div>
              <span className="material-symbols-outlined hidden_btn">more_vert</span>
            </header>
            <section className="post_img_area">
              <img src="/images/profile_img.jpg" className="post_img" alt="게시물 이미지" />
            </section>
            <div className="post_bottom">
              <div className="post_reaction">
                <div>
                  <span className="like_btn material-symbols-outlined">favorite</span>
                  <span className="comment_btn material-symbols-outlined">
                    comment
                  </span>
                  <span className="share_btn material-symbols-outlined">
                    send
                  </span>
                </div>
                <span className="bookmark_btn material-symbols-outlined">bookmark</span>
              </div>
              <div className="post_like">
                <img src="images/profile_img.jpg" alt="프로필 이미지" />
                <p><span>krystalk170</span>님 <span>외 10명</span>이 좋아합니다</p>
              </div>
              <ul className="comment_list">
                <li>
                  <span className="userid_in_comment">Krystalk170</span>
                  <span className="comment">하겐다즈 먹고싶당</span>
                </li>
              </ul>
              <p className="posting_time">35분 전</p>
            </div>
            <div className="comment_input_area">
              <input type="text" className="comment_input" placeholder="댓글 달기..." />
              <button className="comment_input_btn">게시</button>
            </div>
          </article>
        </div>
        <div className="main_right">
          <div className="user_info">
            <img src="images/profile_img.jpg" alt="프로필 사진" />
            <div className="user_info_txt">
              <p>reveur1920</p>
              <p>mara shanggua</p>
            </div> 
          </div>
          <div className="story_list_area">
            <div className="story_list_top">
              <span>스토리</span>
              <span>모두 보기</span>
            </div>
            <ul className="story_list">
              <li>
                <div className="story_profile_img_border">
                  <img src="images/profile_img.jpg" alt="프로필 사진"/>
                </div>
                <div className="story_user_info">
                  <p>icecream486</p>
                  <p>25분 전</p>
                </div>
              </li>
              <li>
                <div className="story_profile_img_border">
                  <img src="images/profile_img.jpg" alt="프로필 사진"/>
                </div>
                <div className="story_user_info">
                  <p>chocochoco123</p>
                  <p>45분 전</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="recommend_list_area">
            <div className="recommend_list_top">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <ul className="recommend_list">
              <li>
                <div className="recommend_info_area">
                  <img src="images/profile_img.jpg" alt="프로필 사진" />
                  <div className="recommend_user_info">
                    <p>sushi987</p>
                    <p>icecream123님 외 10명이 팔로우하고 있습니다</p>
                  </div>
                </div>
                <p>팔로우</p>
              </li>
            </ul>
          </div>
          <footer className="Main_footer">
          <ul className="footer_top">
            <li>소개</li>
            <li>도움말</li>
            <li>홍보 센터</li>
            <li>API</li>
            <li>채용 정보</li>
            <li>개인정보처리방침약관</li>
            <li>위치</li>
            <li>언어</li>
            <li>Meta Verified</li>
          </ul>
          <p>© 2023 INSTAGRAM FROM META</p>
          </footer>
        </div>
      </main>
    </React.Fragment>
  )
}

export default Main