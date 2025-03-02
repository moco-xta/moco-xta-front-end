import localFont from 'next/font/local'

const helveticaRomanFont = localFont({
  src: './helvetica_neue/HelveticaNeueRoman.otf',
  variable: '--font-helvetica-neue-bold',
})

const helveticaMediumFont = localFont({
  src: './helvetica_neue/HelveticaNeueBold.otf',
  variable: '--font-helvetica-neue-bold',
})

export { helveticaRomanFont, helveticaMediumFont }
