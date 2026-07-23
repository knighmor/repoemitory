'use strict';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const RepoemFooter = () => {
    return (
        <footer className = "repoem-footer">
            @ By: <a href= "https://github.com/knighmor" className = "github-link">Morgaine Knight</a>
        </footer>
    );
};

export default RepoemFooter;