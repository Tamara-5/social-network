import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './ProductCard.scss';

const ProductCardSkeleton = ({ following }) => {
  return (
    <div className='card'>
    <div className='card-left-content'>
      <div className='author-image'>
        <Skeleton circle width={window.screen.width > 480 ? 56 : 45} height={window.screen.width > 480 ? 56 : 45} />
      </div>
      <div className='author-name-and-card-details'>
        <div className='author-name'>
          <Skeleton width={window.screen.width > 480 ? 70 : 30} height={20} style={{marginRight: '10px'}} />
          <Skeleton width={window.screen.width > 480 ? 90 : 50} height={10} />
        </div>
        <Skeleton count={2} width={window.screen.width > 480 ? 200 : 100} />
        <div className='card-video-container'>
          <Skeleton width={window.screen.width > 480 ? 300 : 200} height={window.screen.width > 480 ? 500 : 300} />
          <div className='card-video-actions'>
            <div className='card-like-dislike'>
              <div className='action-icon'>
                <Skeleton />
              </div>
              <Skeleton />
            </div>
            <div className='card-comments'>
              <div className='action-icon'>
                <Skeleton />
              </div>
              <Skeleton />
            </div>
            <div className='card-share'>
              <div className='action-icon'>
                <Skeleton />
              </div>
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
    </div>
    {!following ?
      <div className='card-right-content'>
        <Skeleton width={window.screen.width > 480 ? 100 : 50} />
      </div> : <></>
    }
  </div>
  )
}

export default ProductCardSkeleton;