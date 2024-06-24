import React from 'react';

const Home = () => {
  return (
    <div className="h-[calc(100vh-138px)] flex items-center justify-center">
      <div className='flex justify-between  items-center'>
        <div>
          <h2>This is my portfolio</h2>
          <p>You can download my resume and dv</p>
          <div>
            <button>resume</button>
            <button>cv </button>
          </div>
        </div>
        <div className='hover:bg-orange-100 rounded-full transition-all'>
          <img
            src="https://i.ibb.co/9Yb4GmQ/IMG-20240219-094gjg258-removebg-preview.png"
            alt="Akash imgae"
            className='rounded-full border border-neutral'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;