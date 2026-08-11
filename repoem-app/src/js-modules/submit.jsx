"use strict";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// #region haphazardly setting up yup schema for form verification
const schema = yup
    .object({
        name: yup.string().max(30).required(),
        author: yup.string().max(20).required(),
        text: yup.string().required(),
        embed: yup.string().max(30).matches(/(embed|None)/).required(),
        link: yup.string().max(30).required()
    });
// #endregion

const SubmissionForm = () => {
        const [poemsData, setPoemsData] = useState([]);
        const [dataIsLoaded, setDataIsLoaded] = useState(false);
        const [embedToggle, setEmbedToggle] = useState(true);
        const { register,
                handleSubmit,
                formState: { isSubmitSuccessful, errors },} = useForm(
        {resolver: yupResolver(schema),
        defaultValues: {
          name: "",
          id: 0,
          views: 0,
          likes: 0,
          author: "",
          text: "",
          embed: "",
          link: ""
        },
        });

    // #region calling on the good ol' repoemAPI so we can pull for id number
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
    // #endregion

    // #region area to toggle the embed region
    // probably a better way to do this, but I am brain-farting-- using an if-else to handle embed toggle-- disabling this for right now, will figure out later

    // const youtubeEmbedToggle =  (e) => {
    //     if (event.target.checked) {
    //         setEmbedToggle(!embedToggle);
    //     }
    //     else {
    //         setEmbedToggle(!embedToggle);
    //     }
    // }
    // #endregion

    return (
        <form 
        onSubmit={handleSubmit(onSubmit)}
        onSuccess={() => {
            alert("Success!")
        }} 
        onError={() => {
            alert("error")
        }}
        >
            <div className="form-part">
                <label for="email">Your Email: </label>
                <input type="email" placeholder="Email here." {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="form-part">
                <label for="name">Name of Poem: </label>
                <input placeholder="Poem name here." {...register("name", {pattern: /^[A-Za-z]+$/i})} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className="form-part">
                <label for="author">Name of Author: </label>
                <input placeholder="Author name here." {...register("author", {pattern: /^[A-Za-z]+$/i})} />
                {errors.author && <p>{errors.author.message}</p>}
            </div>
            <div className="form-part">
                <label for="link">Poem Source: </label>
                <input placeholder="Link to poem here." {...register("link")} />
                {errors.link && <p>{errors.author.message}</p>}
            </div>
            <div className="form-part">
                <label for="embed">Youtube Embed Here (Use "None" if not applicable/available): </label>
                <input placeholder="Link to Youtube embed here." {...register("embed")}/>
                {errors.embed && <p>{errors.embed.message}</p>}
            </div>
            <div className="form-part">
                <label for="text">Poem Here: </label>
                <textarea placeholder="Poem text here." {...register("text")} />
                {errors.text && <p>{errors.text.message}</p>}
            </div>
            <div className="form-handling">
               <input type="submit" value="Submit Poem!"/>
               <input type="reset" value="Reset Form."/>
            </div>
        </form>
    )
};

export default SubmissionForm;