import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from '@/lib/supabase/server';
import { formatDate } from '@/lib/utils';

export const POST = async (req: NextRequest) => {
    try {
        // Parse the request body to get the payload
        const payload = await req.json();

        // Initialize the Supabase client
        const supabase = createAdminClient();

        // Insert the data into the projects table
        const { data, error } = await supabase
            .from('projects')
            .insert({
                package_type: payload.packageType,
                email: payload.email,
                user_id: payload.userId,
                invoice_id: payload.invoiceId,
                invoice_no: payload.invoiceNo,
                payment_intent_id: payload.paymentIntentId,
                subscription_id: payload.subscriptionId,
                customer_id: payload.customerId,
                payment_status: payload.paymentStatus,
                notes: payload.note,
                title: payload.title,
                invoice_url: payload.invoiceUrl,
                created_at: formatDate(new Date()) // Assuming formatDate formats date correctly
            })
            .select()
            .single();

        if (error) {
            throw error;
        }

        // Return the inserted data as a response
        return NextResponse.json({ data });
    } catch (error: any) {
        // Handle any errors that occur during the request
        return NextResponse.json({ error: error?.message }, { status: 500 });
    }
}
