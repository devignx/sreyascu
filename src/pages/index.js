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
        <meta property="og:image" content="https://user-images.githubusercontent.com/102208188/203581089-efa3d64d-17b7-4f10-8315-b72a63349cda.png" />
        <meta property="og:image:type" content="image/png" />
        <link rel="stylesheet" href="index.css"/> 
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <body>
          <h1 className='text-center font-bold mt-12 text-2xl text-white'>Sreyas CU</h1>
          <p className='text-center text-xs mt-2 text-white/50'>Aspiring Game Designer</p>
          <div className='flex md:scale-[95%] overflow-hidden flex-col md:flex-row justify-center items-center md:items-start gap-12 my-12 h-max max-w-[90%] md:max-w-[70%] bg-black/50 p-8 md:p-16 m-auto rounded-[2rem]'>
            <div className='min-h-[30rem] md:h-auto relative overflow-hidden md:overflow-visible rounded-3xl w-full md:w-[25rem] drop-shadow-xl '>
              <img className='w-full bg-cover absolute transition-all duration-700 ease-in-out hover:grayscale bg-white hover:p-4 rounded-3xl drop-shadow-xl ' src='https://www.sreyascu.com/assets/pic.png' />
            </div>
            <div className='flex flex-col justify-between gap-8 w-full'>
              <p className=' text-white text-sm leading-[25px]'>
              Hi, I'm Sreyas. I'm a Computer Science Engineer from Kerala, India, looking to make my mark as a Project Manager / Game Producer.
              <br/><br/>
              I intend to help teams solve problems, ensure quality of product and deliver outcomes on time. I believe the mastery of my soft skills from leadership, precise time management and proper communication along with my technical expertise will help me in my pursuit.
              <br/><br/>
              Furthermore, I also believe in the notion of lifelong learning. It is my firm believe that you can learn something from almost anything. For me, playing video games with a critical eye taught me about game design, reading professional books restructured my life for the better and watching thought-provoking movies provided a new outlook on life, that I was previous blind to.
              <br/><br/>  
              On a final note, I would like to shout-out my blog, where I collect all my dispersed thoughts and amalgamate them into something useful and informative. Linked below!
              </p>
              <div className='flex gap-6 flex-wrap uppercase text-[0.6rem]'>
                <a className='transition-all duration-500 ease-in-out rounded-full text-white py-3 px-5 border-solid border-2 border-white hover:bg-white/10' target="_blank" href="https://docs.google.com/document/d/1wJUrwpfgJEe7njoSIVkaXwbrPnsq6qDqMz4iY7_ibyQ/edit?usp=sharing"><button>RESUME</button></a>
                <a className='transition-all duration-500 ease-in-out rounded-full text-white py-3 px-5 border-solid border-2 border-white hover:bg-white/10' target="_blank" href="https://www.linkedin.com/in/sreyas-cu/">LinkedIn</a>
                <a className='transition-all duration-500 ease-in-out rounded-full text-white py-3 px-5 border-solid border-2 border-white hover:bg-white/10' target="_blank" href="https://www.r1chu.com/">Blog</a>
                <a className='transition-all duration-500 ease-in-out rounded-full text-white py-3 px-5 border-solid border-2 border-white hover:bg-white/10' target="_blank" href="https://twitter.com/cusreyas">Twitter</a>
                <a className='transition-all duration-500 ease-in-out rounded-full text-white py-3 px-5 border-solid border-2 border-white hover:bg-white/10' target="_blank" href="https://youtube.com/@sreyascu">YouTube</a>
              </div>
            </div>
          </div>
          <p className='text-white text-xs mb-8 text-center'>Copyrights Recieved ©️2023</p>
      </body>
    </>
  )
}
