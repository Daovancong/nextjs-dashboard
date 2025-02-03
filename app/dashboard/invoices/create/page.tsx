'use client'
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { useLoading } from '@/app/AppProvider';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { postTask } from '@/app/lib/todolist/service';
import { ITask } from '@/app/lib/todolist/definitions';
import { useFormik } from 'formik';
import { ChangeEvent } from 'react';
import { customers } from '@/app/lib/placeholder-data';
import Link from 'next/link';

export default async function Page() {
    const { setIsLoading } = useLoading();
    const router = useRouter();
    const validationSchema = yup.object().shape({
        title: yup.string().required('Please type a title'),
        desc: yup.string().required('Please type a description'),
    });

    const handlePost = async (data: Omit<ITask, | 'id' | 'done_at' | 'created_at' | 'done'>) => {
        try {
            const { title, desc } = data;
            const done = true;
            setIsLoading(true)
            const res = await postTask({ title, desc, done })

            if (!res) {
                toast.error('Thêm mới thất bại');
            }
            toast.success('Thêm mới thành công!');
            router.push('/');
        } catch {
            return {
                message: 'Database Error: Failed to Create Invoice.',
            };
        } finally {
            setIsLoading(false)
        }
    }

    const formikData = useFormik({
        initialValues: {
            title: '',
            desc: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => handlePost(values),
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        formikData.setFieldValue(name, value)
    }


    return (
        <>

            <h1 className="font-bold text-2xl mb-2">Create Task</h1>
            <form onSubmit={formikData.handleSubmit}>
                <div className="rounded-md bg-gray-50 p-4 md:p-6">
                    <div className="mb-4">
                        <label htmlFor="title" className="mb-2 block text-sm font-medium">
                            title
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Enter task title"
                            aria-describedby="title-error"
                            onChange={onChange}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" />
                        <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {formikData.errors?.title && formikData.touched?.title &&
                                <p className="mt-2 text-sm text-red-500">
                                    {formikData.errors?.title}
                                </p>
                            }
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="title" className="mb-2 block text-sm font-medium">
                            Description
                        </label>
                        <input
                            id="desc"
                            name="desc"
                            type="text"
                            placeholder="Enter task desc"
                            aria-describedby="desc-error"
                            onChange={onChange}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" />
                        <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {formikData.errors?.desc && formikData.touched?.desc &&
                                <p className="mt-2 text-sm text-red-500">
                                    {formikData.errors?.desc}
                                </p>
                            }
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    {/* <Button type="submit">Create Task</Button> */}
                </div>
            </form>
        </>
    );
}