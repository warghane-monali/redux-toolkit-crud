import React from 'react'
import { Box, Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from '@mui/material'
import { useUserDetailsControl } from './CrudOpearationController';


export const CrudOpration = () => {
  const boxstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const textStyle = { marginBottom: "25px" };

  // open add taluka modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // api response from store
  const {userDataList,userData,setUserData,handleInput,createNewUser} = useUserDetailsControl();

  return (
    <> 
      {/* modal */}
      <Modal
        style={{}}
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box style={boxstyle}>
          <Paper style={{ padding: "30px" }}>
            <Typography
              style={{
                fontWeight: "600",
                fontSize: "24px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Add user
            </Typography>
            <form 
            onSubmit={(e) => createNewUser(e)}
            >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                size="small"
                name="name"
                style={textStyle}
                value={userData?.name}
                onChange={(e) => {
               
                    handleInput(e);
                  
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                size="small"
                name="email"
                style={textStyle}
                value={userData?.email}
                onChange={(e) => {
                 
                  handleInput(e);
                  
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#218721",
                  padding: "10px 0px",
                  "&:hover": {
                    color: "#2DF123",
                    backgroundColor: "white",
                    transition: "all 0.2s",
                  },
                }}
              >
                Add
              </Button>
            </form>
          </Paper>
        </Box>
      </Modal>

      {/* add user */}
      <Paper
        elevation={1}
        sx={{
          width: "70%",
          margin:"20px auto", 
          height: "60px",
        }}
      >
          <div style={{ padding: "10px" }}>
            <Button
              sx={{
                color: "white",
                backgroundColor: "green",
                "&:hover": {
                  backgroundColor: "green",
                  color: "white",
                  transition: "all 0.2s",
                },
              }}
              onClick={handleOpen}
            >
              Add User
              {/* <AddBoxOutlined /> */}
            </Button>
          </div>
      </Paper>

      {/* Table */}
      <Paper sx={{ width: '70%', overflow: 'hidden',margin:" 10px auto" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell style={{fontSize:"20px"}}>Name</TableCell>
                <TableCell style={{fontSize:"20px"}}>Email</TableCell>
                <TableCell style={{fontSize:"20px"}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDataList.length > 0 ?
              userDataList.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell style={{display:"flex"}}>
                    <Button style={{color:"white",background:"green",marginRight:"10px"}}>Edit</Button>
                    <Button style={{color:"white",background:"#BE2D34"}}>Delete</Button>
                    </TableCell>
                  </TableRow>
                );
              }):""}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    </>
  )
}

{/* .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) */}
{/* <TablePagination
  rowsPerPageOptions={[10, 25, 100]}
  component="div"
  count={rows.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/> */}