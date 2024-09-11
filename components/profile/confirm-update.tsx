'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useState } from 'react'

import ExclamationSVG from '@/assets/icons/alert-circle.svg'

export function ConfirmUpdate(
    props: Props & {
        onConfirm: () => void,
        open: boolean,
        setOpen: (a:boolean)=>void
        text?:string
    },
) {
    return (
        <AlertDialog open={props.open} onOpenChange={props.setOpen}>
            {/* <AlertDialogTrigger asChild>{props.children}</AlertDialogTrigger> */}
            <AlertDialogContent>
                <AlertDialogHeader className="mb-8">
                    <AlertDialogTitle></AlertDialogTitle>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <AlertDialogDescription>
                            <ExclamationSVG className="text-[120px] text-yellow-500" />
                        </AlertDialogDescription>
                        <h3 className="text-xl">
                            {props.text || 'Are you sure to update your details?'}
                        </h3>
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex !justify-evenly">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={props.onConfirm}>
                        Yes
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
