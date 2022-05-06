function App() {
  return (
    <div className="wrapper">
      <header>
          <div className="headerLeft">
              <img width="40" height="40"src="/img/logo.png"/>
              <div>
                  <h3>React Sneakers</h3>
                  <p>Магазин лучших кросовок</p>
              </div>
          </div>
          <ul className="headerRight">
              <li>
                  <img width="18" height="18"src="/img/cart.svg"/>
                  <span>1205 руб.</span>
              </li>
              <li>
                  <img width="18" height="18"src="/img/user.svg"/>

              </li>
          </ul>
      </header>
        <div className="content">
            <h1>Все кроссовки</h1>

            <div className="card">
                <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="plus_button">
                    <div>
                        <p>Цена:</p>
                        <b>12 999 руб.</b>
                    </div>
                    <button>
                        <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
