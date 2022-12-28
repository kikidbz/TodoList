import React from 'react';
import {Formik, Form} from 'formik';
import * as yup from 'yup';
import FormField from "../UI/FormField";
import Button from '../UI/Button';
import { ongl } from "../../index";
import { useContext } from "react";

const Add = (props) => {
    const { state, setState } = useContext(ongl);

  const initialValues = {
    name: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string()
      .min(1)
      .max(50,"Un petit peu trop long")
      .required("Un Nom est obligatoire")
  });

    const handleSubmit = (values) => {
        {
            props.ogl ? (
                setState((current) => [...current, { id: Math.floor((1 + Math.random()) * 0x10000), name: values.name, todo: [] }])
            ) : (
                    state.map((data) => {
                        if (data.id === props.idonglet) {
                            data.todo.push({ id: Math.floor((1 + Math.random()) * 0x10000), name: values.name, check: false });
                            
                            
                        }
                    }
                    )
                )
        }
    }
    
    return (
        <div>
            <h1 className="text-center font-bold mb-8 ">AJOUT</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}>
                {({ resetForm }) => (
                    <Form className="flex flex-col gap-4">
                        <FormField
                            label="Nom "
                            name="name"
                            placeholder="Entre un nom"
                            className="text-center"
                        />
                        <div className="flex justify-center gap-2">
                            <Button
                                type="submit"
                                className="bg-green-600"
                            >
                                Ajouter
                            </Button>
                            <Button
                                type="button"
                                onClick={resetForm}
                                className="bg-red-600"
                            >
                                Annuler
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Add;