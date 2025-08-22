import React, { Component } from "react";
import { Link } from "react-router-dom";


class PortfolioList extends Component {
    render() {
        const { column, styevariation, customList } = this.props;
        const list = customList || PortfolioListContent.slice(0, this.props.item);

        return (
            <React.Fragment>
                {list.map((value, index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4>
                                        <a href={value.github} target="_blank" rel="noopener noreferrer">
                                            {value.title}
                                        </a>
                                    </h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.github} target="_blank" rel="noopener noreferrer">
                                            View on GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a className="link-overlay" href={value.github} target="_blank" rel="noopener noreferrer"></a>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}
export default PortfolioList;
