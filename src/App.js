function App() {
  return (
    <div className="wrapper">
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина</h2>

                <div className="cartItem">
                    <img className="imgCart"
                         width={70}
                         height={70}
                         src="/img/sneakers/1.jpg"
                         alt="Sneakers"/>
                    <div className="priceCart">
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                </div>
            </div>
        </div>
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
            <div className="search">
                <h1>Все кроссовки</h1>
                <div className="search-block">
                    <img src="/img/search.svg" alt="search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>

            <div className="Sneakers">
                <div className="card">
                    <div className="favorite">
                        <img src="/img/unliked.svg" alt="unliked"/>
                    </div>

                    <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="plus_button">
                        <div className="price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="plus_button">
                        <div className="price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="plus_button">
                        <div className="price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="plus_button">
                        <div className="price">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
