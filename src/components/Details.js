import React from 'react';

import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

import classes from '../modules/Details.module.css';
import mutualClasses from '../modules/App.module.css';

class Details extends React.Component {

  state = {
    detailsData: {},
    thumbnails: [],
    amountOfProducts: 0
  }

  componentDidMount() {
    const productId = this.props.match.params.productId;

    if (productId !== undefined && productId !== null && productId !== '' && parseInt(productId) > 0) {

      axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`)
        .then(response => {
          this.setState({ detailsData: response.data, thumbnails: response.data.photos })
        })
        .catch(error => {
          console.log(error)
        })

    }
  }

  onAddtoCartClick = () => {

    let updatedAmount = this.state.amountOfProducts;
    updatedAmount++;

    this.setState({ amountOfProducts: updatedAmount });

    console.log(this.state.amountOfProducts);

    localStorage.setItem('amountOfProducts', this.state.amountOfProducts);

    // if (localStorage) {
    //   let myArray;

    //   if (!localStorage['array']) myArray = [];

    //   else {
    //     myArray = JSON.parse(localStorage['myArray']);

    //   }

    //   const obj = {
    //     'id': this.state.detailsData.id,
    //     'thumbnail': this.state.detailsData.preview,
    //     'name': this.state.detailsData.name,
    //     'price': this.state.detailsData.price,
    //   };

    //   myArray.push(obj);

    //   localStorage.setItem('array', JSON.stringify(myArray));

    // }

  }

  render() {

    const detailsDataRender = this.state.detailsData;
    const Thumbnails = this.state.thumbnails.map((item, pos) => {

      let ClassesArr = [classes.Thumbnail];

      if (pos === 0) {
        ClassesArr.push(classes.SelectedThumbnail);
      }

      return (
        <img className={ClassesArr.join(' ')} src={item} alt="Thumbnail" key={pos} />
      )

    });

    return (

      <div className="App">

        < Header amountOfProducts={this.state.amountOfProducts} />

        <main>
          <div className={[mutualClasses.Container, classes.Details].join(' ')} >

            <div className={classes.Left}>
              <img src={detailsDataRender.preview} alt={detailsDataRender.name} />
            </div>

            <div className={classes.Right}>
              <h1>{detailsDataRender.name}</h1>
              <p className={classes.Brand}>{detailsDataRender.brand}</p>
              <p className={classes.Price}>
                Price: Rs <span>{detailsDataRender.price}</span>
              </p>
              <h3>Description</h3>
              <p className={classes.Desc}>{detailsDataRender.description}</p>
              <h3>Preview</h3>
              <div className={classes.Thumbnails}>
                {Thumbnails}
              </div>
              <button onClick={this.onAddtoCartClick}>Add to Cart</button>
            </div>

          </div>
        </main>

        <Footer />

      </div>
    );
  }
}

export default Details;