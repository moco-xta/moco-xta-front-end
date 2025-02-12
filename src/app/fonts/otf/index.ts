import localFont from 'next/font/local'

const helveticaNeueBoldFont = localFont({
  src: './helvetica_neue/HelveticaNeueBold.otf',
  variable: '--font-helvetica-neue-bold',
})

const helveticaNeueBlackFont = localFont({
  src: './helvetica_neue/HelveticaNeueBlack.otf',
  variable: '--font-helvetica-neue-black',
})

/* const parisineTryRegularFont = localFont({
  src: './parisine/ParisineTry-Regular.otf',
  variable: '--font-parisine-try-regular',
}) */

export { /* parisineTryRegularFont, */ helveticaNeueBoldFont, helveticaNeueBlackFont }
