import React from 'react'
import MyFaq from '../faq/MyFaq'
import TableTask from '../faq/TableTask'
import MethodsPractice from '../faq/MethodsPractice'
// import MoodTracker from '../faq/MoodTracker'
import ContactUs from '../faq/ContactUs'
import MailContactUs from '../faq/MailContactUs'
import CardsAnimations from '../faq/CardsAnimations'
import TextWithImage from '../faq/TextWithImage'
import ArrayMethodsPractice from '../faq/ArrayMethodsPractice'

const Faq = () => {
  return (
    <>
      <MyFaq/>
      <TableTask />
      <MethodsPractice />
      <ContactUs />
      <MailContactUs />
      <CardsAnimations />
      <TextWithImage />
      <ArrayMethodsPractice/>
      {/* <MoodTracker/> */}
    </>
  )
}

export default Faq



