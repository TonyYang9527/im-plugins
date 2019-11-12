import React from 'react';
import { observer } from "mobx-react";
import markdownIt from 'markdown-it';
import markdownItSup from 'markdown-it-sup';
import markdownItSanitizer from 'markdown-it-sanitizer';
import markdownItLinkAttributes from 'markdown-it-link-attributes';
import './styles.scss';


const Message = observer(props => {
    console.log("Message ***props********",props);
    const sanitizedHTML = markdownIt()
        .use(markdownItSup)
        .use(markdownItSanitizer)
        .use(markdownItLinkAttributes, { attrs: { target: '_blank', rel: 'noopener' } })
        .render(props.message.get('text'));

    return (
        <div className={`rcw-${props.message.get('sender')}`}>
        <div className="rcw-message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
       </div>
    )
  })

  export default Message; 