import React from 'react';

const Bolg = () => {
    document.title = "Toy KingDom || Blogs"
    return (
        <div className='container mx-auto my-12'>
            <h2 className='text-center text-4xl font-bold mb-6'>Blogs!</h2>
            <div className='space-y-5'>
                <div className='bg-slate-100 p-5 lg:p-8 rounded-lg space-y-3 shadow-lg'>
                    <h3 className='font-bold text-3xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <p className='font-medium'>An access token is a credential that is used to access a protected thing like api in website . It is very popular to disallow get data from api . so that people cant't see other's important data . It serves as a proof of authentication and authorization . And A refresh token is token which create a new token for user when the original access token is expire. when the access expire the refresh token can be sent to the authentication server to request a new access token without having to re-authenticate the user or application. We can store access token HTTP-only cookies or local or seasson storeges.
                    </p>
                </div>
                <div className='bg-slate-100 p-5 lg:p-8 rounded-lg space-y-3 shadow-lg'>
                    <h3 className='font-bold text-3xl'>Compare SQL and NoSQL databases?</h3>
                    <p className='font-medium'>
                        SQL Databases:
                        SQL databases are based on a structured data model called the relational model. They use tables with predefined schemas to store data and enforce relationships between tables. SQL databases are ideal for applications that require strong consistency, complex queries, and structured data. Examples include MySQL, PostgreSQL, and Oracle Database. <br /><br />
                        NoSQL Databases:
                        NoSQL databases offer a flexible data model that can handle various types of data, including unstructured and semi-structured data. They are designed for scalability and performance and are well-suited for applications that prioritize scalability over strict consistency. NoSQL databases include key-value stores, document stores, columnar databases, and graph databases. Examples include MongoDB, Redis, Cassandra, and Neo4j.</p>
                </div>
                <div className='bg-slate-100 p-5 lg:p-8 rounded-lg space-y-3 shadow-lg'>
                    <h3 className='font-bold text-3xl'>What is express js? What is Nest JS?</h3>
                    <p className='font-medium'>Express js is a framework of node js . It is very fast framework . Thats why it is very popular framework now . We also said minimalist web application framework for Node.js . It simplifies the process of building api and also we can manage api by using it . With Express.js, you can create server-side applications that handle HTTP requests and responses . We can easily connent with mongodb using express. <br /><br />
                        Nest.js is a popular framework for building server-side applications with Node.js . Next js created by Kamil Mysliwiec. It is easily supported by popular databases such as PostgreSQL, MySQL, MongoDB, Redis, Apache Cassandra.
                        In fact, it offers the vast flexibility to use it with other libraries and is heavily influenced by Angular, React, and Vue. Thats why this framework is very popular today.It follows the principles of Dependency Injection, which helps manage the dependencies between different components of an application, Decorators, and Modules to structure and organize the application code.</p>
                </div>
                <div className='bg-slate-100 p-5 lg:p-8 rounded-lg space-y-3 shadow-lg'>
                    <h3 className='font-bold text-3xl'>What is MongoDB aggregate and how does it work?</h3>
                    <p className='font-medium'>MongoDB aggregate is a powerful feature that allows you to perform advanced data analysis and transformation on your data stored in a MongoDB database. It works by providing a way to process and combine multiple documents in a collection and perform various operations on them. Each stage takes the input from the previous stage and processes it further, allowing you to progressively transform and refine your data until you get the desired results. It's like building a pipeline of operations to manipulate and analyze your data. Once the aggregate command is executed, MongoDB applies each stage in order and produces a final result based on the specified operations. This result can be a single document or a set of documents, depending on your requirements.</p>
                </div>
            </div>
        </div>
    );
};

export default Bolg;