import React from 'react'
import Giscus from "@giscus/react";

function TheFutard() {
  return (
    <div className='h-screen max-w-screen font-main bg-black text-white'>
      <div className='p-8'>
        <h1 className='text-4xl font-bold text-white'>The Futard</h1>
      </div>

    <div className='w-full px-8'>
    <Giscus
      id="comments"
      repo="Ozodimgba/meta-DAO"
      repoId="R_kgDOLWN_sA"
      category="General"
      categoryId="DIC_kwDOLWN_sM4Cdn6h"
      mapping="specific"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="dark"
      lang="en"
      loading="lazy"
    />
    </div>
    
    </div>
  )
}

export default TheFutard