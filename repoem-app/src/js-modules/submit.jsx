"use strict";

import { useState, useEffect } from 'react';

const SubmissionForm = () => {
    return (
        <form>
            <input name="email" id="email" placeholder="example@gmail.com" />
            <input name="poem-name" id="poem-name" placeholder="Poem name here." />
            <input name="author" id="author" placeholder="Author's name here." />
            <input name="poem-source" id="poem-source" placeholder="Poem source here." />
            <input name="youtube-embed" id="youtube-embed" placeholder="Youtube embed link here." />
            <textarea name="poem-text" id="poem-text" placeholder="Poem goes here." />
        </form>
    )
};

export default SubmissionForm;