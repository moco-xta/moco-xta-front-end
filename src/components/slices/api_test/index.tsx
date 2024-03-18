'use client'

import React, { SyntheticEvent, useState } from 'react'

import { useGetTestsQuery, useAddNewTestMutation } from '@/redux/api/testApi'
import { TestInterface } from '@/interfaces/testInterface'

export default function ApiTest() {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [dateOfCreation, setDateOfCreation] = useState<string>('1995-12-17')
  const [category, setCategory] = useState<string>('')

  const { data, isLoading, error } = useGetTestsQuery()
  const [addNewTest] = useAddNewTestMutation()

  let content = null

  if (isLoading) content = <div>Is loading...</div>

  if (error) content = <div>An error occured...</div>

  if (data) {
    content = data?.map((task, index) => (
      <div key={`task${index}`}>{task.title}</div>
    ))
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const test: TestInterface = {
      title: title,
      description: description,
      date_of_creation: new Date(dateOfCreation),
    }
    addNewTest(test)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id='title'
          type='text'
          placeholder='Title'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          id='description'
          type='text'
          placeholder='Description'
          name='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          id='date_of_creation'
          type='date'
          name='date_of_creation'
          value={dateOfCreation}
          onChange={(e) => setDateOfCreation(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      {content}
    </>
  )
}
