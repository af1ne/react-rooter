import React from 'react';


class History extends React.Component {

    render() {
        return (
        <div>
            {this.props.match.params.OurHistory}
            <h2>Our history</h2>
            <p>L'histoire de réact est récente mais pour moi elle va être looooongue !</p>
        </div>
        );
    }

}

export default History;