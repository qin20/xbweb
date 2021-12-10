
function Home() {
  const isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;

  return (
    <div className="app">
      <header className="header">
        <div className="inner">
          <div className="left-nav">
            <a className="logo" href="/">小白剪辑</a>
          </div>
          <div className="right-nav">
            <a href="/user-protocal.html" target="_blank">用户协议</a>
            <a href="/private-protocal.html" target="_blank">隐私协议</a>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="inner">
          <h2>简单易用</h2>
          <h2>快乐剪辑</h2>
          <p style={{ marginTop: 20, marginBottom: 20 }}>由文案为主导的剪辑软件，会写字，就能剪辑电影，助你实现自媒体梦想。</p>
          {
            isMac
              ? <a className="btn-download" href="/software/小白剪辑.dmg">免费下载</a>
              : <a className="btn-download" href="/software/小白剪辑.exe">免费下载</a>
          }
          <p>1.0.1版本 2021/12/10更新</p>
          <p style = {{marginBottom: 200}}>适用于window7及以上的64位系统</p>
        </div>
      </main>
      <footer className="footer">
        <div className="inner">
          <p>COPYRIGHT © 2021 xb.vengogh.com INC. ALL RIGHTS RESERVED. 版权所有 平南县别样传媒工作室 桂ICP备2021009762号-1 联系QQ：551909076</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
