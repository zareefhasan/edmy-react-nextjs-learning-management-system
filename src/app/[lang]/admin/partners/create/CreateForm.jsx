"use client";

import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import Input from "@/components/FormHelpers/Input";
import ImageUpload from "@/components/FormHelpers/ImageUpload";

const CreateForm = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		control,
		formState: { errors, isLoading, isValid },
	} = useForm({
		defaultValues: {
			name: "",
			image: "",
		},
	});

	const image = watch("image");

	const onSubmit = async (data) => {
		if (!data.image) {
			toast.error("Please drop image 750x500 before submitting.");
			return;
		}

		axios
			.post("/api/admin/partners", data)
			.then((response) => {
				toast.success(response.data.message);
				router.push("/admin/partners");
			})
			.catch((error) => {
				console.log(error);
				toast.error("Something went wrong!");
			});
	};

	const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="row">
				<div className="col-md-12">
					<Input
						label="Name"
						id="name"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-12">
					<ImageUpload
						onChange={(value) => setCustomValue("image", value)}
						value={image}
						label="Partner image 150x60"
					/>
				</div>

				<div className="col-12">
					<button className="btn default-btn" type="submit">
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default CreateForm;
