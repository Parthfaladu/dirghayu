<center style="margin-bottom:50px;"><h1>Attendance Report</h1></center>
<table width="100%" border="0">
  <thead>
    <tr>
      <th align="left">ID</th>
      <th align="left">Name</th>
      <th align="left">Date</th>
      <th align="left">Status</th>
    </tr>
  </thead>
  <tbody>
    @foreach($allAttendance as $attendance)
      <tr>
        <td>{{ $attendance->id }}</td>
        <td>{{ $attendance->user->first_name.' '.$attendance->user->last_name }}</td>
        <td>{{ $attendance->date }}</td>
        <td>Present</td>
      </tr>
    @endforeach
  </tbody>
</table>
