const Goods = () => {
  const formHandler = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
  };

  return (
    <form onSubmit={formHandler}>
      <div>
        <input type='text' name='id' defaultValue='28ss7s' />
      </div>
      <div>
        <input type='text' name='title' defaultValue='Колесо с тормозом 100 мм' />
      </div>
      <div>
        <input
          type='text'
          name='image'
          defaultValue='https://content2.rozetka.com.ua/goods/images/big/297981882.jpg'
        />
      </div>
      <div>
        <button type='submit'>Add new goods</button>
      </div>
    </form>
  );
};

export default Goods;
