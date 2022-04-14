import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProfileUser.scss';
import { Delete, GetUserById } from '../../api';
import Button from '../Button/Button';

const ProfileUser = () => {
  const params = useParams();
  const [user, setUser] = useState({})
  useEffect(() => {
    GetUserById(params.id).then((result) => {
      setUser(result.data)
      console.log(result);
    })
  }, [])


  return (
    <div className='profile-user-page'>
      <div className='profile-user-head'>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU" alt='userImg' />
        </div>
        <h1>{user?.fullname}</h1>
      </div>
      {
        user?.posts?.map((post, i) => {
          return (
            <div className='author-name-and-card-details' key={i}>
              <div className='author-name'>
                <div className='account-user-profile'>
                  <h2>{post.title}</h2>
                  <img className='postImg' src={post.image} alt="author" />
                  <div className='card-description'>
                    <p>{post.description}</p>
                    <Button onClick={() => {
                      Delete(post._id)
                      setUser({
                        ...user,
                        posts: user.posts.filter(pos => pos._id !== post._id)
                      })
                    }} className='outlined'>Delete</Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProfileUser;