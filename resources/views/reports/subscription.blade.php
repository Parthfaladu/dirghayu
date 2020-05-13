<center style="margin-bottom:50px;"><h1>Subscription Report</h1></center>
<table width="100%" border="0">
  <thead>
    <tr>
        <th align="left">Id</th>
        <th align="left">Customer</th>
        <th align="left">Package</th>
        <th align="left">Start Date</th>
        <th align="left">Duration(In Month)</th>
        <th align="left">End Date</th>
        <th align="left">Paid Amount</th>
        <th align="left">Remaining Amount</th>
        <th align="left">Status</th>
    </tr>
  </thead>
  <tbody>
    @foreach($subscriptions as $subscription)
      <tr>
        <td>{{ $subscription->id }}</td>
        <td>{{ $subscription->user->first_name.' '.$subscription->user->last_name }}</td>
        <td>{{ $subscription->package_name }}</td>
        <td>{{ \Carbon\Carbon::parse($subscription->start_date)->format('d-m-Y') }}</td>
        <td>{{ $subscription->duration }}</td>
        <td>{{ \Carbon\Carbon::parse($subscription->end_date)->format('d-m-Y') }}</td>
        <td>@if(count($subscription->payment) > 0) {{  $subscription->payment[0]->paid_amount }} @else 0 @endif</td>
        <td>@if(count($subscription->payment) > 0) {{  $subscription->payment[0]->remaining_amount }} @else 0 @endif</td>
        <td>@if(\Carbon\Carbon::parse($subscription->end_date)->gt(\Carbon\Carbon::now())) Active @else Expired @endif</td>
      </tr>
    @endforeach
  </tbody>
</table>
