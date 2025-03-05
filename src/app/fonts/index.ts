import localFont from 'next/font/local'

const helveticaMediumFont = localFont({
  src: './helvetica_neue/HelveticaNeueBold.otf',
  variable: '--font-helvetica-neue-bold',
})

const helveticaRomanFont = localFont({
  src: './helvetica_neue/HelveticaNeueRoman.otf',
  variable: '--font-helvetica-neue-bold',
})

const montserratRegularFont = localFont({
  src: './montserrat/static/Montserrat-Regular.ttf',
  variable: '--font-montserrat-regular',
})

const montserratBoldFont = localFont({
  src: './montserrat/static/Montserrat-Bold.ttf',
  variable: '--font-montserrat-bold',
})

export { helveticaMediumFont, helveticaRomanFont, montserratRegularFont, montserratBoldFont }
