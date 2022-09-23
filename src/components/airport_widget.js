import React from "react";
import { useHistory } from 'react-router-dom';


function Airport_widget({title, src, url}) {

    let history = useHistory();

    return (
    <a onClick={()=>history.push(url)} >
      <div className='w-24 h-24 lg:w-40 lg:h-40 bg-yellow-400 shadow-2xl rounded-full relative'>
          <div className='w-24 h-24 lg:w-40 lg:h-40 bg-white rounded-full absolute top-2 left-2 flex flex-col items-center justify-center'>
              <img className='w-8 h-8 lg:w-16 lg:h-16' src={src} alt="" />
              <p className='mt-2 text-sm lg:text-base font-semibold'>{title}</p>
          </div>
      </div>
    </a>

    );
}

export default Airport_widget;