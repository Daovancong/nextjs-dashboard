import React from 'react';
import { ITask } from '@/app/lib/todolist/definitions'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import moment from 'moment';
// import { fetchInvoicesPages } from '@/app/lib/data';
// import { KTSVG } from '@/app/ui/KTSVG';

export default function Table(props: { data: ITask[], fetchData: () => void }) {
    const { data, fetchData } = props;
    const handleDeleteSuccess = () => {
        fetchData()
    }
    const handleDeleteFailure = () => { }
    return (
        <div className='rounded-3xl bg-gray-50 p-2 md:pt-0'>
            <div className="hidden  md:grid grid-cols-5 gap-2 items-center text-gray-600 font-semibold text-center p-3">
                <div className='col-span-1'>Title</div>
                <div className='col-span-1'>Description</div>
                <div className='col-span-1'>Time</div>
                <div className='col-span-1'>Status</div>
                <div className='col-span-1'>Action</div>
            </div>
            <div className='grid md:hidden grid-cols-5 gap-2 items-center text-gray-600 font-semibold text-center p-3'>
                <div className='col-span-5 text-base'>Things to do</div>
            </div>

            <div className='space-y-1 max-h-[350px] overflow-auto'>
                {data?.length ? (
                    data.map((task) => (
                        <div
                            key={task.id}
                            className='bg-white grid grid-cols-5 gap-2 items-center px-8 py-2 border rounded-[44px]'
                        >
                            <div className='col-span-5 md:col-span-1 flex items-center justify-items-start'>
                                <input
                                    type="checkbox"
                                    className="check-cl appearance-none w-6 h-6 min-w-6 min-h-6 cursor-pointer rounded-full border-2 border-gray-500 mr-2 checked:bg-slate-400 checked:border-slate-600"
                                />
                                {/* <Checkbox
                                    taskId={task.id}
                                    done={task.done}
                                    onStatusChange={fetchData} // Pass callback to refresh data on status change
                                /> */}
                                <label
                                    htmlFor={`task-${task.id}`}
                                    className='font-bold cursor-pointer text-ellipsis line-clamp-3 leading-normal max-h-12'
                                >
                                    {task.title}
                                </label>
                            </div>
                            <div className='ml-10 col-span-5 md:ml-10 md:col-span-1 text-ellipsis line-clamp-3 leading-normal max-h-12'>{task.desc}</div>
                            <div className='col-span-3 md:col-span-1 text-center'>
                                {moment(task.created_at).format('DD/MM/YYYY')}
                            </div>
                            <div className='col-span-2 md:col-span-1 ml-10 text-center'>
                                <span
                                    className={`text-[15px] font-semibold text-${task.done ? 'green-500' : 'red-500'} ${task.done ? 'text-green-500' : 'text-red-500'}`}
                                >
                                    {task.done ? 'Done' : 'Not Done'}
                                </span>
                                {/* <Status status={task.done} /> */}
                            </div>
                            <div className='justify-end col-span-5 md:col-span-1 flex items-center space-x-2 ml-16 md:ml-0 md:justify-center'>
                                <Link
                                    href={`/dashboard/todolist/update/${task.id}`}
                                    className='text-yellow-500 hover:text-yellow-800'
                                >
                                    <PencilSquareIcon
                                        className="w-6 h-6 text-yellow-[350]"
                                    />
                                </Link>
                                <TrashIcon
                                    className="w-6 h-6 text-red-500  hover:text-red-800"
                                />
                                {/* <DeleteButton
                                    taskId={task.id}
                                    taskTitle={task.title}
                                    onDeleteSuccess={handleDeleteSuccess}
                                    onDeleteFailure={handleDeleteFailure}
                                /> */}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-gray-600'>Không có bản ghi nào</p>
                )}

            </div>

        </div>
    )
}
