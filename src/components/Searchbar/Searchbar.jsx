import React from 'react';
import {BsSearchHeart} from 'react-icons/bs'
import {Form, Formik, Field } from 'formik';
import { ConteinerForm, Header, ButtonSubmit  } from './Searchbar.styled';

export const Searchbar = ({onInputValue})=>{
    return(
    <Header>
        <ConteinerForm>
            <Formik
            initialValues={{
            query:'',
      }}
      onSubmit={(value,actions)  =>{
        onInputValue(value.query)
        actions.resetForm();
      }}
    >
        <Form>
        <ButtonSubmit type="submit">
            <span>
                <BsSearchHeart/>
            </span>
        </ButtonSubmit>

        <Field  
        type="text"
        name='query'
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        />

        </Form>
        </Formik>
    </ConteinerForm>
  </Header>
    )
}