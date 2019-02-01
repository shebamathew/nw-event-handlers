import React, {Fragment} from "react";

class Accordion extends React.Component{
    static defaultProps = {
        sections: [{title:"", content: ""}]
    }; 

    state = {
        currentSectionIndex:0
    };

    handleButtonClick(index) {
        this.setState({currentSectionIndex: index})
    }

    renderTitles() {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {this.state.currentSectionIndex === index && this.renderContent(section.content)}
            </li>
        )); 
    }
            
    renderContent(content) {
        return <p>{content}</p>; 
    }

    render() {
        return <ul>{this.renderTitles()}</ul>; 
    }
}

export default Accordion