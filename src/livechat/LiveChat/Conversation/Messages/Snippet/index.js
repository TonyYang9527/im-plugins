import React from 'react';
import { PROP_TYPES } from '../../../../utils/Msconstants';
import './styles.scss';
import { observer } from "mobx-react";


const Snippet = observer(props => {
    console.log("Snippet ***props********",props);
    return (
        <div className="rcw-snippet">
        <h5 className="rcw-snippet-title">
            {props.message.get('title')}
        </h5>
        <div className="rcw-snippet-details">
            <a href={this.props.message.get('link')} target={props.message.get('target')} className="rcw-link">
                {props.message.get('link')}
            </a>
        </div>
    </div>
    )
  })

Snippet.propTypes = {
    message: PROP_TYPES.SNIPPET
};

  export default Snippet; 