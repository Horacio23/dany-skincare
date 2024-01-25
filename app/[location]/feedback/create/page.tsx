import RatingForm from '@/components/rating-form'
import { Form } from '@/components/ui/form'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' flex flex-col  w-full h-full  items-center '>
      <div className='relative flex flex-col bg-gray-950 pt-8 max-w-[400px] items-center'>
        <div className='flex flex-col w-full items-center'>
          <Image 
            src="/golden-logo.png"
            alt='logo'
            width={100}
            height={100}
          />
          <div className='flex flex-col items-center w-full text-golden-200'>
            <h2 className='uppercase bold-12 my-1'>Dany Skin Care</h2>
            <h1 className='uppercase bold-32 mt-1'>Feedback CARDS</h1>
            <p className='uppercase medium-12'>dont't hesitate to help us improve!</p>

          </div>
        </div>
        <div className='border-[1px] border-golden-300 mt-4 rounded-md w-full'/>
        <div className='flex flex-col pt-4 items-center gradient2'>
          <RatingForm />
        </div>

      {/* <div className='z-0 w-full h-full max-w-[400px]'>
        <Image 
          src="/wave.svg"
          alt="wave"
          width={0}
          height={0}
          className='absolute w-full h-[100px] top-[280px]'
        />
        <div className='absolute h-[500px] w-full bg-sc-30 top-[380px] mt-[-10px]' />
          <Image 
            src="/wave2.svg"
            alt="wave"
            width={0}
            height={0}
            className='absolute w-full h-[100px] top-[780px]'
          />
          <div className='absolute h-[680px] w-full bg-sc-50 top-[870px] mt-[-10px]'/>
        </div>*/}
      </div> 
    </main>
  )
}
