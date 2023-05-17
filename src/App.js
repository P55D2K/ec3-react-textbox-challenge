// import React from 'react';
// import { useState } from 'react';

// function App() {
//   const [text, setText] = useState('');

//   return (
//     <div className="bg-black h-screen w-screen pt-[50px]">
//       <div className='text-white text-4xl text-center h-[500px] flex items-center justify-center mx-auto w-[400px] rounded-md' style={{backgroundColor:'#0B3D2E'}}>
//         <div className='text-4xl text-white text-center w-full'> Enter your text here </div>
//         <span className='text-2xl text-white text-center w-full'>Your text but reversed: <span id='reversedtext'></span></span> <br />
//         <input type='text' className='bg-transparent border-none outline-none text-4xl text-white text-center w-full' onChange={() => {
//           setText(document.getElementById('text').value);
//           document.getElementById('reversedtext').innerHTML = text.split("").reverse().join("");
//         }} />
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';

function App() {
  const [reversedText, setReversedText] = useState('');

  return (
    <div className="bg-black h-screen w-screen pt-[50px]">
      <div className='text-white text-4xl text-center h-[500px] flex flex-col items-center justify-center mx-auto w-[800px] rounded-md p-10' style={{backgroundColor:'#0B3D2E'}}>
        <div className='text-5xl text-white text-center w-full mb-4'>Reverse your text</div>
        <span className='text-3xl text-white text-center w-full mb-10'>
          Your text but reversed: <span id='reversedtext'>{reversedText}</span>
        </span>
        <br />
        {/* span element to say enter ur text here */}
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
