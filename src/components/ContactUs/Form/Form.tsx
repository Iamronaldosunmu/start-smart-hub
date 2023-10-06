import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
// import FormFooter from "../FormFooter";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email({ message: "This email format is not valid" }),
  phoneNo: z.string().min(11),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onBlur" });

  const handleFormSubmit = (data: FieldValues) => {
    if (isValid) {
      reset();
      console.log(data);
    }
  };

  return (
    <div className="ml-auto ">
      <div className="text-center lg:text-left">
        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold mb-7">
          Get in <span className="text-custom-pink ">Touch</span>
        </h1>
        <p className="mb-9">
          Let's meet you <br />
          We are delighted to be a part of your success story
        </p>
      </div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Name"
            className="border py-2 w-full px-3 border-gray-300 outline-none"
          />

          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Email"
            className="border py-2 w-full px-3 border-gray-300 outline-none"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="phone"
            {...register("phoneNo")}
            placeholder="Phone number"
            className="border w-full py-2 px-3 border-gray-300 outline-none"
          />
          {errors.phoneNo && (
            <p className="text-red-500">{errors.phoneNo.message}</p>
          )}
        </div>
        <div className="mb-7">
          <select
            className="border w-full py-2 px-3 border-gray-300 outline-none"
            id="referralMethod"
          >
            <option value="">How did you find us?</option>
            <option value="mos">mosh</option>
            <option value="ronald">ronald</option>
            <option value="jason">jason</option>
          </select>
        </div>
        <button className="py-2 w-full bg-custom-pink transition duration-300 ease-in-out text-white">
          Send
        </button>

        {/* <FormFooter /> */}
      </form>
    </div>
  );
};

export default Form;