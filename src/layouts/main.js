import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default ({ children }) => (
	<div>
		<Head>
			<meta charset="utf-8" />
	    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	    <meta name="viewport" content="width=device-width, initial-scale=1" />
	    <meta name="description" content="My online portfolio" />
	    <meta name="author" content="João Cunha" />

	    <title>{`João Cunha - Web Enthusiast`}</title>

	    <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
	    <link href="/static/css/theme.css" rel="stylesheet" />
	    <link href="/static/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
	    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
		</Head>
		<Header />
		{children}
		<Footer />
	</div>
);