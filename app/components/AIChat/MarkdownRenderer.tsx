"use client";

import ReactMarkdown from "react-markdown";

import remarkMath from "remark-math";

import remarkGfm from "remark-gfm";

import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

interface Props{
    content:string;
}

export default function MarkdownRenderer({

    content,

}:Props){

    return(

        <ReactMarkdown

            remarkPlugins={[

                remarkMath,

                remarkGfm,

            ]}

            rehypePlugins={[

                rehypeKatex,

            ]}

            components={{

                code(props){

                    const{

                        children,

                        className,

                        ...rest

                    }=props;

                    return(

                        <code

                            className={

                                className ??

                                "bg-zinc-700 rounded px-1"

                            }

                            {...rest}

                        >

                            {children}

                        </code>

                    );

                },

                pre(props){

                    return(

                        <pre

                            className="

                            overflow-x-auto

                            rounded-xl

                            bg-zinc-950

                            p-4

                            my-4

                            "

                        >

                            {props.children}

                        </pre>

                    );

                },

                table(props){

                    return(

                        <div className="overflow-x-auto">

                            <table

                                className="

                                border

                                border-zinc-700

                                my-4

                                "

                            >

                                {props.children}

                            </table>

                        </div>

                    );

                },

                th(props){

                    return(

                        <th

                            className="

                            border

                            border-zinc-700

                            px-3

                            py-2

                            bg-zinc-800

                            "

                        >

                            {props.children}

                        </th>

                    );

                },

                td(props){

                    return(

                        <td

                            className="

                            border

                            border-zinc-700

                            px-3

                            py-2

                            "

                        >

                            {props.children}

                        </td>

                    );

                }

            }}

        >

            {content}

        </ReactMarkdown>

    );

}