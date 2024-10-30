import localFont from 'next/font/local'

const gilroyBlackFont = localFont({
  src: './gilroy/Gilroy-Black.ttf',
  variable: '--font-gilroy-black',
})

const gilroyBoldFont = localFont({
  src: './gilroy/Gilroy-Bold.ttf',
  variable: '--font-gilroy-bold',
})

const gilroyHeavyFont = localFont({
  src: './gilroy/Gilroy-Heavy.ttf',
  variable: '--font-gilroy-heavy',
})

const gilroyRegularFont = localFont({
  src: './gilroy/Gilroy-Regular.ttf',
  variable: '--font-gilroy-regular',
})

export { gilroyBlackFont, gilroyBoldFont, gilroyHeavyFont, gilroyRegularFont }
