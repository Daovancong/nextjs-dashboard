'use client'

import React, { useEffect, useState } from 'react'
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Table from '@/app/ui/todolist/table';
import { ITask } from '@/app/lib/todolist/definitions';
import { fetchAllList } from '@/app/lib/todolist/service';

export default function todolist() {
    const fetchData = async () => {
        try {
            // setIsLoading(true)
            const tasks = await fetchAllList()
            setData(tasks)
        } catch {
            console.log("Lỗi khi lấy dữ liệu!")
        }
        // finally {
        //     setIsLoading(false)
        // }
    }
    const [data, setData] = useState<ITask[]>([])
    // const { setIsLoading } = useLoading();

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='w-full'>
            <div className='flex items-center justify-center'>
                <span className='mr-2'>
                    <ClipboardDocumentListIcon className="w-12 h-12 text-gray-500" />
                </span>
                <span className='h-12 grid place-items-center'>
                    <h1 className='text-4xl font-bold opacity-65'>TODO LIST</h1>
                </span>
            </div>

            <div className='my-3 flex items-center md:my-8 flex-wrap gap-1 justify-between p-2'>
                <div className='hidden w-48 h-10 text-center md:grid place-items-center bg-gray-200 py-1 px-4 rounded-full font-bold'>
                    THINHS TO DO
                </div>
                <hr className='border-gray-300 flex-grow line-br hidden md:block' />
                <Link
                    href={'/dashboard/todolist/create'}
                    className='py-1 px-5 text-white md:px-6 md:py-2 h-10 button-top flex items-center rounded-3xl bg-blue-500  text-xs md:text-sm font-medium  transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
                >
                    + ADD
                </Link>
                <div className='hover:cursor-pointer py-1 px-5 text-white md:px-6 md:py-2 h-10 button-top flex items-center rounded-3xl bg-blue-500 text-xs md:text-sm font-medium transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'>
                    PRINT
                </div>
                <Link href={'/qrcode'}>
                    <div className='hover:cursor-pointer py-1 px-5 text-white md:py-2 h-10 button-top flex items-center rounded-3xl bg-blue-500 text-xs md:text-sm font-medium transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'>
                        PAY
                    </div>
                </Link>
            </div>
            <Table data={data} fetchData={fetchData} />
        </div>
    )
}
