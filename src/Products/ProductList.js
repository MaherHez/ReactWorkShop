import React from 'react';
import Button from '../Button/Button';
// import Button from '../Button/Button';

// Create product row
function Product(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <img src={props.img} alt='Bild på öl'></img>
      <td><Button onClick={()=> props.handleDeleteProduct(props.index)}>Delete</Button></td>
    </tr>
  );
}

//Remember to make use of the products from props
function ProductList(props) {
  let productList = props.products
    .filter(product => true)
    .map((product, index) => <Product key={index}
    index={index} name={product.name} 
    price={product.price} img={product.img} 
    handleDeleteProduct={props.handleDeleteProduct} />);




  return (
    <table>
      <thead>
        <tr>
          <th>pro</th>
          <th>Price</th>
          <th>Image</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{productList}</tbody>
    </table>
  );
}

export default ProductList;
