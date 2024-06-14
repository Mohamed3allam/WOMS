import React from 'react'
import BannerSection from '../../components/home/BannerSection';
import FeatureSection from '../../components/home/FeatureSection';
import Department from '../../components/home/department/Department';
import CounterSection from '../../components/home/CounterSection';
// import ServiceSection from '../../components/home/ServiceSection';
import DoctorSection from '../../components/home/DoctorSection';
// import AppointmentSection from '../../components/home/AppointmentSection';
import NewsletterSection from '../../components/home/NewsletterSection';
import CertificateSection from '../../components/about/CertificateSection';
import PackagesSection from '../../components/home/PackagesSection'
import { Helmet } from 'react-helmet-async';
import BlogSection from '../../components/home/BlogSection';
import AutoplayCarousel from '../../components/home/credits-carousel/Carousel';

import { sponsorSection, majorsSection } from '../../components/home/credits-carousel/carousel-config'


const Home = ({ images }) => {
  
  return (
      <>
        <Helmet>
          <title>World Organization for Medical Science | W.O.M.S</title>
        </Helmet>
          <BannerSection images={images} />
          <FeatureSection images={images} />
          <Department images={images} />
          <CounterSection images={images} />
          <PackagesSection images={images} />

          <CertificateSection images={images} />
          <BlogSection images={images} />
          <AutoplayCarousel title={'Credits'} data={sponsorSection} images={images} />
          <NewsletterSection images={images} />
      </>
  )
}

export default Home