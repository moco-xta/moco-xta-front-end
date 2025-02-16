import React, { ChangeEvent, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useTranslations } from 'next-intl'

import { PageTitle } from '../../titles'
// import Color from './color'

// import { colorsData } from '@/data/colors/colorsData'

import './index.scss'
import {
  generateGradient,
  getColorRelationships,
  getLighterAndDarkerColors,
} from '@/helpers/colorsHelpers'

const initialValues = {
  color: {
    hex: '#493dff',
  },
}

const colorValidationSchema = Yup.object().shape({
  color: Yup.object().shape({
    hex: Yup.string()
      .required('Color is required')
      .matches(
        /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/,
        'Invalid hex color format. Use #RRGGBB or #RRGGBBAA.',
      ),
  }),
})

export default function ColorPage() {
  const t = useTranslations('COLORS')

  const [lighter, setLighter] = useState<string[]>(
    getLighterAndDarkerColors(initialValues.color.hex).lighter,
  )
  const [darker, setDarker] = useState<string[]>(
    getLighterAndDarkerColors(initialValues.color.hex).darker,
  )
  const [gradient, setGradient] = useState<string[]>(generateGradient(initialValues.color.hex))
  const [complementary, setComplementary] = useState<string>(
    getColorRelationships(initialValues.color.hex).complementary,
  )
  const [analogous, setAnalogous] = useState<string[]>(
    getColorRelationships(initialValues.color.hex).analogous,
  )
  const [triadic, setTriadic] = useState<string[]>(
    getColorRelationships(initialValues.color.hex).triadic,
  )
  const [splitComplementary, setSplitComplementary] = useState<string[]>(
    getColorRelationships(initialValues.color.hex).splitComplementary,
  )
  const [tetradic, setTetradic] = useState<string[]>(
    getColorRelationships(initialValues.color.hex).tetradic,
  )

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: colorValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log('Submitted values:', values)
    },
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (!value.startsWith('#')) {
      formik.setFieldValue('color.hex', `#${value}`)
    } else {
      formik.setFieldValue('color.hex', value)
    }
    if (formik.values.color.hex.length !== 6 || !/^[0-9A-Fa-f]{6}$/.test(formik.values.color.hex)) {
      setLighter([...getLighterAndDarkerColors(formik.values.color.hex, 10).lighter])
      setDarker([...getLighterAndDarkerColors(formik.values.color.hex, 10).darker])
      setGradient(generateGradient(formik.values.color.hex, 10))
      const colorRelationships = getColorRelationships(value)
      setComplementary(colorRelationships.complementary)
      setAnalogous([...colorRelationships.analogous])
      setTriadic([...colorRelationships.triadic])
      setSplitComplementary([...colorRelationships.splitComplementary])
      setTetradic([...colorRelationships.tetradic])
    }
  }

  return (
    <div
      id='color_page'
      style={{ background: formik.values.color.hex }}
    >
      <div id='color_content'>
        <>
          <PageTitle translationPath={'COLORS.TITLE'} />
          <div id='colors_introduction'>
            {t.rich('INTRODUCTION', {
              p: (chunk) => <p>{chunk}</p>,
            })}
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div id='hex_color_input_container'>
              <label htmlFor='hex'>Hex Color:</label>
              <input
                type='text'
                id='hex_color_input'
                name='color.hex'
                value={formik.values.color.hex}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                placeholder='#RRGGBB or #RRGGBBAA'
              />
              {formik.touched.color?.hex && formik.errors.color?.hex ? (
                <div style={{ color: 'red' }}>{formik.errors.color.hex}</div>
              ) : null}
            </div>
            {/* <button type="submit">Submit</button> */}
          </form>
          <div
            id='lighter_darker_colors'
            className='color_squares_wrapper'
          >
            <div
              id='lighter_colors'
              className='color_squares_wrapper'
            >
              {lighter.map((color, index) => (
                <div
                  key={`lighter_${index}`}
                  className='color_square'
                  style={{ background: color }}
                />
              ))}
            </div>
            <div
              id='darker_colors'
              className='color_squares_wrapper'
            >
              {darker.map((color, index) => (
                <div
                  key={`darker_${index}`}
                  className='color_square'
                  style={{ background: color }}
                />
              ))}
            </div>
          </div>
          <div
            id='gradient_colors'
            className='color_squares_wrapper'
          >
            {gradient.map((color, index) => (
              <div
                key={`gradient_${index}`}
                className='color_square'
                style={{ background: color }}
              />
            ))}
          </div>
          <div id='complementary_colors'>
            <div
              id='complementary'
              className='color_square'
              style={{ background: complementary }}
            />
            <div
              id='analogous'
              className='color_squares_wrapper'
            >
              {analogous.map((color) => (
                <div
                  key={`analogous_${color}`}
                  id={`analogous_${color}`}
                  className='color_square'
                  style={{ background: color }}
                />
              ))}
            </div>
            <div
              id='triadic'
              className='color_squares_wrapper'
            >
              {triadic.map((color) => (
                <div
                key={`triadic_${color}`}
                id={`triadic_${color}`}
                  className='color_square'
                  style={{ background: color }}
                />
              ))}
            </div>
            <div
              id='split_complementary'
              className='color_squares_wrapper'
            >
              {splitComplementary.map((color) => (
                <div
                key={`split_complementary_${color}`}
                id={`split_complementary_${color}`}
                  className='color_square'
                  style={{ background: color }}
                />
              ))}
            </div>
            <div
              id='tetradic'
              className='color_squares_wrapper'
            >
              {tetradic.map((color) => (
                <div
                key={`tetradic_${color}`}
                id={`tetradic_${color}`}
                  className='color_square'
                  style={{ background: color }}
                />
              ))}
            </div>
          </div>
        </>
        {/* {colorsData.map((palette, index) => (
          <div key={`palette_${index}`} className='palette_container'>
          {palette.map((color) => (
            <Color key={`color_${color}`} color={color} />
            ))}
            </div>
            ))} */}
      </div>
    </div>
  )
}
