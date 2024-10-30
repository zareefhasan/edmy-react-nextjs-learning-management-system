"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../FormHelpers/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const RegisterForm = () => {
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		await axios
			.post("/api/register", data)
			.then((response) => {
				toast.success("Registration success! Please login.");
				reset();
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<>
			<motion.form 
				onSubmit={handleSubmit(onSubmit)}
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
			>
				<Input
					label="Full Name"
					id="name"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>

				<Input
					label="Email"
					id="email"
					type="email"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>

				<Input
					type="password"
					label="Password"
					id="password"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>

				<button type="submit" disabled={isLoading} className="default-btn">
					{isLoading ? "Please wait..." : "Register Now"}
				</button>
			</motion.form>
		</>
	);
};

export default RegisterForm;
