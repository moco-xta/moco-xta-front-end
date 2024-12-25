import { title } from 'process'
import React, {
  ComponentProps,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  useEffect,
} from 'react'

type TAddress = string | string[]

const address: TAddress = '123 main street'

// #################################
// EXTENDS
// #################################

interface IBase {
  iBaseProperty: string
}

interface IExtended extends IBase {
  iExtendedProperty: string
}

type TBase = {
  iBaseProperty: string
}

type TExtended = TBase & {
  iExtendedProperty: string
}

// const extend: IExtended = {
const extend: TExtended = {
  iBaseProperty: 'base',
  iExtendedProperty: 'extended',
}

// #################################
// OMIT
// #################################

type TUserProps = {
  name: string
  age: number
  date: Date
}

type TGuestProps = Omit<TUserProps, 'date' | 'age'>

// #################################
// TUPPLES
// #################################

type TAdddress = [string, number]

const Address: TAdddress = ['stree', 1]

// #################################
// EXTRACT TYPE
// #################################

/* type TProject = {
  title: string;
  description: string;
  nested: {
    startDate: Date;
    endDate: Date;
  }
} */

const project = {
  title: 'title',
  description: 'description',
  nested: {
    startDate: new Date(),
    endDate: new Date(),
  },
}
// } as const

type TProject = typeof project
type TNested = (typeof project)['nested']
// type TSpecification = typeof project<Omit<TProject, 'nested'>>

// #################################
// COMPONENT
// #################################

interface IMyComponentProps<T> {
  data: T
}

type TMyComponentProps<T> = {
  data: T
}

// export default function GenericTest<T>({ data }: IMyComponentProps<T>) {
function GenericTest<T>({ data }: TMyComponentProps<T>) {
  return <div>GenericTest</div>
}

// #################################
// COMPONENT
// #################################

// type TButton = ComponentProps<"button">
type TButton = ComponentPropsWithRef<'button'> & {
  timeline: GSAPTimeline
}
// type TButton = ComponentPropsWithoutRef<"button">

function Button({ timeline, ...rest }: TButton) {
  /* useEffect(() => {
    console.log('timeline', timeline)
  }, [timeline]) */

  return <button {...rest}>'Click me!'</button>
}

// #################################
// GENERICS
// #################################

/* const conertToArray = <T,>(value: T): T[] => {
  return [value]
} */

function conertToArray<T>(value: T): T[] {
  return [value]
}

// #################################

/* type TGenericButton<T> = {
  data: T;
  dataHistory: T[];
} */

type TGenericButton<T extends number | string> = {
  data: T
  dataHistory: T[]
}

function GenericButton<T extends number | string>({ data, dataHistory }: TGenericButton<T>) {
  /* console.log('data', data)
  console.log('dataHistory', dataHistory) */

  return <button>Click me!</button>
}

function createArrayPair<T, U>(input1: T, input2: U): [T, U] {
  return [input1, input2]
}
