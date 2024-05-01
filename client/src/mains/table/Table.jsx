import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1,
      vacancy: "BDA",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      experience: "1-3 years",
      date: "1 March",
      salary: 80000,
      method: "Immediate joinee",
      status: "Approved",
    },
    {
      id: 2,
      vacancy: "Frontend developer",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      experience: "1-3 years",
      date: "1 March",
      salary: 90000,
      method: "Immediate joinee",
      status: "Pending",
    },
    {
      id: 3,
      vacancy: "Software developer",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      experience: "3-6 years",
      date: "10 March",
      salary: 35000,
      method: "Immediate joinee",
      status: "Pending",
    },
    {
      id: 4,
      vacancy: "Software Tester",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      experience: "4-8 years",
      date: "13 March",
      salary: 92000,
      method: "Immediate joinee",
      status: "Approved",
    },
    {
      id: 5,
      vacancy: "BDA",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      experience: "0-3years",
      date: "2 March",
      salary: 20000,
      method: "immediate joinee",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"> ID</TableCell>
            <TableCell className="tableCell">Vacancy</TableCell>
            <TableCell className="tableCell">Experience</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Salary</TableCell>
            <TableCell className="tableCell"> Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.vacancy}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.experience}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.salary}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
