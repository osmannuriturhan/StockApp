import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import Image from "../assets/12.jpg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import useAuthCalls from "../service/useAuthCalls";

const Login = () => {
  const { login } = useAuthCalls();
  const loginSchema = object({
    email: string()
      .email("Lütfen geçerli bir email giriniz.")
      .required("Email girişi zorunludur."),
    password: string()
      .required("Şifre zorunludur.")
      .min(8, "Şifre en az 8 karakter içermelidir.")
      .max(16, "Şifre en fazla 16 karakter içermelidir.")
      .matches(/\d+/, "Şifre en az bir rakam içermelidir.")
      .matches(/[a-z]/, "Şifre en az bir küçük harf içermelidir.")
      .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir.")
      .matches(/[@$!%*?&]+/, "Şifre en az bir özel karakter içermelidir."),
  });

  return (
    <div style={{ background: "#E0FFFF" }}>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          direction="row-reverse"
          sx={{
            height: "100vh",
            p: 6,
          }}
        >
          <Grid item xs={12} mb={3}>
            <Typography variant="h3" color="primary" align="center">
              STOCK APP
            </Typography>
          </Grid>

          <Grid item xs={12} sm={10} md={6}>
            <Avatar
              sx={{
                backgroundColor: "darkred",
                m: "auto",
                width: 40,
                height: 40,
              }}
            >
              <LockIcon size="30" />
            </Avatar>
            <Typography variant="h4" align="center" mb={4} color="darkred">
              Login
            </Typography>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={(values, actions) => {
                login(values);
                actions.resetForm();
                actions.setSubmitting(false);
              }}
            >
              {({ handleChange, values, touched, errors, handleBlur }) => (
                <Form>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <TextField
                      label="Email"
                      name="email"
                      id="email"
                      type="email"
                      variant="outlined"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={errors.email}
                      sx={{ backgroundColor: "#E6E6FA" }}
                    />
                    <TextField
                      label="password"
                      name="password"
                      id="password"
                      type="password"
                      variant="outlined"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={errors.password}
                      sx={{ backgroundColor: "#E6E6FA" }}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      style={{ backgroundColor: "darkred", color: "white" }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
            <Box
              sx={{
                textAlign: "center",
                mt: 2,
                ":hover": {
                  color: "darkred",
                },
              }}
            >
              <Link to="/register">Do you have not an account?</Link>
            </Box>
          </Grid>

          <Grid item xs={10} sm={7} md={6}>
            <Container>
              <img
                src={Image}
                style={{
                  borderRadius: "50%",
                }}
                alt="img"
              />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
