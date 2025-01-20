import {
  handleBackCCW,
  handleBackCW,
  handleBottomCCW,
  handleBottomCW,
  handleFrontCCW,
  handleFrontCW,
  handleLeftCCW,
  handleLeftCW,
  handleRightCCW,
  handleRightCW,
  handleTopCCW,
  handleTopCW,
} from '@/helpers/rubiksCubeHelpers'

export const rubiksCubeData = {
  width: 3,
  functions: {
    handleBackCCW: handleBackCCW,
    handleBackCW: handleBackCW,
    handleBottomCCW: handleBottomCCW,
    handleBottomCW: handleBottomCW,
    handleFrontCCW: handleFrontCCW,
    handleFrontCW: handleFrontCW,
    handleLeftCCW: handleLeftCCW,
    handleLeftCW: handleLeftCW,
    handleRightCCW: handleRightCCW,
    handleRightCW: handleRightCW,
    handleTopCCW: handleTopCCW,
    handleTopCW: handleTopCW,
  },
}
