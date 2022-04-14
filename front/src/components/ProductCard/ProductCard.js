import React, { useEffect } from 'react';
import './ProductCard.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { Delete } from '../../api';

const ProductCard = ({ product,onDelete }) => {

  const postDelete = () => {
    Delete(product._id)
    onDelete(product._id)
  }


  return (
    <div className='card'>
      <div className='card-left-content'>
        <div className='author-image'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU" alt="author" />
          <Link to={`/profile_user/${product.user_id}`}>
            <h2>{product.user[0].fullname}</h2>
          </Link>
        </div>
        <div className='author-name-and-card-details'>
          <div className='author-name'>
            <div className='account-user-profile'>
              <h2>{product.title}</h2>
              <img src={product.image} alt="author" />
              <div className='card-description'>
                <p>{product.description}</p>
                <Button onClick={postDelete} className='outlined'>Delete</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;