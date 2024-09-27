import React from "react";


export default function Snippets(){
    const snippets = [
      {
        title: 'Snippet 1',
        content: 'Content 1'
      },
      {
        title: 'Snippet 2',
        content: 'Content 2'
      },
      {
        title: 'Snippet 3',
        content: 'Content 3'
      }
    ]
    
    function renderSnippets(){
      return snippets.map((snippet) => {
        return <SnippetTest title={snippet.title} content={snippet.content}/>
      })
    }
  
    return (
      <>
        <h1>SnippetTest</h1>
        {renderSnippets()}
      </>
    )
  }

export function SnippetTest(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}