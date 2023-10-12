import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import ComingSoon from "./coming";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // const submitRegistration = async (data) => {

  const submitRegistration = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/upload/FormSubmit`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Form submitted successfully.");
        navigate("/");
      } else {
        console.error("Error submitting form:", response.statusText);
        // Handle error gracefully, e.g., display an error message to the user.
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle network errors or other exceptions.
    }
  };

  return (
    
    // <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between">

    //   {/* <div className="md:w-1/2">
      
    //     <img
    //       src="https://res.cloudinary.com/dpok16gsr/image/upload/v1696941475/TedXFILES/omykuesq9fykebd09cby.jpg"
    //       alt="Your Image"
    //       className="w-3/4 h-3/4 object-cover"
    //     />
    //   </div>
    //   <div className="md:w-1/2 md:ml-4">
    //     <form
    //       onSubmit={handleSubmit(submitRegistration)}
    //       className="max-w-lg mx-auto bg-white rounded-lg shadow-lg px-8 py-6 mb-4 "
    //     >
    //       <div className="mb-4">
    //         <label
    //           className="block text-black text-sm font-bold mb-2"
    //           htmlFor="firstName"
    //         >
    //           First Name:
    //         </label>
    //         <input
    //           type="text"
    //           id="firstName"
    //           placeholder="e.g., Aakash"
    //           className="border rounded-lg px-3 py-2 w-full"
    //           {...register("firstName")}
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label
    //           className="block text-black text-sm font-bold mb-2"
    //           htmlFor="lastName"
    //         >
    //           Last Name:
    //         </label>
    //         <input
    //           type="text"
    //           id="lastName"
    //           placeholder="e.g., Kulkarni"
    //           className="border rounded-lg px-3 py-2 w-full"
    //           {...register("lastName")}
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label
    //           className="block text-black text-sm font-bold mb-2"
    //           htmlFor="collegeName"
    //         >
    //           College:
    //         </label>
    //         <input
    //           type="text"
    //           id="collegeName"
    //           placeholder="e.g., Walchand College of Engineering"
    //           className="border rounded-lg px-3 py-2 w-full"
    //           {...register("collegeName")}
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label
    //           className="block text-black text-sm font-bold mb-2"
    //           htmlFor="mobileNumber"
    //         >
    //           Mobile Number:
    //         </label>
    //         <input
    //           type="text"
    //           id="mobileNumber"
    //           placeholder="e.g., 8785XXXXXX"
    //           className="border rounded-lg px-3 py-2 w-full"
    //           {...register("mobileNumber")}
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label
    //           className="block text-black text-sm font-bold mb-2"
    //           htmlFor="emailId"
    //         >
    //           Email:
    //         </label>
    //         <input
    //           type="email"
    //           id="emailId"
    //           placeholder="xyz05@gmail.com"
    //           className="border rounded-lg px-3 py-2 w-full"
    //           {...register("emailId")}
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label
    //           className="block text-black text-sm font-bold mb-2"
    //           htmlFor="transactionId"
    //         >
    //           Transaction Id
    //         </label>
    //         <input
    //           type="text"
    //           id="transactionId"
    //           accept="image/*"
    //           className="border rounded-lg px-3 py-2 w-full"
    //           {...register("transactionId")}
    //         />
    //       </div>
    //       <div>
    //         <button
    //           type="submit"
    //           className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition-colors duration-300"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div> */}

    
    // </div>

    <ComingSoon></ComingSoon>
  );
};

export default Form;
