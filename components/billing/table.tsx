import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Plans } from '@/data/plans'
import { formatDate } from '@/lib/utils'
import EmptySVG from '@/assets/icons/empty-box-01.svg'

const status: {
    [a in Project['payment_status']]: { title: string; className?: string }
} = {
    success: {
        title: 'Ongoing',
        className: 'bg-green-500/10 text-green-500 border-green-500',
    },
    failed: {
        title: 'Failed',
        className: 'bg-red-500/10 text-red-500 border-red-500',
    },
    expired: {
        title: 'Expired',
        className: 'bg-red-500/10 text-red-500 border-red-500',
    },
    pending: {
        title: 'Pending',
        className: 'bg-yellow-500/10 text-yellow-500 border-yellow-500',
    },
}

export default function InvoiceTable({ data }: Props<{ data: Project[] }>) {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px] max-w-[200px]">
                        Invoice
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Invoice</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.length ? (
                    data.map((proj) => {
                        const plan = Plans[proj.package_type]
                        const startDate = proj.start_date
                            ? formatDate(new Date(proj.start_date), {
                                  format: 'mmm d, yyyy',
                              })
                            : '---'
                        return (
                            <TableRow key={proj.id}>
                                <TableCell className="font-medium">
                                    {proj.invoice_no}
                                </TableCell>
                                <TableCell className="capitalize">
                                    {proj.title}
                                </TableCell>
                                <TableCell>{plan.mainTitle}</TableCell>
                                <TableCell>
                                    {plan.price}
                                    <span className="opacity-55">
                                        {plan.per}
                                    </span>
                                </TableCell>
                                <TableCell>{startDate}</TableCell>
                                <TableCell>
                                    <div
                                        className={`rounded border px-2 py-1 ${status[proj.payment_status].className}`}
                                    >
                                        {status[proj.payment_status].title}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {proj.invoice_url ? (
                                        <a
                                            href={proj.invoice_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            View
                                        </a>
                                    ) : (
                                        <span className="text-gray-500">
                                            Not Available
                                        </span>
                                    )}
                                </TableCell>
                            </TableRow>
                        )
                    })
                ) : (
                    <TableRow>
                        <TableCell colSpan={7}>
                            <div className="flex flex-col items-center justify-center gap-6 p-12">
                                <EmptySVG className="text-[100px] text-primary" />
                                <p className="opacity-60">No invoices...</p>
                            </div>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}
