"use strict";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const SubmissionForm = () => {
    // #region calling on the good ol' repoemAPI so we can pull for id number
        const [poemsData, setPoemsData] = useState([]);
        const [dataIsLoaded, setDataIsLoaded] = useState(false);
        const { register, handleSubmit, watch } = useForm(
        {defaultValues: {
          name: "",
          id: 0,
          views: 0,
          likes: 0,
          author: "",
          text: "",
          embed: "",
          link: ""
        }}
    );
    
        useEffect(() => {
                fetch('http://localhost:8080/data/poems')
                .then((res) => res.json())
                .then((json) => {
                    setPoemsData(json);
                    setDataIsLoaded(true);
                    console.log(json);
                });
        }, []);
    
        if (!dataIsLoaded) {
            return (
                <div>
                    <h1>Please wait...</h1>
                </div>
            );
        }
    // #endregion

    // #region setting up how the form data is handled, based on whether there is a success or an error
    const onSubmit = (data, e) => {
        console.log(data, e);
    }
    const onError = (errors, e) => {
        console.log(errors, e);
    }
    // #endregion

    // #region setting up storing in local storage using cookies

    return (
        <form 
        onSubmit={handleSubmit(onSubmit)}
        onError={() => {
            alert("error")
        }}
        >
            <div className="form-part">
                <label for="email">Your Email: </label>
                <input type="email" placeholder="Email here." {...register("email", {required: true, maxLength: 30})} />
            </div>
            <div className="form-part">
                <label for="name">Name of Poem: </label>
                <input placeholder="Poem name here." {...register("name", {required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i})} />
            </div>
            <div className="form-part">
                <label for="author">Name of Author: </label>
                <input placeholder="Author name here." {...register("author", {required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i})} />
            </div>
            <div className="form-part">
                <label for="link">Poem Source: </label>
                <input placeholder="Link to poem here." {...register("link", {required: true, maxLength: 30})} />
            </div>
            <div className="form-part">
                <label for="embed">Youtube Embed Here (Optional): </label>
                <input placeholder="Link to Youtube embed here." {...register("embed", {required: false, maxLength: 30})} />
            </div>
            <div className="form-part">
                <label for="text">Poem Here: </label>
                <textarea placeholder="Poem text here." {...register("text", {required: true})} />
            </div>
            <div className="form-handling">
               <input type="submit" value="Submit Poem!"/>
               <input type="reset" value="Reset Form."/>
            </div>
        </form>
    )
};

export default SubmissionForm;