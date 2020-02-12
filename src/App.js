import * as React from 'react';
import { withFormik, Formik, Form } from 'formik';
import {
  Container,
  Button,
  LinearProgress,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import {
  useFieldToTextField,
  TextField,
  TextFieldProps,
  Select,
  Switch,
} from 'formik-material-ui';

const ranges = [
  {
    value: 'none',
    label: 'None',
  },
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

// function UppercasingTextField(props: TextFieldProps) {
//   const fieldProps = useFieldToTextField(props, ([, , helpers]) => ({
//     onChange: event => {
//       const { value } = event.target;
//       helpers.setValue(value ? value.toUpperCase() : '');
//     },
//   }));
//   return <MuiTextField {...fieldProps} />;
// }



const App = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      select: 'none',
      tags: [],
      rememberMe: true,
    }}

    validate={values => {
      // const errors: Partial<Values> = {};
      const errors = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}

    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 500);
    }}

    render={({ submitForm, isSubmitting, values, setFieldValue }) => (
      <Container>
        <Form>
          <UppercasingTextField name="email" type="email" label="Email" />
          <br />

          <TextField type="password" label="Password" name="password" />
          <br />

          <FormControlLabel
            control={<Switch name="rememberMe" />}
            label="Remember Me"
          />
          <br />

          <TextField
            type="text"
            name="select"
            label="With Select"
            select
            variant="standard"
            helperText="Please select Range"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />

          <FormControl>
            <InputLabel shrink={true} htmlFor="tags">
              Tags
          </InputLabel>
            <Select
              type="text"
              name="tags"
              multiple={true}
              inputProps={{ name: 'tags', id: 'tags' }}
            >
              <MenuItem value="dogs">Dogs</MenuItem>
              <MenuItem value="cats">Cats</MenuItem>
              <MenuItem value="rats">Rats</MenuItem>
              <MenuItem value="snakes">Snakes</MenuItem>
            </Select>
          </FormControl>
          <br />
          {isSubmitting && <LinearProgress />}
          <br />

          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
        </Button>

        </Form>
      </Container>
    )}
  />
);


const UppercasingTextField = withFormik({
  mapPropsToValues: () => ({ email: '' }),

  // TEST
  onChange: event => {
    const { value } = event.target;
    value.email.setValue(value ? value.toUpperCase() : '');
  },

  displayName: 'ValidatedTextfield', // helps with React DevTools
});


export default App;
