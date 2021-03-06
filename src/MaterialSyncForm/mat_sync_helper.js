/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

export const DisplayFormikState = props =>
    <div style={{ margin: '1rem 0' }}>
        <h3 style={{ fontFamily: 'monospace' }} />
        <pre
            style={{
                background: '#f6f8fa',
                fontSize: '.65rem',
                padding: '.5rem',
            }}
        >
            <strong>props</strong> ={' '}
            {JSON.stringify(props, null, 2)}
        </pre>

        <pre>
            <strong>Test</strong> ={' '}
            {JSON.stringify(props.values.email, null, 2)}
        </pre>
    </div>;

export const MoreResources = props =>
    <div>
        <hr style={{ margin: '3rem 0' }} />
        <h3>More Examples</h3>
        <ul>
            <li>
                <a
                    href="https://codesandbox.io/s/q8yRqQMp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Synchronous validation
        </a>
            </li>
            <li>
                <a
                    href="https://codesandbox.io/s/qJR4ykJk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Building your own custom inputs
        </a>
            </li>
            <li>
                <a
                    href="https://codesandbox.io/s/jRzE53pqR"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    3rd-party input components: React-select
        </a>
            </li>
            <li>
                <a
                    href="https://codesandbox.io/s/QW1rqjBLl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    3rd-party input components: Draft.js
        </a>
            </li>
            <li>
                <a
                    href="https://codesandbox.io/s/pgD4DLypy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Accessing Lifecyle Methods (resetting a form
                    externally)
        </a>
            </li>
        </ul>
        <h3 style={{ marginTop: '1rem' }}>
            Additional Resources
    </h3>
        <ul>
            <li>
                <a
                    href="https://github.com/jaredpalmer/formik"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub Repo
        </a>
            </li>
            <li>
                <a
                    href="https://github.com/jaredpalmer/formik/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Issues
        </a>
            </li>
            <li>
                <a
                    href="https://twitter.com/jaredpalmer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter (@jaredpalmer)
        </a>
            </li>
        </ul>
    </div>;
