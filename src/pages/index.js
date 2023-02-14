import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sreyas C U</title>
        <meta name="description" content="My Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://www.sreyascu.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sreyas C U" />
        <meta property="og:description" content="My Portfolio Website" />
        <meta property="og:url" content="https://www.sreyascu.com" />
        <meta property="og:site_name" content="Sreyas C U" />
        <meta property="og:image" content="https://i.ibb.co/82w5tNy/OG.webp" />
        <meta property="og:image:type" content="image/webp" />
        <link rel="stylesheet" href="index.css"/> 
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <body>
          <h1 className='text-center font-bold mt-12 text-2xl text-white'>Sreyas CU</h1>
          <p className='text-center text-sm mt-2 text-white/70'>Aspiring Game Producer</p>
          <div className='flex overflow-hidden flex-col md:flex-row justify-center items-center md:items-start gap-12 my-12 h-max max-w-[90%]  lg:max-w-[70%] bg-black/50 p-8 md:p-16 m-auto rounded-[2rem]'>
            <div className='min-h-[30rem] md:h-auto relative overflow-hidden md:overflow-visible rounded-3xl w-full md:w-[25rem] drop-shadow-xl '>
              <img className='w-full bg-cover absolute transition-all duration-700 ease-in-out grayscale hover:filter-none bg-white hover:p-0 p-4 md:p-0 md:hover:p-4 rounded-3xl drop-shadow-xl ' src='https://www.sreyascu.com/pic.png' />
            </div>
            <div className='flex flex-col justify-between gap-8 w-full'>
              <p className=' text-white/80 text-[0.9rem] leading-[25px]'>
              Hi, I'm Sreyas. I'm a Computer Science Engineer from Kerala, India, looking to make my mark as a <strong>Project Manager / Game Producer.</strong>
              <br/><br/>
              I intend to help teams <strong>solve problems, ensure quality of product and deliver outcomes on time.</strong> I believe the mastery of my soft skills from <strong>leadership, precise time management and proper communication</strong> along with my technical expertise will help me in my pursuit.
              <br/><br/>
              Furthermore, I believe in the notion of <strong>lifelong learning.</strong> It is my firm believe that you can learn something from almost anything. For me, <strong>playing video games with a critical eye taught me about game design, reading professional books restructured my life for the better and watching thought-provoking movies provided a new outlook on life,</strong> that I was previous blind to.
              <br/><br/>  
              On a final note, I would like to shout-out my blog, where I collect all my dispersed thoughts and amalgamate them into something useful and informative. Linked below!
              </p>
              <div className='flex gap-6 flex-wrap uppercase text-[0.6rem]'>
                <a className='transition-all duration-500 ease-in-out rounded-full text-white py-3 px-5 border-solid border-[1px] border-white hover:bg-white/10' target="_blank" href="https://drive.google.com/file/d/1q-zuWmaahdtYQXmRWMp8rqhbiQLKvLxm/view?usp=share_link"><button>RESUME</button></a>
                <a className='transition-all duration-500 ease-in-out rounded-full text-white py-3 px-5 border-solid border-[1px] border-white hover:bg-white/10' target="_blank" href="https://www.linkedin.com/in/sreyas-cu/">LinkedIn</a>
                <a className='transition-all duration-500 ease-in-out rounded-full text-white py-3 px-5 border-solid border-[1px] border-white hover:bg-white/10' target="_blank" href="https://www.r1chu.com/">Blog</a>
                <a className='transition-all duration-500 ease-in-out rounded-full text-white py-3 px-5 border-solid border-[1px] border-white hover:bg-white/10' target="_blank" href="https://twitter.com/cusreyas">Twitter</a>
                <a className='transition-all duration-500 ease-in-out rounded-full text-white py-3 px-5 border-solid border-[1px] border-white hover:bg-white/10' target="_blank" href="https://youtube.com/@sreyascu">YouTube</a>
              </div>
            </div>
          </div>
      </body>
    </>
  )
}
