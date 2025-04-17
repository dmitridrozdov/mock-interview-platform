import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from "next/image"
import React from 'react'

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            Get Interview Ready with <span className="text-primary">AI-Powered</span> Practice & Feedback
          </h2>
          <p className='text-lg'>
            Practice coding interviews with our AI-powered platform. Get instant feedback and improve your skills.
            Join now and take your coding interviews to the next level!
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
          <Image
            src="/robot.png"
            alt="robo-dude"
            width={400}
            height={400}
            className="max-sm:hidden"
          />
        </div>
      </section>
    </>
  )
}

export default page