import localFont from 'next/font/local'

const gilroyBlackFont = localFont({
  src: './Gilroy/Gilroy-Black.ttf',
  variable: '--font-gilroy-black',
})

const gilroyBoldFont = localFont({
  src: './Gilroy/Gilroy-Bold.ttf',
  variable: '--font-gilroy-bold',
})

const gilroyHeavyFont = localFont({
  src: './Gilroy/Gilroy-Heavy.ttf',
  variable: '--font-gilroy-heavy',
})

const gilroyRegularFont = localFont({
  src: './Gilroy/Gilroy-Regular.ttf',
  variable: '--font-gilroy-regular',
})

const sansTrialRegularFont = localFont({
  src: './SansTRIAL/SaansTRIAL-Regular.ttf',
  variable: '--font-sans-trial-regular',
})

export { gilroyBlackFont, gilroyBoldFont, gilroyHeavyFont, gilroyRegularFont, sansTrialRegularFont }
