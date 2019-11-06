import React from 'react';
import { Link } from 'react-router-dom';
// import publictUrl from '../../publicUrl';

const NotFound = () => (
    <div>
        <h1>404</h1>
        <p>К&nbsp;сожалению такой страницы не&nbsp;существует. Вы&nbsp;можете перейти на&nbsp;главную страницу</p>
        <Link to="/">Перейти на главную</Link>
    </div>
);

export default NotFound;
