import React, { useState } from 'react';

const App = () => {
  const [ reversedText, setReversedText ] = useState('');

  return (
    <div className="bg-black h-screen w-screen pt-[50px]">
      <div className='text-white text-4xl text-center h-[500px] flex flex-col items-center justify-center mx-auto w-[800px] rounded-md p-10' style={{backgroundColor:'#0B3D2E'}}>
        <div className='text-5xl text-white text-center w-full mb-4'>Reverse your text</div>
        <span className='text-3xl text-white text-center w-full mb-10'>
          Your text but reversed: <span id='reversedtext'>{reversedText}</span>
        </span>
        <br />
        <div className='flex'>
          <span className='text-2xl text-white text-center w-full mt-1 float-left mr-[-40px]'>Enter your text here</span>
          <input
            id='text'
            type='text'
            className='w-[700px] border-black-100 outline-none text-4xl text-black text-center w-full rounded-md mb-4'
            onChange={() => {
              setReversedText(document.getElementById('text').value.split("").reverse().join(""));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
