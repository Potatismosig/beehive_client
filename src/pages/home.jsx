import React from 'react'
import '../styles/home.scss';

export default function Home() {
  return (
    <section className='home'>
        <div className='posts'>
            <div className='postImg'>
                <img src="https://cdn.discordapp.com/attachments/1074053506954186792/1098585647717027890/output_1.png" alt="" />
            </div>

            <div className='postInfo'>
                <div className='userinfo-engagement'>
                    <p className='username'>username</p>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis culpa quia nisi, recusandae at autem eveniet quaerat accusantium </p>
                    <div className='engagement'>
                        <label htmlFor="">
                            <span>🍯</span>
                            <input type="checkbox" />
                        </label>

                        <div className='commentCount'>
                            <span>💬</span>
                            <span>1000</span>
                        </div>
                    </div>
                </div>

                <div className='comments'>
                    <div className='comment'>
                        <p className='username'>username</p>
                        <p className='commentContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                    <div className='comment'>
                        <p className='username'>username</p>
                        <p className='commentContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                    <div className='comment'>
                        <p className='username'>username</p>
                        <p className='commentContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                    <div className='comment'>
                        <p className='username'>username</p>
                        <p className='commentContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                    <div className='comment'>
                        <p className='username'>username</p>
                        <p className='commentContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
