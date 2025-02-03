'use client'

import React, { ChangeEvent } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { ITask } from '@/app/lib/todolist/definitions';
import { postTask } from '@/app/lib/todolist/service';

export default function create() {
    // const { setIsLoading } = useLoading();
    return (
        <>
            <h1>Create Task</h1>
            {/* <form onSubmit={formikData.handleSubmit}>

            </form> */}
        </>
    )
}
