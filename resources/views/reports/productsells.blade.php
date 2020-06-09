<center style="margin-bottom:50px;"><h1>Product Sell Report</h1></center>
<table width="100%" border="0">
  <thead>
    <tr>
        <th align="left">Id</th>
        <th align="left">Product</th>
        <th align="left">Customer</th>
        <th align="left">Quantity</th>
        <th align="left">Amount</th>
    </tr>
  </thead>
  <tbody>
    @foreach($productSells as $productSell)
      <tr>
        <td>{{ $productSell->id }}</td>
        <td>{{ $productSell->product_name }}</td>
        <td>{{ $productSell->user->first_name.' '.$productSell->user->last_name }}</td>
        <td>{{ $productSell->quantity }}</td>
        <td>{{ $productSell->paid_amount }}</td>
      </tr>
    @endforeach
  </tbody>
</table>
