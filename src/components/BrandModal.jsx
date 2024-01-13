import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyles";
import { Button, TextField } from "@mui/material";
import useStockCalls from "../service/useStockCalls";

export default function BrandModal({ open, handleClose, info, setInfo }) {
  const { postBrand, putBrand } = useStockCalls();

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setInfo({ ...info, [name]: value });
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      putBrand("brands", info);
    } else {
      postBrand("brands", info);
    }

    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              {info._id ? "Update Firm" : "Add Firm"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
