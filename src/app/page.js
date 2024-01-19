'use client'
import Main from '@/components/Main'
import Starting from '@/components/Starting';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { kalam } from './fonts';
import StoryReply from '@/components/StoryReply';
import Respond from '@/components/Respond';
import EarlyDays from '@/components/EarlyDays';
import OneDay from '@/components/OneDay';
import DailyChat from '@/components/DailyChat';
import Time from '@/components/Time';
import ShareDetails from '@/components/ShareDetails';
import Shy from '@/components/Shy';
import WhatsApp from '@/components/WhatsApp';
import Instagram from '@/components/Instagram';
import Reels from '@/components/Reels';
import Fan from '@/components/Fan';
import LateNight from '@/components/LateNight';
import FinalDays from '@/components/FinalDays';
import LastsChat from '@/components/LastChat';
import SiteMade from '@/components/SiteMade';
import WhyILikeHer from '@/components/WhyILikeHer';
import FinalWords from '@/components/FinalWords';

export default function Home() {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <main className={`${kalam.className} w-screen min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-10 py-4`}>
      <Main />
      <Starting />
      <StoryReply />
      <Respond />
      <EarlyDays />
      <OneDay />
      <DailyChat />
      <Time />
      <ShareDetails />
      <Shy />
      <WhatsApp />
      <Instagram />
      <Fan />
      <LateNight />
      {/* Final Days */}
      <FinalDays />
      <LastsChat />
      <WhyILikeHer />
      <SiteMade />
      <FinalWords />
    </main>
  )
}
