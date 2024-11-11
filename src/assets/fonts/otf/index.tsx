import localFont from 'next/font/local'

const bagnardFont = localFont({
  src: './Bagnard/Bagnard.otf',
  variable: '--font-bagnard',
})

const itcBenguiatBoldFont = localFont({
  src: './ITCBenguiat/ITCBenguiatStdBoldCn.otf',
  variable: '--font-itc-benguiat-bold',
})

export { bagnardFont, itcBenguiatBoldFont }
