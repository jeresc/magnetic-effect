import {FramerMagnetic} from '@/components/framer-magnetic'
import {GsapMagnetic} from '@/components/gsap-magnetic'
import {FaFacebookF, FaGithub, FaTwitter, FaYoutube} from 'react-icons/fa'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-y-6 p-24'>
      <h2 className='text-base font-semibold text-lime-200'>Made with GSAP</h2>
      <section className='flex gap-8'>
        <GsapMagnetic>
          <FaFacebookF size={32} />
        </GsapMagnetic>
        <GsapMagnetic>
          <FaTwitter size={32} />
        </GsapMagnetic>
        <GsapMagnetic>
          <FaYoutube size={32} />
        </GsapMagnetic>
        <GsapMagnetic>
          <FaGithub size={32} />
        </GsapMagnetic>
      </section>
      <h2 className='pt-8 text-base font-semibold text-orange-300'>
        Made with GSAP
      </h2>
      <section className='flex gap-8'>
        <FramerMagnetic>
          <FaFacebookF size={32} />
        </FramerMagnetic>
        <FramerMagnetic>
          <FaTwitter size={32} />
        </FramerMagnetic>
        <FramerMagnetic>
          <FaYoutube size={32} />
        </FramerMagnetic>
        <FramerMagnetic>
          <FaGithub size={32} />
        </FramerMagnetic>
      </section>
    </main>
  )
}
