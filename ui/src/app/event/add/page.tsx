"use client"
import { useForm } from "react-hook-form"
import { EventAdd } from '../../../types';

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EventAdd>()

  function onSubmit(data: EventAdd) {
    console.log(data)
  }

  console.log(watch("name")) // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Event name</label>
      <input {...register("name", { required: true })} />
      {errors.name && <span>Name is required</span>}

      <label>Event date</label>
      <input {...register("date", { required: true })} />
      {errors.date && <span>Date is required</span>}

      <label>Event description</label>
      <input {...register("description", { required: true })} />
      {errors.description && <span>Description is required</span>}

      <input type="submit" />
    </form>
  )
}