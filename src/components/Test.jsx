<TableBody>
{value.map((data,ind)=>{
    return <TableRow>
        <TableCell>
            {data.firstName}
        </TableCell>
        <TableCell>
            {data.lastName}
        </TableCell>
        <TableCell>
            {data.age}
        </TableCell>
    </TableRow>