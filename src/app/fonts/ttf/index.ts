import localFont from 'next/font/local'

const helveticaFont = localFont({
  src: './helvetica/Helvetica.ttf',
  variable: '--font-helvetica',
})

const gilroyHeavyFont = localFont({
  src: './gilroy/Gilroy-Heavy.ttf',
  variable: '--font-gilroy-heavy',
})

const sansTrialRegularFont = localFont({
  src: './saans_trial/SaansTRIAL-Regular.ttf',
  variable: '--font-sans-trial-regular',
})

export { helveticaFont, gilroyHeavyFont, sansTrialRegularFont }
