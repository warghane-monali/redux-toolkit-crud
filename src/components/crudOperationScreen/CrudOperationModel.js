import { Box, Button, Modal, Paper, TextField, Typography } from '@mui/material';
import React from 'react'

export const CrudOperationModel = () => {

  return (
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
  )
}
