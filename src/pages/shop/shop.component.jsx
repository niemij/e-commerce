import React from "react";
import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super();

    this.state = { collections: SHOP_DATA };
  }
}
export default ShopPage;
