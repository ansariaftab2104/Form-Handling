import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  // console.log(errors);

  return (
    <div className="w-100 h-full bg-black rounded-md text-white flex flex-col gap-3 px-3 py-2">
      <h1 className="text-xl text-center">Create User</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset()

        })}
        action=""
      >
        <div className="gap-div flex flex-col gap-5 rounded overflow-hidden">
          <input
            {...register("image", {
              required: "Image link is required",
            })}
            className="text-xl px-3 py-1 w-full border-2"
            type="text"
            placeholder="Enter Image Url"
          />
          {errors.image && (
            <p className="text-red-600">{errors.image.message}</p>
          )}
          <input
            {...register("name", {
              required: "Name is required",
            })}
            className="text-xl px-3 py-1 w-full border-2"
            type="text"
            placeholder="Enter Your Name"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter valid email",
              },
            })}
            className="text-xl px-3 py-1 w-full border-2"
            type="email"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          <input
            {...register("phone", {
              required: "Mobile number is required",
              minLength: {
                value: 10,
                message: "Minimum 10 digits are required",
              },
              maxLength: {
                value: 10,
                message: "Maximum 10 digits are required",
              },
              pattern: {
                value: /^[6-9]\d{9}$/,
                 message: "Please enter valid phone number",
              },
            })}
            className="text-xl px-3 py-1 w-full border-2"
            type="number"
            placeholder="Enter Your Number"
          />
          {errors.phone && (
            <p className="text-red-600">{errors.phone.message}</p>
          )}

          <div className="btn flex justify-center">
            <input
              className="bg-green-600 px-3 py-1 rounded cursor-pointer"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
