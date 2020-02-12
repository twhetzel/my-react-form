import './style.css';
import React from 'react';
import { withFormik } from 'formik';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Helper for the demo
import {
    DisplayFormikState,
} from './mat_sync_helper.js';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    emailField: {
        display: 'block',
        margin: 8
    },
    button: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        color: '#333',
        background: 'linear-gradient(to bottom, #E7F7F9 50%, #D3EFF3 100%)',
        borderRadius: 4,
        border: '1px solid #ccc',
        fontWeight: 'bold',
        textShadow: '0 1px 0 #fff',
        textTransform: 'none',
        '&:disabled': {
            textShadow: 'none',
        },
        boxShadow: 'none',
    },
    buttonReset: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        backgroundColor: '#eee',
        borderRadius: 4,
        border: '1px solid #aaa',
        color: '#555',
        fontWeight: 'bold',
        textShadow: '0 1px 0 #fff',
        textTransform: 'none',
        boxShadow: 'none',
    },
}));

const MyForm = props => {
    const classes = useStyles();

    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        dirty,
    } = props;
    return (
        <Grid>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="email"
                    label="Email"
                    type="input"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ display: 'block', margin: 8 }}
                    // className="TextField"
                    error={errors.email && touched.email}
                    variant="outlined"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {errors.email &&
                    touched.email && (
                        <div className="input-feedback" style={{ display: 'block', margin: 8 }}>
                            {errors.email}
                        </div>
                    )}
                <Button
                    type="button"
                    className={classes.buttonReset}
                    variant="outlined"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                >
                    Reset
                </Button>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={classes.button}
                >
                    Submit
                </Button>

                <DisplayFormikState {...props} />
            </form>
        </Grid>
    );
};

const MyEnhancedForm = withFormik({
    mapPropsToValues: () => ({ email: '' }),

    // Custom sync validation
    validate: values => {
        let errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                values.email
            )
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'BasicForm', // helps with React DevTools
})(MyForm);


const MaterialSyncValidationForm = () => (
    <div className="app">
        <Typography>
            Project/Pre-published Data collection template
        </Typography>

        <MyEnhancedForm />
    </div>
);

export default MaterialSyncValidationForm;
