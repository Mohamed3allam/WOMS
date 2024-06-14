import React from 'react'
import ProfessionalMembership from '../../../components/memberships/ProfessionalMembership'
import ScientificMembership from '../../../components/memberships/ScientificMembership'
import GeneralMembership from '../../../components/memberships/GeneralMembership'
import HonoraryMembership from '../../../components/memberships/HonoraryMembership'
import MedicalAdvisoryMemebrship from '../../../components/memberships/MedicalAdvisoryMemebrship'
import SocialMembership from '../../../components/memberships/SocialMembership'
import { styled } from 'styled-components'
import { Helmet } from 'react-helmet-async'
import Header from '../../../components/header/Header'

const MembershipsDiv = styled.div``

const Memberships = ({ images }) => {
  return (
    <>
    <Helmet>
      <title>Memberships</title>
    </Helmet>
      <MembershipsDiv>
        <Header headerFor={'Memberships'} images={images} />
        <ProfessionalMembership images={images} />
        <ScientificMembership images={images} />
        <GeneralMembership images={images} />
        <MedicalAdvisoryMemebrship images={images} />
        <HonoraryMembership images={images} />
        <SocialMembership images={images} />
      </MembershipsDiv>
    </>
  )
}

export default Memberships