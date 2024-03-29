<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Invoice, Customer, InvoiceItem};
use Auth;
use PDF;
use Dompdf\Dompdf;
use Yajra\DataTables\Facades\DataTables;
use Exception;
use Carbon\Carbon;


class InvoiceController extends Controller
{
    public function invoiceList($id = null)
    {
        $userRole = Auth::user()->roles[0];
        $userId   = Auth::user()->id;

        if($id != null)
        {
            $invoices = Invoice::with('billto','user','invoiceitems')->where('id',$id)->first();
            return response()->json(["code" => 200, "status" => "success", "data" => $invoices])->setStatusCode(200);

        } 
        $invoices = Invoice::with('billto','user','invoiceitems')
                            ->when($userRole->name == "customer", function($q) use($userId){
                                $q->where("bill_to", $userId);
                            })->get();
        return Datatables::of($invoices)->make(true);
    }

    public function create(Request $request)
    {
        $invoiceItems = $request->get('invoiceitems');

        $invoice                   = new Invoice;
        $invoice->bill_to          = $request->get('bill_to');
        $invoice->customer_email   = $request->get('customer_email');
        $invoice->customer_address = $request->get('customer_address');
        $invoice->customer_phone   = $request->get('customer_phone');
        $invoice->invoice_date     = Carbon::parse($request->get('invoice_date'));
        $invoice->subtotal         = $request->get('subtotal');
        $invoice->discount         = (int)$request->get('discount');
        $invoice->tax              = (int)$request->get('tax');
        $invoice->total            = $request->get('total');
        $invoice->user_id          = $request->get('user_id');
        $invoice->save();

        foreach($invoiceItems as $item) 
        {
            $invoiceItem             = new InvoiceItem;
            $invoiceItem->invoice_id = $invoice->id;
            $invoiceItem->name       = $item['name'];
            $invoiceItem->quantity   = $item['quantity'];
            $invoiceItem->rate       = $item['rate'];
            $invoiceItem->amount     = $item['amount'];
            $invoiceItem->save();
        }
        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully invoice created."])->setStatusCode(200);   
    }

    public function update(Request $request)
    {
        $invoiceItems = $request->get('invoiceitems');

        $invoice                   = Invoice::where('id', $request->get('id'))->first();
        $invoice->bill_to          = $request->get('bill_to');
        $invoice->customer_email   = $request->get('customer_email');
        $invoice->customer_address = $request->get('customer_address');
        $invoice->customer_phone   = $request->get('customer_phone');
        $invoice->invoice_date     = Carbon::parse($request->get('invoice_date'));
        $invoice->subtotal         = $request->get('subtotal');
        $invoice->discount         = (int)$request->get('discount');
        $invoice->tax              = (int)$request->get('tax');
        $invoice->total            = $request->get('total');
        $invoice->user_id          = $request->get('user_id');
        $invoice->update();

        InvoiceItem::where('invoice_id', $request->get('id'))->delete();

        foreach($invoiceItems as $item) 
        {
            $invoiceItem             = new InvoiceItem;
            $invoiceItem->invoice_id = $invoice->id;
            $invoiceItem->name       = $item['name'];
            $invoiceItem->quantity   = $item['quantity'];
            $invoiceItem->rate       = $item['rate'];
            $invoiceItem->amount     = $item['amount'];
            $invoiceItem->save();
        }
        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully invoice updated."])->setStatusCode(200);
    }

    public function delete(Request $request)
    {
        Invoice::where('id', $request->get('id'))->delete();
        InvoiceItem::where('invoice_id', $request->get('id'))->delete();

        return response()->json(["code" => 200, "status" => "success", "message" => " Successfully invoice deleted."])->setStatusCode(200);   
    }

    public function downloadPdf($id)
    {
        $invoice = Invoice::with('billto','user','invoiceitems')->where('id', $id)->first();
        $pdf = PDF::loadView('invoice', compact('invoice'));

        return $pdf->download('invoice.pdf');
    }
}