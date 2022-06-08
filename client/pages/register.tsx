import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import { SUCCESS_CODE } from '../constants/status';
import {
	RegisterInput,
	useRegisterMutation,
} from '../graphql-client/generated/graphql';
import useLanguage from '../hooks/useLanguage';
import useToast from '../hooks/useToast';

const Register: NextPage = () => {
	const lang = useLanguage();
	const toast = useToast();
	const [registerMutation] = useRegisterMutation();
	const registerLang = lang.pages.register;
	const router = useRouter();
	const [submitting, setSubmitting] = useState(false);

	const handleFormSubmit = async (registerFields: RegisterInput) => {
		try {
			setSubmitting(true);
			const response = await registerMutation({
				variables: {
					registerInput: registerFields,
				},
			});

			if (response.data?.register.code === SUCCESS_CODE.CREATED) {
				toast.show({ message: registerLang.message.success, type: 'success' });
				router.push(lang.pages.login.link);
			} else {
				toast.show({
					message:
						response.data?.register.message || registerLang.message.failed,
					type: 'error',
				});
			}
		} catch (error) {
			console.log(error);
			toast.show({
				message: registerLang.message.failed,
				type: 'error',
			});
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div
			className={`min-h-[calc(100vh-67px)] flex items-center flex-col my-16 ${
				submitting ? 'disabled' : ''
			}`}
		>
			<h1 className='text-2xl md:text-4xl font-extrabold text-center tracking-[1px] mb-2'>
				{lang.pageSEO.register.title}
			</h1>
			<p className='text-center mb-5 text-gray-400 dark:text-gray-300 md:text-lg'>
				{registerLang.subTitle}
			</p>

			<RegisterForm onSubmit={handleFormSubmit} />
		</div>
	);
};

export default Register;
