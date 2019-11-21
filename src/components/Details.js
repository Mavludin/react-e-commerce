import React from 'react';

import axios from 'axios';

import classes from '../modules/Details.module.css';
import mutualClasses from '../modules/App.module.css';

class Details extends React.Component {

  state = {
    detailsData: {},
    thumbnails: [],
    previewImage: '',
    thumbnailPos: 0,
    ShowThumbnails: true
  }

  onAddtoCartClick = () => {

    let AmountOfProducts;
    if (!localStorage['amountOfProducts']) AmountOfProducts = 0;
    else {
      AmountOfProducts = localStorage['amountOfProducts'];
    }
    AmountOfProducts++;
    localStorage.setItem('amountOfProducts', AmountOfProducts);

    let AmountOfEachProduct;
    if (!localStorage[`product_${this.props.match.params.productId}`]) AmountOfEachProduct = 0;
    else AmountOfEachProduct = JSON.parse(localStorage[`product_${this.props.match.params.productId}`]).amount;
    AmountOfEachProduct++;

    const obj = {
      'id': this.state.detailsData.id,
      'thumbnail': this.state.detailsData.preview,
      'name': this.state.detailsData.name,
      'price': this.state.detailsData.price,
      'amount': AmountOfEachProduct
    };

    localStorage.setItem(`product_${this.props.match.params.productId}`, JSON.stringify(obj));

  }

  selectCurrentThumbnail = (pos) => {
    this.setState({ previewImage: this.state.detailsData.photos[pos], thumbnailPos: pos })
  }

  componentDidMount() {
    const productId = this.props.match.params.productId;

    if (productId !== undefined && productId !== null && productId !== '' && parseInt(productId) > 0) {

      axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`)
        .then(response => {
          this.setState(
            {
              detailsData: response.data,
              thumbnails: response.data.photos,
              previewImage: response.data.photos[0]
            })
        })
        .catch(error => {
          console.log(error)
        })

    }

    if (window.matchMedia("(max-width: 600px)").matches) {
      this.setState({ShowThumbnails: false})
    } else {
      this.setState({ShowThumbnails: true})
    }

    window.addEventListener('resize', ()=> {
      if (window.matchMedia("(max-width: 600px)").matches) {
        this.setState({ShowThumbnails: false})
      } else {
        this.setState({ShowThumbnails: true})
      }
    })

  }

  render() {

    const detailsDataRender = this.state.detailsData;
    const Thumbnails = this.state.thumbnails.map((item, pos) => {

      let ClassesArr = [classes.Thumbnail];

      if (pos === this.state.thumbnailPos) {
        ClassesArr.push(classes.SelectedThumbnail);
      }

      return (
        <img 
          onClick={() => this.selectCurrentThumbnail(pos)} 
          className={ClassesArr.join(' ')} src={item} 
          alt="Thumbnail" key={pos} 
        />
      )

    });

    const ShowThumbnails = <div><h3>Preview</h3>{Thumbnails}</div>;

    return (

      <main>
        <div className={[mutualClasses.Container, classes.Details].join(' ')} >

          <div className={classes.Left}>
            <img src={this.state.previewImage} alt={detailsDataRender.name} />
          </div>

          <div className={classes.Right}>
            <h1>{detailsDataRender.name}</h1>
            {!this.state.ShowThumbnails ? ShowThumbnails : null}
            <p className={classes.Brand}>{detailsDataRender.brand}</p>
            <p className={classes.Price}>
              Price: Rs <span>{detailsDataRender.price}</span>
            </p>
            <h3>Description</h3>
            <p className={classes.Desc}>{detailsDataRender.description}</p>
            <div>
              {this.state.ShowThumbnails ? ShowThumbnails : null}
            </div>
            <button onClick={this.onAddtoCartClick}>Add to Cart</button>
          </div>

        </div>
      </main>

    );
  }
}

export default Details;