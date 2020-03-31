import React from 'react';
import "./style/google.scss";
import Google from './style/img/Google.png';
import Mike from './style/img/googlemake.png';

function App() {
  return (
    <div className="Google">
      <div className="top">
          <div className="topBar">
            <div>Gmail</div>
            <div>이미지</div>
            <div className="Icon"><span class="material-icons">apps</span></div>
            <div className="icon"></div>
          </div>
      </div>

      <div className="logo">
        <a href="">
            <img src={Google} alt="goglelogo"/>
          </a>
      </div>

      <form action="">
        <div className="input">
          <div className="InputIcon"><span class="material-icons">search</span></div>
          <input type="text"/>
          <div className="inputs">
            <div className="InputIcon" id="keyboard">
              <div className="hoverbox">입력 도구</div>
              <span class="material-icons">keyboard</span>
            </div>
            <div className="img" id="mike">
              <img src={Mike} alt="" className="background-image"/>
              <div className="hoverbox">음성 검색</div>
              </div>
          </div>
        </div>
        <div className="serchboxs">
          <center>
              <a href=""><input className="searchbox" value="Google 검색" type="submit"/></a>
              <a href=""><input className="searchbox" value="I'm Feeling Lucky" type="submit"/></a>
          </center>
        </div>
      </form>

        <footer>
            <div className="footer">
              <div>대한민국</div>
            </div>
            <div className="footer other">
              <div id="fsr">
                <a href="">광고</a>
                <a href="">비지니스</a>
                <a href="">Google 정보</a>
                <a href="">검색의 원리</a>
              </div>
              <div id="fsl">
                <a href="">개인정보처리방침</a>
                <a href="">약관</a>
                <a href="">설정</a>
              </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
