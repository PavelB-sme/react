import { Component } from 'react'

export default class ShopItemClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { brand, title, description, descriptionFull, price, currency } = this.props.item;

    return (
      <>
        <div className="main-content">
          <h2>{brand}</h2>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <div className="description">
            {descriptionFull}
          </div>
          <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
          <div className="divider"></div>
          <div className="purchase-info">
            <div className="price">{currency}{price}</div>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </>
    )
  } 
}