'use strict';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const RepoemFooter = () => {
    return (
        <footer id = "repoem-footer">
            @ By: <a href= "https://github.com/knighmor" id = "github-link">Morgaine Knight</a>
        </footer>
    );
};

export default RepoemFooter;